import { TrendingUp, DollarSign, ThumbsUp, Star } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '85%',
    label: 'got promoted within 6 months',
  },
  {
    icon: DollarSign,
    value: '3x',
    label: 'average salary increase',
  },
  {
    icon: ThumbsUp,
    value: '92%',
    label: 'would recommend to a friend',
  },
  {
    icon: Star,
    value: '4.9',
    label: 'average mentor rating',
  },
];

export default function SuccessMetrics() {
  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            borderRadius: '9999px',
            marginBottom: '16px'
          }}>
            Proven Results
          </span>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            color: 'white',
            marginBottom: '16px'
          }}>
            Real Results from Real Marketers
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Our mentees achieve measurable success in their marketing careers
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px'
        }}>
          {metrics.map((metric) => (
            <div
              key={metric.label}
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <metric.icon style={{ width: '28px', height: '28px', color: 'white' }} />
              </div>
              <p style={{
                fontSize: '36px',
                fontWeight: '700',
                color: 'white',
                marginBottom: '8px'
              }}>
                {metric.value}
              </p>
              <p style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '14px'
              }}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
