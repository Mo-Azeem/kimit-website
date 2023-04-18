import React from "react";
import style from "./Tearms.module.css";
import ReactMarkdown from "react-markdown";

export default function Terms({ cms_data }) {
  const date = cms_data?.updatedAt ? new Date(cms_data?.updatedAt) : null;
  const formatedDate = date ? Intl.DateTimeFormat("en-US").format(date) : null

  return (
    <div className={`${style.body} vh-100  w-100`}>
      <div
        className={`${style.containerTerm} d-flex flex-column align-items-center justify-content-center`}
      >
        <h2 className={`${style.title}`}>Terms and condition</h2>
        {cms_data?.updatedAt && (
          <h5 className={`${style.date}`}>Updated: {formatedDate}</h5>
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
