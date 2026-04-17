import React from 'react';
import {
  Code,
  Smartphone,
  ShoppingCart,
  Layout,
  Briefcase,
  Globe,
} from 'lucide-react';

const AboutService = () => {
  const services = [
    { name: 'ওয়েবসাইট ডেভেলপমেন্ট', icon: Globe, desc: 'প্রফেশনাল ওয়েবসাইট' },
    { name: 'মোবাইল অ্যাপ', icon: Smartphone, desc: 'iOS ও Android অ্যাপ' },
    { name: 'ল্যান্ডিং পেজ', icon: Layout, desc: 'কনভার্টিং ল্যান্ডিং পেজ' },
    {
      name: 'শপ ম্যানেজমেন্ট',
      icon: ShoppingCart,
      desc: 'ইনভেন্টরি ম্যানেজমেন্ট',
    },
    { name: 'ই-কমার্স', icon: ShoppingCart, desc: 'অনলাইন স্টোর' },
    { name: 'কাস্টম সফটওয়্যার', icon: Code, desc: 'বেসপোক সলিউশন' },
    {
      name: 'ছোট ব্যবসার ওয়েবসাইট',
      icon: Briefcase,
      desc: 'স্মল বিজনেস সাইট',
    },
  ];

  const technologies = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'SQL',
    'NoSQL',
    'Prisma',
    'WordPress',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* What We Do Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            আমরা যা যা করি
          </h2>
          <div className="w-20 h-0.5 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            আপনার ব্যবসার চাহিদা অনুযায়ী আমরা তৈরি করি আধুনিক ডিজিটাল সলিউশন
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-5 text-center border border-[#c8b6ff] dark:border-gray-800 hover:border-[#c8b6ff] dark:hover:border-gray-700 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 text-gray-700 dark:text-gray-300">
                <service.icon size={22} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {service.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies We Use Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            আমরা যে প্রযুক্তি ব্যবহার করি
          </h2>
          <div className="w-20 h-0.5 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            আধুনিক ও শক্তিশালী প্রযুক্তিতে তৈরি হয় আমাদের প্রতিটি প্রজেক্ট
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-[#dee2ff] dark:hover:bg-gray-700 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            কেন আমাদের বেছে নেবেন
          </h2>
          <div className="w-20 h-0.5 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: '১০+ বছর অভিজ্ঞতা',
              desc: 'প্রফেশনাল টিম ও দক্ষ ডেভেলপার',
            },
            { title: '২৪/৭ সাপোর্ট', desc: 'যেকোনো সময় টেকনিক্যাল সাপোর্ট' },
            { title: '১০০+ প্রজেক্ট', desc: 'সফলভাবে সম্পন্ন প্রজেক্ট' },
            {
              title: 'কাস্টমাইজড সলিউশন',
              desc: 'আপনার চাহিদা অনুযায়ী ডিজাইন',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5 text-center border border-gray-200 dark:border-gray-800"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          আপনার প্রজেক্ট নিয়ে আলোচনা করুন
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-5">
          বিনামূল্যে কনসালটেশন পেতে আজই যোগাযোগ করুন
        </p>
        <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-2.5 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300">
          যোগাযোগ করুন
        </button>
      </div>
    </div>
  );
};

export default AboutService;
