import React, { useEffect } from "react";
import style from "./Home.module.css";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();

  function onScroll() {
    let element = document.querySelector(".navbar");
    if (element) {
      element.style.backgroundImage = "url('../../background2.webp')";
    }
  }
  useEffect(() => {
    let element = document.querySelector(".navbar");
    element.style.backgroundImage = "url('../../background2.webp')";
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  function navigate(to) {
    router.push(`./${to}`);
  }
  return (
    <div className={`${style.contpos}  h-100 w-100 d-flex align-items-center`} style={{
        backgroundImage: `url('../../background2.webp')`,
    }}>
      <div className={` ${style.home} container pb-5 mt-5 `}>
        <div className="row gy-3 mt-2  w-100  pb-5">
          <div className="col-lg-6 d-flex align-items-center ">
            <div className="des w-100">
              {props.page ? (
                <div className="">
                  <span
                    className={`${style.titleSoftware} ${style.firstTitle}`}
                  >
                    The <span className={`${style.spanSoft}`}>Best</span> Place
                    To{" "}
                  </span>
                  <br />
                  <span
                    className={`${style.titleSoftware} ${style.secondTitle} `}
                  >
                    {" "}
                    Start Your Business
                  </span>
                </div>
              ) : (
                <div>
                  <span className={`${style.title} ${style.firstTitle}`}>
                    We Are Creative{" "}
                  </span>
                  <br />
                  <span className={`${style.title} ${style.secondTitle} `}>
                    {" "}
                    Digital Agency
                  </span>
                </div>
              )}
              {props.page ? (
                <h4 className={`${style.titleDescSoftware} ${style.titleDesc}`}>
                  {" "}
                  There are many variations of passages of Lorem Ipsum <br />
                  but the majority have suffered alteration
                </h4>
              ) : (
                <h4 className={`${style.titleDesc}`}>
                  {" "}
                  Kimit is a professional digital marketing <br />
                  agency having a experience team
                </h4>
              )}
              <button
                onClick={() => navigate("Academy")}
                className={`${style.btn} signupBtn btn btn-danger  ms-0 `}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="col-lg-6  ">
            <div className="img   mt-5 w-100 h-100">
              <img
                className={`${style.hero} w-100  `}
                src={props.page ? "../../softwareBg2.png" : "../../home2.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
