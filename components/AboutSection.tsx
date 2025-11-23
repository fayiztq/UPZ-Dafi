import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Amanah & Transparan",
      desc: "Laporan keuangan diaudit secara berkala dan dapat diakses publik."
    },
    {
      icon: Target,
      title: "Tepat Sasaran",
      desc: "Tim survei memastikan bantuan sampai kepada yang benar-benar membutuhkan."
    },
    {
      icon: Heart,
      title: "Program Berkelanjutan",
      desc: "Fokus pada pemberdayaan jangka panjang, bukan hanya bantuan sesaat."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1280&auto=format&fit=crop" 
                alt="Tim UPZ Dafi" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-gold-500"></div>
                    <span className="text-gold-400 font-bold uppercase tracking-wider text-sm">Legalitas</span>
                 </div>
                 <h3 className="text-2xl font-display font-bold mb-2">SK Kemenag RI</h3>
                 <p className="text-white/80">No. 123/Tahun 2020 tentang Izin Operasional Lembaga Amil Zakat.</p>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-emerald-100 rounded-3xl"></div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">Tentang UPZ Dafi</h2>
              <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Jembatan Kebaikan <br/>Menuju <span className="text-emerald-600">Keberkahan</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                UPZ (Unit Pengumpul Zakat) Darul Fikri adalah lembaga filantropi Islam yang berkhidmat mengangkat harkat sosial kemanusiaan kaum dhuafa melalui dana ZISWAF (Zakat, Infaq, Sedekah, Wakaf).
              </p>

              <div className="grid gap-6">
                {features.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100 flex gap-8">
                 <div>
                    <h4 className="text-4xl font-bold text-slate-900 mb-1">10+</h4>
                    <p className="text-sm text-slate-500">Tahun Pengabdian</p>
                 </div>
                 <div>
                    <h4 className="text-4xl font-bold text-slate-900 mb-1">50+</h4>
                    <p className="text-sm text-slate-500">Mitra Korporat</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;