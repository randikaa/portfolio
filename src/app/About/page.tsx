import localFont from "next/font/local";
import { TextReveal } from "@/components/magicui/text-reveal";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Medium.otf",
});

const helvetica = localFont({
  src: "../fonts/Helvetica-Bold.ttf",
});

export default function About() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
      <div className="flex flex-col text-start">
        <div className="prose prose-sm sm:prose-base max-w-none">
          <TextReveal>
            Heyy, I'm Randika Perera, a passionate developer who loves building
            smart, scalable, and creative solutions. I specialize in Next.js,
            React.js, Node.js, Java, JavaScript, Java EE, SQL, NoSQL and also
            bring an eye for design with Figma. I enjoy crafting full-stack
            applications that combine functionality, performance, and great user
            experiences.
          </TextReveal>
        </div>
      </div>
    </div>
  );
}
