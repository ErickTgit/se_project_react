import "../blocks/ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, onClose, isOpen }) {
  return (
    <div className={`modal  ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose} />
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            <span className="modal__submit-text">{buttonText}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
