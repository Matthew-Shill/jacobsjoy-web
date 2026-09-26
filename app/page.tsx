import { Contact } from "@/components/Contact";
import { FinalCta } from "@/components/FinalCta";
import { Funding } from "@/components/Funding";
import { Gallery } from "@/components/Gallery";
import { GetInvolved } from "@/components/GetInvolved";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Participate } from "@/components/Participate";
import { Programs } from "@/components/Programs";
import { Story } from "@/components/Story";

export default function HomePage() {
  return (
    <main id="main" tabIndex={-1} className="flex-1 outline-none">
      <div id="top" />
      <Hero />
      <Story />
      <Programs />
      <Participate />
      <Impact />
      <Funding />
      <Gallery />
      <GetInvolved />
      <Contact />
      <FinalCta />
    </main>
  );
}
