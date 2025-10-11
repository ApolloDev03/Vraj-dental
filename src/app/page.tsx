import Image from "next/image";
import Header from "./component/Header";
import HeroSection from "./component/Hero";
import Footer from "./component/footer";
import VideoPopup from "./component/VideoPopup";
import AppointmentSection from "./component/checkup";
import AboutMissionVisionSection from "./component/about";
import ClinicFacts from "./component/ClinicFacts";

export default function Home() {
  return (
    <>
      {/* <VideoPopup /> */}
      <Header />
      <HeroSection />
      <AppointmentSection />
      <AboutMissionVisionSection />
      <ClinicFacts/>
      <Footer />
    </>
  );
}
