
import React, { useState } from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Papa from "papaparse";
import "./Map.css"
const Map = () => {
    
    return (
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
    )
}

export default Map;