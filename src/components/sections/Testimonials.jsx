import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SectionTitle } from '../ui';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Success Stories"
          title="What Our Mentees Say"
          description="Real feedback from marketers who transformed their careers"
        />

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-border-light"
            >
              <Quote className="w-10 h-10 text-growth-purple/20 mb-4" />

              <p className="text-text-primary mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border-light flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-energy-amber fill-current" />
                  ))}
                </div>
                <span className="text-xs text-text-muted">
                  Mentored by {testimonial.mentorName}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-border-light"
              >
                <Quote className="w-10 h-10 text-growth-purple/20 mb-4" />

                <p className="text-text-primary mb-6 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-text-primary">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border-light flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-energy-amber fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-text-muted">
                    Mentored by {testimonials[currentIndex].mentorName}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-text-primary" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    w-2 h-2 rounded-full transition-colors
                    ${index === currentIndex ? 'bg-growth-purple' : 'bg-gray-300'}
                  `}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
