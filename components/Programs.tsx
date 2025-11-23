import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Program } from '../types';
import { Users } from 'lucide-react';

const allPrograms: Program[] = [
  {
    id: '1',
    title: 'Beasiswa Santri Yatim & Dhuafa',
    description: 'Bantu wujudkan mimpi anak-anak yatim dan dhuafa untuk menghafal Al-Quran dan mendapatkan pendidikan berkualitas di Pesantren Darul Fikri.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    target: 500000000,
    collected: 325000000,
    category: 'Pendidikan',
    donorsCount: 1240
  },
  {
    id: '2',
    title: 'Wakaf Pembangunan Masjid',
    description: 'Investasi akhirat dengan berwakaf untuk pembangunan dan perluasan Masjid Pesantren yang digunakan ribuan santri.',
    image: 'https://images.unsplash.com/photo-1548625361-e877477d91a2?q=80&w=800&auto=format&fit=crop',
    target: 2000000000,
    collected: 850000000,
    category: 'Dakwah',
    donorsCount: 3500
  },
  {
    id: '3',
    title: 'Sedekah Makan Santri',
    description: 'Penuhi kebutuhan gizi para penghafal Quran. Satu piring nasi, berjuta keberkahan dan energi untuk mereka beribadah.',
    image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=800&auto=format&fit=crop',
    target: 100000000,
    collected: 45000000,
    category: 'Sosial',
    donorsCount: 850
  },
  {
    id: '4',
    title: 'Bantuan Bencana Alam',
    description: 'Dana darurat untuk respon cepat tanggap bencana alam di berbagai wilayah Indonesia.',
    image: 'https://images.unsplash.com/photo-1588614603953-61fa34c26477?q=80&w=800&auto=format&fit=crop',
    target: 150000000,
    collected: 120000000,
    category: 'Kemanusiaan',
    donorsCount: 2100
  },
  {
    id: '5',
    title: 'Pemberdayaan UMKM Dhuafa',
    description: 'Bantuan modal usaha dan pendampingan bagi keluarga dhuafa agar mandiri secara ekonomi.',
    image: 'https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=800&auto=format&fit=crop',
    target: 300000000,
    collected: 75000000,
    category: 'Ekonomi',
    donorsCount: 430
  },
  {
    id: '6',
    title: 'Tebar Al-Quran Pelosok',
    description: 'Distribusi mushaf Al-Quran layak baca ke masjid dan musholla di pelosok negeri yang membutuhkan.',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop',
    target: 75000000,
    collected: 68000000,
    category: 'Dakwah',
    donorsCount: 920
  },
];

const categories = ['Semua', 'Pendidikan', 'Dakwah', 'Sosial', 'Ekonomi', 'Kemanusiaan'];

const Programs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredPrograms = activeCategory === 'Semua' 
    ? allPrograms 
    : allPrograms.filter(p => p.category === activeCategory);

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-emerald-600 font-bold tracking-wide uppercase text-sm mb-2">Program Unggulan</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Salurkan Kebaikan Melalui Program Pilihan</h3>
            <p className="text-slate-600 leading-relaxed">Pilih program kebaikan yang menyentuh hati Anda. Setiap rupiah yang Anda dermakan adalah harapan baru bagi mereka yang membutuhkan.</p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-400 hover:text-emerald-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPrograms.map((program) => (
              <motion.div
                layout
                key={program.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-700 shadow-sm border border-emerald-100">
                    {program.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">{program.title}</h4>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">{program.description}</p>

                  {/* Progress Stats */}
                  <div className="space-y-4">
                    <div>
                       <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min((program.collected / program.target) * 100, 100)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full"
                        ></motion.div>
                      </div>
                      <div className="flex justify-between items-center">
                         <div>
                            <p className="text-xs text-slate-400 mb-0.5">Terkumpul</p>
                            <p className="font-bold text-slate-700 text-sm">Rp {program.collected.toLocaleString('id-ID')}</p>
                         </div>
                         <div className="text-right">
                             <p className="text-xs text-slate-400 mb-0.5">Target</p>
                            <p className="font-semibold text-slate-500 text-sm">Rp {program.target.toLocaleString('id-ID')}</p>
                         </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                       <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                          <Users size={14} />
                          <span>{program.donorsCount} Donatur</span>
                       </div>
                       <button className="flex-1 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20">
                         Donasi
                       </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12">
           <button className="px-8 py-3 border border-slate-300 text-slate-600 font-semibold rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-all">
             Lihat Semua Program
           </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;