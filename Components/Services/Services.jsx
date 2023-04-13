import React, { useEffect } from "react";
import style from "./Services.module.css";
import Link from "next/link";
import { serviceOne } from "../../Svgs/service1";
import { serviceTwo } from "../../Svgs/service2";

export default function Services(props) {
  function onScroll() {
    let element = document.querySelector(".navbar");
    let service = document.getElementById("service");
    if (service) {
      if (scrollY > service.scrollHeight && props.setBg == "dark") {
        element.style.backgroundImage = "url('../../background2.webp')";
      } else if (element) {
        element.style.backgroundImage = "none";
      }
    }
  }
  useEffect(() => {
    let service = document.getElementById("service");
    let element = document.querySelector(".navbar");
    element.style.backgroundImage = "none";
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);
  
  const { cms_data } = props;
  return (
    <div id="service" className={`${style.background} w-100 h-100`}>
      <h2 className={`${style.serviceTitle} text-center `}>{cms_data?.Title}</h2>
      <h4 className={`${style.servicedesc} text-center`}>
        {cms_data?.Paragraph}
      </h4>
      <div className="container mt-5">
        {cms_data?.Services?.length > 0 && (
          <div className="row gy-5">
            {cms_data?.Services?.map((service, index) => (
              <ServiceCard service={service} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const NEXT_PUBLIC_STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const image = service?.Image?.data?.attributes?.url
  const imageUrl = `${NEXT_PUBLIC_STRAPI_API_URL}${image}`

  return (
    <div className="col-lg-6 ">
      <div className={`${style.item} shadow bg-white`}>
        {image && (
          <img src={imageUrl} className={`${style.img}`} alt="" />
        )}
        <h4 className={`${style.itemTitle}`}>{service?.Title}</h4>
        <h5 className={`${style.itemDesc}`}>
          {service?.Paragraph}
        </h5>
        <a href={service?.Link} className={`${style.learnMore}`}>
          learn more <span> {`>>`} </span>
        </a>
      </div>
    </div>
  );
}
