import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { topics } from '../../data/topics';

const colorMap = {
  purple: { bg: '#EDE9FE', text: '#8B5CF6' },
  green: { bg: '#D1FAE5', text: '#10B981' },
  amber: { bg: '#FEF3C7', text: '#F59E0B' },
  blue: { bg: '#DBEAFE', text: '#3B82F6' },
};

export default function MentoringTopics() {
  return (
    <section style={{ padding: '80px 0', background: '#FAFAFA' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            Explore Topics
          </span>
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
            What Can You Learn?
          </h2>
          <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
            Deep expertise across all digital marketing disciplines
          </p>
        </div>

        {/* Topics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          {topics.map((topic) => (
            <Link key={topic.id} to={`/topics/${topic.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #E5E7EB',
                cursor: 'pointer',
                transition: 'all 0.2s',
                height: '100%'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: colorMap[topic.color]?.bg || '#EDE9FE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <topic.icon style={{
                      width: '24px',
                      height: '24px',
                      color: colorMap[topic.color]?.text || '#8B5CF6'
                    }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#111827',
                      marginBottom: '4px'
                    }}>
                      {topic.name}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6B7280',
                      marginBottom: '12px'
                    }}>
                      {topic.shortDescription}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span style={{ fontSize: '12px', color: '#9CA3AF' }}>
                        {topic.mentorCount} mentors
                      </span>
                      <ArrowRight style={{ width: '16px', height: '16px', color: '#8B5CF6' }} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
