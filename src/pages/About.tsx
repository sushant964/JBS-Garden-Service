import { FC } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { FinalCTA } from '@/components/ui/FinalCTA';
import { CheckCircle2, HeartHandshake, Leaf, ShieldCheck, Star } from 'lucide-react';

export const About: FC = () => {
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
              Passionate About Beautiful Gardens
            </h1>
            <p className="text-xl text-sage-100 max-w-2xl mx-auto leading-relaxed">
              We are dedicated to bringing out the natural beauty of every outdoor space we touch.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto mb-24 text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8 leading-tight">
                Transforming the look and feel of your property.
              </h2>
              <div className="space-y-6 text-lg text-sage-700 leading-relaxed">
                <p>
                  At JBS Garden Service, we believe a well-maintained garden can completely transform the look and feel of a property. Our connection to nature drives us to deliver excellence in every project.
                </p>
                <p>
                  Our goal is to provide reliable, professional gardening and landscaping services that help homeowners and businesses enjoy beautiful outdoor spaces all year round. We understand that your garden is an extension of your home.
                </p>
                <p>
                  Whether it's regular maintenance, lawn care, hedge trimming, landscaping, or complete garden makeovers, we take pride in delivering quality workmanship and exceptional customer service.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">Our Core Values</h2>
            <p className="text-lg text-sage-600">The principles that guide our work and ensure your complete satisfaction.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Professionalism', icon: ShieldCheck, desc: 'We conduct our business with the utmost integrity, respect, and technical expertise.' },
              { title: 'Reliability', icon: HeartHandshake, desc: 'We show up on time, communicate clearly, and deliver on our promises.' },
              { title: 'Attention To Detail', icon: CheckCircle2, desc: 'From the sharpest lawn edges to perfect hedge shapes, details matter.' },
              { title: 'Customer Satisfaction', icon: Star, desc: 'Your happiness is our priority. We work meticulously until you are delighted.' },
              { title: 'Quality Workmanship', icon: Leaf, desc: 'Using the best tools and techniques to ensure lasting, beautiful results.' },
            ].map((val, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-sage-50 rounded-3xl p-8 border border-sage-100 hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-600 mb-6">
                    <val.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{val.title}</h3>
                  <p className="text-sage-700 leading-relaxed">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
