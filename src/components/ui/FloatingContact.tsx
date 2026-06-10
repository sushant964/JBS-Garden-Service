import { FC } from 'react';
import { motion } from 'motion/react';
import { Phone, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingContact: FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      >
        <Link 
          to="/contact"
          className="w-14 h-14 bg-earth-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-earth-700 hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-4 focus-visible:ring-earth-600/30"
          aria-label="Request a quote"
        >
          <Quote className="w-5 h-5" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 20 }}
      >
        <a 
          href="tel:0475771717"
          className="w-14 h-14 bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-800 hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-4 focus-visible:ring-primary-700/30"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
};
