import React, { useState } from "react";
import Modal from "react-modal";
import { MdOutlineDocumentScanner, MdOutlinePostAdd } from "react-icons/md";
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
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "#0080ff35",
  },
};
export default function FormModal({ fileType, documentUrl, category }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div
      className={`flex-center h-full text-center  ${
        category === "format" && "hidden"
      }`}
    >
      <button
        onClick={openModal}
        className="p-2 rounded-md w-full h-full flex justify-center items-center gap-1"
      >
        <p className="">
          <MdOutlineDocumentScanner />
        </p>
        <p>Preview</p>
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
          className="absolute right-0 top-0 rounded-full text-xl p-1 flex text-green-600"
          onClick={closeModal}
        >
          {/* <IoIosClose /> */}

          <AiFillCloseCircle />
        </button>
        <DocumentViewer documentUrl={documentUrl} fileType={fileType} />
      </Modal>
    </div>
  );
}

export const DocumentViewer = ({ fileType, documentUrl }) => {
  console.log(fileType);
  return (
    <div className="w-[50vw] flex">
      {fileType === "pdf" ? (
        <iframe
          title="PDF Viewer"
          src={documentUrl}
          width="100%"
          height="650px"
        ></iframe>
      ) : (
        <div className="w-full flex justify-center items-center h-20 text-2xl text-orange-700  font-bold">
          Only PDF Can preview!
        </div>
      )}
    </div>
  );
};
