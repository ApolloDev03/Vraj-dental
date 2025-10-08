import Image from "next/image";
import Header from "./component/Header";
import HeroSection from "./component/Hero";
import Footer from "./component/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Footer/>
    </>
  );
}
