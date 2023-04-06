import React, { useEffect } from "react";
import style from "./Home.module.css";
import { useRouter } from "next/router";

export default function Home({cms_data}) {
  const router = useRouter();

  function onScroll() {
    let element = document.querySelector(".navbar");
    if (element) {
      element.style.backgroundImage = "url('../../background2.jpg')";
    }
  }
  useEffect(() => {
    let element = document.querySelector(".navbar");
    element.style.backgroundImage = "url('../../background2.jpg')";
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  function navigate(to) {
    router.push(`./${to}`);
  }
  return (
    <div className={`${style.contpos}  h-100 w-100 d-flex align-items-center`} style={{
        backgroundImage: `url('../../background2.jpg')`,
    }}>
      <div className={` ${style.home} container pb-5 mt-5 `}>
        <div className="row gy-3 mt-2  w-100  pb-5">
          <div className="col-lg-6 d-flex align-items-center ">
            <div className="des w-100">
                <div>
                  <span className={`${style.title} ${style.firstTitle}`}>
                    {cms_data.White_Title}
                  </span>
                  <br />
                  <span className={`${style.title} ${style.secondTitle} `}>
                    {cms_data.Yellow_Title}
                  </span>
                </div>

                <h4 className={`${style.titleDesc}`}>
                  {cms_data.Paragraph}
                </h4>
           
              <a
                // onClick={() => navigate("Academy")}
                href={cms_data.Link}
                className={`${style.primary_btn} signupBtn btn ms-0 `}
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="col-lg-6  ">
            <div className="img  mt-5 w-100 h-100">
              <img
                className={`${style.hero} w-100  `}
                src="../../home2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
