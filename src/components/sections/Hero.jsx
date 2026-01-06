import { Link } from 'react-router-dom';
import { ArrowRight, Users, Star, Award } from 'lucide-react';
import Button from '../ui/Button';
import { mentors } from '../../data/mentors';

const stats = [
  { icon: Users, value: '500+', label: 'Marketers Mentored' },
  { icon: Award, value: '50+', label: 'Expert Mentors' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
];

export default function Hero() {
  const featuredAvatars = mentors.slice(0, 6);

  return (
    <section style={{ background: 'linear-gradient(180deg, #F5F3FF 0%, #FAFAFA 100%)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: '#EDE9FE',
              color: '#7C3AED',
              fontSize: '14px',
              fontWeight: '600',
              borderRadius: '9999px',
              marginBottom: '24px'
            }}>
              <Star style={{ width: '16px', height: '16px', fill: 'currentColor' }} />
              #1 Marketing Mentoring Platform
            </div>

            <h1 style={{
              fontSize: '56px',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
              Accelerate Your{' '}
              <span style={{ color: '#8B5CF6' }}>Marketing Career</span>{' '}
              🚀
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#6B7280',
              marginBottom: '32px',
              lineHeight: '1.7',
              maxWidth: '500px'
            }}>
              1-on-1 mentoring dengan digital marketing experts. Get personalized guidance untuk level up skills, solve challenges, atau navigate career decisions.
            </p>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
              <Link to="/mentors">
                <Button size="lg" icon={ArrowRight} iconPosition="right">
                  Find Your Mentor
                </Button>
              </Link>
              <Link to="/become-mentor">
                <Button variant="secondary" size="lg">
                  Become a Mentor
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '32px' }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#EDE9FE',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <stat.icon style={{ width: '24px', height: '24px', color: '#8B5CF6' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>{stat.value}</p>
                    <p style={{ fontSize: '14px', color: '#9CA3AF' }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Avatar Grid */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px'
            }}>
              {featuredAvatars.map((mentor, index) => (
                <div
                  key={mentor.id}
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    aspectRatio: '1',
                    marginTop: index % 2 === 1 ? '24px' : '0'
                  }}
                >
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '12px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                  }}>
                    <p style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>{mentor.name}</p>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>{mentor.expertise[0]}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating stats card */}
            <div style={{
              marginTop: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'white',
              borderRadius: '12px',
              padding: '12px 16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex' }}>
                {featuredAvatars.slice(0, 3).map((mentor, i) => (
                  <img
                    key={mentor.id}
                    src={mentor.avatar}
                    alt=""
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '2px solid white',
                      marginLeft: i > 0 ? '-8px' : '0',
                      objectFit: 'cover'
                    }}
                  />
                ))}
              </div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>5,000+ Sessions</p>
                <p style={{ fontSize: '12px', color: '#9CA3AF' }}>Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
