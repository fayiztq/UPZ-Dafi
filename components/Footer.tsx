import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white font-bold">U</div>
               <span className="text-xl font-bold text-white">UPZ DAFI</span>
            </div>
            <p className="text-sm leading-relaxed">
              Unit Pengumpul Zakat Darul Fikri. Mengelola dana ummat secara amanah, profesional, dan transparan untuk kemaslahatan bersama.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-6">Program Kami</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Beasiswa Pendidikan</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Wakaf Pembangunan</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Peduli Yatim</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Tanggap Bencana</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Laporan Keuangan</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Konfirmasi Donasi</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="shrink-0 text-emerald-600" size={18} />
                <span>Jl. Raya Sarirogo No.1, Sidoarjo, Jawa Timur</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="shrink-0 text-emerald-600" size={18} />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="shrink-0 text-emerald-600" size={18} />
                <span>info@upzdafi.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>© 2024 UPZ Dafi Darul Fikri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;