import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Portfolio of costume design projects across film, television, theatre and period productions.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-4 px-6 md:px-10 max-w-[1600px] mx-auto">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.35em] text-burgundy mb-6">Portfolio</p>
          <h1 className="font-serif text-6xl md:text-8xl font-light leading-[1.02] max-w-4xl">
            Every costume <span className="italic text-burgundy">tells a story.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg font-light leading-relaxed text-charcoal/70">
            A selection of projects across film, television, theatre and period costume.
            Project details shown are illustrative placeholders.
          </p>
        </Reveal>
      </section>
      <WorkGrid heading="All Projects" />
    </>
  );
}
