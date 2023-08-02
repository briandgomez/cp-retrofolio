import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import BGResume from "../../Brian-Gomez-Resume.pdf";
import * as AiIcons from "react-icons/ai";
import "./Resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Resume() {
  const onButtonClick = () => {
    fetch(BGResume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Brian Gomez Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div>
      <button
        id="download-button"
        type="submit"
        className="btn"
        onClick={onButtonClick}
      >
        <AiIcons.AiOutlineDownload
          id="download-icon"
          style={{ margin: "auto" }}
        />
        <text>Download</text>
      </button>
      <Document file={BGResume}>
        <Page scale={1} pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;
