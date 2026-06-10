import { FC, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { images } from '@/lib/images';
import { motion, AnimatePresence } from 'motion/react';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Best Of Our Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md ring-2 ring-white/30 bg-primary-700 flex items-center justify-center">
              <img src={images.logo} alt="JBS Garden Service Logo" className="w-full h-full object-cover" />
            </div>
            <span className={cn(
              "font-serif font-bold text-xl tracking-tight transition-colors duration-300",
              isScrolled || isOpen ? "text-charcoal" : "text-white drop-shadow-md"
            )}>
              JBS Garden Service
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => cn(
                  "text-sm font-medium transition-colors hover:text-primary-500",
                  isScrolled ? "text-charcoal" : "text-white drop-shadow-md",
                  isActive && (isScrolled ? "text-primary-600 font-semibold" : "text-primary-200 font-semibold")
                )}
              >
                {link.name}
              </NavLink>
            ))}
            <a 
              href="tel:0475771717"
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95",
                isScrolled 
                  ? "bg-primary-700 text-white hover:bg-primary-800 shadow-md hover:shadow-lg" 
                  : "bg-white/20 backdrop-blur-md text-white border border-white/40 hover:bg-white hover:text-primary-800"
              )}
            >
              <Phone className="w-4 h-4" />
              0475 771 717
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="text-charcoal w-6 h-6" />
            ) : (
              <Menu className={cn(
                "w-6 h-6 transition-colors",
                isScrolled ? "text-charcoal" : "text-white"
              )} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 md:hidden"
          >
            <div className="container mx-auto px-6 flex flex-col gap-6">
              {LINKS.map(link => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => cn(
                    "text-2xl font-serif border-b border-earth-100 pb-4",
                    isActive ? "text-primary-700 font-medium" : "text-charcoal"
                  )}
                >
                  {link.name}
                </NavLink>
              ))}
              <a 
                href="tel:0475771717"
                className="flex justify-center items-center gap-2 mt-8 py-4 px-6 bg-primary-700 text-white rounded-xl text-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                Call 0475 771 717
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
