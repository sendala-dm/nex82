import { motion } from "framer-motion";
import { ChevronDown, TrendingUp, Zap, Brain, BarChart3 } from "lucide-react";

const assets = [
  {
    icon: TrendingUp,
    title: "Foreign Exchange",
    code: "FX",
    description: "G10 and emerging market currency pairs with sub-millisecond execution across global liquidity pools.",
  },
  {
    icon: Zap,
    title: "Energy",
    code: "NRG",
    description: "Crude oil, natural gas, and power markets with real-time supply-demand modeling and weather integration.",
  },
  {
    icon: BarChart3,
    title: "Commodities",
    code: "CMD",
    description: "Metals, agriculture, and soft commodities with cross-asset correlation analysis and seasonal alpha capture.",
  },
  {
    icon: Brain,
    title: "Crypto",
    code: "DFA",
    description: "Digital assets across centralised and decentralised venues with MEV-aware execution and cross-chain arbitrage.",
  },
];

const AssetClassSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">Asset Classes</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Multi-Asset <span className="gradient-text">Coverage</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset, i) => (
            <motion.div
              key={asset.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-glow transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <asset.icon className="h-5 w-5 text-primary" />
                <span className="font-mono text-xs text-muted-foreground tracking-wider">{asset.code}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{asset.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{asset.description}</p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator — centered wrapper */}
        <div className="mt-16 flex justify-center">
          <motion.button
            type="button"
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [0, 8, 0] }}
            viewport={{ once: true }}
            transition={{
              opacity: { delay: 0.8, duration: 0.8 },
              y: { delay: 0.8, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
            }}
            aria-label="Scroll to next section"
            className="flex flex-col items-center gap-1.5 md:gap-2 group"
          >
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
              SCROLL
            </span>
            <div className="w-px h-6 md:h-12 bg-gradient-to-b from-primary/60 to-transparent" />
            <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-primary animate-pulse-glow" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AssetClassSection;
