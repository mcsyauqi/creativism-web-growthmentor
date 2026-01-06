import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { topics } from '../../data/topics';

const colorMap = {
  purple: { bg: '#F3F0FF', text: '#8B5CF6' },
  green: { bg: '#ECFDF5', text: '#10B981' },
  amber: { bg: '#FFFBEB', text: '#F59E0B' },
  blue: { bg: '#EFF6FF', text: '#3B82F6' },
};

export default function MentoringTopics() {
  return (
    <section className="py-20" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
            Explore Topics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Can You Learn?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deep expertise across all digital marketing disciplines
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/topics/${topic.id}`}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 h-full group">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colorMap[topic.color]?.bg || '#F3F0FF' }}
                    >
                      <topic.icon
                        className="w-6 h-6"
                        style={{ color: colorMap[topic.color]?.text || '#8B5CF6' }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                        {topic.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {topic.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          {topic.mentorCount} mentors
                        </span>
                        <ArrowRight className="w-4 h-4 text-purple-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
