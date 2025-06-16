import "../blocks/Header.css";
import pfp from "../assets/pfp.svg";
import wtwr from "../assets/wtwr.svg";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <header className="header">
      <img src={wtwr} alt="wtwr logo" className="header__logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__user-container">
        <ToggleSwitch isOn={checked} handleToggle={handleChange} />
        <button
          type="button"
          onClick={handleAddClick}
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>
        <p className="header__username">Terrence Tegegne</p>
        <img src={pfp} alt="profile image" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
