import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, getAdjacentProjects } from "@/data/projects";
import { Reveal, ImageReveal } from "@/components/motion";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.intro,
    openGraph: {
      title: `${project.title} — RIMBA`,
      description: project.intro,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden bg-charcoal">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/40" />
        <div className="absolute bottom-0 inset-x-0 px-6 md:px-10 pb-14 max-w-[1600px] mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-ivory/70 mb-5">
              {project.category} · {project.year}
            </p>
            <h1 className="font-serif text-5xl md:text-8xl font-light text-ivory leading-[1.02]">
              {project.title}
            </h1>
            <p className="mt-5 text-[13px] uppercase tracking-[0.28em] text-taupe-light">
              {project.role}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro + details */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-burgundy mb-6">Overview</p>
            <p className="font-serif text-2xl md:text-3xl font-light leading-snug">{project.intro}</p>
            {project.placeholder && (
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-charcoal/40 border border-charcoal/15 inline-block px-4 py-2">
                Illustrative placeholder project
              </p>
            )}
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.1}>
            <p className="text-[11px] uppercase tracking-[0.35em] text-burgundy mb-6">
              Creative Process
            </p>
            <ul className="space-y-6">
              {project.details.map((d, i) => (
                <li key={i} className="flex gap-5">
                  <span className="font-serif italic text-xl text-taupe shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base md:text-lg font-light leading-relaxed text-charcoal/80">{d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-20 md:pb-28">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-burgundy mb-10">
              Details & Process
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((g, i) => (
              <ImageReveal key={i} delay={i * 0.1}>
                <div className={`relative overflow-hidden bg-ivory-deep ${i % 2 === 0 ? "aspect-[4/3]" : "aspect-[4/3] md:mt-16"}`}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </ImageReveal>
            ))}
          </div>
        </section>
      )}

      {/* Credits */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-taupe-light mb-10">
              Production Credits
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {project.credits.map((c) => (
                <div key={c.role} className="border-t border-ivory/15 pt-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-ivory/50">{c.role}</p>
                  <p className="mt-2 font-serif text-2xl font-light">{c.name}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-ivory/40 font-light">
              Credits shown as placeholders until confirmed production details are provided.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Prev / Next */}
      <nav className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 grid grid-cols-2 gap-8" aria-label="Project navigation">
        {prev && (
          <Link href={`/work/${prev.slug}`} className="group">
            <p className="text-[11px] uppercase tracking-[0.3em] text-charcoal/50 mb-3">← Previous</p>
            <p className="font-serif text-2xl md:text-4xl font-light group-hover:text-burgundy transition-colors">
              {prev.title}
            </p>
          </Link>
        )}
        {next && (
          <Link href={`/work/${next.slug}`} className="group text-right col-start-2">
            <p className="text-[11px] uppercase tracking-[0.3em] text-charcoal/50 mb-3">Next →</p>
            <p className="font-serif text-2xl md:text-4xl font-light group-hover:text-burgundy transition-colors">
              {next.title}
            </p>
          </Link>
        )}
      </nav>
    </>
  );
}
