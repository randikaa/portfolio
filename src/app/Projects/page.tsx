import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
      <div className="flex flex-col">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Projects</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Here are some of my recent projects and work
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Placeholder for project cards */}
          <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Project Image</span>
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">Project Title</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Brief description of the project and technologies used.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Node.js</span>
            </div>
          </Card>
          
          <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Project Image</span>
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">Another Project</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Another project description with different tech stack.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Next.js</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">TypeScript</span>
            </div>
          </Card>
          
          <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Project Image</span>
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">Third Project</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Description of a third project showcasing different skills.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Java</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">SQL</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
