import HeroSection from "@/components/HeroSection";
import AssetClassSection from "@/components/AssetClassSection";
import TechnologySection from "@/components/TechnologySection";
import HardwareSection from "@/components/HardwareSection";
import FooterSection from "@/components/FooterSection";
import TopNav from "@/components/TopNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <HeroSection />
      <AssetClassSection />
      <TechnologySection />
      <HardwareSection />
      <FooterSection />
    </div>
  );
};

export default Index;
