import Image from "next/image";
import Hero from "./Hero/page";
import About from "./About/page";
import Projects from "./Projects/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="pt-16 space-y-8 sm:space-y-12 lg:space-y-16">
        <About />
        <Projects />
      </div>
    </div>
  );
}
