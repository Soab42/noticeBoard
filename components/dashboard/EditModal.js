import React, { useState } from "react";
import Modal from "react-modal";
import FileForm from "./FileForm";
import { MdAdd, MdClose, MdEditDocument } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import EditForm from "./EditForm";
import { IoIosClose } from "react-icons/io";
import { BsDoorClosed } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

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
export default function EditModal(data) {
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
        className="px-7  h-8 rounded text-slate-600 text-sm font-semibold bg-[#1aad7ce1] hover:bg-[#3ef4fae1] hover:text-[#02200de1] shadow-md flex justify-center items-center gap-2 duration-300"
      >
        <MdEditDocument /> Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button
          className="absolute right-2 top-2 rounded-full text-xl p-1 flex "
          onClick={closeModal}
        >
          {/* <IoIosClose /> */}

          <AiFillCloseCircle />
        </button>
        <EditForm closeModal={closeModal} data={data} />
      </Modal>
    </div>
  );
}
