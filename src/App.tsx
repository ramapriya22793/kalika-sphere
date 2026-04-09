import { useState, useEffect } from 'react';
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
import EnrollmentSplash from './components/EnrollmentSplash';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll' | 'summer-workshop' | 'enroll-splash'>('home');
  const [workshopOpenId, setWorkshopOpenId] = useState<string | null>(null);

  useEffect(() => {
    // Check if the user arrived via the social media link
    const params = new URLSearchParams(window.location.search);
    if (params.get('join') === 'true') {
      setCurrentView('enroll-splash');
    }
  }, []);

  if (currentView === 'enroll-splash') {
    return <EnrollmentSplash setCurrentView={setCurrentView} />;
  }

  // Hide bars during enrollment for a clean flow
  const isEnrollmentFlow = currentView === 'enroll';

  return (
    <div className="min-h-screen bg-kalika-cream font-sans selection:bg-kalika-red selection:text-white">
      {!isEnrollmentFlow && <AnnouncementBar setCurrentView={setCurrentView} />}
      {!isEnrollmentFlow && (
        <Navbar 
          setCurrentView={setCurrentView} 
          currentView={currentView} 
        />
      )}
      {!isEnrollmentFlow && <SummerFloatingTab setCurrentView={setCurrentView} currentView={currentView} />}
      
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
