'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    text: 'আমার ই-কমার্স ওয়েবসাইটটি একদম প্রফেশনালভাবে তৈরি হয়েছে। ডিজাইন ও পারফরম্যান্স অসাধারণ।',
    author: 'রফিকুল ইসলাম',
    position: 'ই-কমার্স ব্যবসায়ী',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
  },
  {
    text: 'ল্যান্ডিং পেজটি খুব সুন্দর ও কনভার্সন ফোকাসড। ক্লায়েন্টরা খুব সহজেই বুঝতে পারছে।',
    author: 'নাসরিন আক্তার',
    position: 'ডিজিটাল মার্কেটার',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    text: 'কাস্টম ওয়েবসাইটের কাজটি একদম সময়মতো ডেলিভারি দিয়েছে। কোড কোয়ালিটি অনেক ভালো।',
    author: 'সোহেল রানা',
    position: 'স্টার্টআপ ফাউন্ডার',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    text: 'WordPress দিয়ে খুব দ্রুত ওয়েবসাইট তৈরি করে দিয়েছে। ব্যবহার করাও অনেক সহজ।',
    author: 'আব্দুল করিম',
    position: 'ছোট ব্যবসায়ী',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  },
  {
    text: 'আমার বিজনেসের জন্য ল্যান্ডিং পেজটি খুব effective হয়েছে। লিড জেনারেশন বেড়েছে।',
    author: 'তানিয়া রহমান',
    position: 'অনলাইন উদ্যোক্তা',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
  },
];

const ClientReview = () => {
  return (
    <div className="relative pt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            আমাদের{' '}
            <span className="text-orange-500 relative inline-block">
              গ্রাহকদের মতামত
              <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-200 dark:bg-orange-800 rounded"></span>
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            আমাদের কাজ সম্পর্কে ক্লায়েন্টরা যা বলছেন
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-full">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  {/* ICON */}
                  <FaQuoteLeft className="text-3xl text-orange-200 mb-4" />

                  {/* STARS */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < review.rating ? (
                        <FaStar key={i} className="text-orange-400" />
                      ) : (
                        <FaRegStar key={i} className="text-orange-400" />
                      ),
                    )}
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-600 mb-6 flex-1">"{review.text}"</p>

                  {/* USER */}
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={review.image}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {review.author}
                      </h3>
                      <p className="text-sm text-orange-500">
                        {review.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* PAGINATION STYLE */}
      <style>{`
        .swiper-pagination-bullet {
          background: #fed7aa;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #f97316;
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default ClientReview;
