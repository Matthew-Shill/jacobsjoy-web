import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { GetInvolved } from "@/components/GetInvolved";
import { Golf } from "@/components/Golf";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Story } from "@/components/Story";

export default function HomePage() {
  return (
    <main id="main" tabIndex={-1} className="flex-1 outline-none">
      <div id="top" />
      <Hero />
      <Programs />
      <Story />
      <Gallery />
      <GetInvolved />
      <Golf />
      <Contact />
    </main>
  );
}
