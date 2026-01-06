import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DollarSign, Heart, Award, ArrowRight } from 'lucide-react';
import { Button } from '../ui';

export default function BecomeMentorCTA() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Share Your Expertise, Get Paid 💰
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Punya 5+ tahun experience di digital marketing? Jadi mentor dan inspire the next generation sambil earn extra income.
            </p>

            <Link to="/become-mentor">
              <Button
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="bg-white text-amber-600 hover:bg-gray-100"
              >
                Apply as Mentor
              </Button>
            </Link>

            {/* Benefits preview */}
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { icon: DollarSign, text: 'Set your own rate' },
                { icon: Heart, text: 'Give back' },
                { icon: Award, text: 'Build reputation' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Earnings preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl text-gray-900">
              <h4 className="font-bold text-lg mb-6">Potential Monthly Earnings</h4>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sessions per week</span>
                  <span className="font-semibold">5 sessions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rate per session</span>
                  <span className="font-semibold">Rp 500.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Weeks per month</span>
                  <span className="font-semibold">4 weeks</span>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Estimated Earnings</span>
                  <span className="text-2xl font-bold text-amber-600">Rp 10.000.000</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Top mentors earn Rp 10-30 juta/bulan
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
