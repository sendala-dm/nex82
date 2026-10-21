import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import { TrendingUp, Zap, Brain, BarChart3 } from "lucide-react";

const assets = [
  {
    icon: TrendingUp,
    title: "Foreign Exchange",
    code: "FX",
    image: "/images/markets/fx.jpg",
    description: "G10 and emerging market currency pairs with sub-millisecond execution across global liquidity pools.",
  },
  {
    icon: Zap,
    title: "Energy",
    code: "NRG",
    image: "/images/markets/energy.jpg",
    description: "Crude oil, natural gas, and power markets with real-time supply-demand modeling and weather integration.",
  },
  {
    icon: BarChart3,
    title: "Commodities",
    code: "CMD",
    image: "/images/markets/commodities.jpg",
    description: "Metals, agriculture, and soft commodities with cross-asset correlation analysis and seasonal alpha capture.",
  },
  {
    icon: Brain,
    title: "Crypto",
    code: "DFA",
    image: "/images/markets/digital.jpg",
    description: "Digital assets across centralised and decentralised venues with MEV-aware execution and cross-chain arbitrage.",
  },
];

const AssetClassSection = () => {
  return (
    <section className="visual-markets relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="asset-heading mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">Asset Classes</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Multi-Asset <span className="gradient-text">Coverage</span>
          </h2>
        </motion.div>

        <div className="asset-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset, i) => (
            <motion.div
              key={asset.code}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="asset-item group relative p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-glow transition-all duration-500"
            >
              <div className="asset-photo"><img src={asset.image} alt="" aria-hidden="true" loading="lazy" width="700" height="400" /></div>
              <div className="asset-label flex items-center gap-3 mb-4">
                <asset.icon className="h-5 w-5 text-primary" />
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
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
};

export default AssetClassSection;
