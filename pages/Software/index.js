import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/Home/Home";
import MeetTeam from "../../Components/MeetTeam/MeetTeam";
import Navbar from "../../Components/navbar/Navbar";
import NumOfClients from "../../Components/NumOfClients/NumOfClients";
import Portofolio from "../../Components/Portofolio/Portofolio";
import ServiceSoftware from "../../Components/ServiceSoftware/ServiceSoftware";
import SoftwareServiceHero from "../../Components/SoftwareServiceHero";
import { fetchSoftwareServices } from "../../services";

export default function servicePage({ cms }) {
  console.log(cms)
  const { Hero, OurServices, Stats, OurPortfolio } = cms;
  return (
    <>
      <Navbar page={"Software"} service={"Tearm"} service2={"Portofolio"} />
      <SoftwareServiceHero cms_data={Hero} />
      <ServiceSoftware cms_data={OurServices} />
      <NumOfClients cms_data={Stats} />
      <MeetTeam />
      <Portofolio cms_data={OurPortfolio} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const cms = await fetchSoftwareServices();

  return {
    props: {
      cms: cms.data.attributes,
    },
  };
}
