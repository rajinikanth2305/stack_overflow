import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";

const Popup = ({ mainText, header, onConfirm, onCancel, documentId }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalStyles = {
    overlay: { zIndex: 1000 },
  };

  const modalContent = (
    <Modal
      size="md"
      show={true}
      onHide={onCancel}
      animation={false}
      centered
      style={modalStyles}
      className="c-modal"
    >
      <Modal.Header closeButton className="c-modal-header">
        <Modal.Title className="p-text-1-fgt">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form onSubmit={() => onConfirm(documentId)} onReset={() => reset}>
            <p>{mainText}</p>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn table-btn-blue-sm hvr-grow">
                <span className="px-2">Confirm</span>
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );

  if (isBrowser)
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );

  return null;
};

export default Popup;
