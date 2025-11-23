import React, { useState } from 'react';
import { Calculator, RefreshCw } from 'lucide-react';

const ZakatCalculator: React.FC = () => {
  const [income, setIncome] = useState<number | ''>('');
  const [bonus, setBonus] = useState<number | ''>('');
  const [expenditure, setExpenditure] = useState<number | ''>('');
  const [zakatType, setZakatType] = useState<'penghasilan' | 'maat'>('penghasilan');

  const calculateZakat = () => {
    const totalIncome = (Number(income) || 0) + (Number(bonus) || 0);
    const monthlyNet = totalIncome - (Number(expenditure) || 0);
    
    // Nisab Emas 85gr asumsi harga emas 1jt/gr = 85jt/tahun -> 7jt/bulan
    // Ini simplifikasi
    const nisab = 7083333; 
    
    if (monthlyNet >= nisab) {
      return monthlyNet * 0.025;
    }
    return 0;
  };

  const result = calculateZakat();

  return (
    <section id="calculator" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Calculator className="text-gold-400" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Kalkulator Zakat</h2>
            </div>
            <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
              Bingung berapa zakat yang harus dikeluarkan? Gunakan fitur kalkulator zakat penghasilan ini untuk menghitung kewajiban zakat Anda secara akurat sesuai nishab.
            </p>
            
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700/50">
              <h3 className="text-xl font-semibold mb-4 text-gold-400">Ketentuan Zakat Penghasilan</h3>
              <ul className="space-y-3 text-emerald-50 text-sm">
                <li className="flex gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-2"></span>
                  Zakat dikeluarkan jika penghasilan telah mencapai nishab (setara 85gr emas per tahun).
                </li>
                <li className="flex gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-2"></span>
                  Kadar zakat adalah 2,5% dari penghasilan bersih bulanan.
                </li>
                <li className="flex gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-2"></span>
                  Menunaikan zakat membersihkan harta dan menyucikan jiwa.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Hitung Zakat Anda</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Penghasilan Bulanan</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">Rp</span>
                  <input
                    type="number"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="0"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Pendapatan Lain (Bonus/THR)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">Rp</span>
                  <input
                    type="number"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="0"
                    value={bonus}
                    onChange={(e) => setBonus(Number(e.target.value))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Pengeluaran Bulanan (Hutang Jatuh Tempo)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">Rp</span>
                  <input
                    type="number"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="0"
                    value={expenditure}
                    onChange={(e) => setExpenditure(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600 font-medium">Kewajiban Zakat:</span>
                  <span className="text-2xl font-bold text-emerald-600">Rp {result.toLocaleString('id-ID')}</span>
                </div>
                <p className="text-xs text-slate-400 text-right mb-4">
                  *Perhitungan estimasi. Konsultasikan lebih lanjut dengan kami.
                </p>
                
                <button 
                  className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl shadow-lg hover:shadow-gold-500/30 transition-all transform hover:-translate-y-1"
                  onClick={() => {
                    const el = document.getElementById('donate');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Tunaikan Zakat Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZakatCalculator;