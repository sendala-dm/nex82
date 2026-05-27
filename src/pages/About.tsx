import { motion } from "framer-motion";
import { useEffect } from "react";
import TopNav from "@/components/TopNav";
import FooterSection from "@/components/FooterSection";

const milestones = [
  { year: "2004", label: "Bond Arb", desc: "Began in bond arbitrage — early electronic trading in EU Bund/Bobl/Schatz vs US Treasuries." },
  { year: "2006", label: "HF Bond Arb", desc: "High-frequency latency arbitrage in bond markets, pushing the boundaries of execution speed." },
  { year: "2009", label: "FX ECN", desc: "Transitioned into FX arbitrage and ECN development — the beginnings of our low-latency world." },
  { year: "2009–2012", label: "Low Latency Era", desc: "Among the first users of Spread Networks, colocation at Chicago CH1 / CME Aurora, and microwave links." },
  { year: "Today", label: "Global Stack", desc: "25+ years of machine-based algo trading. ECN technology still powering global prime brokers." },
];

const About = () => {
  useEffect(() => {
    document.title = "About — NEX|82";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "NEX|82 — Our history in electronic trading, ECNs, and low-latency infrastructure since 2004.");
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
                About
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
              Our history began in 2004 with bond arbitrage — EU Bund/Bobl/Schatz vs US Treasuries.
              By 2006 we were running high-frequency bond arb, and in 2009 we moved into FX ECNs
              and the beginnings of our low-latency world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20"
          >
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
                className="group relative rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute top-0 left-6 -translate-y-1/2 px-2 py-0.5 bg-background border border-primary/30 rounded-sm">
                  <span className="font-mono text-xs text-primary font-medium">{m.year}</span>
                </div>
                <h3 className="font-mono text-sm font-semibold text-foreground tracking-wide mb-2 mt-1">
                  {m.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="border-l-2 border-primary/30 pl-6 py-1">
              <p className="text-muted-foreground leading-relaxed mb-4">
                One of the first users of Spread Networks and colocation in Chicago CH1 / CME Aurora,
                and one of the first users of microwaves — our history is deeply integrated with low-latency architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team has over 25 years of experience in machine-based algo trading, has built many ECNs
                predominantly in the FX world, and our sister company technology is still used to this day
                in many global prime brokers for credit gateways, market messaging normalisation,
                pricing aggregation / dissemination and low-latency execution.
              </p>
            </div>

            <div className="border-l-2 border-primary/30 pl-6 py-1">
              <p className="text-muted-foreground leading-relaxed">
                We have a deep knowledge of the entire hardware / software stack and use the latest
                technology to power our global trading stack. We are market agnostic, but with our lean team
                we trade the majority of the global liquid markets both on cash and futures basis, both OTC and exchange-based.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-20 flex items-center justify-center gap-4"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Est. 2004
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;
