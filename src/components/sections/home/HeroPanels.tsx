"use client";

import type { MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";

type LogoPanelProps = {
  letter: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  delay: number;
  floatDelay: string;
  className?: string;
};

/**
 * Echte 3D-doos (CSS transform-style: preserve-3d), geen platte skew-truc: de
 * rechter- en bovenzijde zijn losse vlakken die vanaf de rand van het voorvlak
 * 90 graden naar achteren "opklappen". De buitenste div doet de rustige
 * ambient-float (CSS-animatie), de binnenste de kanteling op basis van de muis
 * (framer-motion), zodat die twee transforms elkaar niet overschrijven.
 */
function LogoPanel({ letter, x, y, rotateX, rotateY, delay, floatDelay, className = "" }: LogoPanelProps) {
  return (
    <motion.div
      className={`obi-float relative h-72 w-28 flex-none sm:h-80 sm:w-32 ${className}`}
      style={{ animationDelay: floatDelay, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {/* Losse binnenste laag voor x/y/rotateX/rotateY: die komen als losse
          motion values binnen via `style` en mogen niet dezelfde sleutels
          gebruiken als de initial/animate hierboven, anders vechten ze om
          dezelfde transform en valt het paneel onzichtbaar stil. */}
      <motion.div
        style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* Dieptezijde: dezelfde kaart in rood, naar rechtsboven en naar achteren
            verschoven. Steekt daardoor alleen aan de rechter- en bovenkant uit
            als dikte, samen kantelend met de kaart (geen losse vlakken die apart
            90 graden vouwen, dat bleek te broos). */}
        <div className="absolute inset-0 bg-accent" style={{ transform: "translate3d(28px, -16px, -30px)" }} />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-white font-display text-6xl font-black text-ink shadow-2xl sm:text-7xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/0 to-transparent" />
          <span className="relative">{letter}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Het OBI-logo losgetrokken in 3 blokken (O, B, I): vaste basiskanteling plus
 * muisreactie voor diepte, en een zachte ambient-float zodat ze ook in rust
 * leven.
 */
export function HeroPanels() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.4 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [8, 34]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-24, 4]);

  const xO = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const yO = useTransform(sy, [-0.5, 0.5], [-16, 16]);
  const xB = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const yB = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const xI = useTransform(sx, [-0.5, 0.5], [-26, 26]);
  const yI = useTransform(sy, [-0.5, 0.5], [-20, 20]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 900 }}
      className="relative hidden items-center justify-end gap-5 lg:flex"
    >
      {/* Los van elkaar i.p.v. overlappend: anders verdwijnt de rechter rode
          rand van elk blok onder het volgende (opaak wit) blok. */}
      <LogoPanel letter="O" x={xO} y={yO} rotateX={rotateX} rotateY={rotateY} delay={0} floatDelay="0s" />
      <LogoPanel
        letter="B"
        x={xB}
        y={yB}
        rotateX={rotateX}
        rotateY={rotateY}
        delay={0.12}
        floatDelay="-1.6s"
      />
      <LogoPanel
        letter="I"
        x={xI}
        y={yI}
        rotateX={rotateX}
        rotateY={rotateY}
        delay={0.24}
        floatDelay="-3.2s"
      />
    </div>
  );
}
