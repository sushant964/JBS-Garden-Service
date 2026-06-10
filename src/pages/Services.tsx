import { FC } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { FinalCTA } from '@/components/ui/FinalCTA';
import { ServiceCards } from '@/components/ui/ServiceCards';
import { CheckCircle2 } from 'lucide-react';

export const Services: FC = () => {
  return (
    <div className="pt-24 bg-earth-50">
      {/* HEADER */}
      <section className="py-20 relative bg-sage-900 overflow-hidden">
         <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-sage-800 to-sage-900" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-sage-100 max-w-2xl mx-auto leading-relaxed">
              Comprehensive garden care and landscaping solutions designed to elevate your outdoor space.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <ServiceCards />
        </div>
      </section>

      {/* DETAILED SERVICES SECTIONS */}
      <section className="py-24 bg-sage-50 border-t border-earth-100">
        <div className="container mx-auto px-6 max-w-7xl">
           <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">What To Expect</h2>
            <p className="text-lg text-sage-700 max-w-2xl mx-auto">
              Our professional approach ensures every service is delivered to the highest standard.
            </p>
          </FadeIn>

           <div className="max-w-3xl mx-auto mb-24 text-center">
             <FadeIn direction="up">
               <h3 className="text-3xl font-serif font-bold text-charcoal mb-6">Garden Maintenance Programs</h3>
               <p className="text-sage-700 text-lg mb-6 leading-relaxed">
                 We offer flexible maintenance schedules tailored to your garden's specific needs and the changing seasons. Whether you need weekly mows or quarterly deep cleans, we have you covered.
               </p>
               <ul className="space-y-4 max-w-md mx-auto text-left">
                 {[
                   "Customized care plans based on plant varieties",
                   "Soil health focused maintenance",
                   "Seasonal pruning and deadheading",
                   "Pest and disease monitoring"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-charcoal font-medium">
                     <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
             </FadeIn>
           </div>

           <div className="max-w-3xl mx-auto text-center">
             <FadeIn direction="up">
               <h3 className="text-3xl font-serif font-bold text-charcoal mb-6">Custom Landscaping Solutions</h3>
               <p className="text-sage-700 text-lg mb-6 leading-relaxed">
                 Ready for a change? Our landscaping services can transform an underutilized yard into a stunning, functional outdoor living area.
               </p>
               <ul className="space-y-4 max-w-md mx-auto text-left">
                 {[
                   "Hardscaping (patios, pathways, retaining walls)",
                   "Softscaping (garden beds, planting design, turf)",
                   "Mulch and soil installation",
                   "Drought-tolerant garden design"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-charcoal font-medium">
                     <CheckCircle2 className="w-6 h-6 text-earth-500 shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
             </FadeIn>
           </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
