import { FC } from 'react';
import { ArrowRight, Leaf, Flower2, Scissors, Sprout, ShieldAlert, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '@/components/ui/FadeIn';

const services = [
  {
    id: 'maintenance',
    title: 'Garden Maintenance',
    description: 'Regular care to keep gardens healthy, neat, and beautiful.',
    icon: Flower2,
  },
  {
    id: 'mowing',
    title: 'Lawn Mowing',
    description: 'Professional lawn care services for a clean and well-maintained appearance.',
    icon: Leaf,
  },
  {
    id: 'hedge',
    title: 'Hedge Trimming',
    description: 'Precise trimming and shaping to keep hedges looking their best.',
    icon: Scissors,
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    description: 'Custom landscaping solutions designed to enhance outdoor spaces.',
    icon: Sprout,
  },
  {
    id: 'cleanup',
    title: 'Garden Clean-Ups',
    description: 'Seasonal and one-time clean-up services to refresh outdoor areas.',
    icon: Sparkles,
  }
];

export const ServiceCards: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <FadeIn key={service.id} delay={index * 0.1}>
            <Link 
              to={`/services#${service.id}`}
              className="group block h-full bg-white rounded-3xl p-8 border border-earth-100 shadow-sm hover:shadow-xl hover:border-earth-200 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sage-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out z-0" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-earth-50 text-earth-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-charcoal mb-4 group-hover:text-primary-800 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sage-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sm font-semibold tracking-wide text-primary-700 uppercase mt-auto">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </FadeIn>
        );
      })}
    </div>
  );
};
