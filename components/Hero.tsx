"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { StaggerWords } from "./motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-charcoal">
      {/* Background image — slow settle from 1.08 to 1.0, parallax on scroll */}
      <motion.div style={{ y: reduce ? 0 : imgY }} className="absolute inset-0">
        <motion.div
          initial={{ scale: reduce ? 1 : 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src="/images/hero-costume.jpg"
            alt="Elaborate deep burgundy velvet theatrical gown with gold embroidery on a dress form in a dark atelier"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-charcoal/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/45 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y: reduce ? 0 : textY, opacity: fade }}
        className="relative z-10 flex h-full flex-col justify-end pb-28 md:pb-32 px-6 md:px-10 max-w-[1600px] mx-auto w-full"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-6 text-[11px] md:text-xs uppercase tracking-[0.4em] text-ivory/70"
        >
          Costume Designer — Portfolio
        </motion.p>

        <h1 className="font-serif text-ivory font-light leading-[1.02] text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
          <StaggerWords text="Costume is where" delay={0.5} />
          <br />
          <StaggerWords text="character comes" delay={0.9} wordClassName="italic text-taupe-light" />
          <br />
          <StaggerWords text="to life." delay={1.25} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base md:text-lg font-light leading-relaxed text-ivory/80"
        >
          Exploring character, texture and storytelling through the art of costume design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.95, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/work"
            className="group mt-10 inline-flex items-center gap-4 text-[13px] uppercase tracking-[0.28em] text-ivory"
          >
            <span className="border-b border-ivory/40 pb-2 group-hover:border-ivory transition-colors">
              Explore Selected Work
            </span>
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
              <svg width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden="true">
                <path d="M0 6h26M21 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-ivory/60">Scroll</span>
        <div className="h-10 w-px overflow-hidden bg-ivory/20">
          <motion.div
            className="h-1/2 w-full bg-ivory/80"
            animate={reduce ? {} : { y: ["-100%", "220%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
