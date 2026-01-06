import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  HelpCircle,
  Building,
} from 'lucide-react';
import { SectionTitle, Card, Button, Badge } from '../components/ui';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'For general inquiries',
    contact: 'hello@growthmentor.id',
    link: 'mailto:hello@growthmentor.id',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Available 9AM - 6PM WIB',
    contact: 'Start a chat',
    link: '#',
  },
  {
    icon: Building,
    title: 'For Teams',
    description: 'Enterprise solutions',
    contact: 'teams@growthmentor.id',
    link: 'mailto:teams@growthmentor.id',
  },
];

const faqs = [
  {
    question: 'How long does it take to get a response?',
    answer: 'We typically respond within 24 hours on business days. For urgent matters, please use live chat.',
  },
  {
    question: 'How do I report an issue with a session?',
    answer: 'Please email us at support@growthmentor.id with details about the session and we will investigate.',
  },
  {
    question: 'Can I request a specific mentor?',
    answer: 'You can browse all available mentors and book directly with them based on their availability.',
  },
  {
    question: 'How do refunds work?',
    answer: 'If you cancel 24+ hours before a session, you get a full refund. Late cancellations may be subject to fees.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general',
    });
  };

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Hero */}
      <section className="bg-gradient-to-br from-growth-purple/10 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center group cursor-pointer hover:border-growth-purple transition-colors">
                  <div className="w-14 h-14 bg-growth-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-growth-purple transition-colors">
                    <method.icon className="w-7 h-7 text-growth-purple group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-text-primary mb-1">{method.title}</h3>
                  <p className="text-sm text-text-muted mb-2">{method.description}</p>
                  <p className="text-growth-purple font-medium">{method.contact}</p>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      What can we help you with?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { value: 'general', label: 'General Inquiry' },
                        { value: 'support', label: 'Support' },
                        { value: 'teams', label: 'For Teams' },
                        { value: 'mentor', label: 'Become Mentor' },
                        { value: 'partnership', label: 'Partnership' },
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, type: type.value }))}
                          className={`
                            px-4 py-2 text-sm rounded-lg border transition-colors
                            ${
                              formData.type === type.value
                                ? 'bg-growth-purple text-white border-growth-purple'
                                : 'bg-white text-text-secondary border-border hover:border-growth-purple'
                            }
                          `}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
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
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-growth-purple resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" icon={Send}>
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Office Info */}
              <Card>
                <h3 className="font-bold text-text-primary mb-4">Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-growth-purple flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-text-secondary">
                        Jl. Sudirman No. 123<br />
                        Jakarta Selatan 12190<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-growth-purple" />
                    <p className="text-text-secondary">
                      Mon - Fri: 9:00 AM - 6:00 PM WIB
                    </p>
                  </div>
                </div>
              </Card>

              {/* FAQs */}
              <Card>
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-5 h-5 text-growth-purple" />
                  <h3 className="font-bold text-text-primary">Quick Answers</h3>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <h4 className="font-medium text-text-primary text-sm mb-1">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-text-secondary">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social */}
              <Card className="bg-gradient-to-br from-growth-purple/5 to-growth-purple/10 border-growth-purple/20">
                <h3 className="font-bold text-text-primary mb-4">Follow Us</h3>
                <p className="text-text-secondary mb-4">
                  Stay updated with the latest marketing insights and community news.
                </p>
                <div className="flex gap-3">
                  {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-text-secondary hover:text-growth-purple hover:bg-growth-purple/5 transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-text-muted mx-auto mb-2" />
              <p className="text-text-muted">Map Integration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
