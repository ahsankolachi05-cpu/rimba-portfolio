import Image from "next/image";
import Link from "next/link";
import { Reveal, ImageReveal } from "./motion";

export function HomeAbout() {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-36 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <ImageReveal className="order-2 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about-rimba.jpg"
              alt="Hands pinning fabric on a dress form in Rimba's costume atelier"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </ImageReveal>
        <div className="order-1 md:order-2">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-taupe-light mb-6">About</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.08]">
              Designing characters <span className="italic text-taupe-light">through costume.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-ivory/75 max-w-lg">
              Every character begins with research — an archive photograph, a swatch of aged silk,
              the way a coat sits on a shoulder. From first sketch to final fitting, each costume
              is built to reveal who a character is before they speak a word.
            </p>
            <p className="mt-5 text-base md:text-lg font-light leading-relaxed text-ivory/75 max-w-lg">
              Fabric, texture and silhouette become a visual language — one that serves the story,
              honours the performer, and lingers long after the curtain falls.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-4 text-[13px] uppercase tracking-[0.28em] text-ivory"
            >
              <span className="border-b border-ivory/40 pb-2 group-hover:border-ivory transition-colors">
                More About Rimba
              </span>
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden="true">
                  <path d="M0 6h26M21 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function HomeContact() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-36 text-center">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.35em] text-burgundy mb-6">Contact</p>
        <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.05]">
          Have a story <span className="italic text-burgundy">to tell?</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-base md:text-lg font-light leading-relaxed text-charcoal/70">
          Get in touch to discuss a future production or creative collaboration.
        </p>
        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-4 bg-charcoal px-10 py-5 text-[13px] uppercase tracking-[0.28em] text-ivory transition-colors duration-300 hover:bg-burgundy"
        >
          Start a Conversation
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
            <svg width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden="true">
              <path d="M0 6h26M21 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
