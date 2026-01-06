import { Search, Calendar, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Find Your Match',
    emoji: '🔍',
    description: 'Browse mentor profiles berdasarkan expertise, industry, dan availability. Filter sesuai kebutuhanmu.',
    color: '#8B5CF6',
    bgColor: '#EDE9FE',
  },
  {
    icon: Calendar,
    title: 'Book a Session',
    emoji: '📅',
    description: 'Pilih slot yang cocok. 30 atau 60 menit. Video call. Bayar aman via platform.',
    color: '#10B981',
    bgColor: '#D1FAE5',
  },
  {
    icon: TrendingUp,
    title: 'Grow Together',
    emoji: '📈',
    description: 'Diskusi, dapat insights, dan take action dengan accountability. Repeat until you achieve your goals.',
    color: '#F59E0B',
    bgColor: '#FEF3C7',
  },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
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
            Simple Process
          </span>
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
            How It Works
          </h2>
          <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
            Mulai perjalanan mentoringmu dalam 3 langkah sederhana
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px'
        }}>
          {steps.map((step, index) => (
            <div key={step.title} style={{ textAlign: 'center' }}>
              {/* Step number */}
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: step.color,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: '700',
                margin: '0 auto 24px'
              }}>
                {index + 1}
              </div>

              {/* Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: step.bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <step.icon style={{ width: '40px', height: '40px', color: step.color }} />
              </div>

              {/* Content */}
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
                {step.title} {step.emoji}
              </h3>
              <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
