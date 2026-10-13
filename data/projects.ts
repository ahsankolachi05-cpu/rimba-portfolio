export type ProjectCategory =
  | "Film & Television"
  | "Theatre"
  | "Period Costume"
  | "Creative Collaborations";

export interface Project {
  slug: string;
  title: string;
  role: string;
  category: ProjectCategory;
  year: string;
  image: string;
  alt: string;
  intro: string;
  details: string[];
  gallery: { src: string; alt: string }[];
  credits: { role: string; name: string }[];
  placeholder: boolean;
}

export const projects: Project[] = [
  {
    slug: "the-crimson-hour",
    title: "The Crimson Hour",
    role: "Costume Designer",
    category: "Film & Television",
    year: "2025",
    image: "/images/work-film-1.jpg",
    alt: "Ethereal ivory silk period gown with delicate lace details",
    intro:
      "A study in restraint and light — costumes designed to let character emerge through texture rather than ornament.",
    details: [
      "Research drew on late-Edwardian domestic portraiture and early photographic archives.",
      "Silks were garment-dyed in small batches to achieve the exact ivory tone seen on screen.",
      "Ageing and breakdown were built into every piece from the first fitting.",
    ],
    gallery: [
      { src: "/images/detail-fabric.jpg", alt: "Close-up of embroidered costume fabric detail" },
      { src: "/images/detail-atelier.jpg", alt: "Costumes on dress forms in the atelier" },
    ],
    credits: [
      { role: "Director", name: "TBC" },
      { role: "Producer", name: "TBC" },
      { role: "Director of Photography", name: "TBC" },
    ],
    placeholder: true,
  },
  {
    slug: "a-streetcar-reimagined",
    title: "A Streetcar Reimagined",
    role: "Costume Designer",
    category: "Theatre",
    year: "2024",
    image: "/images/work-theatre-1.jpg",
    alt: "Avant-garde black and burgundy stage costume with sculptural silhouette",
    intro:
      "Costumes built for movement and proximity — designed to read from the back row and reward the front.",
    details: [
      "Sculptural silhouettes were developed through toile fittings with the performers.",
      "Fabrics were chosen for how they catch and hold stage light.",
      "Quick-change construction was engineered into every layered piece.",
    ],
    gallery: [
      { src: "/images/detail-atelier.jpg", alt: "Theatre costumes prepared in the atelier" },
      { src: "/images/detail-fabric.jpg", alt: "Textured fabric detail from a stage costume" },
    ],
    credits: [
      { role: "Director", name: "TBC" },
      { role: "Set Designer", name: "TBC" },
      { role: "Lighting Designer", name: "TBC" },
    ],
    placeholder: true,
  },
  {
    slug: "the-gilded-room",
    title: "The Gilded Room",
    role: "Costume Designer",
    category: "Period Costume",
    year: "2024",
    image: "/images/work-period-1.jpg",
    alt: "18th century style brocade gown in taupe and gold",
    intro:
      "An 18th-century wardrobe reconstructed with archival precision and a contemporary eye for the camera.",
    details: [
      "Patterns were drafted from extant garments in museum collections.",
      "Brocades were woven to order in historically accurate weights.",
      "Underpinnings — stays, panniers, petticoats — were built first, as they shape everything above.",
    ],
    gallery: [
      { src: "/images/work-period-2.jpg", alt: "Victorian costume beadwork detail" },
      { src: "/images/detail-fabric.jpg", alt: "Gold embroidery on period fabric" },
    ],
    credits: [
      { role: "Director", name: "TBC" },
      { role: "Production Designer", name: "TBC" },
      { role: "Hair & Make-up Designer", name: "TBC" },
    ],
    placeholder: true,
  },
  {
    slug: "paper-moons",
    title: "Paper Moons",
    role: "Costume Designer",
    category: "Creative Collaborations",
    year: "2023",
    image: "/images/work-collab-1.jpg",
    alt: "Avant-garde sculptural costume in flowing translucent taupe fabric",
    intro:
      "A collaboration with a choreographer — costume as kinetic sculpture, designed to move before the body does.",
    details: [
      "Hundreds of metres of translucent fabric were tested for weight and drift.",
      "The palette was restricted to taupe and champagne to keep focus on form.",
      "Each layer was cut to respond to a specific quality of movement.",
    ],
    gallery: [
      { src: "/images/detail-atelier.jpg", alt: "Collaboration pieces in the studio" },
    ],
    credits: [
      { role: "Choreographer", name: "TBC" },
      { role: "Photographer", name: "TBC" },
    ],
    placeholder: true,
  },
  {
    slug: "winter-garrison",
    title: "Winter Garrison",
    role: "Costume Designer",
    category: "Film & Television",
    year: "2023",
    image: "/images/work-film-2.jpg",
    alt: "Dark navy military-inspired film costume with brass buttons",
    intro:
      "Military dress undone by weather and war — uniforms designed to tell the story of a long campaign.",
    details: [
      "Original uniforms were studied for construction, then deliberately broken down.",
      "Leather and wool were aged over weeks to earn their patina honestly.",
      "Continuity breakdown was mapped across the entire shooting schedule.",
    ],
    gallery: [
      { src: "/images/detail-fabric.jpg", alt: "Weathered fabric texture detail" },
    ],
    credits: [
      { role: "Director", name: "TBC" },
      { role: "Producer", name: "TBC" },
    ],
    placeholder: true,
  },
  {
    slug: "the-baroque-stage",
    title: "The Baroque Stage",
    role: "Costume Designer",
    category: "Theatre",
    year: "2022",
    image: "/images/work-theatre-2.jpg",
    alt: "Baroque opera costume with ruffled collar in crimson silk",
    intro:
      "Opera costume at full volume — silhouette as architecture, colour as emotion.",
    details: [
      "The ruff alone required over forty metres of pleated silk organza.",
      "Crimson dyes were matched across five different fabric types.",
      "Internal boning gives the silhouette its authority without restricting the singer.",
    ],
    gallery: [
      { src: "/images/detail-atelier.jpg", alt: "Opera costumes on stands backstage" },
    ],
    credits: [
      { role: "Director", name: "TBC" },
      { role: "Conductor", name: "TBC" },
    ],
    placeholder: true,
  },
  {
    slug: "small-hours",
    title: "Small Hours",
    role: "Costume Designer",
    category: "Period Costume",
    year: "2022",
    image: "/images/work-period-2.jpg",
    alt: "Victorian costume with intricate beadwork on ivory fabric",
    intro:
      "Victorian mourning dress examined up close — where grief was expressed in stitches per inch.",
    details: [
      "Beadwork was applied by hand over more than two hundred hours.",
      "Jet and crepe were sourced to match surviving examples.",
      "The silhouette follows 1880s natural-form lines exactly.",
    ],
    gallery: [
      { src: "/images/detail-fabric.jpg", alt: "Beadwork macro detail" },
    ],
    credits: [
      { role: "Director", name: "TBC" },
      { role: "Curator", name: "TBC" },
    ],
    placeholder: true,
  },
  {
    slug: "drift",
    title: "Drift",
    role: "Costume Designer",
    category: "Creative Collaborations",
    year: "2021",
    image: "/images/work-collab-2.jpg",
    alt: "Modern dance costume in charcoal with metallic thread accents",
    intro:
      "A dance piece about weightlessness — costume reduced to line, shimmer and air.",
    details: [
      "Metallic threads were couched by hand to catch light in motion.",
      "Asymmetric panels were balanced through repeated movement tests.",
      "The final palette is charcoal, smoke and a single thread of gold.",
    ],
    gallery: [
      { src: "/images/detail-fabric.jpg", alt: "Metallic thread detail on dark fabric" },
    ],
    credits: [
      { role: "Choreographer", name: "TBC" },
      { role: "Composer", name: "TBC" },
    ],
    placeholder: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | undefined;
  next: Project | undefined;
} {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
