import "../blocks/Header.css";
import pfp from "../assets/pfp.svg";
import wtwr from "../assets/wtwr.svg";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <img src={wtwr} alt="wtwr logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__user-container">
        <ToggleSwitch isOn={checked} onhandleToggle={handleChange} />
        <button
          type="button"
          onClick={handleAddClick}
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>
        <Link className="header__link" to="/profile">
          <p className="header__username">Terrence Tegegne</p>
          <img src={pfp} alt="profile image" className="header__avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
