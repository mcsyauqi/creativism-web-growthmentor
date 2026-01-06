import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SectionTitle, MentorCard, Button } from '../ui';
import { mentors } from '../../data/mentors';

export default function FeaturedMentors() {
  const featuredMentors = mentors.filter(m => m.featured);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionTitle
            subtitle="Expert Mentors"
            title="Featured Mentors"
            description="Learn from practitioners who've been there and done that"
            centered={false}
            className="mb-0"
          />
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 bg-gray-100 hover:bg-growth-purple/10 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-text-primary" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 bg-gray-100 hover:bg-growth-purple/10 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-text-primary" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="flex-none w-[320px] snap-start"
            >
              <MentorCard mentor={mentor} featured />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/mentors">
            <Button variant="secondary" icon={ArrowRight} iconPosition="right">
              Browse All Mentors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
