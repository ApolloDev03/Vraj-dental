"use client"
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
import BreadcrumbHero from "./component/breadcrumb";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/config";
import Head from "next/head";
import { log } from "console";
import "./style.css";
import VideoPopup from "./component/VideoPopup";

type OurFact = {
  title: string;
  value: number | string;
}

type TestimonialVideos = {
  id: number;
  video_url: string;
  title?: string;
  thumbnail?: string;
};

type Branch = {
  name: string;
  displayUrl: string;
  address: string;
  mapLink: string | null;
};

type Blog = {
  blogImage: string;
  created_at: string;
  blogTitle: string;
  blogDescription: string;
  urlParameter: string;
};

type Service = {
  categoryName: string;
  categoryIcon: string | null;
  briefDescription: string;
  slug: string;
};

type MetaData = {
  metaTitle: string;
  metaKeyword: string;
  metaDescription: string;
}

type HomeData = {
  our_facts: OurFact[];
  testimonial_videos: TestimonialVideos[];
  our_branches: Branch[];
  latest_blogs: Blog[];
  our_services: Service[];
  meta_data: MetaData;
}

export default function Home() {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const res = await axios.post(`${apiUrl}/home`);
        if (res.data.success) {
          // console.log(res.data.data);

          setHomeData(res.data.data);
        }
      } catch (err) {
        console.error("Error Fetching home data", err);
      } finally {
        setLoading(false)
      }
    };

    fetchHomeData();
  }, [])

  if (loading) return <div>Loading...</div>;


  return (
    <div className="overflow-hidden">
      <Head>
        <title>{homeData?.meta_data?.metaTitle || null}</title>
        {homeData?.meta_data?.metaDescription && (
          <meta 
            name="description" 
            content={homeData.meta_data.metaDescription} 
          />
        )}
        {homeData?.meta_data?.metaKeyword && (
          <meta 
            name="keywords" 
            content={homeData.meta_data.metaKeyword} 
          />
        )}
        
      </Head>

       <VideoPopup /> 
      <HeroSection />
      <AppointmentSection />
      <AboutMissionVisionSection />
      {homeData?.our_facts && <ClinicFacts facts={homeData.our_facts} />}
      {homeData?.our_services && <ServicesSection services = {homeData.our_services}/>}
      <WhyChooseUsSwiper />
      <FounderSection />
      {homeData?.testimonial_videos && <FeedbackVideoSlider videos={homeData.testimonial_videos} />}
      {homeData?.our_branches && <Branches branches={homeData.our_branches} />}
      <EmpanelledCentres />
      {homeData?.latest_blogs && <BlogSection blogs = {homeData.latest_blogs} />}

    </div>
  );
}
