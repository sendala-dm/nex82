import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import TopNav from "@/components/TopNav";
import FooterSection from "@/components/FooterSection";

const Contact = () => {
  const [email, setEmail] = useState("");

  usePageMeta({
    title: "Contact — NEX|82",
    description: "NEX|82 — Get in touch. Headquartered in the US with presence across three continents.",
    canonicalPath: "/contact",
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
                Contact
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
              We have been a remote-first organisation since 2006. We were built
              for distributed work before it became a trend.
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
                Whilst we maintain a fixed headquarters in the{" "}
                <span className="text-primary font-medium">United States</span>,
                our presence extends across{" "}
                <span className="text-primary font-medium">all three continents</span>.
                We encourage our team to work from whatever location they choose — as
                long as the job gets done, geography is not a constraint.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our infrastructure and culture have been designed for this from day one.
                Low-latency global connectivity, synchronous and asynchronous workflows,
                and a hiring philosophy that values output above timezone.
              </p>
            </div>

            <div className="border-l-2 border-primary/30 pl-6 py-1">
              <p className="text-muted-foreground leading-relaxed">
                If you are interested in discussing opportunities, models, or
                partnerships, we would welcome the conversation. Reach out via
                the email below and we will respond promptly.
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

export default Contact;
