import React from "react";
import "../Resume.css"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import MyResume from "../resume/myresume.pdf";



function Resume() {
    return (
    <div className="resume">
        <Document file={MyResume}>
         <Page pageNumber={1} />
        </Document>
    </div>
    );
  }
  
  export default Resume;