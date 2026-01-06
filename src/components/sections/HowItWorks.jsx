import { motion } from 'framer-motion';
import { Search, Calendar, TrendingUp } from 'lucide-react';
import { SectionTitle } from '../ui';

const steps = [
  {
    icon: Search,
    title: 'Find Your Match',
    emoji: '🔍',
    description: 'Browse mentor profiles berdasarkan expertise, industry, dan availability. Filter sesuai kebutuhanmu.',
    color: 'purple',
  },
  {
    icon: Calendar,
    title: 'Book a Session',
    emoji: '📅',
    description: 'Pilih slot yang cocok. 30 atau 60 menit. Video call. Bayar aman via platform.',
    color: 'green',
  },
  {
    icon: TrendingUp,
    title: 'Grow Together',
    emoji: '📈',
    description: 'Diskusi, dapat insights, dan take action dengan accountability. Repeat until you achieve your goals.',
    color: 'amber',
  },
];

const colorClasses = {
  purple: {
    bg: 'bg-growth-purple/10',
    icon: 'text-growth-purple',
    line: 'bg-growth-purple',
  },
  green: {
    bg: 'bg-success-green/10',
    icon: 'text-success-green',
    line: 'bg-success-green',
  },
  amber: {
    bg: 'bg-energy-amber/10',
    icon: 'text-energy-amber',
    line: 'bg-energy-amber',
  },
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Simple Process"
          title="How It Works"
          description="Mulai perjalanan mentoringmu dalam 3 langkah sederhana"
        />

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-growth-purple via-success-green to-energy-amber" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="relative z-10 w-12 h-12 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center mx-auto mb-6 text-lg font-bold text-text-primary">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`
                    w-20 h-20 ${colorClasses[step.color].bg} rounded-2xl
                    flex items-center justify-center mx-auto mb-6
                  `}
                >
                  <step.icon className={`w-10 h-10 ${colorClasses[step.color].icon}`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {step.title} {step.emoji}
                </h3>
                <p className="text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
