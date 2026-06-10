import { FC, useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { FinalCTA } from '@/components/ui/FinalCTA';
import { images } from '@/lib/images';
import { Maximize2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export const Work: FC = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string} | null>(null);

  const gallery = images.gallery;

  return (
    <div className="pt-24 bg-white">
      {/* HEADER */}
      <section className="py-20 relative bg-sage-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-sage-800 to-sage-900" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Best Of Our Work
            </h1>
            <p className="text-xl text-sage-100 max-w-2xl mx-auto leading-relaxed">
              Take a look at some of our garden transformations and landscaping projects.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Masonry Layout grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-8">
            <AnimatePresence>
              {gallery.map((item, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-earth-100"
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item.src} alt="Project image" className="w-full transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Maximize2 className="absolute top-6 right-6 text-white w-6 h-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {gallery.length === 0 && (
             <div className="text-center py-24 text-sage-500">
               <p>More projects coming soon.</p>
             </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX MAP */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4 flex-col"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage.src} 
              alt="Project detail" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl relative z-0"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <FinalCTA />
    </div>
  );
};
