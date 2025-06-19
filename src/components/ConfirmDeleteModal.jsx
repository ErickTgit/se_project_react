import "../blocks/ItemModal.css";

export default function ConfirmDeleteModal({
  isOpen,
  onCancel,
  onConfirm,
  onClose,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`} onClick={onCancel}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__close modal__close-caption"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="modal__caption-confirm">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>
        <div className="modal__footer-confirm">
          <button className="modal__confirm-delete-button" onClick={onConfirm}>
            Yes, Delete
          </button>
          <button className="modal__cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
