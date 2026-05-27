import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { geoNaturalEarth1, geoPath, geoInterpolate, geoGraticule10 } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import worldData from "world-atlas/countries-110m.json";
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
const VB_H = 520;

const projection = geoNaturalEarth1()
  .scale(190)
  .translate([VB_W / 2, VB_H / 2 + 10]);
const pathGen = geoPath(projection);

const project = (lat: number, lng: number) => {
  const p = projection([lng, lat]);
  return p ? { x: p[0], y: p[1] } : { x: 0, y: 0 };
};

// Great-circle arc between two coordinates, sampled and projected
const greatCirclePath = (
  fromLng: number,
  fromLat: number,
  toLng: number,
  toLat: number,
) => {
  const interp = geoInterpolate([fromLng, fromLat], [toLng, toLat]);
  const N = 64;
  const pts: string[] = [];
  for (let i = 0; i <= N; i++) {
    const p = projection(interp(i / N));
    if (!p) continue;
    pts.push(`${i === 0 ? "M" : "L"} ${p[0].toFixed(2)} ${p[1].toFixed(2)}`);
  }
  return pts.join(" ");
};

const London = POPS.find((p) => p.primary)!;

// Interconnects: all routes hub via London + a few cross-region links
const extraLinks: Array<[string, string]> = [
  ["New York", "Chicago"],
  ["Hong Kong", "Tokyo"],
  ["Hong Kong", "Singapore"],
  ["Tokyo", "Singapore"],
  ["New York", "Iceland"],
];

const Infrastructure = () => {
  useEffect(() => {
    document.title = "Infrastructure | NEX|82 Global POPs";
    const desc = "NEX|82 global infrastructure footprint: low-latency points of presence across London, New York, Chicago, Iceland, Tokyo, Hong Kong and Singapore.";
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", desc);
  }, []);

  const { countryPaths, graticulePath, sphereOutline } = useMemo(() => {
    const topo = worldData as unknown as Parameters<typeof feature>[0];
    const land = feature(
      topo,
      // @ts-expect-error topology objects typed loosely
      topo.objects.countries,
    ) as FeatureCollection<Geometry>;
    const paths = land.features
      .map((f: Feature<Geometry>) => pathGen(f) ?? "")
      .filter(Boolean);
    return {
      countryPaths: paths,
      graticulePath: pathGen(geoGraticule10()) ?? "",
      sphereOutline: pathGen({ type: "Sphere" } as never) ?? "",
    };
  }, []);

  const links = useMemo(() => {
    const list: Array<{ from: Pop; to: Pop; key: string; d: string }> = [];
    POPS.filter((p) => !p.primary).forEach((p) => {
      list.push({
        from: London,
        to: p,
        key: `LON-${p.name}`,
        d: greatCirclePath(London.lng, London.lat, p.lng, p.lat),
      });
    });
    extraLinks.forEach(([a, b]) => {
      const from = POPS.find((x) => x.name === a)!;
      const to = POPS.find((x) => x.name === b)!;
      list.push({
        from,
        to,
        key: `${a}-${b}`,
        d: greatCirclePath(from.lng, from.lat, to.lng, to.lat),
      });
    });
    return list;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <section className="relative pt-28 md:pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern opacity-[0.06] pointer-events-none" />

        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <div className="flex items-center gap-3 mb-5 font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
              <span className="h-px w-8 bg-primary/60" />
              Infrastructure
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5 text-foreground">
              Seven cities. One network.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              London anchors our trading stack. Co-located equipment in six
              additional financial centres keeps us close to every venue we touch.
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="w-full h-auto block"
              role="img"
              aria-label="World map showing NEX|82 global points of presence and interconnects"
            >
              <defs>
                <radialGradient id="popGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Sphere outline */}
              <path
                d={sphereOutline}
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
                opacity="0.4"
              />

              {/* Graticule */}
              <path
                d={graticulePath}
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="0.3"
                opacity="0.35"
              />

              {/* Countries */}
              <g
                fill="hsl(var(--secondary))"
                stroke="hsl(var(--background))"
                strokeWidth="0.4"
              >
                {countryPaths.map((d, i) => (
                  <path key={i} d={d} />
                ))}
              </g>

              {/* Interconnects */}
              <g
                fill="none"
                stroke="hsl(var(--primary))"
                strokeOpacity="0.55"
                strokeWidth="1"
                strokeLinecap="round"
              >
                {links.map((l, i) => (
                  <motion.path
                    key={l.key}
                    d={l.d}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 1.6,
                      delay: 0.5 + i * 0.08,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </g>

              {/* Data pulses */}
              <g fill="hsl(var(--primary))">
                {links.map((l, i) => (
                  <circle key={`pulse-${l.key}`} r="1.6">
                    <animateMotion
                      dur={`${5 + (i % 4)}s`}
                      repeatCount="indefinite"
                      begin={`${2 + i * 0.5}s`}
                      path={l.d}
                    />
                  </circle>
                ))}
              </g>

              {/* POPs */}
              <g>
                {POPS.map((p, i) => {
                  const { x, y } = project(p.lat, p.lng);
                  const r = p.primary ? 4 : 2.8;
                  // Label offset: nudge left for far-east POPs to keep labels on map
                  const labelLeft = p.lng > 90;
                  const tx = labelLeft ? x - 8 : x + 8;
                  const anchor = labelLeft ? "end" : "start";
                  return (
                    <g key={p.name}>
                      <circle cx={x} cy={y} r={16} fill="url(#popGlow)" />
                      <motion.circle
                        cx={x}
                        cy={y}
                        r={r}
                        fill="hsl(var(--primary))"
                        stroke="hsl(var(--background))"
                        strokeWidth="1"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                      />
                      {p.primary && (
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
                            to={r + 12}
                            dur="2.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            from="0.7"
                            to="0"
                            dur="2.6s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                      <text
                        x={tx}
                        y={y + 3}
                        textAnchor={anchor}
                        fill="hsl(var(--foreground))"
                        fontSize="9"
                        fontFamily="JetBrains Mono, monospace"
                        className="select-none"
                      >
                        {p.name}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
          </motion.div>

          {/* POP list */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px mt-12 border border-border/60 bg-border/60">
            {POPS.map((p) => (
              <div
                key={p.name}
                className="bg-background p-5"
              >
                <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-2">
                  {p.region}
                </p>
                <p className="text-sm font-medium text-foreground">{p.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground mt-1">
                  {p.primary ? "Primary hub" : "Edge POP"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Infrastructure;