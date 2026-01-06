import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DollarSign, Heart, Award, ArrowRight } from 'lucide-react';
import { Button } from '../ui';

export default function BecomeMentorCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-energy-amber to-energy-amber-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Share Your Expertise, Get Paid 💰
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Punya 5+ tahun experience di digital marketing? Jadi mentor dan inspire the next generation sambil earn extra income.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/become-mentor">
                <Button
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="border-white text-white hover:bg-white hover:text-energy-amber"
                >
                  Apply as Mentor
                </Button>
              </Link>
            </div>

            {/* Benefits preview */}
            <div className="flex flex-wrap gap-6">
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 text-text-primary shadow-xl"
          >
            <h4 className="font-bold text-lg mb-4">Potential Monthly Earnings</h4>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Sessions per week</span>
                <span className="font-semibold">5 sessions</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Rate per session</span>
                <span className="font-semibold">Rp 500.000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Weeks per month</span>
                <span className="font-semibold">4 weeks</span>
              </div>
            </div>

            <div className="bg-energy-amber/10 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Estimated Earnings</span>
                <span className="text-2xl font-bold text-energy-amber">Rp 10.000.000</span>
              </div>
              <p className="text-xs text-text-muted mt-1">
                Top mentors earn Rp 10-30 juta/bulan
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
