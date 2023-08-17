import React, { useState } from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Papa from "papaparse";
import ToggleSection from './components/ToggleSection';

const allowedExtensions = ["csv"];


function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trash Hub</h1>
      </header>
      <main className="App-main">
        <ToggleSection />
        <Map />
      </main>
      <footer className="App-footer">
        <p>© 2023 Map Landing Page</p>
      </footer>
    </div>
  );
}



export default App;
