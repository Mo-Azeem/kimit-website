import React from "react";
import { softwareOne } from "../../Svgs/software1";
import { softwareTwo } from "../../Svgs/software2";
import { softwareThree } from "../../Svgs/software3";
import style from "./Software.module.css";

export default function Software({ cms_data }) {
  console.log(cms_data);
  return (
    <div
      id="software"
      className={` ${style.softwareSec} w-100 h-100 bg-white pt-5 pb-5`}
    >
      <div id="kimitSoftware" className="container">
        <div className="row gx-5">
          <div className="col-lg-6">
            <div className={`${style.itemImg} w-100 `}>
              <h4 className={`${style.mainTitle}`}>{cms_data.Name}</h4>
              <div className="d-flex">
                <div className={`${style.line1} me-2`}></div>
                <div className={`${style.line2} me-2`}></div>
                <div className={`${style.line3}`}></div>
              </div>
              <h2 className={`${style.secondTitle}`}>{cms_data.Title}</h2>
              <p className={`${style.secondTitleDesc} text-muted`}>
                {cms_data.Paragraph}
              </p>
              {cms_data?.Services?.length > 0 && (
                <div className="mt-5">
                  {cms_data.Services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                  ))}
                </div>
              )}

              <button className={`${style.goWebsite} btn`}>Go Website</button>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center pb-5">
            {
              <div className={`${style.mainImg}  w-100 mt-5`}>
                <img className="w-100" src="../../software.png" alt="" />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const NEXT_PUBLIC_STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const iconPath = service?.Icon?.data?.attributes?.url;
  const iconUrl = `${NEXT_PUBLIC_STRAPI_API_URL}${iconPath}`;

  return (
    <div className="desc d-flex mb-4">
      {iconPath && (
        <div className="pe-4">
          <img className={style.icon} src={iconUrl} alt="service" />
        </div>
      )}
      <div className="imgDesc">
        <h4 className={`${style.thiTitle}`}>{service.Title}</h4>
        <h6 className={`${style.thiTitleDesc}`}>{service.Paragraph}</h6>
      </div>
    </div>
  );
}
