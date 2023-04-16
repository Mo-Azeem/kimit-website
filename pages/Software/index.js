import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/Home/Home";
import MeetTeam from "../../Components/MeetTeam/MeetTeam";
import Navbar from "../../Components/navbar/Navbar";
import NumOfClients from "../../Components/NumOfClients/NumOfClients";
import Portofolio from "../../Components/Portofolio/Portofolio";
import ServiceSoftware from "../../Components/ServiceSoftware/ServiceSoftware";
import SoftwareServiceHero from "../../Components/SoftwareServiceHero";
import { fetchSoftwarePage, fetchGlobalInfo, fetchFooter } from "../../services";

export default function servicePage({ softwareService, contactUs, footer, academyPageLink }) {
  return (
    <>
      <Navbar page={"Software"} service={""} service2={"Portofolio"} academyPageLink={academyPageLink} />
      <SoftwareServiceHero cms_data={softwareService?.Hero} />
      <ServiceSoftware cms_data={softwareService?.OurServices} />
      <NumOfClients cms_data={softwareService?.Stats} />
      {/* <MeetTeam /> */}
      <Portofolio cms_data={softwareService?.OurPortfolio} />
      <Footer cms_data={{ footer, contactUs }} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await fetchSoftwarePage();
  const { data: globalData_ } = await fetchGlobalInfo();
  const { data: footerData } = await fetchFooter();
  
  const softwareService = data?.attributes ? data?.attributes : null;

  const globalData = globalData_?.attributes ? globalData_.attributes : null;
  const academyPageLink = globalData?.AcademyPageLink ? globalData.AcademyPageLink : null;
  const socialLinks = globalData?.socialLinks ? globalData.socialLinks : null;
  const companyInfo = globalData?.companyInfo ? globalData.companyInfo : null;
  const footer = footerData?.attributes ? footerData.attributes : null;

  return {
    props: {
      softwareService,
      contactUs: {
        socialLinks,
        companyInfo,
      },
      footer,
      academyPageLink
    },
  };
}
