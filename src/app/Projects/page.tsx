import { IconChevronRight } from "@tabler/icons-react";
import localFont from "next/font/local";

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
    name: "E-Commerce Platform",
    description: "Full-stack development, React.js",
    icon: "🛍️",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Task Management App",
    description: "Mobile app, React Native",
    icon: "📱",
    bgColor: "bg-gray-800",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "Landing page, Next.js design",
    icon: "⚡",
    bgColor: "bg-orange-500",
  },
  {
    id: 4,
    name: "Analytics Dashboard",
    description: "Data visualization, Chart.js",
    icon: "📊",
    bgColor: "bg-cyan-500",
  },
];

export default function Projects() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ${spaceGrotesk.className}`}>
            My Works
          </h2>
          <p className={`text-gray-500 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl ${helvetica.className}`}>
            Discover my portfolio, where purposeful interfaces meet captivating design. My work strives to enhance experiences and inspire.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  {/* Project Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${project.bgColor} rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg`}>
                    {project.icon}
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-1 ${spaceGrotesk.className}`}>
                      {project.name}
                    </h3>
                    <p className={`text-gray-500 text-sm sm:text-base ${helvetica.className}`}>
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0">
                  <IconChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
