import Navbar from "../../Components/navbar/Navbar";
import Privacy from "../../Components/Privacy/Privacy";
import Footer from "../../Components/Footer/Footer";
import {
  fetchPrivacyPolicy,
  fetchGlobalInfo,
  fetchFooter,
} from "../../services";

export default function PrivacyPage({
  privacyPolicy,
  contactUs,
  footer,
  academyPageLink,
}) {
  return (
    <>
      <Navbar service={"Tearm"} academyPageLink={academyPageLink} />
      <Privacy cms_data={privacyPolicy} />
      <Footer cms_data={{ footer, contactUs }} />
    </>
  );
}

export async function getStaticProps() {
  const privacyPolicy = (await fetchPrivacyPolicy()) ?? null;
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
      privacyPolicy,
      contactUs: {
        socialLinks,
        companyInfo,
      },
      footer,
      academyPageLink,
    },
  };
}
