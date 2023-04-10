import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/Home/Home";
import MeetTeam from "../../Components/MeetTeam/MeetTeam";
import Navbar from "../../Components/navbar/Navbar";
import NumOfClients from "../../Components/NumOfClients/NumOfClients";
import Portofolio from "../../Components/Portofolio/Portofolio";
import ServiceSoftware from "../../Components/ServiceSoftware/ServiceSoftware";
import SoftwareServiceHero from "../../Components/SoftwareServiceHero";
import { fetchSoftwarePage } from "../../services";

export default function servicePage({ cms }) {
  return (
    <>
      <Navbar page={"Software"} service={"Tearm"} service2={"Portofolio"} />
      <SoftwareServiceHero cms_data={cms?.Hero} />
      <ServiceSoftware cms_data={cms?.OurServices} />
      <NumOfClients cms_data={cms?.Stats} />
      {/* <MeetTeam /> */}
      <Portofolio cms_data={cms?.OurPortfolio} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await fetchSoftwarePage();
  const cms = data?.attributes ? data?.attributes : null;

  return {
    props: {
      cms
    },
  };
}
