import { Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section style={{ padding: '80px 0', background: '#FAFAFA' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: '#EDE9FE',
            color: '#7C3AED',
            fontSize: '14px',
            fontWeight: '600',
            borderRadius: '9999px',
            marginBottom: '16px'
          }}>
            Success Stories
          </span>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '16px'
          }}>
            What Our Mentees Say
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Real feedback from marketers who transformed their careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                border: '1px solid #E5E7EB'
              }}
            >
              <Quote style={{
                width: '40px',
                height: '40px',
                color: '#EDE9FE',
                marginBottom: '16px'
              }} />

              <p style={{
                color: '#374151',
                marginBottom: '24px',
                lineHeight: '1.6',
                fontSize: '15px'
              }}>
                "{testimonial.quote}"
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontWeight: '600',
                    color: '#111827',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {testimonial.name}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              <div style={{
                marginTop: '16px',
                paddingTop: '16px',
                borderTop: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} style={{
                      width: '16px',
                      height: '16px',
                      color: '#F59E0B',
                      fill: '#F59E0B'
                    }} />
                  ))}
                </div>
                <span style={{ fontSize: '12px', color: '#9CA3AF' }}>
                  Mentored by {testimonial.mentorName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
