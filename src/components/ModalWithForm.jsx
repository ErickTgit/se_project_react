import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText = "save",
  title,
  name,
  onClose,
  isOpen,
  onSubmit,
}) {
  return (
    <div className={`modal  ${isOpen && "modal_opened"}`} onClick={onClose}>
      <div
        className="modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose} />
        <form className="modal__form" onSubmit={onSubmit} name={name}>
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
