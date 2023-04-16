import React from "react";
import style from "./Footer.module.css";
import { location } from "../../Svgs/location";
import { message } from "../../Svgs/message";
import { phone } from "../../Svgs/phone";
import { facebook } from "../../Svgs/facebook";
import { twitter } from "../../Svgs/twitter";
import { insta } from "../../Svgs/instgram";
import { pine } from "../../Svgs/pine";
import { useRouter } from "next/router";

export default function Footer({ cms_data }) {
  const router = useRouter();
  function navigate(to) {
    router.push(`./${to}`);
  }

  const { footer, contactUs } = cms_data;

  return (
    <div className={` ${style.body}  `}>
      <div className=" row gy-4 ">
        <div className="col-md-6  ">
          <img src="../logo.png" alt="logo" />
          <h2 className={`${style.desc}`}>{footer?.description}</h2>
          <div className="d-flex mt-4">
            {/* {location} */}
            <img className={`${style.icon}`} src="../../location.png" alt="" />
            <h6 className={`${style.data} ps-2 `}>
              {contactUs?.companyInfo?.address}
            </h6>
          </div>
          <div className="d-flex mt-2">
            {message}
            <h6 className={`${style.data} ps-2`}>
              {contactUs?.companyInfo?.email}
            </h6>
          </div>
          <div className="d-flex mt-2">
            {phone}
            <h6 className={`${style.data} ps-2`}>
              {contactUs?.companyInfo?.phone}
            </h6>
          </div>
        </div>
        <div className={`${style.secondMainSec} col-md-6 pt-5`}>
          <div className="row text-white">
            {footer?.linksSection?.map((section, index) => (
                <LinkSection section={section} key={index}/>
            ))}
          </div>
        </div>
        <hr className="bg-white fw-bold text-white" />
        <div className="mt-3 row justify-content-between ">
          <div className="col-md-6">
            <h6 className={`${style.copyright}`}>{footer?.copyrights}</h6>
          </div>
          <div className={`col-md-6 d-flex ${style.icons} `}>
            {contactUs?.socialLinks?.facebook && (
              <span className="pe-2 ">
                <a href={contactUs.socialLinks.facebook}>{facebook}</a>
              </span>
            )}
            {contactUs?.socialLinks?.twitter && (
              <span className="pe-2 ">
                <a href={contactUs.socialLinks.twitter}>{twitter}</a>
              </span>
            )}
            {contactUs?.socialLinks?.instagram && (
              <span className="pe-2 ">
                <a href={contactUs.socialLinks.instagram}>{insta}</a>
              </span>
            )}
            {contactUs?.socialLinks?.linkedin && (
              <span className="pe-2 ">
                <a href={contactUs.socialLinks.linkedin}>{pine}</a>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkSection({section}) {
  return (
    <div className="col-4">
      <h6 className={`${style.sec2} `}>{section?.name}</h6>
      <hr className="w-25 bg-white mt-1" />
      {section?.link?.map((link, index) => (
          <a key={index} href={link?.link} className={`${style.sec2} mt-3`}>{link?.label}</a>
      ))}
    </div>
  );
}
