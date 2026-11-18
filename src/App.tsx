import { lazy, Suspense, useCallback, useState } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';
import { ENTRY_TIERS, LOBBY_SCHEDULE } from './data/scrimConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LobbySchedule } from './components/LobbySchedule';
import { PrizeTiers } from './components/PrizeTiers';
import { CrosshairTransitionInsignia } from './components/EsportsEmblems';

const MapShowcase = lazy(() => import('./components/MapShowcase'));
const RegistrationFlow = lazy(() => import('./components/RegistrationFlow'));
const CompetitiveAndRules = lazy(() => import('./components/CompetitiveAndRules'));
const FaqSection = lazy(() => import('./components/FaqSection'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [selectedLobbyId, setSelectedLobbyId] = useState<string>(LOBBY_SCHEDULE[0].id);
  const [selectedTierId, setSelectedTierId] = useState<string>(ENTRY_TIERS[0].id);

  const handleSelectLobby = useCallback((id: string) => {
    setSelectedLobbyId(id);
  }, []);

  const handleSelectTier = useCallback((id: string) => {
    setSelectedTierId(id);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-[#06080F] text-[#F2F5FA]">
          <Navbar />
          <main>
            <Hero />
            <CrosshairTransitionInsignia />
            <LobbySchedule
              selectedLobbyId={selectedLobbyId}
              onSelectLobby={handleSelectLobby}
            />
            <PrizeTiers
              selectedTierId={selectedTierId}
              onSelectTier={handleSelectTier}
            />
            <Suspense fallback={<div className="min-h-[420px] bg-[#080B14]" />}>
              <MapShowcase />
              <CrosshairTransitionInsignia />
              <RegistrationFlow
                selectedLobbyId={selectedLobbyId}
                selectedTierId={selectedTierId}
                onSelectLobby={handleSelectLobby}
                onSelectTier={handleSelectTier}
              />
              <CompetitiveAndRules />
              <FaqSection />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
