import { motion } from 'framer-motion';
import { Star, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from './Badge';
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(139, 92, 246, 0.15)' }}
      transition={{ duration: 0.3 }}
      className={`
        bg-white rounded-2xl overflow-hidden
        border border-border-light
        ${featured ? 'ring-2 ring-growth-purple' : ''}
      `}
    >
      {featured && (
        <div className="bg-growth-purple text-white text-center py-1 text-sm font-medium">
          Featured Mentor
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-growth-purple-light"
          />
          <div className="flex-1">
            <h3 className="font-bold text-lg text-text-primary">{mentor.name}</h3>
            <p className="text-text-secondary text-sm">{mentor.title}</p>
            <p className="text-growth-purple text-sm font-medium">{mentor.company}</p>
          </div>
        </div>

        {mentor.pastCompanies && mentor.pastCompanies.length > 0 && (
          <p className="text-xs text-text-muted mb-3">
            Previously at {mentor.pastCompanies.join(', ')}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.expertise.slice(0, 3).map((skill) => (
            <Badge key={skill} color="purple" size="sm">
              {skill}
            </Badge>
          ))}
          {mentor.expertise.length > 3 && (
            <Badge color="gray" size="sm">
              +{mentor.expertise.length - 3}
            </Badge>
          )}
        </div>

        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {mentor.bio}
        </p>

        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-1 text-energy-amber">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-semibold">{mentor.rating}</span>
            <span className="text-text-muted">({mentor.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-text-muted">
            <MessageCircle className="w-4 h-4" />
            <span>{mentor.sessionsCompleted} sessions</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border-light">
          <div>
            <p className="text-xs text-text-muted">Per session</p>
            <p className="font-bold text-growth-purple">{formatPrice(mentor.price)}</p>
          </div>
          <Link to={`/mentors/${mentor.id}`}>
            <Button size="sm">View Profile</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
