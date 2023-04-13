import React, { useEffect } from "react";
import style from "./SoftwareServiceHero.module.css";
import { useRouter } from "next/router";

export default function Home({ cms_data }) {
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

  const { firstWord, highlightedWord, rest } = splitTitle(cms_data?.Title);
  return (
    <div
      className={`${style.contpos}  h-100 w-100 d-flex align-items-center`}
      style={{
        background: `url('../../homeSoftware.png') no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className={` ${style.home} container pb-5 mt-5 `}>
        <div className="row gy-3 mt-2  w-100  pb-5">
          <div className="col-lg-6 d-flex align-items-center ">
            <div className="des w-100">
              <div className="">
                <span className={`${style.titleSoftware} ${style.firstTitle}`}>
                  {firstWord}{' '}
                  <span className={`${style.spanSoft}`}>{highlightedWord}</span>{' '}
                  {rest}
                </span>
              </div>
              <h4 className={`${style.titleDescSoftware} ${style.titleDesc}`}>
                {cms_data?.Paragraph}
              </h4>
              <a
                href={cms_data?.Link}
                className={`${style.primary_btn} signupBtn btn ms-0 `}
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="col-lg-6  ">
            <div className="img   mt-5 w-100 h-100">
              <img
                className={`${style.hero} w-100  `}
                src="../../softwareBg2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const splitTitle = (title) => {
  const words = title?.split(' ');
  const firstWord = words?.length > 0 ? words[0] : null;
  const highlightedWord = words?.length > 0 ? words[1] : null;
  const rest = words?.length > 0 ? words.slice(2).join(' ') : null;

  return {
    firstWord,
    highlightedWord,
    rest,
  };
};
