import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
  selectedCity?: string;
}

const cityCoordinates: Record<string, { center: [number, number]; name: string; region: string }> = {
  Cayenne: { center: [4.9333, -52.3333], name: 'Cayenne', region: 'Chef-lieu' },
  Kourou: { center: [5.1556, -52.6475], name: 'Kourou', region: 'Littoral nord' },
  'Saint-Laurent-du-Maroni': { center: [5.5058, -54.0286], name: 'Saint-Laurent-du-Maroni', region: 'Littoral ouest' },
  Matoury: { center: [4.8486, -52.3250], name: 'Matoury', region: 'Aire métropolitaine' },
  'Remire-Montjoly': { center: [4.9167, -52.2667], name: 'Remire-Montjoly', region: 'Région côtière' },
};

const GUYANA_CENTER: [number, number] = [5.0, -53.0];
const OVERVIEW_ZOOM = 8;
const CITY_ZOOM = 13;

// Custom marker icon for cities
const createMarkerIcon = (isActive: boolean = false) => divIcon({
  html: `<div style="background-color: ${isActive ? '#059669' : '#10B981'}; border: ${isActive ? '4px' : '3px'} solid ${isActive ? '#047857' : '#059669'}; width: ${isActive ? '36px' : '28px'}; height: ${isActive ? '36px' : '28px'}; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: ${isActive ? '0 4px 12px rgba(0,0,0,0.35)' : '0 2px 8px rgba(0,0,0,0.25)'}; cursor: pointer; transition: all 0.3s;"><div style="width: 10px; height: 10px; background-color: white; border-radius: 50%;"></div></div>`,
  className: '',
  iconSize: [isActive ? 36 : 28, isActive ? 36 : 28],
  iconAnchor: [isActive ? 18 : 14, isActive ? 18 : 14],
});

function MapController({ activeCity }: { activeCity: string }) {
  const map = useMap();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const cityData = cityCoordinates[activeCity];
    if (cityData) {
      map.setView(cityData.center, CITY_ZOOM, { animate: true });
    }
  }, [activeCity, map]);

  return null;
}

export default function MapView({ selectedCity = 'Cayenne' }: MapViewProps) {
  const [activeCity, setActiveCity] = useState(selectedCity);

  useEffect(() => {
    setActiveCity(selectedCity);
  }, [selectedCity]);

  const handleCityClick = (cityName: string) => {
    setActiveCity(cityName);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl">
      <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-blue-50">
        <MapContainer
          center={GUYANA_CENTER}
          zoom={OVERVIEW_ZOOM}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <MapController activeCity={activeCity} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {Object.values(cityCoordinates).map((city) => (
            <Marker
              key={city.name}
              position={city.center}
              icon={createMarkerIcon(activeCity === city.name)}
              eventHandlers={{
                click: () => handleCityClick(city.name),
              }}
            >
              <Tooltip 
                direction="right" 
                offset={[16, 0]} 
                permanent
                className="leaflet-tooltip-custom"
                sticky={false}
              >
                <span className="font-bold text-sm text-gray-800">{city.name}</span>
              </Tooltip>
              <Popup className="leaflet-popup-custom">
                <div className="rounded-lg p-3 text-center">
                  <p className="font-bold text-gray-900 text-sm">{city.name}</p>
                  <p className="text-xs text-gray-600">{city.region}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

