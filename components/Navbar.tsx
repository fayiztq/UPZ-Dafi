import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Program', href: '#programs' },
    { name: 'Kalkulator', href: '#calculator' },
    { name: 'Berita', href: '#articles' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-white/20 py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-emerald-700 transition-colors">
            U
          </div>
          <div className={`flex flex-col ${isScrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'}`}>
            <span className="font-bold text-lg leading-tight tracking-tight font-display">UPZ DAFI</span>
            <span className={`text-[10px] font-semibold uppercase tracking-widest ${isScrolled ? 'text-emerald-600' : 'text-emerald-600 lg:text-emerald-200'}`}>Darul Fikri</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all hover:-translate-y-0.5 ${
                isScrolled 
                  ? 'text-slate-600 hover:text-emerald-600' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#donate"
            className="px-6 py-2.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-semibold rounded-full shadow-lg hover:shadow-gold-500/30 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
          >
            <Heart size={18} className="fill-white/20 stroke-2" />
            Donasi Sekarang
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
             isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-slate-800 lg:text-white hover:bg-white/10'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 font-medium px-4 py-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center mt-2 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
              >
                Donasi Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;