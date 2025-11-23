import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Story } from '../types';

const stories: Story[] = [
  {
    id: '1',
    name: 'Ahmad Fauzan',
    role: 'Penerima Beasiswa Tahfidz',
    quote: "Alhamdulillah, berkat beasiswa dari UPZ Dafi, saya bisa melanjutkan hafalan Quran 30 juz tanpa membebani orang tua. Semoga berkah untuk para donatur.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Ibu Sumiati',
    role: 'Penerima Bantuan Modal UMKM',
    quote: "Bantuan modal usaha warung nasi ini sangat berarti. Sekarang saya bisa menyekolahkan anak-anak dan tidak lagi bergantung pada hutang keliling.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Ustadz Abdullah',
    role: 'Guru Ngaji di Pelosok',
    quote: "Mushaf Al-Quran dan bantuan operasional dari UPZ Dafi membuat semangat anak-anak TPA di desa kami menyala kembali. Jazakumullah khairan.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop'
  }
];

const ImpactStories: React.FC = () => {
  return (
    <section className="py-24 bg-emerald-900 relative overflow-hidden">
      {/* Abstract Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
         <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-[128px]"></div>
         <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-500 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-3">Jejak Kebaikan</h2>
          <h3 className="text-4xl font-display font-bold text-white mb-6">Senyum Mereka, Bahagia Kita</h3>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Setiap donasi Anda menorehkan cerita baru. Berikut adalah sepenggal kisah dari ribuan penerima manfaat yang telah Anda bantu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700/50 p-8 rounded-3xl relative hover:bg-emerald-800 transition-colors"
            >
              <Quote className="absolute top-8 right-8 text-gold-500/20" size={48} />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold-400"
                />
                <div>
                  <h4 className="text-white font-bold">{story.name}</h4>
                  <p className="text-emerald-300 text-xs uppercase tracking-wide font-semibold">{story.role}</p>
                </div>
              </div>

              <p className="text-emerald-50 leading-relaxed italic">
                "{story.quote}"
              </p>

              <div className="mt-6 flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gold-400"></div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;