import React from 'react'
import style from './Login.module.css'
import { useRouter } from 'next/router'
import { Checkbox } from 'antd';

export default function Login() {
    const router = useRouter()
    function navigate(to) {
        router.push(`/${to}`)
    }
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div className={`${style.body} `}>
            <div className="row ">
                <div className="col-lg-6 ">
                    <div className={`${style.bodyLogin} m-auto`}>
                        <img onClick={() => navigate("")} className={`${style.logo} pt-5 `} src="../../logoBlack.png" alt="" />
                        <h2 className={`pt-5 ${style.title}`}>Get Started with us</h2>
                        <h2 className={` ${style.haveAccount}`}>Already have an account? <span onClick={() => navigate("Login")} className={` ${style.haveAccountLogin}`}>Log in</span> </h2>
                        <div className="mb-3">
                            <label htmlFor="fullName" className={`${style.label} form-label mt-3`}>Full Name</label>
                            <input type="name" className={`${style.inputStyle} form-control w-75`} id="fullName" placeholder="Enter your name " />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className={`${style.label} form-label mt-2`}>Email </label>
                            <input type="email" className={`${style.inputStyle} form-control w-75`} id="exampleFormControlInput1" placeholder="Enter your email " />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className={`${style.label} form-label mt-2`}>Password</label>
                            <input type="password" className={`${style.inputStyle} form-control w-75`} id="password" placeholder="Enter your Password" />
                        </div>
                        <Checkbox className={`${style.checkbox} pt-2 pb-2`} onChange={onChange}>I agree that I have read and accepted the <span className={`${style.checkboxSpan}`}>Terms</span>  and <span className={`${style.checkboxSpan}`}>Privacy</span></Checkbox>

                        <button className={`p-2 mt-3 text-white btn btn-warning w-75 ${style.button} ${style.inputStyle}`}> Create Account</button>
                        <h6 className={`${style.or} ${style.inputStyle} mt-3 text-center`}>Or</h6>
                        <div className={` ${style.google} ${style.inputStyle} mt-3 w-75 d-flex justify-content-center align-items-center`}>
                            <img src="../../googlesm.png" alt="" />
                            <span className={`${style.googletext} ${style.button}`}>Continue with Google</span>
                        </div>
                    </div>
                </div>
                <div className={` col-lg-6 d-flex justify-content-end `}>
                    <div className={`${style.mainImg} `}>
                        <img src="../../login.png" alt="login" className='w-100 h-100 ' />

                    </div>
                </div>
            </div>
        </div>

    )
}
