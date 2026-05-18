import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
          alt="Wedding backdrop"
          className="w-full h-full object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-wedding-cream" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <div className="mb-12">
          <h2 className="text-white text-2xl md:text-3xl font-serif italic mb-2 tracking-[0.3em]">F&B AFFAIRS '26</h2>
          <div className="h-[1px] w-48 bg-wedding-orange mx-auto opacity-70" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl text-white mb-8 font-classic-script">
          Fakdan & Bisola
        </h1>

        <div className="flex flex-col items-center justify-center space-y-4 text-white">
          <p className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase">Saturday, 27th June 2026</p>
          <div className="h-[2px] w-24 bg-wedding-teal" />
          <p className="text-lg font-serif italic">Together with their families</p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12"
        >
          <p className="text-white/90 font-serif italic text-lg max-w-xl mx-auto px-6">
            "Therefore what God has joined together, let no one separate."
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white cursor-pointer"
        onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
