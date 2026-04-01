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
import SummerWorkshop from './components/SummerWorkshop';
import SummerFloatingTab from './components/SummerFloatingTab';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll' | 'summer-workshop'>('home');
  const [workshopOpenId, setWorkshopOpenId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-kalika-cream font-sans selection:bg-kalika-red selection:text-white">
      <AnnouncementBar setCurrentView={setCurrentView} />
      <Navbar 
        setCurrentView={setCurrentView} 
        currentView={currentView} 
        setWorkshopOpenId={setWorkshopOpenId}
      />
      <SummerFloatingTab setCurrentView={setCurrentView} currentView={currentView} />
      
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
      ) : currentView === 'summer-workshop' ? (
        <SummerWorkshop 
          setCurrentView={setCurrentView} 
          openId={workshopOpenId}
          setOpenId={setWorkshopOpenId}
        />
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
