'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/service' },
    { name: 'Demo', href: '/demo' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-300 ease-in-out
          ${
            scrolled
              ? 'bg-[#f0ede9] dark:bg-[#0F0B1A]/95 backdrop-blur-md shadow-lg'
              : 'bg-[#faf8f6] dark:bg-[#0F0B1A]'
          }
          border-b border-[#c8b6ff]/20 dark:border-[#b8c0ff]/20
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Minimalist Version */}
            <Link href="/" className="group flex items-center gap-3">
              {/* Modern geometric logo mark */}
              <div className="relative">
                {/* Animated background pulse */}
                <div className="absolute inset-0 bg-[#FF6B35] rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                {/* Logo shape container */}
                <div className="relative w-8 h-8">
                  {/* Diamond shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#ff8c5a] rotate-45 rounded-md"></div>

                  {/* Inner cutout circle */}
                  <div className="absolute inset-[3px] bg-white dark:bg-[#0F0B1A] rounded-full"></div>

                  {/* Center dot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#FF6B35] to-[#ff8c5a] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Company name with modern typography */}
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                  Soft
                </span>
                <span className="text-xl sm:text-2xl font-light tracking-tight bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] bg-clip-text text-transparent">
                  visionix
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium 
                           transition-all duration-300 hover:text-[#8B6FD8] dark:hover:text-[#c8b6ff]
                           group overflow-hidden"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#c8b6ff] to-[#b8c0ff] 
                                   transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 sm:gap-4">
              <ThemeToggle />

              <button
                className="hidden sm:block px-5 py-2 bg-gradient-to-r 
             from-[#FF6B35] to-[#ff8c5a] 
             text-white rounded-full font-semibold text-sm
             hover:from-[#ff5a1f] hover:to-[#ff7a45] 
             hover:shadow-lg hover:scale-105 
             transition-all duration-300"
              >
                View Demo
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-[#c8b6ff]/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X size={24} className="text-[#8B6FD8]" />
                ) : (
                  <Menu size={24} className="text-[#8B6FD8]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* ✅ Mobile Menu (LEFT SIDE DRAWER) */}
      <div
        className={`
          fixed top-0 left-0 h-full w-full max-w-sm bg-white dark:bg-[#0F0B1A]
          shadow-2xl z-50 md:hidden transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#c8b6ff]/20">
            <div className="flex items-center gap-2">
              <Link href="/" className="group flex items-center gap-3">
                {/* Modern geometric logo mark */}
                <div className="relative">
                  {/* Animated background pulse */}
                  <div className="absolute inset-0 bg-[#FF6B35] rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                  {/* Logo shape container */}
                  <div className="relative w-8 h-8">
                    {/* Diamond shape */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#ff8c5a] rotate-45 rounded-md"></div>

                    {/* Inner cutout circle */}
                    <div className="absolute inset-[3px] bg-white dark:bg-[#0F0B1A] rounded-full"></div>

                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gradient-to-br from-[#FF6B35] to-[#ff8c5a] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Company name with modern typography */}
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                    Soft
                  </span>
                  <span className="text-xl sm:text-2xl font-light tracking-tight bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] bg-clip-text text-transparent">
                    visionix
                  </span>
                </div>
              </Link>
            </div>

            <button onClick={() => setIsOpen(false)}>
              <X size={24} className="text-[#8B6FD8]" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 py-8 px-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-4 px-4 text-gray-700 dark:text-gray-300 font-medium text-lg
                         rounded-xl hover:bg-[#c8b6ff]/10 transition-all duration-200 group"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <span>{link.name}</span>
                <ChevronRight
                  size={20}
                  className="opacity-0 group-hover:opacity-100 text-[#c8b6ff]"
                />
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-[#c8b6ff]/20 space-y-4">
            <button
              className="w-full py-3 bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] 
             text-white font-semibold rounded-xl"
            >
              View Demo
            </button>

            <p className="text-center text-sm text-gray-500">© 2024 NovaSoft</p>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 sm:h-20" />
    </>
  );
}
