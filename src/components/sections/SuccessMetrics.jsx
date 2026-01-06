import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, ThumbsUp, Star } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '85%',
    label: 'got promoted within 6 months',
  },
  {
    icon: DollarSign,
    value: '3x',
    label: 'average salary increase',
  },
  {
    icon: ThumbsUp,
    value: '92%',
    label: 'would recommend to a friend',
  },
  {
    icon: Star,
    value: '4.9',
    label: 'average mentor rating',
  },
];

export default function SuccessMetrics() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Real Results from Real Marketers
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our mentees achieve measurable success in their marketing careers
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">{metric.value}</p>
              <p className="text-white/80 text-sm">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
