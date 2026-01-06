import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import Button from '../ui/Button';

const navLinks = [
  { name: 'Find Mentors', path: '/mentors' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Topics', path: '/topics' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'For Teams', path: '/pricing#teams' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s',
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
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
            <span style={{ fontSize: '20px', fontWeight: '700', color: '#111827' }}>
              Growth<span style={{ color: '#8B5CF6' }}>Mentor</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: location.pathname === link.path ? '#8B5CF6' : '#6B7280',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-nav">
            <Link to="/become-mentor">
              <Button variant="ghost" size="sm">
                Become a Mentor
              </Button>
            </Link>
            <Link to="/mentors">
              <Button size="sm">
                Find Mentor
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              padding: '8px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#111827'
            }}
            className="mobile-menu-btn"
          >
            {isOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={{
            background: 'white',
            borderTop: '1px solid #E5E7EB',
            padding: '16px 0'
          }} className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: location.pathname === link.path ? '#8B5CF6' : '#6B7280',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  background: location.pathname === link.path ? '#EDE9FE' : 'transparent'
                }}
              >
                {link.name}
              </Link>
            ))}
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/become-mentor">
                <Button variant="secondary" style={{ width: '100%' }}>
                  Become a Mentor
                </Button>
              </Link>
              <Link to="/mentors">
                <Button style={{ width: '100%' }}>
                  Find Mentor
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        .mobile-nav { display: none; }

        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-nav { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
