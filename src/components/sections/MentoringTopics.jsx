import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionTitle, Card } from '../ui';
import { topics } from '../../data/topics';

const colorClasses = {
  purple: {
    bg: 'bg-growth-purple/10',
    icon: 'text-growth-purple',
    hover: 'group-hover:bg-growth-purple',
  },
  green: {
    bg: 'bg-success-green/10',
    icon: 'text-success-green',
    hover: 'group-hover:bg-success-green',
  },
  amber: {
    bg: 'bg-energy-amber/10',
    icon: 'text-energy-amber',
    hover: 'group-hover:bg-energy-amber',
  },
  blue: {
    bg: 'bg-blue-100',
    icon: 'text-blue-600',
    hover: 'group-hover:bg-blue-600',
  },
};

export default function MentoringTopics() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Explore Topics"
          title="What Can You Learn?"
          description="Deep expertise across all digital marketing disciplines"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/topics/${topic.id}`}>
                <Card className="group cursor-pointer h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                        w-14 h-14 rounded-xl flex items-center justify-center
                        transition-colors duration-300
                        ${colorClasses[topic.color].bg}
                        ${colorClasses[topic.color].hover}
                      `}
                    >
                      <topic.icon
                        className={`
                          w-7 h-7 transition-colors duration-300
                          ${colorClasses[topic.color].icon}
                          group-hover:text-white
                        `}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-growth-purple transition-colors">
                        {topic.name}
                      </h3>
                      <p className="text-sm text-text-secondary mb-3">
                        {topic.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-muted">
                          {topic.mentorCount} mentors
                        </span>
                        <ArrowRight className="w-4 h-4 text-growth-purple opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
