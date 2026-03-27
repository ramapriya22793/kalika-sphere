import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import About from './components/About';
import LabsSection from './components/LabsSection';
import KidsLabPrograms from './components/KidsLabPrograms';
import ProLabsPrograms from './components/ProLabsPrograms';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import EnrollmentForm from './components/EnrollmentForm';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll'>('home');

  return (
    <div className="min-h-screen bg-kalika-cream font-sans selection:bg-kalika-red selection:text-white">
      <AnnouncementBar />
      <Navbar setCurrentView={setCurrentView} currentView={currentView} />
      
      {currentView === 'home' ? (
        <main>
          <HeroSection setCurrentView={setCurrentView} />
          <div id="about">
            <About />
          </div>
          <div id="kids-lab">
            <LabsSection setCurrentView={setCurrentView} />
          </div>
        </main>
      ) : currentView === 'programs' ? (
        <KidsLabPrograms setCurrentView={setCurrentView} />
      ) : currentView === 'pro-programs' ? (
        <ProLabsPrograms setCurrentView={setCurrentView} />
      ) : currentView === 'gallery' ? (
        <Gallery setCurrentView={setCurrentView} />
      ) : (
        <EnrollmentForm setCurrentView={setCurrentView} />
      )}
      <Footer />
    </div>
  );
}

export default App;
