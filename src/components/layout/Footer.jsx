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
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-growth-purple rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Growth<span className="text-growth-purple-light">Mentor</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Accelerate your marketing career with 1-on-1 mentoring from industry experts.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-growth-purple transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-growth-purple-light transition-colors duration-200"
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
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GrowthMentor. Created by{' '}
            <a
              href="https://creativism.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-growth-purple-light hover:text-growth-purple transition-colors"
            >
              Creativism
            </a>
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
