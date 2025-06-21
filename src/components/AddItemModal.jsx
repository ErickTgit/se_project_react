import { useState } from "react";
import "../blocks/AddItemModal.css";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ onClose, isOpen, onAddItemModalSubmit }) => {
  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl: url, weather });
    setName("");
    setUrl("");
    setWeather("");
  };

  //handle name change
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  //handle image url change
  const [url, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  //handle weather change
  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      buttonText={"Add Garment"}
      title={"New Garment"}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="new-card"
    >
      <h2 className="modal__input-title">Name</h2>
      <label htmlFor="name" className="modal__label">
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          name="name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleNameChange}
          value={name}
        />
        <span
          className="modal__span modal__error"
          id="input-type-url-error"
        ></span>
      </label>

      <h2 className="modal__input-title">Image</h2>
      <label htmlFor="imageUrl" className="modal__label">
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          required
          minLength="1"
          onChange={handleUrlChange}
          value={url}
          name="link"
        />
        <span
          className="modal__span modal__error"
          id="input-type-url-error"
        ></span>
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            name="weather"
            checked={weather === "hot"}
            onChange={handleWeatherChange}
            id="hot"
            type="radio"
            className="modal__radio-input"
            value="hot"
          />
          <span> Hot </span>
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            onChange={handleWeatherChange}
            checked={weather === "warm"}
            id="warm"
            name="weather"
            type="radio"
            className="modal__radio-input"
            value="warm"
          />
          <span> Warm</span>
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            checked={weather === "cold"}
            onChange={handleWeatherChange}
            name="weather"
            type="radio"
            className="modal__radio-input"
            value="cold"
          />
          <span> Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
