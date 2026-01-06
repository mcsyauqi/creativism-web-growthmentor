import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  Users,
  Award,
  Rocket,
  ArrowRight,
  Quote,
  Star,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { SectionTitle, Card, Button, Badge } from '../components/ui';
import { stats } from '../data/testimonials';

const values = [
  {
    icon: Target,
    title: 'Impact First',
    description: 'Every decision we make is about creating real impact for our mentees and mentors.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'We believe in the power of community and peer-to-peer learning.',
  },
  {
    icon: Award,
    title: 'Quality Over Quantity',
    description: 'We carefully vet every mentor to ensure the highest quality experience.',
  },
  {
    icon: Rocket,
    title: 'Growth Mindset',
    description: 'We embrace continuous learning and improvement, just like our users.',
  },
];

const team = [
  {
    name: 'Andi Pratama',
    role: 'Founder & CEO',
    bio: 'Former Head of Growth at unicorn startup. 12 years in digital marketing.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Lisa Hartono',
    role: 'Co-Founder & COO',
    bio: 'Ex-McKinsey consultant. Passionate about democratizing education.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Reza Firmansyah',
    role: 'Head of Product',
    bio: 'Product leader with experience at multiple tech unicorns.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Maya Sari',
    role: 'Head of Community',
    bio: 'Community builder. Former marketing educator at top university.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
];

const milestones = [
  { year: '2022', title: 'Founded', description: 'GrowthMentor launched with 10 mentors' },
  { year: '2023', title: '1,000 Sessions', description: 'Reached first 1,000 mentoring sessions' },
  { year: '2023', title: '50 Mentors', description: 'Expanded mentor network to 50+ experts' },
  { year: '2024', title: '5,000 Sessions', description: 'Facilitated over 5,000 sessions' },
];

const press = [
  { name: 'TechCrunch', logo: 'TC' },
  { name: 'Forbes Indonesia', logo: 'Forbes' },
  { name: 'DailySocial', logo: 'DS' },
  { name: 'Tech in Asia', logo: 'TIA' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-bg-light">
      {/* Hero */}
      <section className="bg-gradient-to-br from-growth-purple/10 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge color="purple" size="md" className="mb-4">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Democratizing Access to World-Class Marketing Mentorship
            </h1>
            <p className="text-lg text-text-secondary">
              We believe the best marketers learned from other great marketers, not just from courses. We're making that mentorship accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                The Story Behind GrowthMentor
              </h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  GrowthMentor started from a simple observation: the best marketers we knew all had one thing in common - they learned from other great marketers through mentorship, not just from courses or books.
                </p>
                <p>
                  We realized that access to quality mentorship was limited to those lucky enough to know the right people. Junior marketers at smaller companies often didn't have senior mentors to guide them.
                </p>
                <p>
                  So we built a platform to change that - connecting marketers who want to grow with experts who've been there. Since 2022, we've facilitated over 5,000 mentoring sessions and helped hundreds of marketers accelerate their careers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: `${stats.marketersHelped}+`, label: 'Marketers Helped' },
                  { value: `${stats.mentorsCount}+`, label: 'Expert Mentors' },
                  { value: `${stats.sessionsCompleted}+`, label: 'Sessions Completed' },
                  { value: stats.averageRating, label: 'Average Rating' },
                ].map((stat) => (
                  <Card key={stat.label} className="text-center">
                    <p className="text-3xl font-bold text-growth-purple mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-text-muted">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-growth-purple to-growth-purple-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="w-16 h-16 mx-auto mb-6 opacity-50" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl font-light leading-relaxed">
              "Democratize access to world-class marketing mentorship, so every marketer can reach their full potential regardless of their background or network."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Values"
            title="What We Believe In"
            description="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="w-14 h-14 bg-growth-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-growth-purple" />
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-text-secondary">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Journey"
            title="Milestones"
            description="Key moments in our growth story"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-growth-purple/20 transform md:-translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year + milestone.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-growth-purple rounded-full transform -translate-x-1/2 z-10" />
                <Card className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Badge color="purple" size="sm" className="mb-2">
                    {milestone.year}
                  </Badge>
                  <h4 className="font-bold text-text-primary">{milestone.title}</h4>
                  <p className="text-sm text-text-secondary">{milestone.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Team"
            title="Meet the Founders"
            description="Passionate marketers building for marketers"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-growth-purple/20"
                  />
                  <h4 className="font-bold text-text-primary">{member.name}</h4>
                  <p className="text-sm text-growth-purple font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-text-secondary mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-2">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-growth-purple hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-growth-purple hover:text-white transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="In the Press"
            title="Featured In"
            description="Recognized by leading publications"
          />

          <div className="flex flex-wrap justify-center items-center gap-8">
            {press.map((publication) => (
              <motion.div
                key={publication.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white px-8 py-4 rounded-xl shadow-sm border border-border-light"
              >
                <span className="text-xl font-bold text-text-muted">{publication.logo}</span>
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
              Join the GrowthMentor Community
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Whether you want to learn or teach, there's a place for you here
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mentors">
                <Button
                  size="lg"
                  className="bg-white text-growth-purple hover:bg-gray-100"
                >
                  Find a Mentor
                </Button>
              </Link>
              <Link to="/become-mentor">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-growth-purple"
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
