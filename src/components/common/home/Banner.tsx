'use client';

import React, { useState } from 'react';
import {
  Search,
  ArrowRight,
  Sparkles,
  Code,
  Smartphone,
  ShoppingBag,
} from 'lucide-react';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-[#0F0B1A]">
      {/* Simple Background with Warm Orange/Gold Color */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F7931E]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">
              আপনার ব্যবসাকে
            </span>
            <br />
            <span className="text-[#FF6B35]">ডিজিটাল যুগে নিয়ে যাই</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            ছোট ব্যবসা থেকে শুরু করে বড় এন্টারপ্রাইজ - আমরা তৈরি করি আধুনিক,
            দ্রুতগতির ও ব্যবহারকারী-বান্ধব সফটওয়্যার সলিউশন।
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10">
            <div className="relative flex items-center bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 focus-within:border-[#FF6B35] focus-within:ring-2 focus-within:ring-[#FF6B35]/20 transition-all duration-300">
              <Search className="absolute left-4 text-[#FF6B35]" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="আপনার প্রয়োজনীয় সেবা খুঁজুন..."
                className="w-full pl-11 pr-32 py-4 bg-transparent rounded-xl outline-none text-gray-900 dark:text-white placeholder-gray-400 text-base"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-[#FF6B35] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#F7931E] transition-all duration-300 flex items-center gap-1 text-sm"
              >
                <span className="hidden sm:inline">খুঁজুন</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
