import React, { useContext } from "react";
import "../blocks/ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  //Boolean used in toggle__switch-checkbox
  const isOn = currentTemperatureUnit === "C";

  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggleSwitchChange}
        className="toggle__switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="toggle__switch-label" htmlFor={`react-switch-new`}>
        <span className={`toggle__switch-button`} />
        <span className={`toggle__switch-text ${isOn ? "" : "active"}`}>F</span>
        <span className={`toggle__switch-text ${isOn ? "active" : ""}`}>C</span>
      </label>
    </>
  );
}

export default ToggleSwitch;
