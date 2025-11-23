import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Article } from '../types';

const articles: Article[] = [
  {
    id: '1',
    title: 'Penyaluran 500 Paket Sembako untuk Lansia Dhuafa',
    excerpt: 'UPZ Dafi kembali menyalurkan amanah donatur berupa paket sembako kepada lansia dhuafa di wilayah Sidoarjo dan sekitarnya.',
    date: '12 Okt 2023',
    category: 'Kegiatan',
    image: 'https://images.unsplash.com/photo-1593113631985-e42100868a8d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Keutamaan Sedekah di Hari Jumat',
    excerpt: 'Hari Jumat memiliki keistimewaan tersendiri dalam Islam. Salah satunya adalah dilipatgandakannya pahala sedekah.',
    date: '10 Okt 2023',
    category: 'Inspirasi',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Laporan Audit Keuangan Tahun 2023',
    excerpt: 'Sebagai bentuk transparansi, berikut kami lampirkan ringkasan hasil audit keuangan UPZ Dafi periode tahun 2023.',
    date: '01 Okt 2023',
    category: 'Laporan',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop'
  }
];

const ArticleSection: React.FC = () => {
  return (
    <section id="articles" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">Berita Terkini</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Kabar & Inspirasi</h3>
          </div>
          <a href="#" className="flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group">
            Lihat Semua Berita
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wide">
                  {article.category}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span>Admin</span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                {article.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;