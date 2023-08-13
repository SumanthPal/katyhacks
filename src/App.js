import React, { useState } from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
  const [toggleSectionVisible, setToggleSectionVisible] = useState(false);
  const [recyclingBins, setRecyclingBins] = useState(true);
  const [trashBins, setTrashBins] = useState(true);
  const [compostBins, setCompostBins] = useState(true);

  const toggleSection = () => {
    setToggleSectionVisible(!toggleSectionVisible);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trash Hub</h1>
      </header>
      <main className="App-main">
        <div className={`Toggle-section ${toggleSectionVisible ? 'expanded' : ''}`}>
          <ToggleSwitch
            label="Recycling Bins"
            onClick={() => setRecyclingBins(!recyclingBins)}
            isChecked={recyclingBins}
          />
          <ToggleSwitch
            label="Trash Bins"
            onClick={() => setTrashBins(!trashBins)}
            isChecked={trashBins}
          />
          <ToggleSwitch
            label="Compost Bins"
            onClick={() => setCompostBins(!compostBins)}
            isChecked={compostBins}
          />
        </div>
        <div className="Map-container">
        <MapContainer
            center={[40.7128, -74.0060]} // NYC coordinates
            zoom={13}
            style={{ height: '100vh', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </main>
      <footer className="App-footer">
        <p>© 2023 Map Landing Page</p>
      </footer>
    </div>
  );
}

const ToggleSwitch = ({ label, onClick, isChecked }) => {
  return (
    <div className="Toggle-switch" onClick={onClick}>
      <span>{label}</span>
      <div className={`Switch-button ${isChecked ? 'checked' : ''}`}></div>
    </div>
  );
}

export default App;
