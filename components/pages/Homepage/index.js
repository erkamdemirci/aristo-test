import AccordionList from '@/components/sections/AccordionList';
import ChannelBanner from '@/components/sections/ChannelBanner';
import DownloadApps from '@/components/sections/DownloadApps';
import EducatorSuggestion from '@/components/sections/EducatorSuggestion';
import HomeHeaderSection from '@/components/sections/HomeHeader';
import LearnMore from '@/components/sections/LearnMore';
import Manifest from '@/components/sections/Manifest';
import PaymentPlans from '@/components/sections/PaymentPlans';
import TopCoursesList from '@/components/sections/TopCoursesList';
import TrailerCardSlider from '@/components/sections/TrailerCardSlider';
import TestimonialsList from '@/components/sliders/lists/TestimonialsList';
import React from 'react';

const Homepage = () => {
  return (
    <>
      <HomeHeaderSection />
      <EducatorSuggestion />
      <Manifest />
      <TrailerCardSlider />
      <ChannelBanner />
      <PaymentPlans />
      <TopCoursesList />
      <DownloadApps />
      <TestimonialsList />
      <AccordionList />
      <LearnMore />
    </>
  );
};

export default Homepage;
