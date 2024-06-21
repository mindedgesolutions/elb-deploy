import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { unsetErrorModal } from "../../../feature/commonSlice";
import { nanoid } from "nanoid";

const ErrorModal = () => {
  const dispatch = useDispatch();
  const { errorMsg, errorModal } = useSelector((store) => store.common);

  const handleClose = () => {
    dispatch(unsetErrorModal());
  };

  const msgArr = errorMsg.split(",");

  return (
    <Modal show={errorModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="fs-6 text-danger">Something went wrong!</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {msgArr.map((i) => {
            return (
              <li key={nanoid()}>
                <span className="text-muted">{i}</span>
              </li>
            );
          })}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={handleClose}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
