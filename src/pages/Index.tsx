import HeroSection from "@/components/HeroSection";
import AssetClassSection from "@/components/AssetClassSection";
import TechnologySection from "@/components/TechnologySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AssetClassSection />
      <TechnologySection />
      <FooterSection />
    </div>
  );
};

export default Index;
