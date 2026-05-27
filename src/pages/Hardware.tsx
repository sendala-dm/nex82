import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import TopNav from "@/components/TopNav";
import FooterSection from "@/components/FooterSection";
import HardwareSection from "@/components/HardwareSection";

const Hardware = () => {
  usePageMeta({
    title: "Hardware — NEX|82",
    description: "NEX|82 proprietary hardware infrastructure — Arista networks, custom servers, microwave links, and exchange colocation.",
    canonicalPath: "/hardware",
  });

  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <section className="relative pt-28 md:pt-32 pb-10">
        <div className="absolute inset-0 grid-pattern opacity-[0.06] pointer-events-none" />

        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <div className="flex items-center gap-3 mb-5 font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
              <span className="h-px w-8 bg-primary/60" />
              Hardware
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5 text-foreground">
              Hardware at the <span className="gradient-text">Speed of Physics</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Minimising hardware latency is an arms race against physics itself. We
              colocate with the venues we trade, run custom-designed servers, and push
              every network standard to its limit.
            </p>
          </motion.div>
        </div>
      </section>

      <HardwareSection />
      <FooterSection />
    </div>
  );
};

export default Hardware;
