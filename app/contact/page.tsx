import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss a future production or creative collaboration with Rimba, costume designer.",
};

export default function ContactPage() {
  return (
    <section className="pt-36 md:pt-44 pb-24 md:pb-36 px-6 md:px-10 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-burgundy mb-6">Contact</p>
            <h1 className="font-serif text-6xl md:text-7xl font-light leading-[1.05]">
              Have a story <span className="italic text-burgundy">to tell?</span>
            </h1>
            <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-charcoal/70 max-w-md">
              Get in touch to discuss a future production or creative collaboration — for directors,
              production teams, theatre companies and fellow creatives.
            </p>
            <div className="mt-10 border-t border-charcoal/15 pt-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-charcoal/50 mb-3">
                Direct email
              </p>
              <a
                href="mailto:hello@rimba.design"
                className="font-serif text-2xl md:text-3xl italic hover:text-burgundy transition-colors"
              >
                hello@rimba.design
              </a>
              <p className="mt-3 text-xs text-charcoal/45">Placeholder address — replace with Rimba's real email.</p>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
