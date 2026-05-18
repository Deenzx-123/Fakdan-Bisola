import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Heart } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Our Story", href: "#story" },
  { name: "Journey", href: "#journey" },
  { name: "Gallery", href: "#gallery" },
  { name: "Venue", href: "#venue" },
  { name: "Registry", href: "#gifts" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? "bg-wedding-cream/95 backdrop-blur-md py-3 shadow-md border-b border-stone-200/30" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className={`text-3xl font-classic-script transition-colors duration-500 ${
            isScrolled ? "text-wedding-teal" : "text-white"
          }`}
        >
          F&B
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wider transition-colors duration-500 font-serif ${
                isScrolled ? "text-stone-700 hover:text-wedding-teal" : "text-white hover:text-wedding-orange"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors duration-500 ${
            isScrolled ? "text-stone-800" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[1000] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-stone-900/80 backdrop-blur-md"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-[0_0_50px_rgba(0,0,0,0.3)] p-8 flex flex-col border-l border-stone-100 z-[1001]"
            >
              <div className="flex justify-between items-center mb-10">
                <p className="text-wedding-teal font-classic-script text-4xl">F&B</p>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-stone-800 p-2 bg-stone-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-xl text-stone-800 font-serif py-5 border-b border-stone-50 last:border-0 hover:text-wedding-teal transition-colors flex items-center justify-between group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <Heart size={12} className="text-wedding-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto text-center space-y-4">
                <div className="h-[1px] w-12 bg-wedding-orange/30 mx-auto" />
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-sans">June 27th, 2026</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
