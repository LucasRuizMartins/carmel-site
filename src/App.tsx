import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Fotter/Footer';
import { ScheduleSection } from './components/sections/ScheduleSection/ScheduleSection';
import { ScheduleModal } from './components/sections/ScheduleModal/ScheduleModal';
import { useModal } from './hooks/useModal';
import { Home } from './pages/Home/Home';
import { QuemSomos } from './pages/QuemSomos/QuemSomos';
import { InvestidoresPage } from './pages/InvestidoresPage/InvestidoresPage';

const App: React.FC = () => {
  const scheduleModal = useModal();

  return (
    <div className="font-sans antialiased">
      <Header onScheduleClick={scheduleModal.open} />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/investidores" element={<InvestidoresPage />} />
          {/* Catch-all route to home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>

        {/* The ScheduleSection is shared across both pages right before the footer */}
        <ScheduleSection onScheduleClick={scheduleModal.open} />
      </main>

      <Footer />
      <ScheduleModal isOpen={scheduleModal.isOpen} onClose={scheduleModal.close} />
    </div>
  );
};

export default App;
