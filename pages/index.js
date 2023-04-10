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
import { fetchHomepage } from "../services";

export default function HomePage({ cms }) {

  return (
    <>
      <Head>
        <title>Kimit</title>
        <meta name="description" content="...." />
      </Head>
      <Navbar page={"home"} />
      <HomeHero cms_data={cms?.Hero} />
      {/* <Home /> */}
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
  const cms = data?.attributes ? data?.attributes : null;

  return {
    props: {
      cms
    },
  };
}
