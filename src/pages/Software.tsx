import { motion } from "framer-motion";
import { useEffect } from "react";
import TopNav from "@/components/TopNav";
import FooterSection from "@/components/FooterSection";

const techStack = [
  { name: "Kafka", role: "Streaming" },
  { name: "ClickHouse", role: "Analytics" },
  { name: "Go", role: "Systems" },
  { name: "Python", role: "ML / Data" },
  { name: "PostgreSQL", role: "Persistence" },
  { name: "Java", role: "Execution" },
  { name: "Nginx", role: "Proxy" },
];

const Software = () => {
  useEffect(() => {
    document.title = "Software — NEX|82";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "NEX|82 — Our software-first approach to low-latency trading, built from the ground up.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
                Software
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center mb-16"
          >
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We use our own software stack built from the ground up, supplemented by open-standards based
              technologies. We believe software is the key to low latency — hardware is a race of physics
              that becomes an arms race. The best latency savings are made in software, and that is our focus.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-primary/40" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
                Stack
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.06 }}
                  className="group relative rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm px-4 py-5 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <div className="font-mono text-sm font-semibold text-foreground tracking-wide">
                    {tech.name}
                  </div>
                  <div className="font-mono text-[10px] tracking-wider uppercase text-primary/70 mt-1.5">
                    {tech.role}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="border-l-2 border-primary/30 pl-6 py-1">
              <p className="text-muted-foreground leading-relaxed mb-4">
                We utilise our own key ML engines to enhance our trading and maintain our own stack
                for learning global correlated markets. In some senses we are a provider of liquidity,
                but we are also a taker in our hedging needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium">99.9%</span> of our business is automated.
                Our lean team relies on our core software to manage trading and global risk around the clock.
              </p>
            </div>

            <div className="border-l-2 border-primary/30 pl-6 py-1">
              <p className="text-muted-foreground leading-relaxed">
                We have a deep knowledge of the entire hardware / software stack and use the latest
                technology to power our global trading operations. Every microsecond saved in software
                compounds across billions of messages — that is where we invest.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-20 flex items-center justify-center gap-4"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Software First
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Software;
