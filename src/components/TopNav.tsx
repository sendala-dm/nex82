import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "N", to: "/", icon: true },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Infrastructure", to: "/infrastructure" },
  { label: "Software", to: "/software" },
];

const TopNav = () => {
  const { pathname } = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-4 md:top-6 md:left-6 z-50"
    >
      <ul className="flex items-center gap-1 rounded-md border border-border/60 bg-background/40 backdrop-blur-md px-2 py-1.5 font-mono text-xs tracking-[0.2em] uppercase">
        {navItems.map((item) => {
          const isActive = pathname === item.to;
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  "px-3 py-1.5 rounded-sm transition-colors flex items-center justify-center",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.icon ? (
                  <span
                    aria-label="Home"
                    className="font-sans font-bold text-sm leading-none tracking-normal"
                  >
                    N
                  </span>
                ) : (
                  item.label
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default TopNav;