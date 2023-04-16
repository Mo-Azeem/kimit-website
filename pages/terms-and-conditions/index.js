import Navbar from "../../Components/navbar/Navbar";
import Terms from "../../Components/Terms/Terms";
import Footer from "../../Components/Footer/Footer";
import {
  fetchTermsAndConditions,
  fetchGlobalInfo,
  fetchFooter,
} from "../../services";

export default function termsPage({terms, contactUs, footer, academyPageLink}) {
  return (
    <>
      <Navbar service={"Tearm"} academyPageLink={academyPageLink} />
      <Terms cms_data={terms}/>
      <Footer cms_data={{ footer, contactUs }}/>
    </>
  );
}

export async function getStaticProps() {
  const terms = await fetchTermsAndConditions() ?? null;
  const { data: globalData_ } = await fetchGlobalInfo();
  const { data: footerData } = await fetchFooter();

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
      terms, 
      contactUs: {
        socialLinks,
        companyInfo,
      },
      footer,
      academyPageLink,
    },
  };
}
