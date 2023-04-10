import React from "react";
import style from "./NumOfClients.module.css";

export default function NumOfClients({ cms_data }) {
  return (
    <div className={`${style.background}`}>
      <div className={`${style.bodyy} w-100 h-100 pb-5  `}>
        <div className="container h-100 text-white">
          <div className={`${style.section}  row`}>
            <div className="col-md-5 d-flex align-items-center">
              <div className="desc d-flex align-items-center  h-100">
                <div>
                  <h2 className={`${style.descone}`}>{cms_data.Title}</h2>
                  <h6 className={`${style.descTwo} pt-4`}>
                    {cms_data.Paragraph}
                  </h6>
                </div>
              </div>
            </div>

            <div className={`${style.numsSec} col-md-7 `}>
              <div className="row g-0">
                {cms_data.Stats?.length > 0 && (
                  <div className={`col-md-6 ${style.leftnum} `}>
                    <div className="d-flex flex-column">
                      {cms_data.Stats[0] && (
                        <div className="img text-center position-relative">
                          <div className="image">
                            <img src="../../num1.png" alt="" />
                          </div>
                          <div className={` ${style.num} position-absolute `}>
                            <h2 className={`${style.number}`}>
                              {cms_data.Stats[0].Amount}
                            </h2>
                          </div>
                          <h6 className={`${style.numDesc}`}>
                            {cms_data.Stats[0].Name}
                          </h6>
                        </div>
                      )}

                      {cms_data.Stats[1] && (
                        <div className="img text-center position-relative mt-2">
                          <img src="../../num1.png" alt="" />
                          <div className={` ${style.num} position-absolute `}>
                            <h2 className={`${style.number}`}>
                              {cms_data.Stats[1].Amount}
                            </h2>
                          </div>
                          <h6 className={`${style.numDesc}`}>
                            {cms_data.Stats[1].Name}
                          </h6>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {cms_data.Stats?.length > 2 && (
                  <div className={`col-md-6 ${style.righttnum}`}>
                    <div className="d-flex flex-column ">
                      {cms_data.Stats[2] && (
                        <div
                          className={`${style.img2} text-center position-relative `}
                        >
                          <img
                            src="../../num2.png"
                            className={`${style.image2}`}
                            alt=""
                          />
                          <div className={` ${style.num2} position-absolute `}>
                            <h2 className={`${style.number} ${style.bigNum} `}>
                              {cms_data.Stats[2].Amount}
                            </h2>
                          </div>
                          <h6 className={`${style.numDesc}`}>
                            {cms_data.Stats[2].Name}
                          </h6>
                        </div>
                      )}
                      {cms_data.Stats[3] && (
                        <div className="img text-center position-relative mt-2 pb-5">
                          <img src="../../num1.png" alt="" />
                          <div className={` ${style.num} position-absolute `}>
                            <h2 className={`${style.number} `}>
                              {cms_data.Stats[3].Amount}
                            </h2>
                          </div>
                          <h6 className={`${style.numDesc} pb-5`}>
                            {cms_data.Stats[3].Name}
                          </h6>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
