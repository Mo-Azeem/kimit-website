import React from "react";
import style from "./ServiceSoftware.module.css";

export default function ServiceSoftware({ cms_data }) {
  return (
    <div className="text-center pt-5 mb-5">
      <h2 className={`${style.mainTitle}`}>{cms_data.Title}</h2>
      <div className={`${style.mainTitleDescCont}`}>
        <h6 className={`${style.mainTitleDesc} pb-5`}>{cms_data.Paragraph}</h6>
      </div>
      <div className="container ">
        {cms_data.Services?.length > 0 && (
          <div className="row gy-5 gx-0">
            {cms_data.Services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const NEXT_PUBLIC_STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const imagePath = service.Image?.data?.attributes?.url;
  const imageUrl = `${NEXT_PUBLIC_STRAPI_API_URL}${imagePath}`;

  return (
    <div className="col-md-6 col-lg-3">
      <div
        className={`${style.item} text-center shadow position-relative border-radius`}
      >
        {imagePath && (
          <img className="pt-2" src={imageUrl} alt="service image" />
        )}
        <h5 className={`${style.title} pt-2`}>{service.Title}</h5>
        <p className={`${style.desc} pt-2 pb-5`}>{service.Paragraph}</p>
        <div
          className={`${style.itemhov} position-absolute w-100 h-100 border-radius`}
        ></div>
      </div>
    </div>
  );
}
