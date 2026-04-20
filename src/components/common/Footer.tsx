import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, ChevronRight } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Demo', href: '/#demo' },
    { name: 'Services', href: '/#services' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'ওয়েব ডেভেলপমেন্ট', href: '/services/web-development' },
    { name: 'ই-কমার্স সলিউশন', href: '/services/ecommerce' },
    { name: 'ল্যান্ডিং পেজ', href: '/services/landing-page' },
    { name: 'মোবাইল অ্যাপ', href: '/services/mobile-app' },
    { name: 'ওয়ার্ডপ্রেস', href: '/services/wordpress' },
  ];

  return (
    <footer className="bg-[#f0ede9] dark:bg-[#0F0B1A]/95 text-gray-700 dark:text-gray-300 pt-16 pb-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-300 dark:border-gray-800 pb-10">
          {/* COMPANY INFO */}
          <div>
            {/* Logo - Minimalist Version */}
            <div className="mb-2">
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
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              আমরা আধুনিক ওয়েব সলিউশন তৈরি করি — ই-কমার্স, ল্যান্ডিং পেজ, কাস্টম
              ওয়েবসাইট এবং WordPress ডেভেলপমেন্ট।
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <FaFacebook size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <FaGithub size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <FaTwitter size={14} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              দ্রুত লিংক
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              আমাদের সেবা
            </h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              যোগাযোগ
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                  <Phone
                    size={14}
                    className="text-orange-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    ফোন
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    +880 1310-520842
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                  <Mail
                    size={14}
                    className="text-orange-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    ইমেইল
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    softvisionix@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                  <MapPin
                    size={14}
                    className="text-orange-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    ঠিকানা
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    রাজশাহী, বাংলাদেশ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} DevStudio. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href="/#"
              className="text-xs text-gray-500 dark:text-gray-500 hover:text-orange-500 transition-colors"
            >
              প্রাইভেসি পলিসি
            </Link>
            <Link
              href="/#"
              className="text-xs text-gray-500 dark:text-gray-500 hover:text-orange-500 transition-colors"
            >
              টার্মস অ্যান্ড কন্ডিশন
            </Link>
            <Link
              href="/#"
              className="text-xs text-gray-500 dark:text-gray-500 hover:text-orange-500 transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
