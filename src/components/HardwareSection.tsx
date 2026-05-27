import { motion } from "framer-motion";
import { Network, Server, Radio, Zap, Globe, Cpu } from "lucide-react";

const features = [
  {
    icon: Network,
    label: "Arista Backbone",
    description:
      "Our network stack is built predominantly on Arista switching — chosen for its sub-microsecond port-to-port latency and deep programmability via EOS.",
  },
  {
    icon: Globe,
    label: "Global Connectivity",
    description:
      "Lowest-latency network links interconnect every trading centre. We engineer each path to shave every possible nanosecond off round-trip times.",
  },
  {
    icon: Server,
    label: "Custom Servers",
    description:
      "We design and deploy our own server hardware — from PCB layout to thermal tuning — so no commodity bottleneck sits between our code and the market.",
  },
  {
    icon: Zap,
    label: "Exchange Colocation",
    description:
      "Equipment is co-located inside the same facilities as the exchanges we trade on, and adjacent to the OTC desk infrastructure we interact with.",
  },
  {
    icon: Radio,
    label: "Microwave Links",
    description:
      "Where fibre is too slow we deploy microwave — including our Chicago hub — cutting propagation delays to the physical limit.",
  },
  {
    icon: Cpu,
    label: "Latest Standards",
    description:
      "We adopt the newest network and PCIe standards as soon as silicon is available, constantly refreshing the hardware stack.",
  },
];

const HardwareSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-glow transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                  {feature.label}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareSection;
