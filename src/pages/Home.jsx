import {
  Hero,
  HowItWorks,
  MentoringTopics,
  FeaturedMentors,
  SuccessMetrics,
  Testimonials,
  ForCompanies,
  BecomeMentorCTA,
} from '../components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <MentoringTopics />
      <FeaturedMentors />
      <SuccessMetrics />
      <Testimonials />
      <ForCompanies />
      <BecomeMentorCTA />
    </>
  );
}
