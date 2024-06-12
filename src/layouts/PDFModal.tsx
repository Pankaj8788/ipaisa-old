import React from "react";
import Modal from "react-modal";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
if (typeof window !== "undefined") {
  Modal.setAppElement("#__next");
}
interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfFile: string;
}
const PDFModal: React.FC<PDFModalProps> = ({ isOpen, onClose, pdfFile }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Terms & Conditions"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "80%",
          padding: "20px",
          overflow: "hidden",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <button
        onClick={onClose}
        style={{ float: "right", marginBottom: "10px" }}
      >
        Close
      </button>
      <div style={{ overflowY: "auto", height: "calc(100% - 40px)" }}>
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl={pdfFile} />
        </Worker>
      </div>
    </Modal>
  );
};
export default PDFModal;
