import { Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function MentorCard({ mentor, featured = false }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      border: featured ? '2px solid #8B5CF6' : '1px solid #E5E7EB',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {featured && (
        <div style={{
          background: '#8B5CF6',
          color: 'white',
          textAlign: 'center',
          padding: '8px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          Featured Mentor
        </div>
      )}

      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
          <img
            src={mentor.avatar}
            alt={mentor.name}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #EDE9FE'
            }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '2px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {mentor.name}
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#6B7280',
              marginBottom: '2px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {mentor.title}
            </p>
            <p style={{
              fontSize: '14px',
              color: '#8B5CF6',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {mentor.company}
            </p>
          </div>
        </div>

        {/* Past companies */}
        {mentor.pastCompanies && mentor.pastCompanies.length > 0 && (
          <p style={{
            fontSize: '12px',
            color: '#9CA3AF',
            marginBottom: '12px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            Previously at {mentor.pastCompanies.join(', ')}
          </p>
        )}

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
          {mentor.expertise.slice(0, 2).map((skill) => (
            <span key={skill} style={{
              padding: '4px 10px',
              background: '#EDE9FE',
              color: '#7C3AED',
              fontSize: '12px',
              fontWeight: '500',
              borderRadius: '9999px'
            }}>
              {skill}
            </span>
          ))}
          {mentor.expertise.length > 2 && (
            <span style={{
              padding: '4px 10px',
              background: '#F3F4F6',
              color: '#6B7280',
              fontSize: '12px',
              fontWeight: '500',
              borderRadius: '9999px'
            }}>
              +{mentor.expertise.length - 2}
            </span>
          )}
        </div>

        {/* Bio */}
        <p style={{
          fontSize: '14px',
          color: '#6B7280',
          marginBottom: '16px',
          lineHeight: '1.5',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          flex: 1
        }}>
          {mentor.bio}
        </p>

        {/* Stats */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Star style={{ width: '16px', height: '16px', color: '#F59E0B', fill: '#F59E0B' }} />
            <span style={{ fontWeight: '600', color: '#111827', fontSize: '14px' }}>{mentor.rating}</span>
            <span style={{ color: '#9CA3AF', fontSize: '14px' }}>({mentor.reviews})</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#9CA3AF' }}>
            <MessageCircle style={{ width: '16px', height: '16px' }} />
            <span style={{ fontSize: '14px' }}>{mentor.sessionsCompleted}</span>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '16px',
          borderTop: '1px solid #E5E7EB'
        }}>
          <div>
            <p style={{ fontSize: '12px', color: '#9CA3AF' }}>Per session</p>
            <p style={{ fontWeight: '700', color: '#8B5CF6', fontSize: '16px' }}>{formatPrice(mentor.price)}</p>
          </div>
          <Link to={`/mentors/${mentor.id}`}>
            <Button size="sm">View Profile</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
