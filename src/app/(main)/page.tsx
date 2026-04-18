import AboutService from '@/components/common/home/AboutService';
import Banner from '@/components/common/home/Banner';
import ClientReview from '@/components/common/home/ClientReview';
import ProjectSection from '@/components/common/home/ProjectSection';
import React from 'react';

export default function Page() {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23c8b6ff' stroke-width='0.5' stroke-opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
      className="bg-gradient-to-b from-white to-[#f8f6ff] dark:bg-[#0F0B1A] transition-colors duration-300"
    >
      <Banner></Banner>
      <AboutService></AboutService>
      <ProjectSection></ProjectSection>
      <ClientReview></ClientReview>
    </div>
  );
}
