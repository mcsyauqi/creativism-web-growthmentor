import { Link } from 'react-router-dom';
import { Rocket, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const footerLinks = {
  forMentees: {
    title: 'For Mentees',
    links: [
      { name: 'Find Mentors', path: '/mentors' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Topics', path: '/topics' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Success Stories', path: '/about#testimonials' },
    ],
  },
  forMentors: {
    title: 'For Mentors',
    links: [
      { name: 'Become a Mentor', path: '/become-mentor' },
      { name: 'Mentor Benefits', path: '/become-mentor#benefits' },
      { name: 'Mentor Requirements', path: '/become-mentor#requirements' },
      { name: 'Earnings Calculator', path: '/become-mentor#calculator' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/contact' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'FAQ', path: '/faq' },
      { name: 'Help Center', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  },
};

const socialLinks = [
  { icon: Linkedin, url: '#', label: 'LinkedIn' },
  { icon: Twitter, url: '#', label: 'Twitter' },
  { icon: Instagram, url: '#', label: 'Instagram' },
  { icon: Mail, url: 'mailto:hello@growthmentor.id', label: 'Email' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#111827', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Main Footer */}
        <div style={{
          padding: '64px 0',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: '32px'
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', textDecoration: 'none' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#8B5CF6',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Rocket style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'white' }}>
                Growth<span style={{ color: '#A78BFA' }}>Mentor</span>
              </span>
            </Link>
            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
              Accelerate your marketing career with 1-on-1 mentoring from industry experts.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    transition: 'background 0.2s'
                  }}
                >
                  <social.icon style={{ width: '20px', height: '20px' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 style={{ fontWeight: '600', marginBottom: '16px', fontSize: '14px' }}>{section.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.links.map((link) => (
                  <li key={link.name} style={{ marginBottom: '8px' }}>
                    <Link
                      to={link.path}
                      style={{
                        color: '#9CA3AF',
                        fontSize: '14px',
                        textDecoration: 'none',
                        transition: 'color 0.2s'
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{
          padding: '24px 0',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{ color: '#9CA3AF', fontSize: '14px' }}>
            © {new Date().getFullYear()} GrowthMentor. Created by{' '}
            <a
              href="https://creativism.id"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#A78BFA', textDecoration: 'none' }}
            >
              Creativism
            </a>
          </p>
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
            <Link to="/privacy" style={{ color: '#9CA3AF', textDecoration: 'none' }}>
              Privacy
            </Link>
            <Link to="/terms" style={{ color: '#9CA3AF', textDecoration: 'none' }}>
              Terms
            </Link>
            <Link to="/cookies" style={{ color: '#9CA3AF', textDecoration: 'none' }}>
              Cookies
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
