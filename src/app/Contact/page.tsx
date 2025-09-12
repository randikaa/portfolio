"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IconBolt } from "@tabler/icons-react";
import localFont from "next/font/local";
import Image from "next/image";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Medium.otf",
});

const helvetica = localFont({
  src: "../fonts/Helvetica-Bold.ttf",
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="mb-8">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${spaceGrotesk.className}`}>
              Work with me
            </h2>
            <p className={`text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed ${helvetica.className}`}>
              Let's team up to bring your vision to life. I value clear communication, fresh ideas, and building long-term partnerships.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className={`block text-sm font-medium text-gray-900 dark:text-white mb-2 ${spaceGrotesk.className}`}>
                Name?
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="What should I call you?"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className={`block text-sm font-medium text-gray-900 dark:text-white mb-2 ${spaceGrotesk.className}`}>
                E-mail?
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Where should I send your emails"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className={`block text-sm font-medium text-gray-900 dark:text-white mb-2 ${spaceGrotesk.className}`}>
                Phone number?
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="I should love to talk about your project"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className={`block text-sm font-medium text-gray-900 dark:text-white mb-2 ${spaceGrotesk.className}`}>
                Magic word?
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Anything about your sweet project"
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className={`w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl text-base font-medium transition-all duration-200 ${spaceGrotesk.className}`}
            >
              Send your magic word
            </Button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="space-y-6">
          {/* Contact Info Card */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer h-64 sm:h-80">
            {/* Background Image */}
            <Image
              src="/memo.png"
              alt="Contact background"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Black Gradient Overlay (bottom to top) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
              {/* Main Text - Always at bottom */}
              <div className="transform transition-all duration-300 ease-out group-hover:-translate-y-6">
                <h3 className={`text-white text-xl sm:text-2xl font-bold ${spaceGrotesk.className}`}>
                  Contact Information
                </h3>
              </div>

              {/* Subtext - now always visible at bottom */}
              <div className="mt-3 text-white/90 text-sm">
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <span>📧</span>
                    <span>[email]@example.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📱</span>
                    <span>+1 (555) 123-4567</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Your Location</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Response Card */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-900 dark:bg-gray-700 rounded-2xl mb-6">
              <IconBolt className="w-8 h-8 text-white" />
            </div>

            <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 ${spaceGrotesk.className}`}>
              Quick Resp.
            </h3>
            <p className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed ${helvetica.className}`}>
              I typically respond to inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
