export interface LobbySlotConfig {
  id: string;
  timeLabel: string;
  hour24: number;
  minute: number;
  sessionTitle: string;
  availabilityNote: string;
  registrationInstruction: string;
}

export interface TierConfig {
  id: string;
  tierLabel: string;
  tierName: string;
  entryFee: number;
  prizePool: number;
  entryDisplay: string;
  prizeDisplay: string;
  accentTone: 'steel' | 'crimson' | 'blood' | 'obsidian';
  summary: string;
}

export interface MapConfig {
  id: string;
  order: string;
  name: string;
  imagePath: string;
  sectorTag: string;
  terrainProfile: string;
  tacticalNote: string;
  isRandom?: boolean;
  palette: {
    primary: string;
    secondary: string;
    glow: string;
  };
}

export interface RuleGroup {
  id: string;
  title: string;
  summary: string;
  rules: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface EditableStat {
  id: string;
  label: string;
  value: string;
  detail: string;
}

export const BRAND_CONFIG = {
  name: 'VENDETTA PAID SCRIMS',
  shortName: 'VENDETTA',
  heroHeadline: 'ENTER THE ARENA. OWN THE BATTLE.',
  heroSubheadline: "INDIA'S COMPETITIVE FREE FIRE PAID SCRIM ARENA.",
  communityIntro:
    'Built for disciplined Free Fire squads across India seeking structured daily custom rooms, back-to-back six-map endurance formats, and transparent prize distribution managed directly by verified admins.',
  logoPath: '/assets/aistudio/IMG-20261117-WA0019_d4014056.jpg',
  logoAlt: 'VENDETTA PAID SCRIMS official emblem logo',
  regionLabel: 'India Competitive Circuit · IST (UTC+05:30)',
  formatBadge: 'B2B Six-Map Format',
};

/**
 * OFFICIAL SOCIAL LINKS ONLY.
 * Do not add any third-party social networks beyond Instagram and WhatsApp Channel.
 */
export const SOCIAL_LINKS = {
  instagram: {
    label: 'Instagram',
    handle: '@vendetta.scrims',
    url: 'https://www.instagram.com/vendetta.scrims?knvt=MWlsejljaDdtb3Jxbg==',
  },
  whatsappChannel: {
    label: 'WhatsApp Channel',
    ctaHero: 'Join Our WhatsApp Channel',
    ctaRegister: 'REGISTER VIA WHATSAPP',
    url: 'https://whatsapp.com/channel/0029VbDuASf8fewuxHMeY02z',
  },
};

/**
 * EDITABLE STATISTICS SECTION
 * Update these figures directly as your organisation grows.
 */
export const HERO_STATS: EditableStat[] = [
  {
    id: 'daily-lobbies',
    label: 'Daily Lobbies',
    value: '04',
    detail: '12 PM · 3 PM · 6 PM · 9 PM IST',
  },
  {
    id: 'map-format',
    label: 'Match Format',
    value: '6 Maps',
    detail: 'Back-to-Back competitive rotation',
  },
  {
    id: 'entry-range',
    label: 'Entry Tiers',
    value: '₹25 – ₹55',
    detail: 'Four structured squad brackets',
  },
  {
    id: 'top-prize',
    label: 'Top Prize Pool',
    value: '₹550',
    detail: 'Tier 04 championship payout',
  },
];

/**
 * OFFICIAL DAILY LOBBY SCHEDULE (IST)
 */
export const LOBBY_SCHEDULE: LobbySlotConfig[] = [
  {
    id: 'lobby-12pm',
    timeLabel: '12:00 PM',
    hour24: 12,
    minute: 0,
    sessionTitle: 'Midday Clash',
    availabilityNote: 'Slots confirmed via WhatsApp Channel admin',
    registrationInstruction: 'Select tier and contact admin in channel before 12:00 PM IST',
  },
  {
    id: 'lobby-3pm',
    timeLabel: '3:00 PM',
    hour24: 15,
    minute: 0,
    sessionTitle: 'Afternoon Surge',
    availabilityNote: 'Slots confirmed via WhatsApp Channel admin',
    registrationInstruction: 'Select tier and contact admin in channel before 3:00 PM IST',
  },
  {
    id: 'lobby-6pm',
    timeLabel: '6:00 PM',
    hour24: 18,
    minute: 0,
    sessionTitle: 'Prime Dusk',
    availabilityNote: 'Slots confirmed via WhatsApp Channel admin',
    registrationInstruction: 'Select tier and contact admin in channel before 6:00 PM IST',
  },
  {
    id: 'lobby-9pm',
    timeLabel: '9:00 PM',
    hour24: 21,
    minute: 0,
    sessionTitle: 'Night Showdown',
    availabilityNote: 'Slots confirmed via WhatsApp Channel admin',
    registrationInstruction: 'Select tier and contact admin in channel before 9:00 PM IST',
  },
];

/**
 * LOBBY COUNTDOWN CONFIGURATION
 * Only displays an active countdown when `isScheduleConfigured` is true.
 * Uses real-time IST calculation against the configured daily lobby timings above,
 * or an explicit `explicitTargetIso` timestamp if an exact event date is set.
 */
export const COUNTDOWN_CONFIG = {
  isScheduleConfigured: true,
  timezoneLabel: 'IST (Asia/Kolkata)',
  /**
   * Optional: set a specific ISO date-time (e.g. '2026-11-20T18:00:00+05:30')
   * to lock the countdown to one exact scheduled fixture, or leave null to
   * count down to the next configured daily IST lobby time (12 PM, 3 PM, 6 PM, 9 PM).
   */
  explicitTargetIso: null as string | null,
};

/**
 * EXACT ENTRY FEES & PRIZE POOLS
 * Do not modify amounts without organiser approval.
 */
export const ENTRY_TIERS: TierConfig[] = [
  {
    id: 'tier-01',
    tierLabel: 'LOBBY TIER 01',
    tierName: 'Challenger Division',
    entryFee: 25,
    prizePool: 230,
    entryDisplay: '₹25',
    prizeDisplay: '₹230',
    accentTone: 'steel',
    summary: 'Accessible entry point for emerging squads sharpening B2B rotations.',
  },
  {
    id: 'tier-02',
    tierLabel: 'LOBBY TIER 02',
    tierName: 'Contender Division',
    entryFee: 35,
    prizePool: 330,
    entryDisplay: '₹35',
    prizeDisplay: '₹330',
    accentTone: 'crimson',
    summary: 'Balanced mid-tier bracket built for consistent daily scrim grind.',
  },
  {
    id: 'tier-03',
    tierLabel: 'LOBBY TIER 03',
    tierName: 'Vanguard Division',
    entryFee: 45,
    prizePool: 450,
    entryDisplay: '₹45',
    prizeDisplay: '₹450',
    accentTone: 'blood',
    summary: 'High-tempo competitive bracket for disciplined tournament rosters.',
  },
  {
    id: 'tier-04',
    tierLabel: 'LOBBY TIER 04',
    tierName: 'Apex Division',
    entryFee: 55,
    prizePool: 550,
    entryDisplay: '₹55',
    prizeDisplay: '₹550',
    accentTone: 'obsidian',
    summary: 'Premier VENDETTA bracket featuring our highest daily prize pool.',
  },
];

/**
 * WHATSAPP REGISTRATION PROCESS
 */
export const REGISTRATION_STEPS = [
  {
    step: 'STEP 1',
    title: 'Choose your preferred lobby time.',
    detail: 'Pick from our four daily IST sessions: 12:00 PM, 3:00 PM, 6:00 PM, or 9:00 PM.',
  },
  {
    step: 'STEP 2',
    title: 'Select your entry fee and prize pool tier.',
    detail: 'Decide between Lobby Tier 01 (₹25 / ₹230), Tier 02 (₹35 / ₹330), Tier 03 (₹45 / ₹450), or Tier 04 (₹55 / ₹550).',
  },
  {
    step: 'STEP 3',
    title: 'Join our official WhatsApp channel.',
    detail: 'Enter the official VENDETTA PAID SCRIMS WhatsApp Channel for live updates and room notices.',
  },
  {
    step: 'STEP 4',
    title: 'Contact the admin using the WhatsApp number listed in our channel.',
    detail: 'Locate the official admin contact details posted inside the WhatsApp Channel description or announcements.',
  },
  {
    step: 'STEP 5',
    title: 'Ask the admin for available slots and registration instructions.',
    detail: 'Message the admin with your chosen lobby timing, tier, and squad name to check slot availability.',
  },
  {
    step: 'STEP 6',
    title: "Follow the admin's payment and confirmation instructions.",
    detail: 'Complete the entry fee step directly as instructed by the admin to lock your squad slot.',
  },
];

/**
 * OFFICIAL B2B 6-MAP ROTATION
 * Strictly six maps: Bermuda, Purgatory, Kalahari, Nex Terra, Solara, Random Map.
 */
export const MAP_POOL: MapConfig[] = [
  {
    id: 'bermuda',
    order: 'Match 01',
    name: 'BERMUDA',
    imagePath: '/assets/maps/bermuda.jpg',
    sectorTag: 'Classic Archipelago',
    terrainProfile: 'Balanced coastal compounds, Clock Tower high-ground, and Peak ridge rotations.',
    tacticalNote: 'Opening map testing early drop discipline and central zone control.',
    palette: {
      primary: '#DC2626',
      secondary: '#7F1D1D',
      glow: 'rgba(220, 38, 38, 0.25)',
    },
  },
  {
    id: 'purgatory',
    order: 'Match 02',
    name: 'PURGATORY',
    imagePath: '/assets/maps/purgatory.jpg',
    sectorTag: 'River Basin & Bridges',
    terrainProfile: 'Split landmass separated by narrow bridge chokepoints around Brasilia and Central.',
    tacticalNote: 'Punishes late river crossings; rewards early vehicle positioning.',
    palette: {
      primary: '#E11D48',
      secondary: '#881337',
      glow: 'rgba(225, 29, 72, 0.22)',
    },
  },
  {
    id: 'kalahari',
    order: 'Match 03',
    name: 'KALAHARI',
    imagePath: '/assets/maps/kalahari.jpg',
    sectorTag: 'Arid Canyon Mesas',
    terrainProfile: 'Vertical sandstone cliffs, Refinery sightlines, and exposed desert valley flanks.',
    tacticalNote: 'High-ground elevation dominance and long-range utility control.',
    palette: {
      primary: '#EA580C',
      secondary: '#7C2D12',
      glow: 'rgba(234, 88, 12, 0.22)',
    },
  },
  {
    id: 'nex-terra',
    order: 'Match 04',
    name: 'NEX TERRA',
    imagePath: '/assets/maps/nexterra.jpg',
    sectorTag: 'Tactical Sci-Fi Sector',
    terrainProfile: 'Symmetrical concrete labs, Intellect Center corridors, and anti-gravity transit zones.',
    tacticalNote: 'Fast close-quarter squad wipes and sharp third-party timing.',
    palette: {
      primary: '#B91C1C',
      secondary: '#450A0A',
      glow: 'rgba(185, 28, 28, 0.28)',
    },
  },
  {
    id: 'solara',
    order: 'Match 05',
    name: 'SOLARA',
    imagePath: '/assets/maps/solara.png',
    sectorTag: 'Solar Terrace Arena',
    terrainProfile: 'Stepped compound terraces, wide perimeter flank routes, and rapid mid-zone shifts.',
    tacticalNote: 'Penultimate clash where consistency points separate podium contenders.',
    palette: {
      primary: '#D97706',
      secondary: '#78350F',
      glow: 'rgba(217, 119, 6, 0.22)',
    },
  },
  {
    id: 'random-map',
    order: 'Match 06',
    name: 'RANDOM MAP',
    imagePath: '/assets/maps/random-map.png',
    sectorTag: 'Dynamic Final Decider',
    terrainProfile: 'Unannounced final battleground drawn from the official competitive map rotation.',
    tacticalNote: 'Tests true squad adaptability with zero pre-planned drop comfort.',
    isRandom: true,
    palette: {
      primary: '#F43F5E',
      secondary: '#4C0519',
      glow: 'rgba(244, 63, 94, 0.26)',
    },
  },
];

export const COMPETITIVE_PILLARS = [
  {
    id: 'fair-competition',
    index: '01',
    title: 'Fair Competition & Anti-Cheat Integrity',
    description:
      'Strict mobile-lobby enforcement and zero tolerance for third-party scripts, panels, or cross-team collusion. Every match outcome is earned on skill and positioning.',
    metric: 'Zero-Tolerance Policy',
  },
  {
    id: 'organised-matches',
    index: '02',
    title: 'Organised B2B Six-Map Scheduling',
    description:
      'Four consistent daily timings at 12:00 PM, 3:00 PM, 6:00 PM, and 9:00 PM IST running back-to-back six-map blocks so squads get full tournament-grade practice.',
    metric: '4 Daily Windows',
  },
  {
    id: 'pro-management',
    index: '03',
    title: 'Dedicated Room & Admin Management',
    description:
      'Streamlined slot confirmation and room credential distribution through our official WhatsApp Channel so teams spend time competing, not waiting on disorganised lobbies.',
    metric: 'Direct Admin Desk',
  },
  {
    id: 'transparent-prizes',
    index: '04',
    title: 'Clear Entry Tiers & Prize Pools',
    description:
      'Every lobby tier displays exact entry fees and prize pools upfront—from ₹25 (₹230 pool) up to ₹55 (₹550 pool)—with zero hidden deductions or shifting payouts.',
    metric: '₹230 to ₹550 Pools',
  },
];

/**
 * EDITABLE RULES & FAIR PLAY GUIDELINES
 */
export const RULES_CATEGORIES: RuleGroup[] = [
  {
    id: 'tournament-rules',
    title: 'Tournament Rules',
    summary: 'Core lobby structure and slot discipline for every VENDETTA PAID SCRIMS session.',
    rules: [
      'All daily scrims operate in a Back-to-Back (B2B) 6-map format: Bermuda, Purgatory, Kalahari, Nex Terra, Solara, and one Random Map.',
      'Squads must register their exact team name and roster slot with the official admin via the WhatsApp number listed in our channel before lobby lock.',
      'Room ID and Password are shared exclusively with confirmed squads prior to match start; sharing credentials with unregistered teams results in immediate disqualification.',
      'Teams must occupy their assigned slot number inside the custom room and remain ready for rapid back-to-back launches.',
    ],
  },
  {
    id: 'fair-play',
    title: 'Fair Play & Anti-Cheat',
    summary: 'Strict integrity standards protecting every competitive Indian squad in the arena.',
    rules: [
      'Zero tolerance for hacks, third-party config files, aim-assist panels, location trackers, or modified APKs.',
      'Cross-squad teaming, intentional feeding, or ghosting via external streams is strictly prohibited.',
      'Admins reserve the right to request device-screen or handcam verification in case of flagged gameplay.',
      'Violating squads forfeit their slot, entry fee, and any prize claim, and face a permanent ban across all VENDETTA lobbies.',
    ],
  },
  {
    id: 'match-conduct',
    title: 'Match Conduct & Disputes',
    summary: 'Communication, result verification, and prize settlement protocol.',
    rules: [
      'Squad leaders are responsible for capturing end-of-match scoreboard screenshots across all six B2B maps.',
      'Abusive behaviour, hate speech, or harassment directed toward admins or competing rosters will not be tolerated.',
      'Any match dispute or bug claim must be backed by clear video proof or full-screen screenshots submitted immediately after the map.',
      'Final rulings on standings and tie-breakers rest with the VENDETTA PAID SCRIMS administration team.',
    ],
  },
];

/**
 * OFFICIAL FAQ SECTION (All 10 required questions)
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is VENDETTA PAID SCRIMS?',
    answer:
      'VENDETTA PAID SCRIMS is a competitive Free Fire paid scrims organisation tailored for Indian squads. We host structured daily back-to-back six-map lobbies with transparent entry tiers, fair-play enforcement, and cash prize pools.',
  },
  {
    id: 'faq-2',
    question: 'What are the daily lobby timings?',
    answer:
      'We run four regular daily scrim lobbies at 12:00 PM, 3:00 PM, 6:00 PM, and 9:00 PM IST.',
  },
  {
    id: 'faq-3',
    question: 'What are the available entry fees?',
    answer:
      'We offer four exact entry fee tiers: Lobby Tier 01 is ₹25, Lobby Tier 02 is ₹35, Lobby Tier 03 is ₹45, and Lobby Tier 04 is ₹55.',
  },
  {
    id: 'faq-4',
    question: 'What are the corresponding prize pools?',
    answer:
      'Each entry tier carries a dedicated prize pool: Lobby Tier 01 (₹25 entry) has a ₹230 prize pool, Lobby Tier 02 (₹35 entry) has a ₹330 prize pool, Lobby Tier 03 (₹45 entry) has a ₹450 prize pool, and Lobby Tier 04 (₹55 entry) has a ₹550 prize pool.',
  },
  {
    id: 'faq-5',
    question: 'How can I register for a paid slot?',
    answer:
      'Registration is handled manually via WhatsApp with no automated payment gateway. Choose your preferred lobby time and tier, join our official WhatsApp channel, contact the admin using the WhatsApp number listed in our channel, ask for available slots, and follow the admin’s payment and confirmation instructions.',
  },
  {
    id: 'faq-6',
    question: 'Where can I find the admin contact number?',
    answer:
      'The official admin WhatsApp contact number is listed directly inside our official WhatsApp Channel. Join the channel first and check the channel details or pinned admin notice to message the admin.',
  },
  {
    id: 'faq-7',
    question: 'Which maps are played?',
    answer:
      'Our official six-map pool consists of Bermuda, Purgatory, Kalahari, Nex Terra, Solara, and one Random Map.',
  },
  {
    id: 'faq-8',
    question: 'What is the B2B six-map format?',
    answer:
      'B2B (Back-to-Back) six-map format means your squad plays six consecutive matches in a single lobby session across Bermuda, Purgatory, Kalahari, Nex Terra, Solara, and one Random Map to test consistency across every terrain.',
  },
  {
    id: 'faq-9',
    question: 'How do I join the official WhatsApp channel?',
    answer:
      'Click any "Join Our WhatsApp Channel" or "REGISTER VIA WHATSAPP" button on this website, or use the official WhatsApp Channel link in the navigation bar and footer to open and follow the channel directly.',
  },
  {
    id: 'faq-10',
    question: 'How can I follow VENDETTA on Instagram?',
    answer:
      'Use the official Instagram link located in the website navigation bar, hero section, or footer to visit @vendetta.scrims for tournament highlights, announcements, and community updates.',
  },
];
