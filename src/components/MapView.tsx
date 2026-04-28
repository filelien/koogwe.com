import { useEffect, useRef } from 'react';

interface MapViewProps {
  selectedCity?: string;
}

const cityCoordinates: Record<string, [number, number]> = {
  Cayenne: [-52.3333, 4.9375],
  Kourou: [-52.65, 5.16],
  'Saint-Laurent-du-Maroni': [-54.0333, 5.5],
  Matoury: [-52.3333, 4.85],
  'Remire-Montjoly': [-52.2667, 4.9],
};

type MapHandle = {
  remove?: () => void;
  flyTo?: (opts: { center: [number, number]; zoom: number }) => void;
  setCenter?: (opts: { lat: number; lng: number }) => void;
  setZoom?: (zoom: number) => void;
};

type MapboxMapCtor = new (options: {
  container: HTMLDivElement;
  style: string;
  center: [number, number];
  zoom: number;
}) => MapHandle;

type MapboxMarkerCtor = new (options: { color: string }) => {
  setLngLat: (coords: [number, number]) => { addTo: (map: MapHandle) => void };
};

type GoogleMapCtor = new (
  container: HTMLDivElement,
  options: { center: { lat: number; lng: number }; zoom: number; mapTypeId: string },
) => MapHandle;

type GoogleMarkerCtor = new (options: {
  position: { lat: number; lng: number };
  map: MapHandle;
}) => unknown;

type BrowserMapsWindow = Window & {
  mapboxgl?: { accessToken: string; Map: MapboxMapCtor; Marker: MapboxMarkerCtor };
  google?: { maps: { Map: GoogleMapCtor; Marker: GoogleMarkerCtor } };
};

export default function MapView({ selectedCity = 'Cayenne' }: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<MapHandle | null>(null);
  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;
  const googleMapsKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;

  useEffect(() => {
    if (!mapContainer.current) return;
    const mapsWindow = window as BrowserMapsWindow;

    // Try to use Mapbox first
    if (mapboxToken && mapsWindow.mapboxgl) {
      mapsWindow.mapboxgl.accessToken = mapboxToken;
      
      const coordinates = cityCoordinates[selectedCity] || cityCoordinates['Cayenne'];
      
      if (!mapInstance.current) {
        mapInstance.current = new mapsWindow.mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: coordinates,
          zoom: 11,
        });

        // Add marker
        new mapsWindow.mapboxgl.Marker({ color: '#10b981' })
          .setLngLat(coordinates)
          .addTo(mapInstance.current);
      } else {
        mapInstance.current.flyTo({
          center: coordinates,
          zoom: 11,
        });
      }
    } else if (googleMapsKey && mapsWindow.google) {
      // Fallback to Google Maps
      const coordinates = cityCoordinates[selectedCity] || cityCoordinates['Cayenne'];
      
      if (!mapInstance.current) {
        mapInstance.current = new mapsWindow.google.maps.Map(mapContainer.current, {
          center: { lat: coordinates[1], lng: coordinates[0] },
          zoom: 11,
          mapTypeId: 'roadmap',
        });

        new mapsWindow.google.maps.Marker({
          position: { lat: coordinates[1], lng: coordinates[0] },
          map: mapInstance.current,
        });
      } else {
        mapInstance.current.setCenter({ lat: coordinates[1], lng: coordinates[0] });
        mapInstance.current.setZoom(11);
      }
    } else {
      // Load Mapbox script if not loaded
      if (!document.querySelector('script[src*="mapbox-gl.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js';
        script.onload = () => {
          const link = document.createElement('link');
          link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css';
          link.rel = 'stylesheet';
          document.head.appendChild(link);
          
          if (mapContainer.current) {
            const loadedWindow = window as BrowserMapsWindow;
            if (!loadedWindow.mapboxgl) return;
            loadedWindow.mapboxgl.accessToken = mapboxToken;
            const coordinates = cityCoordinates[selectedCity] || cityCoordinates['Cayenne'];
            
            mapInstance.current = new loadedWindow.mapboxgl.Map({
              container: mapContainer.current,
              style: 'mapbox://styles/mapbox/streets-v12',
              center: coordinates,
              zoom: 11,
            });

            new loadedWindow.mapboxgl.Marker({ color: '#10b981' })
              .setLngLat(coordinates)
              .addTo(mapInstance.current);
          }
        };
        document.head.appendChild(script);
      } else {
        // Script is already loaded, initialize or update the map
        const loadedWindow = window as BrowserMapsWindow;
        if (loadedWindow.mapboxgl && mapContainer.current) {
          loadedWindow.mapboxgl.accessToken = mapboxToken;
          const coordinates = cityCoordinates[selectedCity] || cityCoordinates['Cayenne'];
          
          if (!mapInstance.current) {
            mapInstance.current = new loadedWindow.mapboxgl.Map({
              container: mapContainer.current,
              style: 'mapbox://styles/mapbox/streets-v12',
              center: coordinates,
              zoom: 11,
            });

            new loadedWindow.mapboxgl.Marker({ color: '#10b981' })
              .setLngLat(coordinates)
              .addTo(mapInstance.current);
          } else {
            mapInstance.current.flyTo({
              center: coordinates,
              zoom: 11,
            });
          }
        }
      }
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove?.();
        mapInstance.current = null;
      }
    };
  }, [selectedCity, googleMapsKey, mapboxToken]);

  return (
    <div className="w-full h-80 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700" style={{ minHeight: '320px' }}>
      {mapboxToken || googleMapsKey ? (
        <div ref={mapContainer} className="w-full h-full" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm p-4 text-center">
          Carte indisponible: configurez `VITE_MAPBOX_TOKEN` ou `VITE_GOOGLE_MAPS_KEY`.
        </div>
      )}
    </div>
  );
}

