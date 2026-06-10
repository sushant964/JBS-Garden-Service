import { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

interface CTAProps {
  headline?: string;
  buttonText?: string;
}

export const FinalCTA: FC<CTAProps> = ({ 
  headline = "Ready To Transform Your Garden?", 
  buttonText = "Request A Free Quote" 
}) => {
  return (
    <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,100 C20,0 50,0 100,100 Z" className="fill-primary-700" />
        </svg>
      </div>
      
      <div className="container mx-auto max-w-4xl px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-8">
            {headline}
          </h2>
          <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Get in touch today for professional gardening services. We provide flexible maintenance plans and expert landscaping solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-earth-500 hover:bg-earth-600 text-white rounded-full font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5 outline-none focus-visible:ring-4 focus-visible:ring-earth-500/40"
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:0475771717" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-semibold transition-all outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              Call 0475 771 717
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
