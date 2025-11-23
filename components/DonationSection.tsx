import React from 'react';
import { CreditCard, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const DonationSection: React.FC = () => {
  return (
    <section id="donate" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">Salurkan Donasi</h2>
             <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Metode Pembayaran Mudah</h3>
             <p className="text-slate-600 mt-4 max-w-xl mx-auto">Kami menyediakan berbagai kanal pembayaran untuk memudahkan niat baik Anda. Insya Allah aman dan terverifikasi.</p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[2.5rem] p-8 md:p-16 shadow-inner border border-slate-100">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Transfer Bank */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-white rounded-full text-emerald-600 shadow-sm border border-slate-100">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Transfer Bank</h4>
                  <p className="text-sm text-slate-500">Manual Transfer / Mobile Banking</p>
                </div>
              </div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg shadow-emerald-900/5 border border-slate-100 group cursor-pointer"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-slate-800">BSI (Bank Syariah Indonesia)</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Bank_Syariah_Indonesia.svg" alt="BSI" className="h-6 opacity-80" />
                </div>
                <div className="flex flex-col gap-1">
                   <p className="text-xs text-slate-400">Nomor Rekening</p>
                   <div className="flex items-center justify-between">
                     <code className="text-2xl font-mono font-bold text-emerald-600 tracking-tight">7123 4567 89</code>
                     <button className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg hover:bg-emerald-100 font-semibold transition-colors">Salin</button>
                   </div>
                </div>
                <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-50 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                   a.n UPZ Darul Fikri
                </p>
              </motion.div>

               <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 group cursor-pointer"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-slate-800">Bank Mandiri</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg" alt="Mandiri" className="h-6 opacity-80" />
                </div>
                 <div className="flex flex-col gap-1">
                   <p className="text-xs text-slate-400">Nomor Rekening</p>
                   <div className="flex items-center justify-between">
                     <code className="text-2xl font-mono font-bold text-emerald-600 tracking-tight">14000 1234 5678</code>
                     <button className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg hover:bg-emerald-100 font-semibold transition-colors">Salin</button>
                   </div>
                </div>
                <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-50 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                   a.n Yayasan Darul Fikri
                </p>
              </motion.div>
            </div>

            {/* QRIS */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white rounded-full text-emerald-600 shadow-sm border border-slate-100">
                  <Smartphone size={24} />
                </div>
                 <div>
                  <h4 className="text-xl font-bold text-slate-800">Scan QRIS</h4>
                  <p className="text-sm text-slate-500">Gopay, OVO, Dana, LinkAja, ShopeePay</p>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                 <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Qris_logo.svg" alt="Logo QRIS" className="h-8 mx-auto mb-6" />
                    
                    <div className="relative inline-block">
                       <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" 
                        alt="QRIS Mockup" 
                        className="w-48 h-48 object-contain mix-blend-multiply"
                      />
                      <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-lg"></div>
                      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-emerald-500 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-emerald-500 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-emerald-500 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-emerald-500 rounded-br-lg"></div>
                    </div>
                    
                    <p className="text-xs text-slate-400 mt-6 font-mono">NMID: ID102030405060</p>
                    <p className="text-sm font-bold text-slate-800 mt-1">UPZ DARUL FIKRI</p>
                 </div>
              </div>
            </div>

          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left"
          >
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full shrink-0">
               <CheckCircle size={24} />
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-blue-900 text-lg mb-1">Konfirmasi Donasi</h5>
              <p className="text-blue-700/80 text-sm leading-relaxed mb-4 md:mb-0">
                Agar donasi Anda tercatat rapi dan akad tersampaikan, mohon lakukan konfirmasi setelah transfer. Admin kami siap melayani Anda.
              </p>
            </div>
            <a 
               href="https://wa.me/6281234567890"
               target="_blank"
               className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 shrink-0"
            >
               Konfirmasi via WA
               <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;