
import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Loader2, X } from 'lucide-react';
import { getSuggestions } from '../geminiService';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onLocateMe: () => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onLocateMe, isLoading }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchingSuggestions, setIsSearchingSuggestions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const skipNextFetch = useRef(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (skipNextFetch.current) {
        skipNextFetch.current = false;
        return;
      }

      if (query.trim().length >= 2) {
        setIsSearchingSuggestions(true);
        const results = await getSuggestions(query);
        setSuggestions(results);
        setShowSuggestions(results.length > 0);
        setIsSearchingSuggestions(false);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
        setIsSearchingSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      skipNextFetch.current = true;
      setShowSuggestions(false);
      onSearch(query);
    }
  };

  const handleSelectSuggestion = (s: string) => {
    skipNextFetch.current = true;
    setQuery(s);
    setShowSuggestions(false);
    onSearch(s);
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative" ref={dropdownRef}>
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {isSearchingSuggestions ? (
            <Loader2 className="h-5 w-5 text-[#ed6a56] animate-spin" />
          ) : (
            <Search className="h-5 w-5 text-stone-400 group-focus-within:text-[#ed6a56] transition-colors" />
          )}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            skipNextFetch.current = false;
            setQuery(e.target.value);
          }}
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
          placeholder="Søg destination (f.eks. Korsika)..."
          className="block w-full pl-11 pr-24 py-4 bg-white border border-stone-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#ed6a56] focus:border-[#ed6a56] outline-none transition-all text-stone-800 placeholder-stone-400"
        />
        <div className="absolute inset-y-0 right-2 flex items-center gap-2">
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setShowSuggestions(false);
              }}
              className="p-1 text-stone-300 hover:text-stone-500 rounded-full"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onLocateMe}
            className="p-2 text-stone-400 hover:text-[#ed6a56] hover:bg-stone-50 rounded-lg transition-colors"
          >
            <MapPin className="h-5 w-5" />
          </button>
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="px-5 py-2 bg-[#ed6a56] text-white font-medium rounded-xl hover:opacity-90 disabled:opacity-50 transition-all shadow-sm"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Søg'}
          </button>
        </div>
      </form>

      {showSuggestions && (
        <div className="absolute w-full mt-2 bg-white border border-stone-100 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="py-2">
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectSuggestion(s)}
                className="w-full text-left px-5 py-3 hover:bg-[#fef0ee] text-stone-700 font-medium flex items-center gap-3 transition-colors border-b border-stone-50 last:border-0"
              >
                <Search className="h-4 w-4 text-[#ed6a56]" />
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
