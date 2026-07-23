import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import nexaurLogo from "@/assets/nexaur-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24 md:pb-0">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        style={{ filter: "grayscale(100%)", WebkitFilter: "grayscale(100%)" }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo placeholder - user will upload */}
          <div className="mb-10 flex justify-center">
            <img src={nexaurLogo} alt="NEX|82" className="h-16 md:h-20 w-auto" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-foreground"
        >
          Algorithmic Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          High-frequency, machine learning-driven automated trading across FX, Energy,
          Commodities and Crypto. Proprietary capital. Zero clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs md:text-sm text-muted-foreground tracking-[0.2em]"
        >
          {["FX", "ENERGY", "COMMODITIES", "CRYPTO"].map((asset, i, arr) => (
            <span key={asset} className="flex items-center gap-6">
              {asset}
              {i < arr.length - 1 && <span className="text-border">·</span>}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.8 },
          y: { delay: 1.2, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-label="Scroll to next section"
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 md:gap-2 group z-20"
      >
        <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors ml-[0.3em]">
          SCROLL
        </span>
        <div className="w-px h-6 md:h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-primary animate-pulse-glow" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
