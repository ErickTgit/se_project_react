import "../blocks/ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
  return (
    <div
      className={`modal  ${activeModal === "add-garment" && "modal__opened"}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            <a className="modal__submit-text">{buttonText}</a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;