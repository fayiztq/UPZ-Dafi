export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  target: number;
  collected: number;
  category: 'Pendidikan' | 'Sosial' | 'Dakwah' | 'Ekonomi' | 'Kemanusiaan';
  donorsCount: number;
}

export interface StatItem {
  label: string;
  value: string;
  icon: any; 
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface DonationFormData {
  amount: number;
  name: string;
  email: string;
  type: 'Zakat' | 'Infaq' | 'Shodaqoh' | 'Waqaf';
}

export interface Story {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface DonorPrayer {
  id: string;
  name: string;
  amount?: number;
  message: string;
  time: string;
}