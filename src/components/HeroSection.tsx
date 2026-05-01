import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import nexaurLogo from "@/assets/nexaur-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo placeholder - user will upload */}
          <div className="mb-8 flex justify-center">
            <img src={nexaurLogo} alt="NEX|82" className="h-20 md:h-24 w-auto" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">Algorithmic</span>
          <br />
          <span className="gradient-text text-glow">Intelligence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light"
        >
          High-frequency, machine learning-driven automated trading across FX, Energy, 
          Commodities & Crypto. Proprietary capital. Zero clients. Pure alpha.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-8 font-mono text-sm text-muted-foreground"
        >
          {["FX", "ENERGY", "COMMODITIES", "CRYPTO"].map((asset, i) => (
            <span key={asset} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" style={{ animationDelay: `${i * 0.5}s` }} />
              {asset}
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
        <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
          SCROLL
        </span>
        <div className="w-px h-6 md:h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-primary animate-pulse-glow" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
