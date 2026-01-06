import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        bg-white rounded-2xl overflow-hidden shadow-sm border h-full
        ${featured ? 'border-purple-300 ring-1 ring-purple-200' : 'border-gray-100'}
        hover:shadow-lg transition-shadow duration-300
      `}
    >
      {featured && (
        <div className="bg-purple-600 text-white text-center py-2 text-sm font-medium">
          Featured Mentor
        </div>
      )}

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-purple-100 flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-base text-gray-900 truncate">{mentor.name}</h3>
            <p className="text-gray-600 text-sm truncate">{mentor.title}</p>
            <p className="text-purple-600 text-sm font-medium truncate">{mentor.company}</p>
          </div>
        </div>

        {/* Past companies */}
        {mentor.pastCompanies && mentor.pastCompanies.length > 0 && (
          <p className="text-xs text-gray-400 mb-3 truncate">
            Previously at {mentor.pastCompanies.join(', ')}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {mentor.expertise.slice(0, 2).map((skill) => (
            <span key={skill} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
              {skill}
            </span>
          ))}
          {mentor.expertise.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              +{mentor.expertise.length - 2}
            </span>
          )}
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
          {mentor.bio}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-semibold text-gray-900">{mentor.rating}</span>
            <span className="text-gray-400">({mentor.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <MessageCircle className="w-4 h-4" />
            <span>{mentor.sessionsCompleted}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-400">Per session</p>
            <p className="font-bold text-purple-600">{formatPrice(mentor.price)}</p>
          </div>
          <Link to={`/mentors/${mentor.id}`}>
            <Button size="sm">View Profile</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
