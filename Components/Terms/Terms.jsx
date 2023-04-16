import React from "react";
import style from "./Tearms.module.css";
import ReactMarkdown from "react-markdown";

export default function Terms({ cms_data }) {
  return (
    <div className={`${style.body} vh-100  w-100`}>
      <div
        className={`${style.containerTerm} d-flex flex-column align-items-center justify-content-center`}
      >
        <h2 className={`${style.title}`}>Terms and condition</h2>
        {cms_data?.updatedAt && (
          <h5 className={`${style.date}`}>Updated: {new Date(cms_data?.updatedAt).toLocaleDateString()}</h5>
        )}
      </div>
      <div className={`${style.data}`}>
        <ReactMarkdown>
          {cms_data?.content ?? "# Will be available soon."}
        </ReactMarkdown>
      </div>
    </div>
  );
}
