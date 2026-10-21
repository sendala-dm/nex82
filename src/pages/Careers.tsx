import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import TopNav from "@/components/TopNav";
import FooterSection from "@/components/FooterSection";

const Careers = () => {
  const [email, setEmail] = useState("");

  usePageMeta({
    title: "Careers — NEX|82",
    description: "NEX|82 — Join our lean team. We champion real-world experience in algo trading.",
    canonicalPath: "/careers",
  });

  useEffect(() => {
    const parts = ["info", "@", "nex", "82", ".", "com"];
    setEmail(parts.join(""));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <section className="interior-page relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="relative container mx-auto px-6">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="page-eyebrow flex items-center gap-3 mb-5 font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
              <span className="text-muted-foreground">
                Careers
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-left mb-6 text-foreground">
              Join the <span className="gradient-text">Team</span>
            </h1>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-left mb-16 max-w-2xl"
          >
            <p className="text-muted-foreground text-base leading-relaxed">
              Whilst we do not have specific openings advertised, we are always
              interested to speak to sharp-minded individuals with backgrounds
              in algo trading.
            </p>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="max-w-3xl space-y-8"
          >
            <div className="border-l-2 border-primary/30 pl-6 py-1">
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not specifically require university degrees — in fact we
                champion real-world experience. If you have interesting models
                that could utilise our capital and global infrastructure, then we
                would be interested to hear from you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium">99.9%</span> of our
                business is automated. Our lean team relies on our core software to
                manage trading and global risk around the clock — and we are always
                looking for people who think in systems, not silos.
              </p>
            </div>

            <div className="border-l-2 border-primary/30 pl-6 py-1">
              <p className="text-muted-foreground leading-relaxed">
                Whether you come from a traditional finance background, a
                quantitative research path, or a purely technical engineering
                route, what matters most is what you can build and how you think
                about markets.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-20 flex flex-col items-start gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Get In Touch
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
            </div>
            {email && (
              <a
                href={`mailto:${email}`}
                className="font-mono text-sm text-primary hover:text-primary/80 transition-colors"
              >
                {email}
              </a>
            )}
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Careers;
