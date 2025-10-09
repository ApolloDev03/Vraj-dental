import Image from "next/image";
import Header from "./component/Header";
import HeroSection from "./component/Hero";
import Footer from "./component/footer";
import VideoPopup from "./component/VideoPopup";

export default function Home() {
  return (
    <>
      {/* <VideoPopup /> */}
      <Header />
      <HeroSection />
      <Footer/>
    </>
  );
}
