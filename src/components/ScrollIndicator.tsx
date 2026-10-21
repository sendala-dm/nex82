import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = ({ className = "" }: { className?: string }) => (
      <motion.button
        type="button"
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
        initial={false}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-label="Scroll to next section"
        className={`scroll-indicator flex flex-col items-center gap-2 group z-20 ${className}`}
      >
        <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors ml-[0.3em]">
          SCROLL
        </span>
        <div className="w-px h-6 md:h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-primary animate-pulse-glow" />
      </motion.button>
);

export default ScrollIndicator;
