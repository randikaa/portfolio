import { Button } from "@/components/ui/button";
import { IconArrowUpRight } from "@tabler/icons-react";
import localFont from "next/font/local";
import Image from "next/image";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Medium.otf",
});

const helvetica = localFont({
  src: "../fonts/Helvetica-Bold.ttf",
});

// Project data
const projects = [
  {
    id: 1,
    title: "Flop App",
    description: "Social media for poker players",
    bgGradient: "from-purple-500 to-purple-600",
    mockupType: "mobile",
    image: "/olee.png", // You'll need to add actual project images
  },
  {
    id: 2,
    title: "Lendscape",
    description: "Lend and Borrow Dashboard",
    bgGradient: "from-gray-700 to-gray-800",
    mockupType: "desktop",
    image: "/project-dashboard.png", // You'll need to add actual project images
  },
  {
    id: 3,
    title: "Tribe.so Admin onboarding",
    description: "Community platform setup",
    bgGradient: "from-gray-300 to-gray-400",
    mockupType: "desktop",
    image: "/project-admin.png", // You'll need to add actual project images
  },
  {
    id: 4,
    title: "Prompt3 Dashboard",
    description: "AI prompt management system",
    bgGradient: "from-gray-600 to-gray-700",
    mockupType: "desktop",
    image: "/project-prompt.png", // You'll need to add actual project images
  },
];

export default function Projects() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 text-left">
          <div className={`flex justify-between`}>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 ${spaceGrotesk.className}`}
            >
              Featured Projects
            </h2>
            <Button variant={"outline"}>View More</Button>
          </div>
          <p
            className={`text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl ${helvetica.className}`}
          >
            A showcase of my recent work, featuring innovative solutions and
            creative designs across web and mobile platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.bgGradient} p-6 sm:p-8 lg:p-10 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Header with title and arrow */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div>
                  <h3
                    className={`text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 ${spaceGrotesk.className}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-white/80 text-sm sm:text-base ${helvetica.className}`}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 group-hover:bg-white/30 transition-all duration-300">
                  <IconArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              {/* Project Mockup/Preview */}
              <div className="relative h-48 sm:h-64 lg:h-80 flex items-center justify-center">
                {project.mockupType === "mobile" ? (
                  // Mobile mockup placeholder
                  <div className="relative">
                    <div className="w-32 sm:w-40 lg:w-48 h-64 sm:h-80 lg:h-96 bg-black rounded-3xl p-2 shadow-2xl transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                      <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                        <div className="h-6 bg-gray-800 flex items-center justify-center">
                          <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="h-20 bg-purple-600 rounded-xl"></div>
                          <div className="space-y-2">
                            <div className="h-12 bg-gray-700 rounded-lg"></div>
                            <div className="h-12 bg-gray-700 rounded-lg"></div>
                            <div className="h-12 bg-gray-700 rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Desktop mockup placeholder
                  <div className="relative w-full max-w-md lg:max-w-lg">
                    <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="h-8 bg-gray-700 flex items-center px-4">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-gray-600 to-gray-800 p-4">
                          <div className="space-y-3">
                            <div className="h-4 bg-white/20 rounded w-3/4"></div>
                            <div className="h-8 bg-white/10 rounded"></div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="h-6 bg-white/10 rounded"></div>
                              <div className="h-6 bg-white/10 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
