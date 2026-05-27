import HeroSection from "@/components/HeroSection";
import AssetClassSection from "@/components/AssetClassSection";
import TechnologySection from "@/components/TechnologySection";
import FooterSection from "@/components/FooterSection";
import TopNav from "@/components/TopNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <HeroSection />
      <AssetClassSection />
      <TechnologySection />
      <FooterSection />
    </div>
  );
};

export default Index;
