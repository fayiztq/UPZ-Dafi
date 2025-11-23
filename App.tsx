import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Programs from './components/Programs';
import ImpactStories from './components/ImpactStories';
import ZakatCalculator from './components/ZakatCalculator';
import DoaWall from './components/DoaWall';
import ArticleSection from './components/ArticleSection';
import DonationSection from './components/DonationSection';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden font-sans selection:bg-emerald-500 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Programs />
        <ImpactStories />
        <ZakatCalculator />
        <DoaWall />
        <DonationSection />
        <ArticleSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;