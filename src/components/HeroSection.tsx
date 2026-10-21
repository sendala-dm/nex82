import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

const HeroSection = () => {
  return (
    <section className="visual-hero relative min-h-screen flex items-center justify-center overflow-hidden pb-24 md:pb-0">
      {/* Background image */}
      <img src="/images/datacentre.jpg" alt="" aria-hidden="true" className="visual-hero-image" width="1920" height="1079" />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20 md:pt-24">
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-foreground"
        >
          Algorithmic Intelligence
        </motion.h1>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          High-frequency, machine learning-driven automated trading across FX, Energy,
          Commodities and Crypto. We trade our own capital.
        </motion.p>

      </div>

      {/* Scroll indicator */}
      <ScrollIndicator className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2" />
    </section>
  );
};

export default HeroSection;
