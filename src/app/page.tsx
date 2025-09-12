import Image from "next/image";
import Hero from "./Hero/page";
import About from "./About/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="pt-16 space-y-8 sm:space-y-12 lg:space-y-16 pb-24 sm:pb-20">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
