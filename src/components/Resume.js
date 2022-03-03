import React from "react";
import "../Resume.css"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import MyResume from "../resume/My Updated Resume - Google Docs.pdf";

// import {PDFReader, MobilePDFReader} from 'react-read-pdf';

function Resume() {
    return (
    <div style={{overflow: 'scroll', height:600}} className="resume">
        <Document file={MyResume}>
         {[1,2].map(page => (
            <Page pageNumber={page} />
        ))}
        </Document>
    </div>
   
    );
  }
  
  export default Resume;