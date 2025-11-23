import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { DonorPrayer } from '../types';

const prayers: DonorPrayer[] = [
  { id: '1', name: 'Hamba Allah', message: 'Semoga menjadi amal jariyah untuk Almarhum Bapak saya.', time: '2 menit yang lalu' },
  { id: '2', name: 'Budi Santoso', message: 'Bismillah, semoga berkah untuk anak-anak yatim.', time: '5 menit yang lalu' },
  { id: '3', name: 'Siti Aminah', message: 'Sukses terus untuk UPZ Dafi, semoga makin amanah.', time: '12 menit yang lalu' },
  { id: '4', name: 'Hamba Allah', message: 'Mohon doanya agar dilancarkan rezeki keluarga kami.', time: '15 menit yang lalu' },
  { id: '5', name: 'Rizky', message: 'Sedikit rezeki semoga bermanfaat.', time: '20 menit yang lalu' },
  { id: '6', name: 'Keluarga Besar H. Imron', message: 'Semoga pembangunan masjid segera selesai.', time: '30 menit yang lalu' },
  { id: '7', name: 'Dewi', message: 'Sehat selalu para pengurus dan santri.', time: '45 menit yang lalu' },
];

const DoaWall: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
         <h3 className="text-2xl font-bold text-slate-800">Doa Para Donatur</h3>
         <p className="text-slate-500 text-sm">Terima kasih atas kepercayaan #OrangBaik</p>
      </div>

      <div className="relative flex w-full overflow-hidden mask-linear-fade">
         <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
         <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
         
         <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ 
               repeat: Infinity, 
               ease: "linear", 
               duration: 25 
            }}
         >
            {[...prayers, ...prayers, ...prayers].map((prayer, idx) => (
               <div 
                  key={`${prayer.id}-${idx}`} 
                  className="w-80 md:w-96 bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-2 shrink-0"
               >
                  <div className="flex justify-between items-start">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                           <Heart size={14} fill="currentColor" />
                        </div>
                        <span className="font-bold text-slate-700 text-sm">{prayer.name}</span>
                     </div>
                     <span className="text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded-full">{prayer.time}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-normal line-clamp-2">"{prayer.message}"</p>
               </div>
            ))}
         </motion.div>
      </div>
    </section>
  );
};

export default DoaWall;