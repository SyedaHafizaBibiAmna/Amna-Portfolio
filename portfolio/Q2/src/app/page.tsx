import Image from 'next/image';
import HeroSection from "./compnents/HeroSection";
import Navbar from "./compnents/Navbar";
import AboutSection from "./compnents/AboutSection";
import ProjectsSection from "./compnents/ProjectsSection";
import EmalSection from "./compnents/EmailSection";
import Footer from "./compnents/Footer";
import AchievementsSection from "./compnents/AchievementsSection";

export default function Home(){
  return(
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      <AchievementsSection/>
      <AboutSection />
      <ProjectsSection/>
      <EmalSection/>
      </div>
    <Footer/>
    </main>
  )
}