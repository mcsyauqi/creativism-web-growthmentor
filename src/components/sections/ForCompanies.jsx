import { Link } from 'react-router-dom';
import { Users, LayoutDashboard, LineChart, UserCheck, ArrowRight } from 'lucide-react';
import { Button } from '../ui';

const features = [
  {
    icon: Users,
    title: 'Bulk Session Packages',
    description: 'Volume discounts untuk team training',
  },
  {
    icon: LayoutDashboard,
    title: 'Team Dashboard',
    description: 'Track semua sessions dan progress',
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Reports dan analytics per team member',
  },
  {
    icon: UserCheck,
    title: 'Custom Mentor Matching',
    description: 'Dedicated mentor pool untuk team',
  },
];

const skills = [
  { name: 'Performance Marketing', progress: 85 },
  { name: 'SEO & Content', progress: 70 },
  { name: 'Analytics', progress: 60 },
];

const stats = [
  { value: '12', label: 'Team Members' },
  { value: '45', label: 'Sessions' },
  { value: '4.9', label: 'Avg Rating' },
];

export default function ForCompanies() {
  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Content */}
          <div>
            <span style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: '#D1FAE5',
              color: '#10B981',
              fontSize: '14px',
              fontWeight: '600',
              borderRadius: '9999px',
              marginBottom: '16px'
            }}>
              For Teams
            </span>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '16px'
            }}>
              GrowthMentor for Teams
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6B7280',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              Invest in your marketing team's growth. Give them access to world-class mentors and watch them transform.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {features.map((feature) => (
                <div
                  key={feature.title}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#D1FAE5',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <feature.icon style={{ width: '20px', height: '20px', color: '#10B981' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                      {feature.title}
                    </h4>
                    <p style={{ fontSize: '14px', color: '#6B7280' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/pricing#teams">
              <Button variant="success" icon={ArrowRight} iconPosition="right">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Visual */}
          <div style={{
            background: '#ECFDF5',
            borderRadius: '24px',
            padding: '32px'
          }}>
            {/* Team dashboard mockup */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              padding: '24px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <h4 style={{ fontWeight: '600', color: '#111827' }}>Team Progress</h4>
                <span style={{ fontSize: '14px', color: '#10B981', fontWeight: '500' }}>This Month</span>
              </div>

              {/* Progress bars */}
              {skills.map((skill) => (
                <div key={skill.name} style={{ marginBottom: '16px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '14px',
                    marginBottom: '4px'
                  }}>
                    <span style={{ color: '#6B7280' }}>{skill.name}</span>
                    <span style={{ color: '#111827', fontWeight: '500' }}>{skill.progress}%</span>
                  </div>
                  <div style={{
                    height: '8px',
                    background: '#F3F4F6',
                    borderRadius: '9999px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${skill.progress}%`,
                      background: '#10B981',
                      borderRadius: '9999px'
                    }} />
                  </div>
                </div>
              ))}

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                marginTop: '24px',
                paddingTop: '24px',
                borderTop: '1px solid #E5E7EB'
              }}>
                {stats.map((stat) => (
                  <div key={stat.label} style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>{stat.value}</p>
                    <p style={{ fontSize: '12px', color: '#6B7280' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
