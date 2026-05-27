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
                Careers
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
              Whilst we do not have specific openings advertised, we are always
              interested to speak to sharp-minded individuals with backgrounds
              in algo trading.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="max-w-3xl mx-auto space-y-8"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-20 flex flex-col items-center gap-4"
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
