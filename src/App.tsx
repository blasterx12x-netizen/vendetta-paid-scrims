import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ENTRY_TIERS, LOBBY_SCHEDULE } from './data/scrimConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LobbySchedule } from './components/LobbySchedule';
import { PrizeTiers } from './components/PrizeTiers';
import { MapShowcase } from './components/MapShowcase';
import { RegistrationFlow } from './components/RegistrationFlow';
import { CompetitiveAndRules } from './components/CompetitiveAndRules';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CrosshairTransitionInsignia } from './components/EsportsEmblems';

export default function App() {
  const [selectedLobbyId, setSelectedLobbyId] = useState<string>(LOBBY_SCHEDULE[0].id);
  const [selectedTierId, setSelectedTierId] = useState<string>(ENTRY_TIERS[0].id);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#06080F] text-[#F2F5FA]">
        <Navbar />
        <main>
          <Hero />
          <CrosshairTransitionInsignia />
          <LobbySchedule
            selectedLobbyId={selectedLobbyId}
            onSelectLobby={setSelectedLobbyId}
          />
          <PrizeTiers
            selectedTierId={selectedTierId}
            onSelectTier={setSelectedTierId}
          />
          <MapShowcase />
          <CrosshairTransitionInsignia />
          <RegistrationFlow
            selectedLobbyId={selectedLobbyId}
            selectedTierId={selectedTierId}
            onSelectLobby={setSelectedLobbyId}
            onSelectTier={setSelectedTierId}
          />
          <CompetitiveAndRules />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
