import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../styles/globals.css'
import react, { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
   

}, [])
  return <Component {...pageProps} />
}

export default MyApp
