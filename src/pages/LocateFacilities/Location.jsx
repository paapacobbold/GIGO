import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Sidebar from "../../components/sidebar/sidebar";
import TopBar from "../../components/TopBar/TopBar";
import "leaflet/dist/leaflet.css";
import "./Location.css";
import {
  Search,
  Recycle,
  Trash2,
  Leaf,
  MapPin,
  Plus,
  Minus,
  Locate,
  Clock,
  Phone,
  Navigation,
  Truck,
} from "lucide-react";

// Fix for Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Custom marker icons
const createCustomIcon = (type) => {
  return L.divIcon({
    className: `custom-marker ${type}`,
    html:
      type === "recycling"
        ? '<i data-lucide="recycle"></i>'
        : type === "landfill"
        ? '<i data-lucide="trash-2"></i>'
        : type === "compost"
        ? '<i data-lucide="leaf"></i>'
        : '<i data-lucide="truck"></i>',
    iconSize: [36, 36],
  });
};

// Map control component
const MapControls = ({ onZoomIn, onZoomOut, onLocate }) => {
  return (
    <div className="map-controls">
      <button
        className="map-control-button"
        onClick={onZoomIn}
        aria-label="Zoom in"
      >
        <Plus size={18} />
      </button>
      <button
        className="map-control-button"
        onClick={onZoomOut}
        aria-label="Zoom out"
      >
        <Minus size={18} />
      </button>
      <button
        className="map-control-button"
        onClick={onLocate}
        aria-label="My location"
      >
        <Locate size={18} />
      </button>
    </div>
  );
};

// Map controller component
const MapController = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
};

const Location = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFacility, setSelectedFacility] = useState(null);
  // Set initial map center to Accra, Ghana
  const [mapCenter, setMapCenter] = useState([5.6037, -0.187]);
  const [mapZoom, setMapZoom] = useState(12);
  const mapRef = useRef(null);

  // Sample data for waste management facilities in Ghana
  const facilities = [
    {
      id: 1,
      name: "Accra Compost & Recycling Plant",
      type: "recycling",
      address: "Adjen Kotoku, Greater Accra Region",
      position: [5.7037, -0.327],
      distance: "18.2 km",
      phone: "+233 30 222 1234",
      hours: "8:00 AM - 5:00 PM",
      acceptedItems: "Paper, Plastic, Glass, Metal, Organic Waste",
    },
    {
      id: 2,
      name: "Kpone Landfill",
      type: "landfill",
      address: "Kpone-Katamanso District, Greater Accra",
      position: [5.6937, -0.067],
      distance: "12.8 km",
      phone: "+233 30 222 5678",
      hours: "7:00 AM - 6:00 PM",
      acceptedItems: "General Waste, Construction Debris",
    },
    {
      id: 3,
      name: "Zoomlion Composting Facility",
      type: "compost",
      address: "Teshie-Nungua, Accra",
      position: [5.6137, -0.107],
      distance: "8.5 km",
      phone: "+233 30 222 7890",
      hours: "8:00 AM - 4:00 PM",
      acceptedItems: "Food Waste, Yard Waste, Organic Materials",
    },
    {
      id: 4,
      name: "Tema Waste Collection Center",
      type: "collection",
      address: "Tema Industrial Area, Greater Accra",
      position: [5.67, -0.017],
      distance: "20.0 km",
      phone: "+233 30 222 4567",
      hours: "24/7",
      acceptedItems: "Household Waste, Recyclables",
    },
    {
      id: 5,
      name: "Environment 360 Recycling Hub",
      type: "recycling",
      address: "Jamestown, Accra",
      position: [5.5337, -0.217],
      distance: "7.3 km",
      phone: "+233 30 222 8901",
      hours: "8:00 AM - 5:00 PM",
      acceptedItems: "Electronics, Batteries, Paper, Plastic",
    },
    {
      id: 6,
      name: "Madina Collection Point",
      type: "collection",
      address: "Madina Market, Accra",
      position: [5.6737, -0.167],
      distance: "5.2 km",
      phone: "+233 30 222 3456",
      hours: "6:00 AM - 8:00 PM",
      acceptedItems: "Household Waste, Market Waste",
    },
    {
      id: 7,
      name: "Legon Organic Composting",
      type: "compost",
      address: "University of Ghana, Legon",
      position: [5.65, -0.187],
      distance: "4.6 km",
      phone: "+233 30 222 9012",
      hours: "9:00 AM - 3:00 PM",
      acceptedItems: "Food Waste, Agricultural Waste",
    },
    {
      id: 8,
      name: "Oblogo Landfill",
      type: "landfill",
      address: "Oblogo, Weija, Greater Accra",
      position: [5.5637, -0.307],
      distance: "15.1 km",
      phone: "+233 30 222 6789",
      hours: "7:00 AM - 5:00 PM",
      acceptedItems: "General Waste, Industrial Waste",
    },
  ];

  // Filter facilities based on search and filter
  const filteredFacilities = facilities.filter((facility) => {
    const matchesSearch =
      facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "all" || facility.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Handle facility selection
  const handleFacilityClick = (facility) => {
    setSelectedFacility(facility);
    setMapCenter(facility.position);
    setMapZoom(15);
  };

  // Map control handlers
  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.setZoom(mapRef.current.getZoom() + 1);
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.setZoom(mapRef.current.getZoom() - 1);
    }
  };

  const handleLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter([latitude, longitude]);
          setMapZoom(15);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Unable to get your location. Please check your browser permissions."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Get map instance
  const whenCreated = (map) => {
    mapRef.current = map;
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="locate-facilities"
      />
      <TopBar />
      <div className="main-content">
        <div className="location-container">
          <div className="location-header">
            <h1 className="location-title">Locate Our Facilities</h1>

            <div className="stats-container">
              <div className="stat-card primary">
                <div className="stat-title">Recycling Centers</div>
                <div className="stat-value">12</div>
              </div>
              <div className="stat-card secondary">
                <div className="stat-title">Collection Points</div>
                <div className="stat-value">24</div>
              </div>
              <div className="stat-card accent">
                <div className="stat-title">Composting Facilities</div>
                <div className="stat-value">8</div>
              </div>
            </div>

            <div className="search-filter-container">
              <div className="search-box">
                {/* <Search className="search-icon" size={18} /> */}
                <input
                  type="text"
                  placeholder="Search for waste management facilities in Ghana..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="filter-buttons">
                <button
                  className={`filter-button ${
                    activeFilter === "all" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("all")}
                >
                  <MapPin size={16} />
                  All
                </button>
                <button
                  className={`filter-button ${
                    activeFilter === "recycling" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("recycling")}
                >
                  <Recycle size={16} />
                  Recycling
                </button>
                <button
                  className={`filter-button ${
                    activeFilter === "landfill" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("landfill")}
                >
                  <Trash2 size={16} />
                  Landfill
                </button>
                <button
                  className={`filter-button ${
                    activeFilter === "compost" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("compost")}
                >
                  <Leaf size={16} />
                  Composting
                </button>
                <button
                  className={`filter-button ${
                    activeFilter === "collection" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("collection")}
                >
                  <Truck size={16} />
                  Collection
                </button>
              </div>
            </div>
          </div>

          <div className="location-content">
            <div className="map-section">
              <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                style={{ height: "100%", width: "100%" }}
                whenCreated={whenCreated}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {filteredFacilities.map((facility) => (
                  <Marker
                    key={facility.id}
                    position={facility.position}
                    icon={createCustomIcon(facility.type)}
                    eventHandlers={{
                      click: () => handleFacilityClick(facility),
                    }}
                  >
                    <Popup className="custom-popup">
                      <div className="popup-title">{facility.name}</div>
                      <div className="popup-address">{facility.address}</div>
                      <div className="popup-details">
                        <span className={`facility-type ${facility.type}`}>
                          {facility.type === "recycling" ? (
                            <Recycle size={14} />
                          ) : facility.type === "landfill" ? (
                            <Trash2 size={14} />
                          ) : facility.type === "compost" ? (
                            <Leaf size={14} />
                          ) : (
                            <Truck size={14} />
                          )}
                          {facility.type.charAt(0).toUpperCase() +
                            facility.type.slice(1)}
                        </span>
                        <span>{facility.distance}</span>
                      </div>
                      <div
                        className="popup-details"
                        style={{ marginTop: "8px" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <Phone size={14} />
                          {facility.phone}
                        </span>
                      </div>
                      <div
                        className="popup-details"
                        style={{ marginTop: "4px" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <Clock size={14} />
                          {facility.hours}
                        </span>
                      </div>
                      <div style={{ marginTop: "8px", fontSize: "0.875rem" }}>
                        <strong>Accepts:</strong> {facility.acceptedItems}
                      </div>
                      <button className="popup-button">
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "4px",
                          }}
                        >
                          <Navigation size={14} />
                          Get Directions
                        </span>
                      </button>
                    </Popup>
                  </Marker>
                ))}

                <MapController center={mapCenter} zoom={mapZoom} />
                <MapControls
                  onZoomIn={handleZoomIn}
                  onZoomOut={handleZoomOut}
                  onLocate={handleLocate}
                />
              </MapContainer>
            </div>

            <div className="facilities-section">
              {filteredFacilities.length > 0 ? (
                filteredFacilities.map((facility) => (
                  <div
                    key={facility.id}
                    className={`facility-card ${
                      selectedFacility?.id === facility.id ? "active" : ""
                    }`}
                    onClick={() => handleFacilityClick(facility)}
                  >
                    <div className="facility-name">{facility.name}</div>
                    <div className="facility-address">{facility.address}</div>
                    <div className="facility-details">
                      <span className={`facility-type ${facility.type}`}>
                        {facility.type === "recycling" ? (
                          <Recycle size={14} />
                        ) : facility.type === "landfill" ? (
                          <Trash2 size={14} />
                        ) : facility.type === "compost" ? (
                          <Leaf size={14} />
                        ) : (
                          <Truck size={14} />
                        )}
                        {facility.type.charAt(0).toUpperCase() +
                          facility.type.slice(1)}
                      </span>
                      <span className="facility-distance">
                        {facility.distance}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  No facilities found matching your search.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
