import { usePageMeta } from "@/hooks/usePageMeta";
import HeroSection from "@/components/HeroSection";
import AssetClassSection from "@/components/AssetClassSection";
import TechnologySection from "@/components/TechnologySection";
import FooterSection from "@/components/FooterSection";
import TopNav from "@/components/TopNav";

const Index = () => {
  usePageMeta({
    title: "NEX|82 | Machine Learning-Driven Algorithmic Trading",
    description: "NEX|82 — proprietary high-frequency, machine learning-driven automated trading across FX, Energy, Commodities and Crypto.",
    canonicalPath: "/",
  });

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
