import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { MentorCard, Button } from '../ui';
import { mentors } from '../../data/mentors';

export default function FeaturedMentors() {
  const featuredMentors = mentors.filter(m => m.featured);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: '#EDE9FE',
              color: '#7C3AED',
              fontSize: '14px',
              fontWeight: '600',
              borderRadius: '9999px',
              marginBottom: '16px'
            }}>
              Expert Mentors
            </span>
            <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Featured Mentors
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '500px' }}>
              Learn from practitioners who've been there and done that
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => scroll('left')}
              style={{
                width: '40px',
                height: '40px',
                background: '#F3F4F6',
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft style={{ width: '20px', height: '20px', color: '#374151' }} />
            </button>
            <button
              onClick={() => scroll('right')}
              style={{
                width: '40px',
                height: '40px',
                background: '#F3F4F6',
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronRight style={{ width: '20px', height: '20px', color: '#374151' }} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            paddingBottom: '16px',
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {featuredMentors.map((mentor) => (
            <div
              key={mentor.id}
              style={{
                flexShrink: 0,
                width: '300px'
              }}
            >
              <MentorCard mentor={mentor} featured />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
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
