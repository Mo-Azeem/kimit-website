import Head from "next/head";
import { useEffect } from "react";
import About from "../Components/About/About";
import Academy from "../Components/Academy/Academy";
import Contact from "../Components/ContactUs/Contact";
import Footer from "../Components/Footer/Footer";
import HomeHero from "../Components/HomeHero";
import Navbar from "../Components/navbar/Navbar";
import Services from "../Components/Services/Services";
import Software from "../Components/Software/Software";
import Testmonial from "../Components/Testmonial/Testmonial";
import Meta from "../Components/Meta";
import { fetchHomepage, fetchGlobalInfo } from "../services";

export default function HomePage({ cms, contactUs, seo }) {
  return (
    <>
      <Meta seo={seo} pageTitle='Home'/>

      <Navbar page={"home"} />
      <HomeHero cms_data={cms?.Hero} />
      <Services setBg={"dark"} cms_data={cms?.WhatWeOffer} />
      <About cms_data={cms?.AboutKimit} />
      <Software cms_data={cms?.KimitSoftware} />
      <Academy cms_data={cms?.KimitAcademy} />
      <Testmonial cms_data={cms?.Testimonials} />
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await fetchHomepage();
  const { data: globalData_ } = await fetchGlobalInfo();
  
  const cms = data?.attributes ? data.attributes : null;
  const globalData = globalData_?.attributes ? globalData_.attributes : null;
  const seo = globalData?.mainSeo
  const contactUs = globalData?.contactUs

  return {
    props: {
      cms,
      seo,
      contactUs
    },
  };
}
