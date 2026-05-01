import { motion } from "framer-motion";

const stats = [
  { value: "< 1ms", label: "Execution Latency" },
  { value: "24/7", label: "Market Coverage" },
  { value: "100%", label: "Proprietary Capital" },
  { value: "ML", label: "Decision Engine" },
];

const TechnologySection = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">Technology</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Built for <span className="gradient-text">Speed</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Our proprietary infrastructure combines machine learning models with 
              ultra-low-latency execution systems. Every microsecond counts. Every 
              signal is evaluated. Every trade is optimised.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Self-funded and independent, we deploy our own capital with full 
              conviction in our technology — no external investors, no clients, 
              no conflicts. Just pure, systematic alpha generation.
            </p>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="p-8 rounded-lg border border-border bg-card/30 backdrop-blur-sm text-center border-glow"
              >
                <div className="text-3xl md:text-4xl font-bold font-mono gradient-text text-glow mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
