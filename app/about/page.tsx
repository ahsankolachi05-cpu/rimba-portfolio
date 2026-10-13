import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, ImageReveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "About",
  description: "About Rimba — costume designer. Designing characters through costume.",
};

const principles = [
  {
    title: "Research First",
    text: "Every project begins in archives, museums and libraries — the details of how people really dressed are always stranger and richer than invention.",
  },
  {
    title: "Character Before Costume",
    text: "A costume must reveal psychology. Fabric choice, silhouette and wear patterns are decisions about who a character is, not decoration.",
  },
  {
    title: "Craft & Collaboration",
    text: "From first sketch to final fitting, the work is deeply collaborative — with directors, performers, makers and workshops.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 md:pt-44 px-6 md:px-10 max-w-[1600px] mx-auto">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.35em] text-burgundy mb-6">About</p>
          <h1 className="font-serif text-6xl md:text-8xl font-light leading-[1.02] max-w-4xl">
            Designing characters <span className="italic text-burgundy">through costume.</span>
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <ImageReveal>
            <div className="relative aspect-[3/4] overflow-hidden bg-ivory-deep">
              <Image
                src="/images/about-rimba.jpg"
                alt="Rimba's atelier — hands pinning fabric on a dress form surrounded by sketches and swatches"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </ImageReveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-charcoal/45">
              In the atelier — placeholder portrait
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="text-lg md:text-xl font-light leading-relaxed text-charcoal/85">
              Rimba is a costume designer working across film, television and theatre. Her practice
              is rooted in research — in archives, in the weight of real cloth, in the small
              decisions that make a character believable before they speak.
            </p>
            <p className="mt-6 text-lg md:text-xl font-light leading-relaxed text-charcoal/85">
              From period reconstruction to contemporary storytelling, each project is approached
              as a collaboration: with directors, performers and makers, building wardrobes that
              serve the story and honour the craft.
            </p>
            <p className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-charcoal/40 border border-charcoal/15 px-4 py-2">
              Placeholder biography — to be replaced with Rimba's own words
            </p>
          </Reveal>

          <div className="mt-14 space-y-10">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="border-t border-charcoal/15 pt-8">
                  <h2 className="font-serif text-3xl font-medium">{p.title}</h2>
                  <p className="mt-3 text-base font-light leading-relaxed text-charcoal/70 max-w-lg">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-24 md:pb-36">
        <ImageReveal>
          <div className="relative aspect-[21/9] overflow-hidden bg-ivory-deep">
            <Image
              src="/images/detail-atelier.jpg"
              alt="Row of theatrical costumes on dress forms in a dimly lit costume workshop"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </ImageReveal>
      </section>
    </>
  );
}
