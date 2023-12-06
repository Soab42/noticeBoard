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
    backgroundColor: "rgba(100, 116, 100, 0.8)",
  },
};
export default function FormModal({ fileType, documentUrl }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="flex-center h-full text-center bg-red-600">
      <button
        onClick={openModal}
        className="p-2 rounded-md w-full h-full text-sm bg-green-400 flex justify-center items-center gap-1"
      >
        <p className="text-xl">
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
          className="absolute right-2 top-2 rounded-full text-xl p-1 flex "
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

const DocumentViewer = ({ fileType, documentUrl }) => {
  // console.log(documentUrl);
  return (
    <div className="w-[50vw] flex justify-end">
      {fileType === "pdf" && (
        <iframe
          title="PDF Viewer"
          src={documentUrl}
          width="100%"
          height="650px"
        ></iframe>
      )}
      {fileType === "excel" && (
        <iframe
          title="Excel Viewer"
          src={`https://view.officeapps.live.com/op/view.aspx?src=${documentUrl}`}
          width="100%"
          height="600px"
        ></iframe>
      )}
      {fileType === "doc" && (
        <iframe
          title="Word Viewer"
          src={`https://view.officeapps.live.com/op/view.aspx?src=${documentUrl}`}
          width="100%"
          height="600px"
        ></iframe>
      )}
    </div>
  );
};
