import React from "react";
import style from "./Academy.module.css";
import { softwareOne } from "../../Svgs/software1";
import { softwareTwo } from "../../Svgs/software2";
import { softwareThree } from "../../Svgs/software3";

export default function Academy({ cms_data }) {
  return (
    <div
      id="software"
      className={` ${style.softwareSec} w-100 h-100 bg-white pt-5 pb-5`}
    >
      <div className="container">
        <div className="row">
          <div
            className={`${style.mainImg}  m-auto d-flex align-items-center col-lg-6`}
          >
            {
              <div className={` w-100   pe-3`}>
                <img className="w-100" src="../../academy.webp" alt="" />
              </div>
            }
          </div>
          <div id="kimitAcademy" className={`${style.imgDesc} col-lg-6`}>
            <div className={`${style.itemImg} w-100 `}>
              <h4 className={`${style.mainTitle}`}>{cms_data?.Name}</h4>
              <div className="d-flex">
                <div className={`${style.line1} me-2`}></div>
                <div className={`${style.line2} me-2`}></div>
                <div className={`${style.line3}`}></div>
              </div>
              <h2 className={`${style.secondTitle}`}>{cms_data?.Title}</h2>
              <p className={`${style.secondTitleDesc} text-muted`}>
                {cms_data?.Paragraph}
              </p>
              {cms_data?.AcademyFeatures?.length > 0 && (
                <div className="mt-5">
                  {cms_data?.AcademyFeatures?.map((item, index) => (
                    <AcademyListItem key={index} item={item} />
                  ))}
                </div>
              )}

              <a href={cms_data?.Link} className={`${style.goWebsite} btn mb-5`}>
                Go Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AcademyListItem({ item }) {
  const NEXT_PUBLIC_STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const iconPath = item?.Icon?.data?.attributes?.url;
  const iconUrl = `${NEXT_PUBLIC_STRAPI_API_URL}${iconPath}`;

  return (
    <div className="desc d-flex mb-4">
      <div className="pe-3">
        {iconPath && (
          <div className="pe-4">
            <img className={style.icon} src={iconUrl} alt="academy list" />
          </div>
        )}
      </div>
      <div className="imgDesc">
        <h4 className={`${style.thiTitle}`}>{item?.Title}</h4>
        <h6 className={`${style.thiTitleDesc}`}>{item?.Paragraph}</h6>
      </div>
    </div>
  );
}
