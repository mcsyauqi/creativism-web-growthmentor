import { motion } from 'framer-motion';
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
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5F3FF 0%, #FAFAFA 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-6">
              <Star className="w-4 h-4 fill-current" />
              #1 Marketing Mentoring Platform
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Accelerate Your{' '}
              <span className="text-purple-600">Marketing Career</span>{' '}
              <span>🚀</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              1-on-1 mentoring dengan digital marketing experts. Get personalized guidance untuk level up skills, solve challenges, atau navigate career decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
            <div className="flex flex-wrap gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Avatar Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-4">
              {featuredAvatars.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg aspect-square"
                  style={{ marginTop: index % 2 === 1 ? '20px' : '0' }}
                >
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-semibold text-sm truncate">{mentor.name}</p>
                    <p className="text-white/80 text-xs truncate">{mentor.expertise[0]}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 bg-white rounded-xl shadow-lg p-4 inline-flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {featuredAvatars.slice(0, 3).map((mentor) => (
                  <img
                    key={mentor.id}
                    src={mentor.avatar}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">5,000+ Sessions</p>
                <p className="text-xs text-gray-500">Completed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
