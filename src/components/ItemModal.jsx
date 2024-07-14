import "../blocks/ItemModal.css";

export default function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal  ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_img">
        <button
          className="modal__close modal__close-caption"
          type="button"
          onClick={onClose}
        ></button>
        <img src={card.link} alt="" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
