import React from 'react';
import {
  Star,
  ArrowRight,
  ExternalLink,
  Clock,
  DollarSign,
  Code2,
} from 'lucide-react';
import ProjectImageSlider from '@/components/common/home/ProjectImageSlider';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'ই-কমার্স ওয়েবসাইট',
    description:
      'সম্পূর্ণ ফিচারসহ অনলাইন ই-কমার্স স্টোর তৈরি। পেমেন্ট গেটওয়ে, ইনভেন্টরি ম্যানেজমেন্ট, অর্ডার ট্র্যাকিং সহ সব আধুনিক সুবিধা।',
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    ],
    category: 'ই-কমার্স',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
    price: '৳২৫,০০০',
    duration: '৩ মাস',
    rating: 4.8,
    featured: true,
  },
  {
    id: 2,
    title: 'ল্যান্ডিং পেজ ডিজাইন',
    description:
      'বিজনেস বা প্রোডাক্টের জন্য আধুনিক ও কনভার্টিং ল্যান্ডিং পেজ। SEO ফ্রেন্ডলি ও মোবাইল রেসপন্সিভ।',
    images: [
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
    ],
    category: 'ল্যান্ডিং পেজ',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    price: '৳৮,০০০',
    duration: '৭-১০ দিন',
    rating: 4.9,
    featured: false,
  },
  {
    id: 3,
    title: 'কাস্টম ওয়েবসাইট',
    description:
      'আপনার ব্যবসার প্রয়োজন অনুযায়ী সম্পূর্ণ কাস্টম ওয়েবসাইট। যেকোনো ফিচার ও ফাংশনালিটি যোগ করার সুযোগ।',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    ],
    category: 'কাস্টম ওয়েবসাইট',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    price: '৳৩০,০০০',
    duration: '১-২ মাস',
    rating: 5.0,
    featured: true,
  },
  {
    id: 4,
    title: 'ওয়ার্ডপ্রেস ওয়েবসাইট',
    description:
      'দ্রুত ও কম খরচে পেশাদার WordPress ওয়েবসাইট। ইজি কন্টেন্ট ম্যানেজমেন্ট ও এলিমেন্টর ডিজাইন।',
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    ],
    category: 'ওয়ার্ডপ্রেস',
    technologies: ['WordPress', 'Elementor', 'WooCommerce', 'PHP'],
    price: '৳১২,০০০',
    duration: '৫-৭ দিন',
    rating: 4.7,
    featured: false,
  },
  {
    id: 5,
    title: 'মোবাইল অ্যাপ',
    description:
      'iOS ও Android এর জন্য ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ। React Native দিয়ে তৈরি সুপার ফাস্ট অ্যাপ।',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    ],
    category: 'মোবাইল অ্যাপ',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    price: '৳৪০,০০০',
    duration: '২-৩ মাস',
    rating: 4.9,
    featured: true,
  },
];

const DemoPage = () => {
  return (
    <div className="  py-0 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-orange-500/10 rounded-full px-4 py-1.5">
              <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
                আমাদের পোর্টফোলিও
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            আমাদের{' '}
            <span className="text-orange-500 relative">
              প্রজেক্টসমূহ
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="4"
                viewBox="0 0 100 4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2 L100 2"
                  stroke="#F97316"
                  strokeWidth="3"
                  strokeDasharray="5 5"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            আমরা তৈরি করি আধুনিক প্রযুক্তির সমন্বয়ে গতিশীল ও স্কেলেবল
            সফটওয়্যার সলিউশন
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="space-y-5">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-md shadow-lg  overflow-hidden transform "
            >
              <div className="flex flex-col lg:flex-row">
                {/* IMAGE SLIDER */}
                <div className="lg:w-2/5 relative">
                  <div className="relative h-64 md:h-[280px]">
                    <ProjectImageSlider images={project.images} />
                  </div>

                  {/* FEATURED BADGE */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 shadow-lg">
                        <Star size={12} fill="currentColor" />
                        ফিচার্ড
                      </span>
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="lg:w-3/5 p-3 lg:px-8 flex flex-col justify-between">
                  {/* CATEGORY */}
                  <div className="mb-4">
                    <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md"
                      >
                        <Code2 size={10} />
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* PRICE & DURATION  & VIEW DETAILS */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                    {/* PRICE, DURATION, RATING */}
                    <div className="flex  gap-6">
                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                          <DollarSign
                            size={16}
                            className="text-orange-600 dark:text-orange-400"
                          />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            মূল্য
                          </p>
                          <p className="font-bold text-gray-900 dark:text-white">
                            {project.price}
                          </p>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                          <Clock
                            size={16}
                            className="text-orange-600 dark:text-orange-400"
                          />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            সময়কাল
                          </p>
                          <p className="font-bold text-gray-900 dark:text-white">
                            {project.duration}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                          <Star
                            size={16}
                            className="text-yellow-600 dark:text-yellow-400 fill-yellow-600"
                          />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            রেটিং
                          </p>
                          <p className="font-bold text-gray-900 dark:text-white">
                            {project.rating}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* VIEW DETAILS */}
                    <div className="flex flex-row gap-3 md:justify-end items-center">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md"
                      >
                        বিস্তারিত দেখুন
                        <ArrowRight size={16} />
                      </Link>

                      <button className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:border-orange-500 text-gray-700 dark:text-gray-300 hover:text-orange-500 px-3 sm:px-6 py-2.5 rounded-lg font-medium transition-all duration-300">
                        <ExternalLink size={16} />
                        লাইভ ডেমো
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            সব প্রজেক্ট দেখুন
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
