
import HeroSection from "./component/Hero";

import AppointmentSection from "./component/checkup";
import AboutMissionVisionSection from "./component/about";
import ClinicFacts from "./component/ClinicFacts";
import ServicesSection from "./component/servies";
import WhyChooseUsSwiper from "./component/whyYou";

export default function Home() {
  return (
    <>
      {/* <VideoPopup /> */}
      <HeroSection />
      <AppointmentSection />
      <AboutMissionVisionSection />
      <ClinicFacts/>
      <ServicesSection />
      <WhyChooseUsSwiper />
    </>
  );
}
