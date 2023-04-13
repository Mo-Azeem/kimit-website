import React from "react";
import style from "./About.module.css";

export default function About({ cms_data }) {
  return (
    <div id="about" className={` ${style.aboutSec} w-100 h-100 bg-white `}>
      <div className="container">
        <div className="row">
          <div
            className={`col-lg-6 ${style.img}  d-flex align-items-center   `}
          >
            <div
              className={`${style.itemImg} w-100  d-flex align-item-center justify-content-center`}
            >
              <img
                className={`${style.imgs} w-100`}
                src="../../aboutImg2.webp"
                alt=""
              />
            </div>
          </div>
          <div className={` ${style.imgDesc} col-lg-6  `}>
            <div className={`${style.itemDesc}  w-100`}>
              <h4 className={`${style.mainTitle} `}>{cms_data?.Name}</h4>

              <div className="d-flex">
                <div className={`${style.line1} me-2`}></div>
                <div className={`${style.line2} me-2`}></div>
                <div className={`${style.line3}`}></div>
              </div>
              <h2 className={`${style.title} `}>{cms_data?.Title}</h2>
              <h6 className={`${style.desc} `}>
                {cms_data?.Paragraph}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
