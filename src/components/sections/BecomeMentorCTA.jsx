import { Link } from 'react-router-dom';
import { DollarSign, Heart, Award, ArrowRight } from 'lucide-react';
import { Button } from '../ui';

const benefits = [
  { icon: DollarSign, text: 'Set your own rate' },
  { icon: Heart, text: 'Give back' },
  { icon: Award, text: 'Build reputation' },
];

const earningsBreakdown = [
  { label: 'Sessions per week', value: '5 sessions' },
  { label: 'Rate per session', value: 'Rp 500.000' },
  { label: 'Weeks per month', value: '4 weeks' },
];

export default function BecomeMentorCTA() {
  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Content */}
          <div style={{ color: 'white' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              marginBottom: '16px'
            }}>
              Share Your Expertise, Get Paid 💰
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              Punya 5+ tahun experience di digital marketing? Jadi mentor dan inspire the next generation sambil earn extra income.
            </p>

            <Link to="/become-mentor">
              <Button
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                style={{
                  background: 'white',
                  color: '#D97706'
                }}
              >
                Apply as Mentor
              </Button>
            </Link>

            {/* Benefits preview */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              marginTop: '32px'
            }}>
              {benefits.map((item) => (
                <div key={item.text} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <item.icon style={{ width: '16px', height: '16px' }} />
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Earnings preview */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
            color: '#111827'
          }}>
            <h4 style={{
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '24px'
            }}>
              Potential Monthly Earnings
            </h4>

            <div style={{ marginBottom: '24px' }}>
              {earningsBreakdown.map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: '1px solid #E5E7EB'
                }}>
                  <span style={{ color: '#6B7280' }}>{item.label}</span>
                  <span style={{ fontWeight: '600' }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{
              background: '#FEF3C7',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontWeight: '600', color: '#111827' }}>Estimated Earnings</span>
                <span style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#D97706'
                }}>
                  Rp 10.000.000
                </span>
              </div>
              <p style={{
                fontSize: '12px',
                color: '#6B7280',
                marginTop: '4px'
              }}>
                Top mentors earn Rp 10-30 juta/bulan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
