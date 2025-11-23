import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { StatItem } from '../types';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="Charity background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-emerald-900/40"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-50 to-transparent"></div>
        
        {/* Decorative Circles */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-[500px] h-[500px] border border-white/5 rounded-full"
        />
        <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-40 w-[300px] h-[300px] border border-white/5 rounded-full border-dashed"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="text-white space-y-8 pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-emerald-100 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              Lembaga Amil Zakat Terpercaya
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
              Bersihkan Harta, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
                Sucikan Jiwa
              </span>
            </h1>
            
            <p className="text-lg text-emerald-100/90 max-w-xl leading-relaxed font-light">
              Salurkan Zakat, Infaq, dan Sedekah Anda melalui UPZ Dafi. Kami mengelola dana umat secara <span className="text-white font-semibold">profesional, transparan, dan amanah</span> untuk kemaslahatan santri yatim dhuafa dan pemberdayaan masyarakat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#donate"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white text-lg font-bold rounded-full transition-all shadow-[0_10px_20px_rgba(234,179,8,0.3)] hover:shadow-[0_15px_30px_rgba(234,179,8,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Tunaikan Zakat
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#programs"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-semibold rounded-full transition-all hover:border-white/40 flex items-center justify-center"
            >
              Lihat Program
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
          >
             <div className="flex items-center gap-2 text-emerald-100/80 text-sm">
                <CheckCircle2 size={16} className="text-gold-400" />
                <span>Resmi & Terdaftar</span>
             </div>
             <div className="flex items-center gap-2 text-emerald-100/80 text-sm">
                <CheckCircle2 size={16} className="text-gold-400" />
                <span>Laporan Transparan</span>
             </div>
             <div className="flex items-center gap-2 text-emerald-100/80 text-sm">
                <CheckCircle2 size={16} className="text-gold-400" />
                <span>Tepat Sasaran</span>
             </div>
          </motion.div>
        </div>

        {/* Hero Image/Card (Right Side) */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 bg-white p-3 rounded-3xl shadow-2xl rotate-3 hover:rotate-1 transition-transform duration-700 ease-in-out">
            <img
              src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=1000&auto=format&fit=crop"
              alt="Giving Hands"
              className="rounded-2xl w-full h-[550px] object-cover filter brightness-[0.95] contrast-[1.05]"
            />
            
            {/* Floating Card 1 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
                  <HeartHandshake size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Total Penyaluran Bulan Ini</p>
                  <div className="h-2 w-full bg-slate-100 rounded-full mb-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-emerald-500 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-end">
                     <p className="text-2xl font-bold text-slate-900">Rp 485.250.000</p>
                     <p className="text-xs font-semibold text-emerald-600">+12% dari bulan lalu</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 -right-10 w-64 h-64 bg-gold-500 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;