"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const solid = scrolled || open;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid
            ? "bg-ivory/95 backdrop-blur-md border-b border-charcoal/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10"
          aria-label="Main navigation"
        >
          <Link href="/" className="group flex items-baseline gap-3" onClick={() => setOpen(false)}>
            <span
              className={`font-serif text-2xl tracking-[0.22em] font-medium transition-colors duration-500 ${
                solid ? "text-charcoal" : "text-ivory"
              }`}
            >
              RIMBA
            </span>
            <span
              className={`hidden sm:inline text-[11px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                solid ? "text-charcoal/50" : "text-ivory/70"
              }`}
            >
              Costume Designer
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative text-[13px] uppercase tracking-[0.24em] transition-colors duration-500 ${
                    solid ? "text-charcoal/80 hover:text-charcoal" : "text-ivory/85 hover:text-ivory"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-burgundy transition-all duration-500 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-burgundy"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            className={`md:hidden relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 ${
              solid ? "text-charcoal" : "text-ivory"
            }`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-px w-7 bg-current"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-7 bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-px w-7 bg-current"
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {[{ href: "/", label: "Home" }, ...links].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-serif text-5xl text-ivory hover:text-taupe-light transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-[11px] uppercase tracking-[0.3em] text-ivory/50"
            >
              Costume Designer
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
