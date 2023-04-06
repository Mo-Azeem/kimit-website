import Footer from '../../Components/Footer/Footer'
import Home from '../../Components/Home/Home'
import MeetTeam from '../../Components/MeetTeam/MeetTeam'
import Navbar from '../../Components/navbar/Navbar'
import NumOfClients from '../../Components/NumOfClients/NumOfClients'
import Portofolio from '../../Components/Portofolio/Portofolio'
import ServiceSoftware from '../../Components/ServiceSoftware/ServiceSoftware'
import SoftwareServiceHero from '../../Components/SoftwareServiceHero'

export default function servicePage() {
    return (
        <>
            <Navbar page={"Software"} service={"Tearm"} service2={"Portofolio"}/>
            {/* <Home page={"Software"} service={"Tearm"} service2={"Portofolio"}/> */}
            <SoftwareServiceHero />
            <ServiceSoftware/>
            <NumOfClients/>
            <MeetTeam/>
            <Portofolio/>
            <Footer/>
        </>
    )
}