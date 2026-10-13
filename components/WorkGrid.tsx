"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { projects, Project } from "@/data/projects";
import { Reveal, ImageReveal } from "./motion";

/* Asymmetric editorial offsets per card index */
const layouts = [
  "md:col-span-7 md:mt-0",
  "md:col-span-5 md:mt-32",
  "md:col-span-5 md:mt-0",
  "md:col-span-7 md:mt-32",
  "md:col-span-7 md:mt-0",
  "md:col-span-5 md:mt-32",
  "md:col-span-5 md:mt-0",
  "md:col-span-7 md:mt-32",
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [hover, setHover] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 300, damping: 30 });
  const sy = useSpring(my, { stiffness: 300, damping: 30 });

  const onMove = (e: React.MouseEvent) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const aspect = index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <div className={layouts[index % layouts.length]}>
      <Link
        ref={cardRef}
        href={`/work/${project.slug}`}
        className="group relative block"
        onMouseMove={onMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label={`View project: ${project.title}`}
      >
        <ImageReveal>
          <div className={`relative ${aspect} overflow-hidden bg-ivory-deep`}>
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors duration-700" />
          </div>
        </ImageReveal>

        {/* Cursor-following label (desktop, fine pointers only) */}
        {!reduce && (
          <motion.span
            className="pointer-events-none absolute z-10 hidden [@media(pointer:fine)]:block rounded-full bg-ivory px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-charcoal shadow-lg"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-140%" }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.85 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          >
            View Project
          </motion.span>
        )}

        <div className="mt-5 flex items-baseline justify-between gap-4">
          <div className="overflow-hidden">
            <h3 className="font-serif text-2xl md:text-3xl font-medium leading-tight transition-transform duration-500 group-hover:translate-x-2">
              {project.title}
            </h3>
            <p className="mt-1.5 text-[12px] uppercase tracking-[0.22em] text-charcoal/55">
              {project.role} · {project.category}
            </p>
          </div>
          <span className="shrink-0 font-serif italic text-lg text-taupe">{project.year}</span>
        </div>
      </Link>
    </div>
  );
}

export function WorkGrid({ items = projects, heading }: { items?: Project[]; heading?: React.ReactNode }) {
  const cats = Array.from(new Set(projects.map((p) => p.category)));
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? items : items.filter((p) => p.category === filter);

  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-36">
      <Reveal>
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-burgundy mb-5">Portfolio</p>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.05]">
              {heading || (
                <>
                  Selected <span className="italic text-burgundy">Work</span>
                </>
              )}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by category">
            {["All", ...cats].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] border transition-all duration-300 ${
                  filter === c
                    ? "bg-charcoal text-ivory border-charcoal"
                    : "bg-transparent text-charcoal/60 border-charcoal/20 hover:border-charcoal hover:text-charcoal"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-y-10">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-charcoal/50 font-serif italic text-2xl">
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}
