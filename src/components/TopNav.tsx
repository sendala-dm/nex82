import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const primaryItems = [
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Hardware", to: "/hardware" },
  { label: "Infrastructure", to: "/infrastructure" },
  { label: "Software", to: "/software" },
];
const contactItem = { label: "Contact", to: "/contact" };

const TopNav = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (to: string) =>
    cn(
      "transition-colors",
      pathname === to
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    );

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-14 md:h-16 flex items-center">
        {/* Brand */}
        <Link
          to="/"
          className="font-sans font-semibold tracking-[0.18em] text-sm text-foreground shrink-0"
          aria-label="NEX|82 home"
        >
          NEX<span className="text-muted-foreground">|</span>82
        </Link>

        {/* Centered desktop nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7 font-sans text-[13px] tracking-[0.14em] uppercase">
          {primaryItems.map((item) => (
            <Link key={item.to} to={item.to} className={linkClass(item.to)}>
              {item.label}
            </Link>
          ))}
          <span aria-hidden className="text-border select-none">|</span>
          <Link to={contactItem.to} className={linkClass(contactItem.to)}>
            {contactItem.label}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto p-2 -mr-2 text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <ul className="px-5 py-4 flex flex-col font-sans text-sm tracking-[0.16em] uppercase">
            {primaryItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn("block py-3 border-b border-border/40", linkClass(item.to))}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={contactItem.to}
                className={cn("block py-3", linkClass(contactItem.to))}
              >
                {contactItem.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default TopNav;