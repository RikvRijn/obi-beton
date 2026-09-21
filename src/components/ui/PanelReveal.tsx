"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const PANELS = [
  { width: "50%", opacity: 1 },
  { width: "42%", opacity: 0.85 },
  { width: "34%", opacity: 0.65 },
];

/**
 * Wipe-reveal met dezelfde diagonale rode panelen als het logo: bij scroll-in-view
 * schuiven ze één keer over de sectie heen en onthullen zo de content, alsof een
 * betonpaneel op zijn plek wordt gelegd.
 *
 * De scroll-detectie (`useInView`) zit op de root-div, die normaal in de pagina
 * ligt en dus gewoon in beeld komt. Niet op de rode balken zelf: die staan
 * bewust ver buiten hun eigen container (`left: -65%`) om de sweep-afstand te
 * halen, en zouden daardoor voor een IntersectionObserver nooit "in beeld"
 * zijn, dus nooit triggeren. Vandaar `animate` i.p.v. `whileInView` op de balken.
 */
export function PanelReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        {PANELS.map((panel, i) => (
          <motion.div
            key={panel.width}
            className="absolute inset-y-0 -skew-x-12 bg-accent"
            style={{ width: panel.width, opacity: panel.opacity }}
            initial={{ left: "-65%" }}
            animate={inView ? { left: "165%" } : undefined}
            transition={{ duration: 1.1, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
