import React from 'react';
import './Body.css'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Delete the default icon URL for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Define all municipalities with their coordinates
const municipalities = [
  { name: "Ainaro", position: [-8.6863, 125.6018] },
  { name: "Baucau", position: [-8.4583, 126.4853] },
  { name: "Bobonaro", position: [-8.9113, 125.4930] },
  { name: "Dili", position: [-8.5599, 125.5654] },
  { name: "Ermera", position: [-8.7270, 125.8258] },
  { name: "Lautem", position: [-8.4744, 126.2758] },
  { name: "Liquica", position: [-8.5807, 125.5146] },
  { name: "Manatuto", position: [-8.6784, 126.0033] },
  { name: "Manufahi", position: [-8.7784, 125.8305] },
  { name: "Oecusse", position: [-8.2913, 123.7772] },
  { name: "Viqueque", position: [-8.5639, 126.3787] },
  { name: "Atauro", position: [-8.3531, 125.4431] }, // Include Atauro as a municipality
];

const Body = () => {
  const position = [-8.8747, 125.7275];

  return (
    <>
      <div className="video-container">
        <video 
          src='./Banner/opening-video.mp4' 
          autoPlay 
          loop 
          muted 
          style={{ width: '100%', height: 'auto' }} 
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content-container">
        <img src='./map1.png' alt="Map of Timor Leste" className="map-image" />
        <div className="text-content">
          <h2>About Timor Leste</h2>
          <p>
            Timor Leste, officially known as the Democratic Republic of Timor-Leste, 
            is a Southeast Asian nation located in the eastern half of the island of Timor. 
            It is known for its stunning beaches, rich culture, and resilient history. 
            The country gained independence from Indonesia in 2002 and is one of the newest 
            nations in the world. Its capital is Dili, which is a vibrant city with a mix 
            of Portuguese and local influences.
          </p>
        </div>
      </div>

      <div className="map-section">
        <h2>Map of Timor Leste</h2>
        <div className="map-container">
          <MapContainer center={position} zoom={8} className="leaflet-map">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Adding markers for each municipality */}
            {municipalities.map((municipality, index) => (
              <Marker 
                key={index} 
                position={municipality.position} 
                icon={new L.Icon({
                  iconUrl: require('leaflet/dist/images/marker-icon.png'), // You can replace with a custom red marker icon URL if desired
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
                })}
              >
                <Popup>
                  <div className="popup-content">
                    <h3>{municipality.name}</h3>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Body;