import React from 'react';
import './Body.css'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Body = () => {
  const position = [-8.8747, 125.7275];

  return (
    <>
      <video 
        src='./Banner/opening-video.mp4' 
        autoPlay 
        loop 
        muted 
        style={{ width: '100%', height: 'auto' }} 
      >
        Your browser does not support the video tag.
      </video>

      <div className="content-container">
        <img src='./map1.png' alt="Map of Timor Leste" className="map-image" />
        <div className="text-content">
          <h2>About Timor Leste</h2>
          <p>
            Timor Leste, officially known as the Democratic Republic of Timor-Leste, is a Southeast Asian nation located in the eastern half of the island of Timor. It is known for its stunning beaches, rich culture, and resilient history. The country gained independence from Indonesia in 2002 and is one of the newest nations in the world. Its capital is Dili, which is a vibrant city with a mix of Portuguese and local influences.
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
            <Marker position={position}>
              <Popup>
                <div className="popup-content">
                  <h3>Timor Leste</h3>
                  <p>A beautiful country in Southeast Asia.</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Body;