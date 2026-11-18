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
    'Engineered for elite Indian Free Fire squads demanding tournament-grade custom rooms, relentless back-to-back six-map endurance circuits, and verified prize pools overseen by dedicated admins.',
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
    detail: 'Legend Series championship payout',
  },
];

/**
 * OFFICIAL DAILY LOBBY SCHEDULE (IST)
 * Preserved exactly as configured.
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
 */
export const COUNTDOWN_CONFIG = {
  isScheduleConfigured: true,
  timezoneLabel: 'IST (Asia/Kolkata)',
  explicitTargetIso: null as string | null,
};

/**
 * EXACT ENTRY FEES & PRIZE POOLS
 * Do not modify amounts.
 */
export const ENTRY_TIERS: TierConfig[] = [
  {
    id: 'tier-01',
    tierLabel: 'ELITE SERIES',
    tierName: 'Division 01',
    entryFee: 25,
    prizePool: 230,
    entryDisplay: '₹25',
    prizeDisplay: '₹230',
    accentTone: 'steel',
    summary: 'Precision entry bracket engineered for rising squads mastering B2B rotations.',
  },
  {
    id: 'tier-02',
    tierLabel: 'PRO SERIES',
    tierName: 'Division 02',
    entryFee: 35,
    prizePool: 330,
    entryDisplay: '₹35',
    prizeDisplay: '₹330',
    accentTone: 'crimson',
    summary: 'High-consistency mid-bracket built for disciplined daily scrimmage reps.',
  },
  {
    id: 'tier-03',
    tierLabel: 'CHAMPIONS SERIES',
    tierName: 'Division 03',
    entryFee: 45,
    prizePool: 450,
    entryDisplay: '₹45',
    prizeDisplay: '₹450',
    accentTone: 'blood',
    summary: 'High-intensity competitive bracket tested by seasoned tournament rosters.',
  },
  {
    id: 'tier-04',
    tierLabel: 'LEGEND SERIES',
    tierName: 'Flagship Division',
    entryFee: 55,
    prizePool: 550,
    entryDisplay: '₹55',
    prizeDisplay: '₹550',
    accentTone: 'obsidian',
    summary: 'VENDETTA flagship championship division commanding our highest daily purse.',
  },
];

/**
 * WHATSAPP REGISTRATION PROCESS (Exact 6 Steps Preserved)
 */
export const REGISTRATION_STEPS = [
  {
    step: 'STEP 1',
    title: 'Choose your preferred lobby time.',
    detail: 'Select your deployment window from our four daily IST lobbies: 12:00 PM, 3:00 PM, 6:00 PM, or 9:00 PM.',
  },
  {
    step: 'STEP 2',
    title: 'Select your entry fee and prize pool tier.',
    detail: 'Commit to ELITE SERIES (₹25 / ₹230), PRO SERIES (₹35 / ₹330), CHAMPIONS SERIES (₹45 / ₹450), or LEGEND SERIES (₹55 / ₹550).',
  },
  {
    step: 'STEP 3',
    title: 'Join our official WhatsApp channel.',
    detail: 'Enter the official VENDETTA PAID SCRIMS WhatsApp Channel for live notices and lobby schedules.',
  },
  {
    step: 'STEP 4',
    title: 'Contact the admin using the WhatsApp number listed in our channel.',
    detail: 'Locate the verified admin WhatsApp contact posted inside the official channel details.',
  },
  {
    step: 'STEP 5',
    title: 'Ask the admin for available slots and registration instructions.',
    detail: 'Send your preferred lobby timing, series tier, and squad name to confirm open slot capacity.',
  },
  {
    step: 'STEP 6',
    title: "Follow the admin's payment and confirmation instructions.",
    detail: 'Complete entry settlement directly per admin protocol to lock your squad into the custom room.',
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
    tacticalNote: 'Opening battleground demanding crisp drop splits and early central zone control.',
    palette: {
      primary: '#F43F5E',
      secondary: '#881337',
      glow: 'rgba(244, 63, 94, 0.24)',
    },
  },
  {
    id: 'purgatory',
    order: 'Match 02',
    name: 'PURGATORY',
    imagePath: '/assets/maps/purgatory.jpg',
    sectorTag: 'River Basin & Bridges',
    terrainProfile: 'Split landmass separated by narrow bridge chokepoints around Brasilia and Central.',
    tacticalNote: 'Punishes delayed rotations; rewards disciplined bridge control and vehicle timing.',
    palette: {
      primary: '#E11D48',
      secondary: '#4C0519',
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
    tacticalNote: 'High-ground elevation mastery and long-range utility discipline decide every circle.',
    palette: {
      primary: '#FB7185',
      secondary: '#881337',
      glow: 'rgba(251, 113, 133, 0.2)',
    },
  },
  {
    id: 'nex-terra',
    order: 'Match 04',
    name: 'NEX TERRA',
    imagePath: '/assets/maps/nexterra.jpg',
    sectorTag: 'Tactical Sci-Fi Sector',
    terrainProfile: 'Symmetrical concrete labs, Intellect Center corridors, and anti-gravity transit zones.',
    tacticalNote: 'Relentless close-quarter engagements and razor-sharp third-party execution.',
    palette: {
      primary: '#94A3B8',
      secondary: '#1E293B',
      glow: 'rgba(148, 163, 184, 0.24)',
    },
  },
  {
    id: 'solara',
    order: 'Match 05',
    name: 'SOLARA',
    imagePath: '/assets/maps/solara.png',
    sectorTag: 'Solar Terrace Arena',
    terrainProfile: 'Stepped compound terraces, wide perimeter flank routes, and rapid mid-zone shifts.',
    tacticalNote: 'Penultimate clash where consistent placement points separate championship contenders.',
    palette: {
      primary: '#CBD5E1',
      secondary: '#334155',
      glow: 'rgba(203, 213, 225, 0.2)',
    },
  },
  {
    id: 'random-map',
    order: 'Match 06',
    name: 'RANDOM MAP',
    imagePath: '/assets/maps/random-map.png',
    sectorTag: 'Dynamic Final Decider',
    terrainProfile: 'Unannounced final battleground drawn from the official competitive map rotation.',
    tacticalNote: 'Eliminates drop-spot predictability and tests true championship adaptability.',
    isRandom: true,
    palette: {
      primary: '#F43F5E',
      secondary: '#881337',
      glow: 'rgba(244, 63, 94, 0.28)',
    },
  },
];

export const COMPETITIVE_PILLARS = [
  {
    id: 'fair-competition',
    index: '01',
    title: 'Zero-Compromise Anti-Cheat Protocol',
    description:
      'Strict competitive enforcement prohibiting third-party scripts, config modifications, or cross-squad collusion—ensuring every victory is won purely on mechanical skill and macro calling.',
    metric: 'Strict Integrity',
  },
  {
    id: 'organised-matches',
    index: '02',
    title: 'B2B Six-Map Endurance Format',
    description:
      'Four daily IST deployment windows running consecutive six-map blocks so Indian rosters build genuine tournament stamina across every competitive terrain.',
    metric: '4 Daily Windows',
  },
  {
    id: 'pro-management',
    index: '03',
    title: 'Precision Admin Operations',
    description:
      'Direct slot confirmation and custom room credential dispatch through our official WhatsApp Channel—eliminating idle lobby delays and disorganised launches.',
    metric: 'Dedicated Desk',
  },
  {
    id: 'transparent-prizes',
    index: '04',
    title: 'Fixed Tier & Purse Architecture',
    description:
      'Upfront entry fees and guaranteed prize pools across every division—from ₹25 (₹230 purse) to ₹55 (₹550 purse)—with zero ambiguity.',
    metric: '₹230 – ₹550 Purse',
  },
];

export const RULES_CATEGORIES: RuleGroup[] = [
  {
    id: 'tournament-rules',
    title: 'Tournament Rules',
    summary: 'Core lobby structure and slot discipline enforced across every VENDETTA PAID SCRIMS session.',
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
    summary: 'Uncompromising competitive standards protecting every legitimate Indian squad.',
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
    summary: 'Communication standards, scoreboard verification, and administrative rulings.',
    rules: [
      'Squad leaders are responsible for capturing end-of-match scoreboard screenshots across all six B2B maps.',
      'Abusive behaviour, hate speech, or harassment directed toward admins or competing rosters will not be tolerated.',
      'Any match dispute or bug claim must be backed by clear video proof or full-screen screenshots submitted immediately after the map.',
      'Final rulings on standings and tie-breakers rest with the VENDETTA PAID SCRIMS administration team.',
    ],
  },
];

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
      'We offer four exact entry fee series: ELITE SERIES is ₹25, PRO SERIES is ₹35, CHAMPIONS SERIES is ₹45, and LEGEND SERIES is ₹55.',
  },
  {
    id: 'faq-4',
    question: 'What are the corresponding prize pools?',
    answer:
      'Each series carries a dedicated prize pool: ELITE SERIES (₹25 entry) has a ₹230 prize pool, PRO SERIES (₹35 entry) has a ₹330 prize pool, CHAMPIONS SERIES (₹45 entry) has a ₹450 prize pool, and LEGEND SERIES (₹55 entry) has a ₹550 prize pool.',
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
