"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import HeroSection from "./component/Hero";
import AppointmentSection from "./component/checkup";
import AboutMissionVisionSection from "./component/about";
import ClinicFacts from "./component/ClinicFacts";
import ServicesSection from "./component/servies";
import WhyChooseUsSwiper from "./component/whyYou";
import FounderSection from "./component/founders";
import FeedbackVideoSlider from "./component/feedback";
import Branches from "./component/branch";
import EmpanelledCentres from "./component/center";
import BlogSection from "./component/blogHome";
import VideoPopup from "./component/VideoPopup";

import { apiUrl } from "@/config";

import "./style.css";

type HomeData = {
  our_facts: any[];
  testimonial_videos: any[];
  our_branches: any[];
  latest_blogs: any[];
  our_services: any[];
  banners: any[];
  authorized_logos: any[];
};

export default function HomeClient() {
  const [homeData, setHomeData] = useState<HomeData | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const res = await axios.post(`${apiUrl}/home`);

        if (res.data.success) {
          setHomeData(res.data.data);
        }
      } catch (error) {
        console.error("Home API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!homeData) {
    return <div>Failed to load data</div>;
  }

  return (
    <div className="overflow-hidden">
      <VideoPopup />

      <HeroSection banners={homeData?.banners || []} />

      <AppointmentSection />

      <AboutMissionVisionSection />

      {homeData?.our_facts && (
        <ClinicFacts facts={homeData.our_facts} />
      )}

      {homeData?.our_services && (
        <ServicesSection services={homeData.our_services} />
      )}

      <WhyChooseUsSwiper />

      <FounderSection />

      {homeData?.testimonial_videos && (
        <FeedbackVideoSlider
          videos={homeData.testimonial_videos}
        />
      )}

      {homeData?.our_branches && (
        <Branches branches={homeData.our_branches} />
      )}

      <EmpanelledCentres
        logos={homeData?.authorized_logos || []}
      />

      {homeData?.latest_blogs && (
        <BlogSection blogs={homeData.latest_blogs} />
      )}
    </div>
  );
}