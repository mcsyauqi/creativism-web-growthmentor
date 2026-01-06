import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Rocket } from 'lucide-react';
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-growth-purple rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-text-primary">
              Growth<span className="text-growth-purple">Mentor</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  text-sm font-medium transition-colors duration-200
                  ${location.pathname === link.path
                    ? 'text-growth-purple'
                    : 'text-text-secondary hover:text-growth-purple'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
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
            className="lg:hidden p-2 text-text-primary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-border-light"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      block px-4 py-3 text-sm font-medium rounded-lg
                      ${location.pathname === link.path
                        ? 'bg-growth-purple/10 text-growth-purple'
                        : 'text-text-secondary hover:bg-gray-50'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 px-4 space-y-2">
                  <Link to="/become-mentor" className="block">
                    <Button variant="secondary" className="w-full">
                      Become a Mentor
                    </Button>
                  </Link>
                  <Link to="/mentors" className="block">
                    <Button className="w-full">
                      Find Mentor
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
