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
import { fetchHomepage, fetchGlobalInfo, fetchFooter } from "../services";

export default function HomePage({
  home,
  contactUs,
  seo,
  footer,
  academyPageLink,
}) {
  return (
    <>
      <Meta seo={seo} pageTitle="Home" />

      <Navbar page={"home"} academyPageLink={academyPageLink} />
      <HomeHero cms_data={home?.Hero} />
      <Services setBg={"dark"} cms_data={home?.WhatWeOffer} />
      <About cms_data={home?.AboutKimit} />
      <Software cms_data={home?.KimitSoftware} />
      <Academy cms_data={home?.KimitAcademy} />
      <Testmonial cms_data={home?.Testimonials} />
      <Contact cms_data={contactUs} />
      <Footer cms_data={{ footer, contactUs }} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await fetchHomepage();
  const { data: globalData_ } = await fetchGlobalInfo();
  const { data: footerData } = await fetchFooter();

  const home = data?.attributes ? data.attributes : null;

  const globalData = globalData_?.attributes ? globalData_.attributes : null;
  const seo = globalData?.mainSeo ? globalData.mainSeo : null;
  const academyPageLink = globalData?.AcademyPageLink
    ? globalData.AcademyPageLink
    : null;
  const socialLinks = globalData?.socialLinks ? globalData.socialLinks : null;
  const companyInfo = globalData?.companyInfo ? globalData.companyInfo : null;
  const footer = footerData?.attributes ? footerData.attributes : null;

  return {
    props: {
      home,
      seo,
      contactUs: {
        socialLinks,
        companyInfo,
      },
      footer,
      academyPageLink,
    },
  };
}
