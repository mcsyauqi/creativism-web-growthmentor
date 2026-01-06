import { motion } from 'framer-motion';
import { Search, Calendar, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Find Your Match',
    emoji: '🔍',
    description: 'Browse mentor profiles berdasarkan expertise, industry, dan availability. Filter sesuai kebutuhanmu.',
    color: '#8B5CF6',
    bgColor: '#F3F0FF',
  },
  {
    icon: Calendar,
    title: 'Book a Session',
    emoji: '📅',
    description: 'Pilih slot yang cocok. 30 atau 60 menit. Video call. Bayar aman via platform.',
    color: '#10B981',
    bgColor: '#ECFDF5',
  },
  {
    icon: TrendingUp,
    title: 'Grow Together',
    emoji: '📈',
    description: 'Diskusi, dapat insights, dan take action dengan accountability. Repeat until you achieve your goals.',
    color: '#F59E0B',
    bgColor: '#FFFBEB',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mulai perjalanan mentoringmu dalam 3 langkah sederhana
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold text-white"
                style={{ backgroundColor: step.color }}
              >
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: step.bgColor }}
              >
                <step.icon className="w-10 h-10" style={{ color: step.color }} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title} {step.emoji}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[calc(50%+50px)] w-[calc(100%-100px)] h-0.5 bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
