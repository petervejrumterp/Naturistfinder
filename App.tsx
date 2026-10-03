
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { 
  Search, MapPin, Loader2, Compass, Waves, 
  Map as MapIcon, List, Info, ExternalLink, 
  ShieldCheck, X, ChevronRight, Navigation, AlertTriangle,
  CreditCard, Calendar, Sparkles, Key, Check, Globe
} from 'lucide-react';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import { 
  searchNaturistPlaces, 
  getApiUrl, 
  getSavedApiKey, 
  saveApiKey, 
  checkApiKeyStatus, 
  testGeminiApiKey 
} from './geminiService';
import { NaturistLocation, SearchResult } from './types';

const ImageWithFallback: React.FC<{ src?: string; alt: string; type: string }> = ({ src, alt, type }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [triedProxy, setTriedProxy] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setError(false);
    setLoaded(false);
    setTriedProxy(false);
  }, [src]);

  const handleImageError = () => {
    if (!triedProxy && currentSrc && !currentSrc.includes('image-proxy')) {
      setTriedProxy(true);
      setCurrentSrc(getApiUrl(`api/image-proxy?url=${encodeURIComponent(currentSrc)}`));
    } else {
      setError(true);
    }
  };

  if (!currentSrc || error) {
    if (type === 'resort') {
      return (
        <div className="relative h-36 bg-gradient-to-br from-stone-50 to-[#fef0ee]/60 border-b border-stone-100 flex items-center justify-center overflow-hidden">
          <div className="relative flex flex-col items-center gap-1.5 text-stone-400">
            <Compass className="h-7 w-7 text-[#ed6a56]/50" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#ed6a56]/70">Naturist Resort</span>
          </div>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="relative h-48 overflow-hidden bg-stone-100">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-50">
          <Loader2 className="h-5 w-5 text-stone-300 animate-spin" />
        </div>
      )}
      <img 
        src={currentSrc} 
        alt={alt} 
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={handleImageError}
        referrerPolicy="no-referrer"
      />
      {type === 'resort' && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-[9px] font-black text-[#ed6a56] rounded-full shadow-sm border border-[#fef0ee] uppercase tracking-wider">
            Resort
          </span>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [locations, setLocations] = useState<NaturistLocation[]>([]);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<NaturistLocation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpandingAI, setIsExpandingAI] = useState(false);
  const [currentQuery, setCurrentQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [userPos, setUserPos] = useState<{ lat: number; lng: number } | undefined>(undefined);
  const [viewMode, setViewMode] = useState<'split' | 'map' | 'list'>('split');
  
  // API Key management state
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState(getSavedApiKey());
  const [hasActiveKey, setHasActiveKey] = useState(Boolean(getSavedApiKey()));
  const [testResult, setTestResult] = useState<{ loading: boolean; success?: boolean; message?: string } | null>(null);

  useEffect(() => {
    checkApiKeyStatus().then(status => {
      setHasActiveKey(status.hasBackendKey || status.hasClientKey);
    });
  }, []);

  const handleSaveApiKey = async () => {
    setTestResult({ loading: true });
    const trimmed = apiKeyInput.trim();
    if (!trimmed) {
      saveApiKey('');
      setHasActiveKey(false);
      setTestResult({ loading: false, success: true, message: 'Nøgle fjernet. Søgemaskinen bruger nu den indbyggede verificerede database.' });
      return;
    }

    const test = await testGeminiApiKey(trimmed);
    setTestResult({ loading: false, success: test.success, message: test.message });
    if (test.success) {
      saveApiKey(trimmed);
      setHasActiveKey(true);
    }
  };
  
  const listRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (selectedLocation && listRefs.current[selectedLocation.id]) {
      listRefs.current[selectedLocation.id]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [selectedLocation]);

  const handleSearch = useCallback(async (query: string, expandWithAI: boolean = false) => {
    if (!query.trim()) return;
    setCurrentQuery(query);
    if (expandWithAI) {
      setIsExpandingAI(true);
    } else {
      setIsLoading(true);
    }
    setError(null);
    try {
      const result = await searchNaturistPlaces(query, userPos, expandWithAI);
      if (result.locations.length > 0) {
        setLocations(result.locations);
        setSearchResult(result);
        setSelectedLocation(null);
      } else {
        if (!expandWithAI) {
          setLocations([]);
        }
        setError(`Vi kunne ikke finde specifikke naturiststeder i "${query}". Prøv at søge på et land eller en større by.`);
      }
    } catch (err: any) {
      console.error("Search Error:", err);
      setError(err.message || "Der opstod en fejl under søgningen. Prøv venligst igen.");
    } finally {
      setIsLoading(false);
      setIsExpandingAI(false);
    }
  }, [userPos]);

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          setUserPos(coords);
          handleSearch("Naturist steder tæt på mig");
        },
        () => {
          setIsLoading(false);
          setError("Vi kunne ikke få adgang til din position. Tjek dine browserindstillinger.");
        }
      );
    }
  };

  const constructAffiliateLink = (locationName: string) => {
    const cjBase = "https://www.tkqlhce.com/click-101623579-13829889";
    // Vi bruger Hotels.com søgesiden på dansk
    // For at opnå korrekt deep-linking skal vi encode destinationen først
    const hotelsSearchUrl = `https://da.hotels.com/Hotel-Search?destination=${encodeURIComponent(locationName)}`;
    // Herefter encoder vi hele Hotels.com URL'en til CJ 'url' parameteren
    return `${cjBase}?url=${encodeURIComponent(hotelsSearchUrl)}&sid=naturist_finder`;
  };

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <header className="bg-white/80 backdrop-blur-md border-b border-stone-100 px-6 py-4 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 flex items-center justify-center overflow-hidden rounded-xl shadow-md border border-stone-100 bg-white">
            <img 
              src="https://eventyrsstyrelsen.dk/wp-content/uploads/2017/12/Eventyrsstyrelsen-logo-2018-crown.jpg" 
              alt="Eventyrsstyrelsen Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-stone-900 tracking-tight">NaturistFinder</h1>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#ed6a56] rounded-full animate-pulse"></span>
              <p className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Eventyrsstyrelsen Guide</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-stone-100 rounded-2xl p-1 shadow-inner">
          <button 
            onClick={() => setViewMode('split')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all ${viewMode === 'split' ? 'bg-white shadow-sm text-[#ed6a56]' : 'text-stone-500 hover:text-stone-700'}`}
          >
            <MapIcon className="h-4 w-4" /> Kort & Liste
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-[#ed6a56]' : 'text-stone-500 hover:text-stone-700'}`}
          >
            <List className="h-4 w-4" /> Kun Liste
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => {
              setApiKeyInput(getSavedApiKey());
              setTestResult(null);
              setIsApiKeyModalOpen(true);
            }}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
              hasActiveKey 
                ? 'text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100 shadow-sm' 
                : 'text-stone-600 bg-stone-100 border-stone-200 hover:border-amber-400 hover:text-amber-700'
            }`}
            title="Klik for at konfigurere Google Gemini AI-nøgle til hele verden"
          >
            <span className={`w-2 h-2 rounded-full ${hasActiveKey ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'}`}></span>
            <Sparkles className={`h-3.5 w-3.5 ${hasActiveKey ? 'text-emerald-600' : 'text-amber-500'}`} />
            <span className="hidden sm:inline">{hasActiveKey ? 'AI Aktiv (Hele verden)' : 'Aktiver AI'}</span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold text-[#ed6a56] bg-[#fef0ee] px-3 py-1.5 rounded-full border border-[#fef0ee]">
            <ShieldCheck className="h-3.5 w-3.5" />
            VERIFICERET
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden relative">
        <div className={`flex-none w-full md:w-[420px] bg-white border-r border-stone-100 flex flex-col z-20 shadow-xl transition-transform duration-300 ${viewMode === 'map' ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}`}>
          <div className="p-5 space-y-4 bg-white sticky top-0 border-b border-stone-50">
            <SearchBar onSearch={handleSearch} onLocateMe={handleLocateMe} isLoading={isLoading} />
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar bg-stone-50/30">
            <div className="p-5 space-y-5">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-24 text-stone-400 space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 border-[3px] border-[#fef0ee] border-t-[#ed6a56] rounded-full animate-spin"></div>
                    <Waves className="absolute inset-0 m-auto h-6 w-6 text-[#ed6a56]/30" />
                  </div>
                  <div className="text-center px-8">
                    <p className="text-base font-semibold text-stone-800">Søger efter oaser...</p>
                    <p className="text-xs text-stone-400 mt-1 italic leading-relaxed">Vi analyserer kort og rejsevejledninger for at finde de bedste steder.</p>
                  </div>
                </div>
              ) : locations.length === 0 && !error ? (
                <div className="py-12 text-center space-y-6">
                  <div className="inline-flex p-5 bg-white rounded-3xl shadow-sm border border-stone-100">
                    <Waves className="h-10 w-10 text-[#ed6a56]" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800">Hvor vil du hen?</h3>
                  <div className="flex flex-wrap justify-center gap-2 pt-2 px-4">
                    {['Portugal', 'Algarve', 'Spanien', 'Frankrig', 'Danmark', 'Korsika', 'Menorca', 'Mallorca', 'Kroatien', 'Gran Canaria', 'Kreta', 'Grækenland', 'Tyskland', 'Dubai'].map(tag => (
                      <button 
                        key={tag}
                        onClick={() => handleSearch(tag)}
                        className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-xl text-xs font-bold text-stone-600 hover:border-[#ed6a56] hover:text-[#ed6a56] transition-all shadow-sm active:scale-95"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : error ? (
                <div className="p-6 bg-stone-50 border border-stone-200 rounded-3xl text-stone-600 text-sm flex flex-col items-center text-center gap-4">
                  <Info className="h-10 w-10 text-stone-300" />
                  <p className="font-medium leading-relaxed">{error}</p>
                  <button 
                    onClick={() => setError(null)}
                    className="text-xs font-bold text-[#ed6a56] hover:underline"
                  >
                    Prøv igen
                  </button>
                </div>
              ) : (
                <div className="space-y-4 pb-10">
                  <div className="flex items-center justify-between px-1 mb-1">
                    <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">Resultater ({locations.length})</h2>
                    {currentQuery && (
                      <button 
                        onClick={() => handleSearch(currentQuery, true)}
                        disabled={isExpandingAI || isLoading}
                        className="text-[10px] font-bold text-[#ed6a56] hover:underline flex items-center gap-1 transition-opacity disabled:opacity-50"
                      >
                        <Sparkles className="h-3 w-3" />
                        {isExpandingAI ? 'Søger med AI...' : '+ Flere med AI'}
                      </button>
                    )}
                  </div>
                  {locations.map((loc) => (
                    <div 
                      key={loc.id}
                      ref={el => listRefs.current[loc.id] = el}
                      onClick={() => setSelectedLocation(loc)}
                      className={`group cursor-pointer bg-white border rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${selectedLocation?.id === loc.id ? 'border-[#ed6a56] ring-4 ring-[#fef0ee] bg-[#fef0ee]/10' : 'border-stone-100 shadow-sm'} ${loc.warning ? 'border-red-300 bg-red-50/10' : ''}`}
                    >
                      <ImageWithFallback src={loc.image} alt={loc.name} type={loc.type} />
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex flex-col gap-1 min-w-0 flex-1">
                            <h3 className="font-bold text-stone-900 text-lg group-hover:text-[#ed6a56] transition-colors flex items-center gap-2 truncate">
                              {loc.name}
                              <ChevronRight className={`h-4 w-4 shrink-0 transition-all ${selectedLocation?.id === loc.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                            </h3>
                            {loc.warning && (
                              <span className="flex items-center gap-1 text-[9px] font-black text-red-600 bg-red-100/50 px-2 py-0.5 rounded border border-red-200 w-fit uppercase shrink-0">
                                <AlertTriangle className="h-2.5 w-2.5" />
                                Juridisk Risiko
                              </span>
                            )}
                          </div>
                          <span className="px-2 py-0.5 bg-stone-100 text-[9px] font-black uppercase tracking-widest rounded-md border border-stone-200 text-stone-500 shrink-0 ml-2">
                            {loc.type === 'beach' ? 'Strand' : loc.type === 'resort' ? 'Resort' : loc.type === 'campsite' ? 'Camping' : 'Andet'}
                          </span>
                        </div>
                        <p className="text-sm text-stone-500 mt-2 line-clamp-3 leading-relaxed font-medium">{loc.description}</p>
                      </div>
                    </div>
                  ))}

                  {currentQuery && (
                    <div className="pt-3 pb-2 text-center">
                      <button
                        onClick={() => handleSearch(currentQuery, true)}
                        disabled={isExpandingAI || isLoading}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#fef0ee] to-[#fff5f4] border border-[#fbd2cc] rounded-2xl text-xs font-bold text-[#ed6a56] hover:bg-[#ed6a56] hover:text-white transition-all shadow-sm active:scale-95 disabled:opacity-50"
                      >
                        {isExpandingAI ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin text-[#ed6a56]" />
                            Søger efter ekstra skjulte perler med AI...
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-4 w-4" />
                            Find endnu flere steder med AI
                          </>
                        )}
                      </button>
                      <p className="text-[10px] text-stone-400 mt-1.5 italic">
                        Bruger din tilknyttede Gemini AI-nøgle til at finde lokale vige, klubber og afsides strande
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {!isLoading && locations.length > 0 && (
              <footer className="mt-auto py-12 px-6 border-t border-stone-100 text-center space-y-4">
                <div className="flex items-center justify-center gap-2 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                  <img src="https://eventyrsstyrelsen.dk/wp-content/uploads/2017/12/Eventyrsstyrelsen-logo-2018-crown.jpg" className="h-8 w-8 object-contain" alt="Logo footer" />
                </div>
                <div className="text-xs text-stone-400 font-bold tracking-wide">
                  Stærke Sider Copyright © 2026
                </div>
                <div>
                  <a 
                    href="https://staerkesider.dk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ed6a56] hover:underline transition-all"
                  >
                    staerkesider.dk
                  </a>
                </div>
              </footer>
            )}
          </div>
        </div>

        <div className={`flex-1 relative bg-stone-200 ${viewMode === 'list' ? 'hidden md:block' : 'block'}`}>
          <Map 
            locations={locations} 
            selectedLocation={selectedLocation} 
            onMarkerClick={setSelectedLocation}
            center={userPos ? [userPos.lat, userPos.lng] : undefined}
          />
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden z-30">
            <button 
              onClick={() => setViewMode(viewMode === 'map' ? 'list' : 'map')}
              className="flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full shadow-2xl font-bold text-sm active:scale-95 transition-transform"
            >
              {viewMode === 'map' ? <><List className="h-5 w-5" /> Vis Liste</> : <><MapIcon className="h-5 w-5" /> Vis Kort</>}
            </button>
          </div>
        </div>

        {selectedLocation && (
          <div className={`fixed inset-x-4 bottom-8 md:bottom-10 md:right-10 md:left-auto md:w-[420px] max-h-[85vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.18)] border z-50 animate-in slide-in-from-bottom-10 fade-in duration-500 ${selectedLocation.warning ? 'border-red-300 ring-4 ring-red-50' : 'border-[#fef0ee]'}`}>
            {selectedLocation.image && (
              <div className="relative h-48 w-full overflow-hidden rounded-t-[2.5rem] bg-stone-100">
                <img 
                  src={selectedLocation.image} 
                  alt={selectedLocation.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/api/image-proxy') && selectedLocation.image) {
                      target.src = `/api/image-proxy?url=${encodeURIComponent(selectedLocation.image)}`;
                    } else {
                      target.style.display = 'none';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            )}
            <div className="p-7">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full ${selectedLocation.warning ? 'bg-red-600 text-white' : 'bg-[#fef0ee] text-[#ed6a56]'}`}>
                  {selectedLocation.warning ? 'ADVARSEL: ULOVLIGT' : selectedLocation.type === 'beach' ? 'Strand' : selectedLocation.type}
                </span>
                <button onClick={() => setSelectedLocation(null)} className="p-2 bg-stone-100 rounded-full text-stone-400 hover:text-stone-900 transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {selectedLocation.warning && (
                <div className="mb-6 p-4 bg-red-50 rounded-2xl border border-red-100 flex gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-black text-red-700 uppercase tracking-wider">Destinationen er risikabel</p>
                    <p className="text-xs text-red-600 font-bold leading-relaxed">{selectedLocation.warning}</p>
                  </div>
                </div>
              )}
              
              <h2 className="text-3xl font-black text-stone-900 mb-3 tracking-tight">{selectedLocation.name}</h2>
              <p className="text-base text-stone-600 leading-relaxed mb-8 font-medium">{selectedLocation.description}</p>
              
              <div className="space-y-3">
                {/* Affiliate booking link for resorts/campsites */}
                {(selectedLocation.type === 'resort' || selectedLocation.type === 'campsite' || selectedLocation.type === 'other') && (
                  <a 
                    href={constructAffiliateLink(selectedLocation.name)}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#059669] text-white rounded-2xl font-bold text-base hover:bg-[#047857] transition-all shadow-xl active:scale-95"
                  >
                    <Calendar className="h-5 w-5" /> Find hotel og book nu
                  </a>
                )}

                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.lat},${selectedLocation.lng}`}
                  target="_blank" rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-base transition-all shadow-xl active:scale-95 ${selectedLocation.warning ? 'bg-red-600 text-white hover:bg-red-700 shadow-red-100' : 'bg-[#ed6a56] text-white hover:opacity-90 shadow-[#fef0ee]'}`}
                >
                  <Navigation className="h-5 w-5" /> Find Rutevejledning
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* AI Key Configuration Modal */}
      {isApiKeyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-100 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-50 rounded-2xl text-amber-600 border border-amber-100">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">AI-søgning i hele verden</h3>
                  <p className="text-xs text-stone-500">Find naturiststeder i ethvert land og by</p>
                </div>
              </div>
              <button 
                onClick={() => setIsApiKeyModalOpen(false)}
                className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl text-xs text-stone-600 space-y-2 border border-stone-200/60 leading-relaxed">
              <p>
                Når du tilknytter en gratis Google Gemini API-nøgle, kan NaturistFinder søge i alle lande (f.eks. Tyskland, Kroatien, Østrig, Norge, Brasilien osv.) og finde snesevis af strande og campingpladser.
              </p>
              <div className="pt-1">
                <a 
                  href="https://aistudio.google.com/apikey" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 font-bold text-[#ed6a56] hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Hent gratis API-nøgle hos Google AI Studio
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 block">
                Google Gemini API-nøgle
              </label>
              <input 
                type="password"
                placeholder="AIzaSy..."
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-mono text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#ed6a56] focus:bg-white transition-all"
              />
              <p className="text-[11px] text-stone-400 italic">
                Nøglen gemmes sikkert i din browser og synkroniseres automatisk med søgemaskinen.
              </p>
            </div>

            {testResult && (
              <div className={`p-3.5 rounded-xl text-xs font-semibold flex items-start gap-2.5 ${
                testResult.loading 
                  ? 'bg-stone-100 text-stone-600' 
                  : testResult.success 
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {testResult.loading ? (
                  <Loader2 className="h-4 w-4 animate-spin shrink-0 mt-0.5" />
                ) : testResult.success ? (
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                )}
                <span>{testResult.loading ? 'Tester nøgle mod Google AI...' : testResult.message}</span>
              </div>
            )}

            <div className="flex items-center gap-2 pt-2">
              <button 
                onClick={handleSaveApiKey}
                disabled={testResult?.loading}
                className="flex-1 py-3 bg-[#ed6a56] text-white rounded-xl text-sm font-bold hover:bg-[#d85845] transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {testResult?.loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                Gem & Test Nøgle
              </button>
              {apiKeyInput && (
                <button 
                  onClick={() => {
                    setApiKeyInput('');
                    saveApiKey('');
                    setHasActiveKey(false);
                    setTestResult({ loading: false, success: true, message: 'Nøgle fjernet.' });
                  }}
                  className="px-4 py-3 bg-stone-100 text-stone-600 rounded-xl text-sm font-bold hover:bg-stone-200 transition-all"
                >
                  Ryd
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
