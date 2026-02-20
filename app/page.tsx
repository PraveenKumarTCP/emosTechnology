import Navbar from "@/app/_components/Navbar";
import Hero from "@/app/_components/Hero";
import Categories from "@/app/_components/Categories";
import AboutSection from "@/app/_components/AboutSection";
import WhyEmos from "@/app/_components/WhyEmos";
import Banner from "@/app/_components/Banner";
import RepairSection from "@/app/_components/RepairSection";
import Footer from "@/app/_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Categories />
      <AboutSection />
      <WhyEmos />
      <Banner />
      <RepairSection />
      <Footer />
    </main>
  );
}
