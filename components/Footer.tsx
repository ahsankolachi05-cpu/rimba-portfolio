import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-16 md:pt-20 pb-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-ivory/15">
          <div>
            <p className="font-serif text-3xl tracking-[0.22em] font-medium">RIMBA</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-ivory/50">
              Costume Designer
            </p>
          </div>
          <nav className="flex gap-10" aria-label="Footer navigation">
            {[
              { href: "/work", label: "Work" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] uppercase tracking-[0.24em] text-ivory/70 hover:text-ivory transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-4 text-[12px] text-ivory/40">
          <p>© 2026 Rimba. All rights reserved.</p>
          <p className="font-serif italic text-sm">Costume is where character comes to life.</p>
        </div>
      </div>
    </footer>
  );
}
