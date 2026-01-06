import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Heart,
  Award,
  BookOpen,
  Clock,
  CheckCircle,
  Calculator,
  ArrowRight,
  Linkedin,
  Briefcase,
  Mail,
  User,
} from 'lucide-react';
import { SectionTitle, Card, Button, Badge } from '../components/ui';
import { expertiseOptions } from '../data/mentors';

const benefits = [
  {
    icon: DollarSign,
    title: 'Flexible Side Income',
    description: 'Set your own rate. Top mentors earn Rp 10-30 juta per month with just a few hours per week.',
  },
  {
    icon: Heart,
    title: 'Give Back',
    description: 'Help the next generation of marketers grow. Share your experience and make a real impact.',
  },
  {
    icon: Award,
    title: 'Build Reputation',
    description: 'Establish yourself as a thought leader. Get recognized for your expertise.',
  },
  {
    icon: BookOpen,
    title: 'Learn by Teaching',
    description: 'Sharpening your own skills while helping others. Teaching is the best form of learning.',
  },
];

const requirements = [
  '5+ years digital marketing experience',
  'Currently working or recently worked at reputable company',
  'Strong communication skills in Indonesian or English',
  'Commit minimum 2 hours per week',
  'Pass our vetting process and interview',
  'Genuine desire to help others grow',
];

const howItWorks = [
  {
    step: 1,
    title: 'Apply',
    description: 'Fill out our application form with your background and expertise',
  },
  {
    step: 2,
    title: 'Interview',
    description: "We'll schedule a call to learn more about you and your experience",
  },
  {
    step: 3,
    title: 'Onboarding',
    description: 'Set up your profile, pricing, and availability',
  },
  {
    step: 4,
    title: 'Start Mentoring',
    description: 'Get matched with mentees and start making an impact',
  },
];

export default function BecomeMentor() {
  const [sessionsPerWeek, setSessionsPerWeek] = useState(5);
  const [ratePerSession, setRatePerSession] = useState(500000);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    role: '',
    company: '',
    experience: '',
    expertise: [],
    motivation: '',
  });

  const monthlyEarnings = sessionsPerWeek * ratePerSession * 4;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExpertiseToggle = (expertise) => {
    setFormData((prev) => ({
      ...prev,
      expertise: prev.expertise.includes(expertise)
        ? prev.expertise.filter((e) => e !== expertise)
        : [...prev.expertise, expertise],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your application! We will review and get back to you within 5 business days.');
  };

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Hero */}
      <section className="bg-gradient-to-br from-energy-amber/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge color="amber" size="md" className="mb-4">
              Join Our Mentor Community
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Become a GrowthMentor
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Share your expertise. Get paid. Inspire the next generation of digital marketers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Mentor */}
      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Why Mentor?"
            title="Benefits of Being a Mentor"
            description="More than just extra income - it's about making an impact"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="w-14 h-14 bg-energy-amber/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-energy-amber" />
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-text-secondary">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge color="amber" size="md" className="mb-4">
                <Calculator className="w-4 h-4 mr-1" />
                Earnings Calculator
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                How Much Can You Earn?
              </h2>
              <p className="text-text-secondary mb-8">
                Top mentors earn Rp 10-30 juta per month. Adjust the sliders to estimate your potential earnings.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="flex justify-between text-sm font-medium text-text-primary mb-2">
                    <span>Sessions per week</span>
                    <span className="text-growth-purple">{sessionsPerWeek} sessions</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={sessionsPerWeek}
                    onChange={(e) => setSessionsPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-growth-purple"
                  />
                </div>

                <div>
                  <label className="flex justify-between text-sm font-medium text-text-primary mb-2">
                    <span>Rate per session</span>
                    <span className="text-growth-purple">{formatPrice(ratePerSession)}</span>
                  </label>
                  <input
                    type="range"
                    min="200000"
                    max="1000000"
                    step="50000"
                    value={ratePerSession}
                    onChange={(e) => setRatePerSession(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-growth-purple"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-energy-amber/10 to-energy-amber/5 border-energy-amber/20">
                <h4 className="font-bold text-text-primary mb-6">Estimated Monthly Earnings</h4>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Sessions per week</span>
                    <span className="font-semibold">{sessionsPerWeek} sessions</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Rate per session</span>
                    <span className="font-semibold">{formatPrice(ratePerSession)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Weeks per month</span>
                    <span className="font-semibold">4 weeks</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-energy-amber/20">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Earnings</span>
                    <span className="text-3xl font-bold text-energy-amber">
                      {formatPrice(monthlyEarnings)}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mt-2">
                    *Estimates based on {sessionsPerWeek * 4} sessions per month
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Requirements"
                title="Who Can Be a Mentor?"
                description="We're looking for experienced marketers who want to give back"
                centered={false}
              />

              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.li
                    key={req}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-success-green flex-shrink-0" />
                    <span className="text-text-secondary">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <SectionTitle
                subtitle="Process"
                title="How It Works"
                description="Simple 4-step process to become a mentor"
                centered={false}
              />

              <div className="space-y-4">
                {howItWorks.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-growth-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{step.title}</h4>
                      <p className="text-sm text-text-secondary">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Apply Now"
            title="Start Your Mentor Journey"
            description="Fill out the form below and we'll get back to you within 5 business days"
          />

          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  <Linkedin className="w-4 h-4 inline mr-2" />
                  LinkedIn Profile *
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    <Briefcase className="w-4 h-4 inline mr-2" />
                    Current Role *
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple"
                    placeholder="e.g., Head of Marketing"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple"
                    placeholder="Current company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple bg-white"
                >
                  <option value="">Select years of experience</option>
                  <option value="5-7">5-7 years</option>
                  <option value="8-10">8-10 years</option>
                  <option value="11-15">11-15 years</option>
                  <option value="15+">15+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Areas of Expertise *
                </label>
                <p className="text-sm text-text-muted mb-3">Select all that apply</p>
                <div className="flex flex-wrap gap-2">
                  {expertiseOptions.map((expertise) => (
                    <button
                      key={expertise}
                      type="button"
                      onClick={() => handleExpertiseToggle(expertise)}
                      className={`
                        px-3 py-1.5 text-sm rounded-full border transition-colors
                        ${
                          formData.expertise.includes(expertise)
                            ? 'bg-growth-purple text-white border-growth-purple'
                            : 'bg-white text-text-secondary border-border hover:border-growth-purple'
                        }
                      `}
                    >
                      {expertise}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Why do you want to be a mentor? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple resize-none"
                  placeholder="Tell us about your motivation to mentor others..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full" icon={ArrowRight} iconPosition="right">
                Submit Application
              </Button>

              <p className="text-xs text-text-muted text-center">
                By submitting, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
