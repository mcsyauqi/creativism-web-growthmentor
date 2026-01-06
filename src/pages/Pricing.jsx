import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Check,
  Star,
  Users,
  LayoutDashboard,
  LineChart,
  HeadphonesIcon,
  ArrowRight,
  CreditCard,
} from 'lucide-react';
import { SectionTitle, Card, Button, Badge } from '../components/ui';

const packages = [
  {
    name: 'Starter Pack',
    price: 1500000,
    originalPrice: 1760000,
    sessions: 4,
    validity: '3 months',
    discount: '15%',
    features: [
      '4 sessions with any mentor',
      'Book any available mentor',
      'Video call sessions',
      'Session notes & summary',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Growth Pack',
    price: 3500000,
    originalPrice: 4400000,
    sessions: 10,
    validity: '6 months',
    discount: '20%',
    features: [
      '10 sessions with any mentor',
      'Priority booking',
      'Book any available mentor',
      'Video call sessions',
      'Session notes & summary',
      'Chat support',
      'Progress tracking',
    ],
    popular: true,
  },
  {
    name: 'Pro Pack',
    price: 6000000,
    originalPrice: 8000000,
    sessions: 20,
    validity: '12 months',
    discount: '25%',
    features: [
      '20 sessions with any mentor',
      'VIP mentor access',
      'Priority booking',
      'Book any available mentor',
      'Video call sessions',
      'Session notes & summary',
      'Priority support',
      'Progress tracking',
      'Career roadmap consultation',
    ],
    popular: false,
  },
];

const teamFeatures = [
  {
    icon: Users,
    title: 'Volume Discounts',
    description: 'Get better rates for larger teams',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard',
    description: 'Manage team sessions and allocations',
  },
  {
    icon: LineChart,
    title: 'Progress Reports',
    description: 'Track learning outcomes and ROI',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'Account manager for your team',
  },
];

const faqs = [
  {
    question: 'How does pricing work?',
    answer:
      'Each mentor sets their own rate based on their experience. Rates typically range from Rp 200,000 to Rp 1,000,000 per session. Package prices give you discounted credits to use with any mentor.',
  },
  {
    question: 'Can I switch mentors between sessions?',
    answer:
      'Yes! Your package sessions can be used with any available mentor. Many people work with different mentors for different topics.',
  },
  {
    question: 'What if I need to cancel a session?',
    answer:
      'You can reschedule or cancel for free up to 24 hours before the session. Late cancellations may forfeit the session credit.',
  },
  {
    question: 'Do unused sessions expire?',
    answer:
      'Sessions are valid for the period listed in your package. Starter is 3 months, Growth is 6 months, Pro is 12 months.',
  },
];

export default function Pricing() {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Hero */}
      <section className="bg-gradient-to-br from-growth-purple/10 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Transparent Pricing
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Invest in your growth. Choose the plan that works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pay Per Session */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-growth-purple/5 to-success-green/5 border-growth-purple/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  Pay Per Session
                </h3>
                <p className="text-text-secondary">
                  Book individual sessions with any mentor. Price set by each mentor.
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-text-muted">Price range</p>
                <p className="text-2xl font-bold text-growth-purple">
                  Rp 200K - 1M
                </p>
                <p className="text-sm text-text-muted">per session</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Session Packages"
            title="Save More with Packages"
            description="For committed learners who want to invest in their growth"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge color="purple" size="md" className="shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      BEST VALUE
                    </Badge>
                  </div>
                )}

                <Card
                  className={`h-full ${
                    pkg.popular
                      ? 'ring-2 ring-growth-purple shadow-xl'
                      : ''
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-growth-purple">
                        {formatPrice(pkg.price)}
                      </span>
                    </div>
                    <p className="text-sm text-text-muted line-through">
                      {formatPrice(pkg.originalPrice)}
                    </p>
                    <Badge color="green" size="sm" className="mt-2">
                      Save {pkg.discount}
                    </Badge>
                  </div>

                  <div className="text-center mb-6 pb-6 border-b border-border-light">
                    <p className="text-2xl font-bold text-text-primary">
                      {pkg.sessions} sessions
                    </p>
                    <p className="text-sm text-text-muted">
                      Valid for {pkg.validity}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success-green flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={pkg.popular ? 'primary' : 'secondary'}
                    className="w-full"
                    icon={CreditCard}
                  >
                    Get {pkg.name}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Teams */}
      <section id="teams" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge color="green" size="md" className="mb-4">
                For Teams
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                GrowthMentor for Teams
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Custom solutions untuk companies yang want to invest in their marketing team's development. Volume discounts, dedicated support, dan comprehensive reporting.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {teamFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-success-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-success-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button variant="success" icon={ArrowRight} iconPosition="right">
                  Contact for Team Pricing
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-success-green/5 to-success-green/10 border-success-green/20">
                <h4 className="font-bold text-text-primary mb-4">
                  Team Plan Includes
                </h4>
                <ul className="space-y-3">
                  {[
                    'Custom session allocations per team member',
                    'Centralized billing & invoicing',
                    'Dedicated mentor pool for your industry',
                    'Onboarding & goal setting sessions',
                    'Monthly progress reports',
                    'Quarterly review meetings',
                    'Learning path recommendations',
                    'Priority customer support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success-green flex-shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="FAQs"
            title="Frequently Asked Questions"
            description="Got questions? We've got answers."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-text-secondary">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-growth-purple to-growth-purple-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Invest in Your Growth?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Start with a single session or commit to a package. Either way, you're making a great decision for your career.
            </p>
            <Link to="/mentors">
              <Button
                size="lg"
                className="bg-white text-growth-purple hover:bg-gray-100"
              >
                Find Your Mentor
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
