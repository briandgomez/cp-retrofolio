import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import BGResume from "../../Brian-Gomez-Resume.pdf";
import "./Resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Resume() {
  return (
    <div className="resume-container">
      <Document file={BGResume}>
        <Page scale={1} pageNumber={1} />
      </Document>
    </div>
  );
}
export default Resume;
