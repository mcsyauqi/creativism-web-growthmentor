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
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-growth-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success-green/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-growth-purple/10 text-growth-purple text-sm font-semibold rounded-full mb-6"
            >
              <Star className="w-4 h-4 fill-current" />
              #1 Marketing Mentoring Platform
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Accelerate Your{' '}
              <span className="gradient-text">Marketing Career</span>{' '}
              <span className="inline-block">🚀</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-xl">
              1-on-1 mentoring dengan digital marketing experts. Get personalized guidance untuk level up skills, solve challenges, atau navigate career decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-growth-purple/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-growth-purple" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                    <p className="text-sm text-text-muted">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Avatar Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main avatar display */}
              <div className="grid grid-cols-3 gap-4">
                {featuredAvatars.map((mentor, index) => (
                  <motion.div
                    key={mentor.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`
                      relative rounded-2xl overflow-hidden shadow-xl
                      ${index % 2 === 0 ? 'mt-4' : '-mt-4'}
                    `}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white font-semibold text-sm truncate">{mentor.name}</p>
                      <p className="text-white/80 text-xs truncate">{mentor.expertise[0]}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-border-light"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {featuredAvatars.slice(0, 3).map((mentor) => (
                      <img
                        key={mentor.id}
                        src={mentor.avatar}
                        alt=""
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">5,000+ Sessions</p>
                    <p className="text-xs text-text-muted">Completed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
