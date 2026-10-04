
import React, { useEffect, useRef } from 'react';
import * as L from 'leaflet';
import { NaturistLocation } from '../types';

interface MapProps {
  locations: NaturistLocation[];
  selectedLocation: NaturistLocation | null;
  onMarkerClick: (location: NaturistLocation) => void;
  center?: [number, number];
}

const Map: React.FC<MapProps> = ({ locations, selectedLocation, onMarkerClick, center }) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  // Custom ikoner til advarsler og brand farve
  const createIcon = (color: string) => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: ${color}; width: 14px; height: 14px; border: 3px solid white; border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  };

  const defaultIcon = createIcon('#ed6a56'); // Brand farve
  const warningIcon = createIcon('#ef4444'); // Red

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current, {
      zoomControl: false
    }).setView(center || [55.6761, 12.5683], 5);

    // Basiskort uden krav om API-nøgle eller vandmærke
    const standardOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> bidragsydere',
      maxZoom: 19
    });

    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Maxar, Earthstar Geographics',
      maxZoom: 19
    });

    // Tilføj standardkort som aktivt lag
    standardOSM.addTo(mapRef.current);

    // Giv brugeren mulighed for nemt at skifte mellem kort og satellit
    L.control.layers({
      "Kort": standardOSM,
      "Satellit": satellite
    }, undefined, { position: 'topright' }).addTo(mapRef.current);

    L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);
    markersLayerRef.current = L.layerGroup().addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !markersLayerRef.current) return;

    markersLayerRef.current.clearLayers();
    const bounds = L.latLngBounds([]);

    const validLocations = locations.filter(loc => 
      loc && 
      typeof loc.lat === 'number' && 
      !isNaN(loc.lat) && 
      typeof loc.lng === 'number' && 
      !isNaN(loc.lng) &&
      loc.lat >= -90 && loc.lat <= 90 &&
      loc.lng >= -180 && loc.lng <= 180
    );

    try {
      validLocations.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], {
          icon: loc.warning ? warningIcon : defaultIcon
        }).on('click', () => onMarkerClick(loc));
        
        const popupContent = `
          <div class="p-2">
            <b class="text-stone-900">${loc.name || 'Destination'}</b><br>
            <span class="text-xs text-stone-500">${loc.type === 'beach' ? 'Strand' : loc.type === 'resort' ? 'Resort' : loc.type === 'campsite' ? 'Camping' : 'Sted'}</span>
            ${loc.warning ? `<div class="mt-2 p-1.5 bg-red-50 text-red-600 text-[10px] font-bold rounded border border-red-100">⚠️ ADVARSEL</div>` : ''}
          </div>
        `;
        marker.bindPopup(popupContent);
        markersLayerRef.current?.addLayer(marker);
        bounds.extend([loc.lat, loc.lng]);
      });

      if (validLocations.length > 0 && bounds.isValid()) {
        mapRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
      }
    } catch (err) {
      console.warn("Leaflet markers/bounds error caught safely:", err);
    }
  }, [locations]);

  useEffect(() => {
    try {
      if (
        selectedLocation && 
        mapRef.current && 
        typeof selectedLocation.lat === 'number' && 
        !isNaN(selectedLocation.lat) && 
        typeof selectedLocation.lng === 'number' && 
        !isNaN(selectedLocation.lng)
      ) {
        mapRef.current.flyTo([selectedLocation.lat, selectedLocation.lng], 13, { duration: 1.5 });
      }
    } catch (err) {
      console.warn("Leaflet flyTo error caught safely:", err);
    }
  }, [selectedLocation]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainerRef} className="absolute inset-0 z-0" />
    </div>
  );
};

export default Map;
