import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, X, Maximize2 } from "lucide-react";

const IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    title: "Our First Dance Practice",
  },
  {
    url: "https://images.unsplash.com/photo-1519225495810-751783cf9f74?auto=format&fit=crop&q=80&w=1200",
    title: "A Quiet Moment Together",
  },
  {
    url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200",
    title: "Laughter in the Park",
  },
  {
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
    title: "Stylish in the City",
  },
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
    title: "Forever Begins Now",
  },
  {
    url: "https://images.unsplash.com/photo-1522673607200-164848374c0f?auto=format&fit=crop&q=80&w=1200",
    title: "The Engagement Ring",
  }
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<typeof IMAGES[0] | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (url: string, title: string) => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(url, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4 font-classic-script text-wedding-teal text-balance">Our Gallery</h2>
        <div className="h-[1px] w-24 bg-wedding-orange mx-auto mb-6" />
        <p className="text-stone-500 max-w-lg mx-auto italic font-serif leading-relaxed">
          Click on any photo to view in full resolution and download.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative cursor-pointer aspect-square overflow-hidden rounded-2xl bg-stone-100"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                <Maximize2 size={24} />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
               <p className="text-white text-xs font-serif italic truncate opacity-0 group-hover:opacity-100 transition-opacity">
                {img.title}
               </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button - Outside the image container to ensure accessibility */}
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 z-[210] p-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
              aria-label="Close"
            >
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.url}
                alt={selectedImg.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              <div className="mt-8 flex flex-col md:flex-row items-center justify-between w-full gap-4 max-w-4xl px-4">
                <h3 className="text-white font-serif text-xl md:text-2xl italic">{selectedImg.title}</h3>
                <button
                  disabled={isDownloading}
                  onClick={() => handleDownload(selectedImg.url, selectedImg.title)}
                  className={`flex items-center space-x-3 bg-wedding-teal text-white px-8 py-3 rounded-full hover:bg-wedding-teal/90 transition-all shadow-lg active:scale-95 ${isDownloading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <Download size={20} className={isDownloading ? 'animate-bounce' : ''} />
                  <span className="font-medium">{isDownloading ? 'Downloading...' : 'Download Photo'}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
