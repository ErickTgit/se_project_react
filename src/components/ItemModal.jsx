import "../blocks/ItemModal.css";

export default function ItemModal({
  activeModal,
  onClose,
  card,
  handleDelete,
}) {
  return (
    <div
      className={`modal  ${activeModal === "preview" && "modal_opened"}`}
      onClick={onClose}
    >
      <div
        className="modal__content modal__content_type_img"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="modal__close modal__close-caption"
          type="button"
          onClick={onClose}
        ></button>
        <img src={card.imageUrl} alt="" className="modal__image" />
        <div className="modal__footer">
          <div className="modal__description-container">
            <h2 className="modal__caption">{card.name}</h2>{" "}
            <button
              className="modal__delete-button"
              type="button"
              onClick={handleDelete}
            >
              Delete item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
