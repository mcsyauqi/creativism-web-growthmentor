import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UserPlus,
  Search,
  Calendar,
  Video,
  CheckCircle,
  Clock,
  Target,
  MessageSquare,
  Zap,
  DollarSign,
  Award,
  Heart,
  ArrowRight,
} from 'lucide-react';
import { SectionTitle, Card, Button, Badge } from '../components/ui';

const menteeSteps = [
  {
    step: 1,
    icon: UserPlus,
    title: 'Create Profile',
    description: 'Sign up free, tell us about your background, dan share your goals.',
  },
  {
    step: 2,
    icon: Search,
    title: 'Find Mentor',
    description: 'Browse mentor profiles, filter by expertise, dan read reviews.',
  },
  {
    step: 3,
    icon: Calendar,
    title: 'Book Session',
    description: 'Choose session type (30/60 min), pick available slot, pay securely.',
  },
  {
    step: 4,
    icon: Video,
    title: 'Meet & Learn',
    description: 'Video call via platform, come prepared with questions, take notes.',
  },
  {
    step: 5,
    icon: CheckCircle,
    title: 'Follow Up',
    description: 'Implement learnings, book follow-up if needed, leave review.',
  },
];

const sessionTypes = [
  {
    icon: Target,
    title: 'Career Coaching',
    duration: '60 min',
    priceRange: 'Rp 400-750K',
    description: 'For career decisions, job search, salary negotiation',
    color: 'purple',
  },
  {
    icon: Zap,
    title: 'Skill Deep Dive',
    duration: '60 min',
    priceRange: 'Rp 400-750K',
    description: 'Learn specific skill atau channel secara mendalam',
    color: 'green',
  },
  {
    icon: MessageSquare,
    title: 'Strategy Review',
    duration: '60 min',
    priceRange: 'Rp 500K-1M',
    description: 'Review your campaigns, get detailed feedback',
    color: 'amber',
  },
  {
    icon: Clock,
    title: 'Quick Advice',
    duration: '30 min',
    priceRange: 'Rp 200-400K',
    description: 'Specific questions, quick wins, focused discussion',
    color: 'blue',
  },
];

const mentorBenefits = [
  { icon: Clock, title: 'Flexible Schedule', description: 'Set your own availability' },
  { icon: DollarSign, title: 'Set Your Rate', description: 'You decide your pricing' },
  { icon: Heart, title: 'Give Back', description: 'Share your knowledge' },
  { icon: Award, title: 'Build Reputation', description: 'Establish thought leadership' },
];

const mentorRequirements = [
  '5+ years digital marketing experience',
  'Currently working atau recently worked at reputable company',
  'Strong communication skills',
  'Commit minimum 2 hours/week',
  'Pass our vetting process',
];

const colorClasses = {
  purple: 'bg-growth-purple/10 text-growth-purple',
  green: 'bg-success-green/10 text-success-green',
  amber: 'bg-energy-amber/10 text-energy-amber',
  blue: 'bg-blue-100 text-blue-600',
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-bg-light">
      {/* Hero */}
      <section className="bg-gradient-to-br from-growth-purple/10 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              How GrowthMentor Works
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A simple, effective way to accelerate your marketing career through personalized mentoring
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Mentees */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="For Mentees"
            title="Your Journey to Growth"
            description="Start learning from experts in 5 simple steps"
          />

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-growth-purple via-success-green to-energy-amber" />

            <div className="grid md:grid-cols-5 gap-6">
              {menteeSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step number */}
                  <div className="w-10 h-10 bg-growth-purple text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold relative z-10">
                    {step.step}
                  </div>

                  <Card className="text-center h-full">
                    <div className="w-14 h-14 bg-growth-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-growth-purple" />
                    </div>
                    <h3 className="font-bold text-text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-text-secondary">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Session Types"
            title="Choose Your Session"
            description="Different session types for different needs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionTypes.map((session, index) => (
              <motion.div
                key={session.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${colorClasses[session.color]}`}
                  >
                    <session.icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-bold text-text-primary mb-1">{session.title}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <Badge color={session.color} size="sm">
                      {session.duration}
                    </Badge>
                    <span className="text-sm font-medium text-text-secondary">
                      {session.priceRange}
                    </span>
                  </div>

                  <p className="text-sm text-text-secondary">{session.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Mentors */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-success-green/10 text-success-green text-sm font-semibold rounded-full mb-4">
                For Mentors
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Benefits of Being a Mentor
              </h2>
              <p className="text-text-secondary mb-8">
                Share your expertise while earning extra income and building your personal brand
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {mentorBenefits.map((benefit) => (
                  <Card key={benefit.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-success-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-success-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{benefit.title}</h4>
                      <p className="text-sm text-text-secondary">{benefit.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  Requirements to Become a Mentor
                </h3>

                <ul className="space-y-4 mb-8">
                  {mentorRequirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{req}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/become-mentor">
                  <Button icon={ArrowRight} iconPosition="right" className="w-full">
                    Apply to Become a Mentor
                  </Button>
                </Link>
              </Card>
            </motion.div>
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
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Find your perfect mentor and start your journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mentors">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-growth-purple"
                >
                  Find Your Mentor
                </Button>
              </Link>
              <Link to="/become-mentor">
                <Button
                  size="lg"
                  className="bg-white text-growth-purple hover:bg-gray-100"
                >
                  Become a Mentor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
