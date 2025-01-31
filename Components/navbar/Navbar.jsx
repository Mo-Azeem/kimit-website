import React, { useState } from "react";
import style from "./Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Nav(props) {
  const router = useRouter();
  const [toggle, SetToggle] = useState(0);
  const { academyPageLink, service, service2, page } = props;
  const [clicked, setClick] = useState(page);
  // console.log({ page });
  function changeNav() {
    let element = document.querySelector(".navbar");

    if (toggle % 2 == 0) {
      element.style.cssText =
        "background-image: url('../../background.webp') !important;";
      SetToggle(1);
    } else {
      element.style.cssText = "background-image:none !important;";
      SetToggle(0);
    }
  }
  function clickHandler(check) {
    setClick(check);
  }
  function navigate(to) {
    router.push(`./${to}`);
  }
  return (
    <>
      {service == "Tearm" ? (
        <div
          id="home"
          className={`${style.container} position-relative home  w-100 h-100 `}
        >
          <nav
            style={{ backgroundImage: `url("../../background.webp")` }}
            className="navbar navbar-expand-lg navbar-light position-fixed top-0    w-100"
          >
            <div className="container-fluid text-center text-white">
              <Link href="/" onClick={() => clickHandler("home")}>
                <img src="../logo.png" alt="logo" />
              </Link>
              <button
                onClick={() => changeNav}
                className="navbar-toggler p-0 w-auto "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto d-flex  justify-content-center align-items-center  ">
                  <li className="nav-item position-relative">
                    <Link
                      onClick={() => clickHandler("home")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </Link>
                    {/* {clicked == "home" ?
                      <div className={`${style.line} position-absolute  start-0`}></div>
                      : ""
                    } */}
                  </li>
                  <li className="nav-item position-relative pt-1">
                    <Link
                      onClick={() => clickHandler("service")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/"
                    >
                      Services
                    </Link>
                    {clicked == "service" ? (
                      <div
                        className={`${style.line} position-absolute  start-0`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav-item position-relative pt-1">
                    <Link
                      onClick={() => clickHandler("about")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/"
                    >
                      About Us
                    </Link>
                    {clicked == "about" ? (
                      <div
                        className={`${style.line} position-absolute  start-0`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav-item position-relative pt-1">
                    <Link
                      onClick={() => clickHandler("testmonial")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/"
                    >
                      Testmonial{" "}
                    </Link>
                    {clicked == "testmonial" ? (
                      <div
                        className={`${style.line} position-absolute  start-0`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav-item position-relative pt-1">
                    <Link
                      onClick={() => clickHandler("Software")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/Software"
                    >
                      Software Serivce{" "}
                    </Link>
                    {clicked == "Software" ? (
                      <div
                        className={`${style.line} ${style.line2} position-absolute  start-0`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </li>

                  <li className="nav-item position-relative pt-1">
                    <Link
                      onClick={() => clickHandler("contact")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/"
                    >
                      {" "}
                      Contact Us
                    </Link>
                    {clicked == "contact" ? (
                      <div
                        className={`${style.line} position-absolute  start-0`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>

                <div className=" d-flex w-100 btnsToggle pt-3 pb-3 justify-content-center ">
                  {/* <button onClick={() => navigate("Login")} className={`${style.loginBtn} btn`}>Log in</button> */}
                  <button
                    onClick={() => navigate("Academy")}
                    className="signupBtn btn "
                  >
                    Academy
                  </button>
                </div>
              </div>
              <div className="btnsNav d-flex ">
                {/* <button onClick={() => navigate("Login")} className={`${style.loginBtn} btn`}>Log in</button> */}
                <button
                  onClick={() => navigate("Academy")}
                  className="signupBtn btn "
                >
                  Academy
                </button>
              </div>
            </div>
          </nav>

          {page == "Software" ? null : ""}
        </div>
      ) : (
        <div
          style={{
            backgroundImage: service
              ? `url("../../homeSoftware.png")`
              : `url("../../background.webp")`,
          }}
          id="home"
          className={`${style.container} position-relative home  w-100  `}
        >
          <nav className="navbar navbar-expand-lg navbar-light position-fixed top-0  bg-transparent  w-100">
            <div className="container-fluid text-center text-white">
              <a href="#home">
                {" "}
                <img
                  src="../logo.png"
                  alt="logo"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <button
                onClick={changeNav}
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto d-flex  justify-content-center align-items-center  ">
                  <li className="nav-item position-relative pt-1">
                    <Link
                      onClick={() => clickHandler("home")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/#home"
                    >
                      Home
                    </Link>
                    {clicked == "home" ? (
                      <div
                        className={`${style.line} position-absolute  start-0`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav-item position-relative pt-1">
                    <Link
                      onClick={() => clickHandler("service")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/#service"
                    >
                      Services
                    </Link>
                    {clicked == "service" ? (
                      <div
                        className={`${style.line} position-absolute  start-0`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav-item position-relative pt-1">
                    <Link
                      onClick={() => clickHandler("about")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/#about"
                    >
                      About Us
                    </Link>
                    {clicked == "about" ? (
                      <div
                        className={`${style.line} position-absolute  start-0`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav-item position-relative pt-1">
                    <Link
                      onClick={() => clickHandler("testmonial")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/#testmonial"
                    >
                      Testmonial
                    </Link>
                    {clicked == "testmonial" ? (
                      <div
                        className={`${style.line} position-absolute  start-0`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav-item position-relative pt-1">
                    <Link
                      onClick={() => clickHandler("Software")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/software"
                    >
                      Software Serivce{" "}
                    </Link>
                    {clicked == "Software" ? (
                      <div
                        className={`${style.line} ${style.line2} position-absolute   start-0`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </li>

                  <li className="nav-item position-relative pt-1">
                    <Link
                      onClick={() => clickHandler("contact")}
                      className="nav-link active text-white "
                      aria-current="page"
                      href="/#contact"
                    >
                      {" "}
                      Contact Us
                    </Link>
                    {clicked == "contact" ? (
                      <div
                        className={`${style.line} position-absolute  start-0`}
                      ></div>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
                <div className=" d-flex w-100 btnsToggle pt-3 pb-3 justify-content-center ">
                  {/* <button onClick={() => navigate("Login")} className={`${style.loginBtn} btn`}>Log in</button> */}
                  {academyPageLink && (
                    <Link href={academyPageLink} className="signupBtn btn ">
                      Academy
                    </Link>
                  )}
                </div>
              </div>
              <div className="btnsNav d-flex ">
                {/* <button onClick={() => navigate("Login")} className={`${style.loginBtn} btn`}>Log in</button> */}
                {academyPageLink && (
                  <Link href={academyPageLink} className="signupBtn btn ">
                    Academy
                  </Link>
                )}
              </div>
            </div>
          </nav>
          {/* <div className={`${style.contpos}  h-100 w-100 d-flex align-items-center`}>
            <Home page={service} />
          </div> */}
        </div>
      )}
    </>
  );
}
