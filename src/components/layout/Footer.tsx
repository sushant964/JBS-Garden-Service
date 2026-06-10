import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Phone, Instagram, Mail, MapPin } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const Footer: FC = () => {
  return (
    <footer className="bg-sage-900 border-t border-sage-800 text-sage-100 pt-20 pb-10">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 rounded-lg bg-primary-500/20 text-primary-300">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-serif font-semibold text-xl text-white">JBS Garden Service</span>
            </div>
            <p className="text-sage-300 mb-6 max-w-sm">
              Creating Beautiful Outdoor Spaces. Professional gardening, lawn care, landscaping, and outdoor maintenance services.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h4 className="font-serif font-medium text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Best Of Our Work', path: '/work' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-sage-300 hover:text-white transition-colors">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h4 className="font-serif font-medium text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0475771717" className="flex items-center gap-3 text-sage-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center group-hover:bg-primary-700 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-sage-400 mb-0.5">Call Us</p>
                    <p className="font-medium">0475 771 717</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:hello@jbsgardenservice.com" className="flex items-center gap-3 text-sage-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center group-hover:bg-primary-700 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-sage-400 mb-0.5">Email</p>
                    <p className="font-medium">hello@jbsgardenservice.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h4 className="font-serif font-medium text-lg text-white mb-6">Follow Us</h4>
            <a 
              href="https://www.instagram.com/jbsgardenservice" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sage-300 hover:text-white transition-colors w-fit group"
            >
              <div className="w-12 h-12 rounded-full bg-sage-800 flex items-center justify-center group-hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 transition-all">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">JBS Garden Service</span>
            </a>
          </FadeIn>
        </div>

        <div className="pt-8 border-t border-sage-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sage-400">
          <p>© {new Date().getFullYear()} JBS Garden Service. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sage-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sage-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
