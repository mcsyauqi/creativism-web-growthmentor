import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, LayoutDashboard, LineChart, UserCheck, ArrowRight } from 'lucide-react';
import { Button } from '../ui';

const features = [
  {
    icon: Users,
    title: 'Bulk Session Packages',
    description: 'Volume discounts untuk team training',
  },
  {
    icon: LayoutDashboard,
    title: 'Team Dashboard',
    description: 'Track semua sessions dan progress',
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Reports dan analytics per team member',
  },
  {
    icon: UserCheck,
    title: 'Custom Mentor Matching',
    description: 'Dedicated mentor pool untuk team',
  },
];

export default function ForCompanies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
              For Teams
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              GrowthMentor for Teams
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Invest in your marketing team's growth. Give them access to world-class mentors and watch them transform.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/pricing#teams">
              <Button variant="success" icon={ArrowRight} iconPosition="right">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-green-50 rounded-3xl p-8">
              {/* Team dashboard mockup */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-gray-900">Team Progress</h4>
                  <span className="text-sm text-green-600 font-medium">This Month</span>
                </div>

                {/* Progress bars */}
                {[
                  { name: 'Performance Marketing', progress: 85 },
                  { name: 'SEO & Content', progress: 70 },
                  { name: 'Analytics', progress: 60 },
                ].map((skill) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-gray-900 font-medium">{skill.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-green-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                  {[
                    { value: '12', label: 'Team Members' },
                    { value: '45', label: 'Sessions' },
                    { value: '4.9', label: 'Avg Rating' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
