import React from "react";

const ConfirmationModal = ({title, message, closeModal,successAction,modalData}) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-secondary">
            {title}
          </h3>
          <p className="py-4 text-secondary">
            {message}
          </p>
          <div className="modal-action">
            <label onClick={()=>successAction(modalData)} htmlFor="my-modal" className="btn">
              Confirm
            </label>
            <button onClick={closeModal} className="btn btn-secondary btn-outline"> Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
