import React from "react";
import { createPortal } from "react-dom";

const Modal = ({
  modalState,
  setOpenModalFxn,
}: {
  modalState: boolean;
  setOpenModalFxn: () => void;
}) => {
  return createPortal(
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} className="bg-white p-4">
        <h1 className="text-2xl font-bold">Form Submitted</h1>
        <p
          onClick={setOpenModalFxn}
          className=" text-white p-1 cursor-pointer text-center w-20 rounded-full bg-blue-500 px-3 text-xl"
        >
          OK
        </p>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
