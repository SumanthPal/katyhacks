import React, { useState } from 'react';
import "./Map.css";

 const [toggleSectionVisible, setToggleSectionVisible] = useState(false);
 const [recyclingBins, setRecyclingBins] = useState(true);
 const [trashBins, setTrashBins] = useState(true);
 const [compostBins, setCompostBins] = useState(true);

 const toggleSection = () => {
   setToggleSectionVisible(!toggleSectionVisible);
 };

 const ToggleSwitch = ({ label, onClick, isChecked }) => {
    return (
      <div className="Toggle-switch" onClick={onClick}>
        <span>{label}</span>
        <div className={`Switch-button ${isChecked ? 'checked' : ''}`}></div>
      </div>
    );
  }

const ToggleSection = () => {

    return (
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
    )
}

export default ToggleSection;