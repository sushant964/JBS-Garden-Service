import { FC } from 'react';
import { images } from '@/lib/images';
import { FadeIn } from '@/components/ui/FadeIn';
import { ServiceCards } from '@/components/ui/ServiceCards';
import { CheckCircle2, ShieldCheck, ArrowRight, HeartHandshake, Leaf, Sprout, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FinalCTA } from '@/components/ui/FinalCTA';

export const Home: FC = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-sage-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.hero} 
            alt="Beautiful maintained garden" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sage-950/90 via-sage-900/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-earth-50 to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sage-100 font-medium text-sm mb-6 backdrop-blur-md">
                <Leaf className="w-4 h-4 text-primary-400" />
                Bringing Gardens To Life
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-sm">
                Creating Beautiful <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-earth-300">Outdoor Spaces.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-sage-100 leading-relaxed mb-10 max-w-2xl drop-shadow">
                Professional gardening and landscaping services dedicated to keeping your outdoor spaces healthy, beautiful, and well-maintained.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link to="/contact" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-semibold text-center transition-all shadow-lg shadow-primary-900/20 hover:shadow-xl hover:-translate-y-0.5">
                Get A Free Quote
              </Link>
              <Link to="/work" className="px-8 py-4 bg-white hover:bg-earth-50 text-charcoal rounded-full font-semibold text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                View Our Work
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-sage-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-earth-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary-200/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-4xl font-serif font-bold text-charcoal mb-6 text-center">
                Why Choose <span className="text-primary-700">JBS Garden Service?</span>
              </h2>
              <p className="text-lg text-sage-700 mb-12 leading-relaxed text-center">
                We treat every garden as if it were our own. Our passion for horticulture, combined with meticulous attention to detail, ensures your outdoor spaces thrive year-round.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {[
                  { icon: Sprout, title: "Experienced Garden Professionals" },
                  { icon: HeartHandshake, title: "Reliable & Friendly Service" },
                  { icon: CheckCircle2, title: "Attention To Detail" },
                  { icon: Leaf, title: "Affordable Garden Solutions" },
                  { icon: ShieldCheck, title: "Customer Satisfaction" },
                  { icon: Flower2, title: "Beautiful Results Every Time" },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-white p-2.5 rounded-xl shadow-sm text-earth-500 border border-earth-100 flex-shrink-0">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-charcoal leading-tight mt-1.5">{feature.title}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-sage-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 text-sage-200/50 transform rotate-12 pointer-events-none">
          <Leaf className="w-96 h-96" />
        </div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 text-sage-200/50 transform -rotate-12 pointer-events-none">
          <Leaf className="w-96 h-96" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest uppercase text-earth-600 mb-3">Our Expertise</h2>
              <h3 className="text-4xl font-serif font-bold text-charcoal mb-6">Premium Garden Services</h3>
              <p className="text-sage-700 text-lg">
                Comprehensive care solutions designed to keep your property looking pristine and vibrant in every season.
              </p>
            </FadeIn>
          </div>
          
          <ServiceCards />
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-24 bg-earth-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmFmN2YyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZTNlYmUzIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-50/50 to-earth-50 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">How We Work</h2>
              <p className="text-sage-600 text-lg max-w-2xl mx-auto">Our four-step process ensures a seamless experience and exceptional results for every project.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative text-center">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[10%] w-[80%] h-px border-t-2 border-dashed border-earth-200" />

            {[
              { step: '1', title: 'Consultation', desc: 'We visit your property to understand your needs and vision.' },
              { step: '2', title: 'Planning', desc: 'We provide a detailed plan and a transparent, free quote.' },
              { step: '3', title: 'Transformation', desc: 'Our experts execute the plan with precision and care.' },
              { step: '4', title: 'Maintenance', desc: 'Ongoing care to keep your garden looking its absolute best.' }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-earth-500 text-white rounded-2xl flex items-center justify-center font-serif font-bold text-3xl shadow-lg border-4 border-earth-50 mb-6 mx-auto group">
                   Step {item.step}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-sage-600 px-4">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
