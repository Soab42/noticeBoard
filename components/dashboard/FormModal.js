import React, { useState } from "react";
import Modal from "react-modal";
import FileForm from "./FileForm";
import { MdAdd } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "rgba(100, 116, 100, 0.8)",
  },
};
export default function FormModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button
        onClick={openModal}
        className="p-2 rounded-md text-sm bg-orange-400 flex items-center gap-1"
      >
        <p className="text-xl">
          <MdOutlinePostAdd />
        </p>
        <p>Add New Data</p>
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <FileForm closeModal={closeModal} />
      </Modal>
    </div>
  );
}
