import React from 'react'
import style from './Signup.module.css'
import { Checkbox } from 'antd';
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Signup() {
  const router = useRouter()
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  function navigate(to) {
    router.push(`/${to}`)
  }
  
  return (
    <div className={`${style.body} `}>
      <div className="row ">
        <div className="col-lg-6  ">
          <div className={`${style.bodyLogin} m-auto `}>
            <img onClick={() => navigate("")} className={`${style.logo} pt-5 `} src="../../logoBlack.png" alt="" />
            <h2 className={`pt-5 ${style.title}`}>Login</h2>
            <h2 className={` ${style.haveAccount}`}>Dont have an account? <span onClick={() => navigate("Academy")} className={` ${style.haveAccountLogin}`}>Create account</span> </h2>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className={`${style.label} form-label mt-2`}>Email </label>
              <input type="email" className={`${style.inputStyle} form-control w-75`} id="exampleFormControlInput1" placeholder="Enter your email " />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className={`${style.label} form-label mt-2`}>Password</label>
              <input type="password" className={`${style.inputStyle} form-control w-75`} id="password" placeholder="Enter your Password" />
            </div>
            <div className={`d-flex align-items-center justify-content-between w-75   ${style.inputStyle}`}>
              <Checkbox className={`${style.checkbox}`} onChange={onChange}>Remember me</Checkbox>
              <h6 className={`${style.checkbox}  ${style.forget} mt-2 `}> Forget Password?</h6>
            </div>
            <button className={`p-2 mt-3 text-white btn btn-warning w-75 ${style.button} ${style.inputStyle}`}> Login</button>
            <h6 className={`${style.or} ${style.inputStyle} mt-3 text-center`}>Or</h6>
            <div className={` ${style.google} ${style.inputStyle} mt-3 w-75 d-flex justify-content-center align-items-center`}>
              <img src="../../googlesm.png" alt="" />
              <span className={`${style.googletext} ${style.button}`}>Continue with Google</span>
            </div>
          </div>
        </div>
        <div className={` col-lg-6 d-flex justify-content-end `}>
          <div className={`${style.mainImg}   `}>
            <img src="../../login.png" alt="login" className='w-100  ' />
          </div>
        </div>
      </div>
    </div>
  )
}
