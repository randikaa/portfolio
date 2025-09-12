"use client";

import localFont from "next/font/local";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconMailFilled } from "@tabler/icons-react";
import { IconCalendarClock } from '@tabler/icons-react';
import { useEffect, useState } from "react";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Medium.otf",
});

const helvetica = localFont({
  src: "../fonts/Helvetica-Bold.ttf",
});

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Initial centered hero */}
      <div className={`transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            {/* Profile Image */}
            <div className="mb-8">
              <Image
                src="/profile.jpg"
                alt="profile image"
                width={150}
                height={150}
                className="rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto shadow-lg"
              />
            </div>

            {/* Name */}
            <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white ${spaceGrotesk.className}`}>
              Randika Perera
            </h1>

            {/* Description */}
            <p className={`text-base sm:text-lg lg:text-xl ${helvetica.className} text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto`}>
              A passionate developer and tech enthusiast building smart, scalable, and creative solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className={`${spaceGrotesk.className} w-full sm:w-auto px-8 py-3`}>
                <IconCalendarClock className="w-5 h-5 mr-2" />
                Book a Call
              </Button>
              <Button size="lg" variant={"outline"} className={`${spaceGrotesk.className} w-full sm:w-auto px-8 py-3`}>
                <IconMailFilled className="w-5 h-5 mr-2" />
                Mail
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky header */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-all duration-500 ${
        isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            {/* Profile Section */}
            <div className="flex items-center gap-3">
              <Image
                src="/profile.jpg"
                alt="profile image"
                width={50}
                height={50}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
              />
              <div>
                <h2 className={`text-lg sm:text-xl font-bold text-gray-900 dark:text-white ${spaceGrotesk.className}`}>
                  Randika Perera
                </h2>
                <p className={`text-xs sm:text-sm ${helvetica.className} text-gray-500 dark:text-gray-400 hidden sm:block`}>
                  Developer & Tech Enthusiast
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button size="sm" className={`${spaceGrotesk.className} hidden sm:flex`}>
                <IconCalendarClock className="w-4 h-4 mr-1" />
                Book a Call
              </Button>
              <Button size="sm" variant={"outline"} className={`${spaceGrotesk.className}`}>
                <IconMailFilled className="w-4 h-4 sm:mr-1" />
                <span className="hidden sm:inline">Mail</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
