"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { 
  IconHome, 
  IconUser, 
  IconBriefcase, 
  IconMail,
  IconCode
} from "@tabler/icons-react";

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <Dock className="bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 shadow-lg">
        <DockIcon onClick={() => scrollToSection('hero')}>
          <IconHome className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </DockIcon>
        
        <DockIcon onClick={() => scrollToSection('about')}>
          <IconUser className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </DockIcon>
        
        <DockIcon onClick={() => scrollToSection('projects')}>
          <IconBriefcase className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </DockIcon>
        
        <DockIcon onClick={() => scrollToSection('contact')}>
          <IconMail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </DockIcon>
      </Dock>
    </div>
  );
}