import { Modal } from "react-bootstrap";

export default function DeleteModal({ title, message, show, setShow, onYes }) {
  const handleClose = () => {
    setShow(false)
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {"Confirmation"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message}
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-center gap-3 ">
            <button
              className="ud-btn bg-danger text-white mb25"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => { onYes() }}
            >
              Delete
              <i className="fal fa-arrow-right-long" />
            </button>
            <button
              className="ud-btn btn-dark mb25"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => { handleClose() }}
            >
              Cancel
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </Modal.Footer>
      </Modal>

    </>
  );
}
