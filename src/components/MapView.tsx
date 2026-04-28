import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

interface MapViewProps {
  selectedCity?: string;
}

const cityCoordinates: Record<string, { coords: [number, number]; name: string; region: string }> = {
  Cayenne: { coords: [-52.3333, 4.9375], name: 'Cayenne', region: 'Chef-lieu' },
  Kourou: { coords: [-52.65, 5.16], name: 'Kourou', region: 'Littoral nord' },
  'Saint-Laurent-du-Maroni': { coords: [-54.0333, 5.5], name: 'Saint-Laurent-du-Maroni', region: 'Littoral ouest' },
  Matoury: { coords: [-52.3333, 4.85], name: 'Matoury', region: 'Aire métropolitaine' },
  'Remire-Montjoly': { coords: [-52.2667, 4.9], name: 'Remire-Montjoly', region: 'Région côtière' },
};

type MapHandle = {
  remove?: () => void;
  flyTo?: (opts: { center: [number, number]; zoom: number; duration?: number }) => void;
  setCenter?: (opts: { lat: number; lng: number }) => void;
  setZoom?: (zoom: number) => void;
};

type MapboxMapCtor = new (options: {
  container: HTMLDivElement;
  style: string;
  center: [number, number];
  zoom: number;
}) => MapHandle;

type MapboxMarkerCtor = new (options: { color: string; scale?: number }) => {
  setLngLat: (coords: [number, number]) => { addTo: (map: MapHandle) => void };
  setPopup?: (popup: any) => MapboxMarkerCtor;
};

type BrowserMapsWindow = Window & {
  mapboxgl?: { 
    accessToken: string; 
    Map: MapboxMapCtor; 
    Marker: MapboxMarkerCtor;
    Popup?: new (options?: any) => any;
  };
};

export default function MapView({ selectedCity = 'Cayenne' }: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<MapHandle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;

  useEffect(() => {
    if (!mapContainer.current) return;

    const initMap = () => {
      const mapsWindow = window as BrowserMapsWindow;
      
      if (!mapsWindow.mapboxgl) {
        setIsLoading(false);
        return;
      }

      // Get city data
      const cityData = cityCoordinates[selectedCity] || cityCoordinates['Cayenne'];
      const coordinates = cityData.coords;

      // Set token if provided
      if (mapboxToken) {
        mapsWindow.mapboxgl.accessToken = mapboxToken;
      } else {
        // If no token, we'll show a fallback UI
        setIsLoading(false);
        return;
      }

      try {
        if (!mapInstance.current) {
          mapInstance.current = new mapsWindow.mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: coordinates,
            zoom: 12,
          });

          // Add marker with popup
          const markerEl = document.createElement('div');
          markerEl.className = 'marker';
          markerEl.style.backgroundImage = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2310b981" stroke="white" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3" fill="white"/></svg>')`;
          markerEl.style.backgroundSize = 'contain';
          markerEl.style.width = '40px';
          markerEl.style.height = '40px';
          markerEl.style.cursor = 'pointer';
          markerEl.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))';

          new mapsWindow.mapboxgl.Marker({ element: markerEl } as any)
            .setLngLat(coordinates)
            .addTo(mapInstance.current);
        } else {
          mapInstance.current.flyTo({
            center: coordinates,
            zoom: 12,
            duration: 1000,
          });
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de la carte:', error);
        setIsLoading(false);
      }
    };

    // Check if mapboxgl is already loaded
    if ((window as BrowserMapsWindow).mapboxgl) {
      initMap();
    } else {
      // Wait a bit for the script to load
      const timer = setTimeout(initMap, 100);
      return () => clearTimeout(timer);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove?.();
        mapInstance.current = null;
      }
    };
  }, [selectedCity, mapboxToken]);

  const cityData = cityCoordinates[selectedCity] || cityCoordinates['Cayenne'];

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl">
      <div className="relative w-full h-96">
        {!mapboxToken ? (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center z-10">
            <div className="text-center">
              <MapPin className="mx-auto text-gray-400 dark:text-gray-500 mb-3" size={48} />
              <p className="text-gray-600 dark:text-gray-300 text-sm">Configurez VITE_MAPBOX_TOKEN pour afficher la carte</p>
            </div>
          </div>
        ) : isLoading ? (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-emerald-500 animate-spin mx-auto mb-3"></div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Chargement de la carte...</p>
            </div>
          </div>
        ) : null}
        <div ref={mapContainer} className="w-full h-full bg-gray-100 dark:bg-gray-800" />
      </div>

      {/* City Info Card */}
      <div className="bg-white dark:bg-gray-800 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex-shrink-0">
            <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{cityData.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{cityData.region}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

