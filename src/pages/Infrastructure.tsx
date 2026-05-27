import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import TopNav from "@/components/TopNav";
import FooterSection from "@/components/FooterSection";

type Pop = {
  name: string;
  region: string;
  lat: number;
  lng: number;
  primary?: boolean;
};

const POPS: Pop[] = [
  { name: "London", region: "EU-WEST", lat: 51.5074, lng: -0.1278, primary: true },
  { name: "Iceland", region: "EU-NORTH", lat: 64.1466, lng: -21.9426 },
  { name: "New York", region: "US-EAST", lat: 40.7128, lng: -74.006 },
  { name: "Chicago", region: "US-CENTRAL", lat: 41.8781, lng: -87.6298 },
  { name: "Tokyo", region: "AP-NORTHEAST", lat: 35.6762, lng: 139.6503 },
  { name: "Hong Kong", region: "AP-EAST", lat: 22.3193, lng: 114.1694 },
  { name: "Singapore", region: "AP-SOUTHEAST", lat: 1.3521, lng: 103.8198 },
];

const VB_W = 1000;
const VB_H = 500;

const project = (lat: number, lng: number) => ({
  x: ((lng + 180) / 360) * VB_W,
  y: ((90 - lat) / 180) * VB_H,
});

// Curved path between two points, bulging toward the top (north)
const arcPath = (a: { x: number; y: number }, b: { x: number; y: number }) => {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  // perpendicular offset upward
  const offset = Math.min(dist * 0.25, 90);
  const cx = mx;
  const cy = my - offset;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
};

const London = POPS.find((p) => p.primary)!;
const londonPt = project(London.lat, London.lng);

// Interconnects: all routes hub via London + a few cross-region links
const extraLinks: Array<[string, string]> = [
  ["New York", "Chicago"],
  ["Hong Kong", "Tokyo"],
  ["Hong Kong", "Singapore"],
  ["Tokyo", "Singapore"],
  ["New York", "Iceland"],
];

const Infrastructure = () => {
  // Dot grid background (sparse) for terminal aesthetic
  const cols = 60;
  const rows = 30;
  const dots: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      dots.push({
        x: ((i + 0.5) / cols) * VB_W,
        y: ((j + 0.5) / rows) * VB_H,
      });
    }
  }

  const links: Array<{ from: Pop; to: Pop; key: string }> = [];
  POPS.filter((p) => !p.primary).forEach((p) => {
    links.push({ from: London, to: p, key: `LON-${p.name}` });
  });
  extraLinks.forEach(([a, b]) => {
    const from = POPS.find((p) => p.name === a)!;
    const to = POPS.find((p) => p.name === b)!;
    links.push({ from, to, key: `${a}-${b}` });
  });

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Infrastructure | NEX|82 Global POPs</title>
        <meta
          name="description"
          content="NEX|82 global infrastructure footprint: low-latency points of presence across London, New York, Chicago, Iceland, Tokyo, Hong Kong and Singapore."
        />
        <link rel="canonical" href="/infrastructure" />
      </Helmet>

      <TopNav />

      <section className="relative pt-28 md:pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
              // Global Infrastructure
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Points of </span>
              <span className="gradient-text text-glow">Presence</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              A globally distributed, low-latency network engineered for execution.
              London is our primary hub, interconnected with strategic POPs across
              North America, Northern Europe and Asia-Pacific.
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-lg border border-border/60 bg-card/40 backdrop-blur-sm box-glow overflow-hidden"
          >
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="w-full h-auto block"
              role="img"
              aria-label="World map showing NEX|82 global points of presence and interconnects"
            >
              <defs>
                <radialGradient id="popGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="linkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Dot grid (world canvas) */}
              <g fill="hsl(var(--border))" opacity="0.5">
                {dots.map((d, i) => (
                  <circle key={i} cx={d.x} cy={d.y} r={0.7} />
                ))}
              </g>

              {/* Equator + prime meridian guides */}
              <g
                stroke="hsl(var(--border))"
                strokeOpacity="0.4"
                strokeDasharray="2 4"
                strokeWidth="0.5"
              >
                <line x1="0" y1={VB_H / 2} x2={VB_W} y2={VB_H / 2} />
                <line x1={VB_W / 2} y1="0" x2={VB_W / 2} y2={VB_H} />
              </g>

              {/* Interconnects */}
              <g fill="none" stroke="url(#linkGrad)" strokeWidth="1.2">
                {links.map((l, i) => {
                  const a = project(l.from.lat, l.from.lng);
                  const b = project(l.to.lat, l.to.lng);
                  return (
                    <motion.path
                      key={l.key}
                      d={arcPath(a, b)}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 1.6,
                        delay: 0.4 + i * 0.08,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}
              </g>

              {/* Data pulses traveling along arcs */}
              <g fill="hsl(var(--primary))">
                {links.map((l, i) => {
                  const a = project(l.from.lat, l.from.lng);
                  const b = project(l.to.lat, l.to.lng);
                  return (
                    <circle key={`pulse-${l.key}`} r="1.8">
                      <animateMotion
                        dur={`${4 + (i % 3)}s`}
                        repeatCount="indefinite"
                        begin={`${i * 0.4}s`}
                        path={arcPath(a, b)}
                      />
                    </circle>
                  );
                })}
              </g>

              {/* POPs */}
              <g>
                {POPS.map((p, i) => {
                  const { x, y } = project(p.lat, p.lng);
                  const r = p.primary ? 4.5 : 3;
                  return (
                    <g key={p.name}>
                      <circle cx={x} cy={y} r={18} fill="url(#popGlow)" />
                      <motion.circle
                        cx={x}
                        cy={y}
                        r={r}
                        fill="hsl(var(--primary))"
                        stroke="hsl(var(--background))"
                        strokeWidth="1"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                      />
                      {/* Pulsing ring */}
                      <circle
                        cx={x}
                        cy={y}
                        r={r}
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                      >
                        <animate
                          attributeName="r"
                          from={r}
                          to={r + 10}
                          dur="2.4s"
                          begin={`${i * 0.3}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.7"
                          to="0"
                          dur="2.4s"
                          begin={`${i * 0.3}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                      <text
                        x={x + 8}
                        y={y - 6}
                        fill="hsl(var(--foreground))"
                        fontSize="10"
                        fontFamily="JetBrains Mono, monospace"
                        className="select-none"
                      >
                        {p.name.toUpperCase()}
                      </text>
                      <text
                        x={x + 8}
                        y={y + 6}
                        fill="hsl(var(--muted-foreground))"
                        fontSize="7"
                        fontFamily="JetBrains Mono, monospace"
                        className="select-none"
                      >
                        {p.region}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
          </motion.div>

          {/* POP list */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-10">
            {POPS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="rounded-md border border-border/60 bg-card/40 p-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {p.region}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{p.name}</p>
                {p.primary && (
                  <p className="font-mono text-[10px] text-primary mt-1">
                    PRIMARY HUB
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Infrastructure;