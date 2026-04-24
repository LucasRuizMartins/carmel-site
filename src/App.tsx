import React from 'react';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Fotter/Footer';
import { HeroSlider } from './components/sections/HeroSlider/HeroSlider';
import { WhoAreYou } from './components/sections/WhoAreYou/WhoAreYou';
import { Metrics } from './components/sections/Metrics/Metrics';
import { Funds } from './components/sections/Funds/Funds';
import { Partners } from './components/sections/Partners/Partners';
import { History } from './components/sections/History/History';
import { ScheduleSection } from './components/sections/ScheduleSection/ScheduleSection';
import { ScheduleModal } from './components/sections/ScheduleModal/ScheduleModal';
import { useModal } from './hooks/useModal';

const App: React.FC = () => {
  const scheduleModal = useModal();

  return (
    <div className="font-sans antialiased">
      <Header onScheduleClick={scheduleModal.open} />
      <main>
        <HeroSlider />
        <WhoAreYou />
        <Metrics />
        <Funds />
        <Partners />
        <History />
        <ScheduleSection onScheduleClick={scheduleModal.open} />
      </main>
      <Footer />
      <ScheduleModal isOpen={scheduleModal.isOpen} onClose={scheduleModal.close} />
    </div>
  );
};

export default App;
