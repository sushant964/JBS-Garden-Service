import { FC, useState, FormEvent } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Phone, Mail, Instagram, Send, CheckCircle2, MapPin } from 'lucide-react';

export const Contact: FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <div className="pt-24 bg-earth-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl py-12 md:py-24">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            Let's Bring Your Garden To Life
          </h1>
          <p className="text-xl text-sage-700">
            Get in touch today for a free quote and professional gardening services. We're here to help.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-sage-900 rounded-3xl p-8 xl:p-10 text-white shadow-xl relative overflow-hidden">
                 {/* Decor */}
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-700/50 rounded-full blur-3xl pointer-events-none" />
                 
                 <h3 className="text-2xl font-serif font-medium mb-8">Contact Information</h3>
                 
                 <div className="space-y-8 relative z-10">
                   <a href="tel:0475771717" className="flex items-start gap-5 group">
                     <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors shrink-0">
                       <Phone className="w-5 h-5 text-primary-200 group-hover:text-white" />
                     </div>
                     <div>
                       <p className="text-sm text-sage-300 font-medium mb-1">Call Us Directly</p>
                       <p className="text-lg font-semibold text-white">0475 771 717</p>
                     </div>
                   </a>

                   <a href="mailto:hello@jbsgardenservice.com" className="flex items-start gap-5 group">
                     <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors shrink-0">
                       <Mail className="w-5 h-5 text-primary-200 group-hover:text-white" />
                     </div>
                     <div>
                       <p className="text-sm text-sage-300 font-medium mb-1">Email Address</p>
                       <p className="text-lg font-semibold text-white">hello@jbsgardenservice.com</p>
                     </div>
                   </a>

                   <div className="flex items-start gap-5 group">
                     <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors shrink-0">
                       <MapPin className="w-5 h-5 text-primary-200 group-hover:text-white" />
                     </div>
                     <div>
                       <p className="text-sm text-sage-300 font-medium mb-1">Our Location</p>
                       <p className="text-lg font-semibold text-white">Cairns, Queensland, Australia 4870</p>
                     </div>
                   </div>

                   <a href="https://www.instagram.com/jbsgardenservice" target="_blank" rel="noreferrer" className="flex items-start gap-5 group">
                     <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 transition-all shrink-0">
                       <Instagram className="w-5 h-5 text-primary-200 group-hover:text-white" />
                     </div>
                     <div>
                       <p className="text-sm text-sage-300 font-medium mb-1">Follow Our Work</p>
                       <p className="text-lg font-semibold text-white">@jbsgardenservice</p>
                     </div>
                   </a>
                 </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.2} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-earth-100">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-charcoal mb-4">Message Sent!</h3>
                  <p className="text-sage-600 text-lg max-w-sm mx-auto mb-8">
                    Thank you for getting in touch. We will review your request and get back to you shortly with a free quote.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-earth-50 text-sage-800 rounded-full font-medium hover:bg-earth-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-serif font-semibold text-charcoal mb-8">Request a Free Quote</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal">Full Name</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        className="w-full px-5 py-3.5 bg-earth-50 border border-transparent rounded-xl focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        id="phone"
                        className="w-full px-5 py-3.5 bg-earth-50 border border-transparent rounded-xl focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all outline-none"
                        placeholder="0400 000 000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal">Email Address</label>
                      <input 
                        required
                        type="email" 
                        id="email"
                        className="w-full px-5 py-3.5 bg-earth-50 border border-transparent rounded-xl focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-sm font-medium text-charcoal">Service Required</label>
                      <select 
                        required
                        id="service"
                        className="w-full px-5 py-3.5 bg-earth-50 border border-transparent rounded-xl focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-charcoal appearance-none cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        <option value="maintenance">Garden Maintenance</option>
                        <option value="lawn">Lawn Mowing</option>
                        <option value="hedge">Hedge Trimming</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="cleanups">Garden Clean-Ups</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal">Message Basics</label>
                    <textarea 
                      required
                      id="message"
                      rows={5}
                      className="w-full px-5 py-3.5 bg-earth-50 border border-transparent rounded-xl focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all outline-none resize-none"
                      placeholder="Please briefly describe your garden needs, or list the services you are interested in..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-8 bg-primary-700 hover:bg-primary-800 text-white rounded-xl font-semibold shadow-md shadow-primary-900/10 transition-all flex justify-center items-center gap-2 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed outline-none focus-visible:ring-4 focus-visible:ring-primary-700/40"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">Sending...</span>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>

      </div>
    </div>
  );
};
