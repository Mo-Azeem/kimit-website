import React from 'react'
import style from './Privacy.module.css'
import ReactMarkdown from "react-markdown";

export default function Privacy({cms_data}) {
    const date = new Date(cms_data?.updatedAt);
    const formatedDate = Intl.DateTimeFormat("en-US").format(date)

  return (
    <div className={`${style.body} vh-100  w-100`}>
    <div className={`${style.containerTerm} d-flex flex-column align-items-center justify-content-center`}>
        <h2 className={`${style.title}`}>Privacy and policy</h2>
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
  )
}
