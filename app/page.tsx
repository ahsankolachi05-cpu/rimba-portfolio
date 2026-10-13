import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";
import { HomeAbout, HomeContact } from "@/components/HomeSections";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "RIMBA — Costume Designer",
  description:
    "Costume is where character comes to life. Exploring character, texture and storytelling through the art of costume design.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <WorkGrid items={projects.slice(0, 6)} heading={<>Selected <span className="italic text-burgundy">Work</span></>} />
      <HomeAbout />
      <HomeContact />
    </>
  );
}
