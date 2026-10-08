import type { Sport } from "./constants";

const U = "https://images.unsplash.com";

/** Shared article item shapes for news sections */
export interface ArticleHorizontal {
  image: string;
  imageAlt: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
}
export interface ArticleVertical {
  image: string;
  imageAlt: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
}
export interface ArticleCompact {
  image: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

/** Single article for reel-style news (one per view, short body ~8-9 lines) */
export interface ReelArticle {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  image: string;
  imageAlt: string;
  /** Optional e.g. "LIVE COVERAGE" */
  liveTag?: string;
  /** Short body text; UI caps with line-clamp ~9 */
  bodyShort: string;
  readTime: string;
  /** Quick rundown bullet points */
  quickRundown?: string[];
}

/** Video Reel item for /reels page */
export interface VideoReel {
  id: string;
  thumbnail: string;
  thumbnailAlt: string;
  videoUrl?: string;
  category: string;
  categoryTag?: "EXPLODE" | "GDK" | "LIVE";
  title: string;
  description: string;
  author: string;
  authorAvatar: string;
  verified?: boolean;
  views: string;
  likes: string;
  comments: string;
  bookmarks: string;
  duration: string;
  timestamp: string;
  hashtags: string[];
}

export interface ShortCard {
  image: string;
  imageAlt: string;
  tag: string;
  tagColor: string;
  title: string;
}
/** YouTube Video for videos page */
export interface YouTubeVideo {
  id: string;
  videoId: string;
  title: string;
  thumbnail: string;
  category: string;
  categoryColor: string;
  views: string;
  duration: string;
  uploadedAt: string;
  description: string;
}

export interface VideoCard {
  image: string;
  imageAlt: string;
  title: string;
  duration: string;
  views: string;
  tag?: string;
  tagColor?: string;
}

export interface NewsBySport {
  horizontal: ArticleHorizontal[];
  vertical: ArticleVertical[];
  compact: ArticleCompact[];
  verticalRow2: ArticleVertical[];
}

// Single cricket image – cricket bat and ball (widely used Unsplash ID)
const cricketImg = `${U}/photo-1531415074968-036ba1b575da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyaWNrZXQlMjBmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww`;
const soccerImg = `${U}/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80`;
const tennisImg = `${U}/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80`;
const footballImg = `${U}/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80`;
const esportsImg = `${U}/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80`;

/** Cricket – dedicated content */
const CRICKET_NEWS: NewsBySport = {
  horizontal: [
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "India vs Pakistan: T20 World Cup Clash That Broke Viewing Records", excerpt: "Full breakdown of the thriller at the MCG, the key moments that swung the game, and what it means for both teams going into the knockouts. Expert analysis and player ratings.", readTime: "8 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "IPL 2025: Top 5 Performers at the Halfway Stage", excerpt: "Stats, impact, and who's leading the race for MVP. We analyse run rates, strike rates, and match-winning contributions so far. The numbers behind the standout stars.", readTime: "5 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "Ashes 2025: Why This Series Could Be the Closest in Decades", excerpt: "Form guides, key battles, and the X-factors that could decide the urn. A deep dive into both squads and the conditions they'll face.", readTime: "6 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "WTC Final 2025: Venue, Dates and Full Preview", excerpt: "Everything you need to know about the ultimate Test. Schedule, squads, pitch report and why this edition could be the best yet.", readTime: "4 Min Read" },
  ],
  vertical: [
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "Kohli's Comeback: The Numbers Behind His Return to Form", excerpt: "How the former captain has reinvented his game and what the stats say about his impact in 2025.", readTime: "4 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "T20 World Cup: Group-by-Group Analysis and Predictions", excerpt: "Every group broken down: strengths, weaknesses and who we think advances to the knockouts.", readTime: "6 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "Rise of the Spinners: Why 2025 Is the Year of the Slow Bowler", excerpt: "Pitch trends, rule changes and the tweakers dominating the stats sheets across formats.", readTime: "5 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "Domestic Round-Up: Ranji, Shield and County Latest", excerpt: "The standout performers and storylines from the red-ball circuit around the world.", readTime: "3 Min Read" },
  ],
  compact: [
    { image: `${cricketImg}&w=200`, imageAlt: "Cricket", title: "WTC Final Venue Announced: Lord's to Host 2025 Decider", excerpt: "Dates, format and how the teams are shaping up for the ultimate Test.", category: "Cricket", readTime: "2 min" },
    { image: `${cricketImg}&w=200`, imageAlt: "Cricket", title: "Bumrah vs Starc: The Battle That Could Decide the Ashes", excerpt: "Why the clash of the pace aces might be the key to the series.", category: "Cricket", readTime: "3 min" },
    { image: `${cricketImg}&w=200`, imageAlt: "Cricket", title: "Emerging Players to Watch in the T20 World Cup", excerpt: "The uncapped and young stars who could light up the tournament.", category: "Cricket", readTime: "4 min" },
    { image: `${cricketImg}&w=200`, imageAlt: "Cricket", title: "IPL 2025: Mid-Season Transfer Window Round-Up", excerpt: "Who moved where and what it means for the playoff race.", category: "Cricket", readTime: "2 min" },
    { image: `${cricketImg}&w=200`, imageAlt: "Cricket", title: "Dravid's Legacy: How India's Coach Changed the Test Side", excerpt: "Tactics, culture and the results that define his tenure.", category: "Cricket", readTime: "5 min" },
    { image: `${cricketImg}&w=200`, imageAlt: "Cricket", title: "Women's Cricket: Ashes and World Cup Build-Up", excerpt: "The key fixtures and players to watch in the women's game.", category: "Cricket", readTime: "3 min" },
    { image: `${cricketImg}&w=200`, imageAlt: "Cricket", title: "Pakistan's New Era: Captain and Coach Speak", excerpt: "What the new leadership has planned for the next cycle.", category: "Cricket", readTime: "4 min" },
    { image: `${cricketImg}&w=200`, imageAlt: "Cricket", title: "County Cricket: Overseas Signings and Season Preview", excerpt: "The big names heading to England and what to expect this summer.", category: "Cricket", readTime: "3 min" },
  ],
  verticalRow2: [
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "The Science of Swing: How Conditions Are Shaping the Game", excerpt: "From Dukes to Kookaburra, how the ball and the pitch are driving results.", readTime: "5 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "ODI Cricket: Is the Format Finding Its Feet Again?", excerpt: "Attendance, ratings and the innovations bringing 50-over cricket back into focus.", readTime: "4 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "U19 World Cup: Stars of Tomorrow", excerpt: "The teenagers who lit up the junior World Cup and what's next for them.", readTime: "3 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "Cricket and Climate: How the Sport Is Adapting", excerpt: "Heat, rain and the sustainability push in stadiums and scheduling.", readTime: "6 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "Big Bash League 2025: Format Changes and Star Signings", excerpt: "New rules, overseas recruits and why this could be the most exciting season yet.", readTime: "4 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "The Art of Captaincy: Leadership Styles That Win Matches", excerpt: "From aggressive field placements to rotation policies, how the best skippers make the difference.", readTime: "5 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "Power-Play Trends: How T20 Batting Has Evolved", excerpt: "Strike rates, boundary percentages and the new approach dominating the first six overs.", readTime: "3 Min Read" },
    { image: `${cricketImg}&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "The Hundred 2025: Teams, Formats and What's New", excerpt: "Full squad lists, fixture dates and the innovations coming to the UK's newest competition.", readTime: "4 Min Read" },
  ],
};

const CRICKET_SHORTS: ShortCard[] = [
  { image: `${cricketImg}&w=300&h=400`, imageAlt: "Cricket", tag: "Highlights", tagColor: "bg-primary-500", title: "Kohli's Masterclass: The winning six!" },
  { image: `${cricketImg}&w=300&h=400`, imageAlt: "Cricket", tag: "T20", tagColor: "bg-primary-500", title: "IND vs PAK: Last over drama" },
  { image: `${cricketImg}&w=300&h=400`, imageAlt: "Cricket", tag: "Ashes", tagColor: "bg-state-live", title: "Starc's 6-for: Ashes spell" },
  { image: `${cricketImg}&w=300&h=400`, imageAlt: "Cricket", tag: "IPL", tagColor: "bg-primary-500", title: "IPL 2025: Best catches of the week" },
  { image: `${cricketImg}&w=300&h=400`, imageAlt: "Cricket", tag: "WTC", tagColor: "bg-state-completed", title: "WTC: Top 5 run-getters" },
  { image: `${cricketImg}&w=300&h=400`, imageAlt: "Cricket", tag: "Moments", tagColor: "bg-accent-orange", title: "That Jadeja run-out" },
  { image: `${cricketImg}&w=300&h=400`, imageAlt: "Cricket", tag: "Records", tagColor: "bg-primary-500", title: "Fastest T20 fifty: New record?" },
  { image: `${cricketImg}&w=300&h=400`, imageAlt: "Cricket", tag: "Interview", tagColor: "bg-state-upcoming", title: "Rohit on the World Cup dream" },
  { image: `${cricketImg}&w=300&h=400`, imageAlt: "Cricket", tag: "Analysis", tagColor: "bg-primary-500", title: "Why spin is dominating" },
  { image: `${cricketImg}&w=300&h=400`, imageAlt: "Cricket", tag: "Throwback", tagColor: "bg-neutral-500", title: "2011 World Cup final: Last over" },
];

const CRICKET_VIDEOS: VideoCard[] = [
  { image: `${cricketImg}&w=400&h=225`, imageAlt: "Cricket", title: "IND vs PAK: Full Match Highlights", duration: "12:05", views: "3.2M views", tag: "Cricket", tagColor: "bg-primary-500" },
  { image: `${cricketImg}&w=400&h=225`, imageAlt: "Cricket", title: "IPL 2025: Best Matches of the Week", duration: "15:20", views: "1.8M views", tag: "Cricket", tagColor: "bg-primary-500" },
  { image: `${cricketImg}&w=400&h=225`, imageAlt: "Cricket", title: "Ashes 2025: Day 1 Highlights", duration: "8:45", views: "2.1M views", tag: "Cricket", tagColor: "bg-primary-500" },
  { image: `${cricketImg}&w=400&h=225`, imageAlt: "Cricket", title: "Kohli's 72: Innings Breakdown", duration: "6:30", views: "890K views", tag: "Cricket", tagColor: "bg-primary-500" },
  { image: `${cricketImg}&w=400&h=225`, imageAlt: "Cricket", title: "T20 World Cup: Group Stage Round-Up", duration: "10:00", views: "1.2M views", tag: "Cricket", tagColor: "bg-primary-500" },
  { image: `${cricketImg}&w=400&h=225`, imageAlt: "Cricket", title: "Bumrah's Yorker Compilation", duration: "4:15", views: "2.5M views", tag: "Cricket", tagColor: "bg-primary-500" },
  { image: `${cricketImg}&w=400&h=225`, imageAlt: "Cricket", title: "WTC Final: Build-Up and Preview", duration: "9:50", views: "456K views", tag: "Cricket", tagColor: "bg-primary-500" },
  { image: `${cricketImg}&w=400&h=225`, imageAlt: "Cricket", title: "R Ashwin: 500 Test Wickets", duration: "7:20", views: "612K views", tag: "Cricket", tagColor: "bg-primary-500" },
  { image: `${cricketImg}&w=400&h=225`, imageAlt: "Cricket", title: "Women's T20: India vs Australia", duration: "11:00", views: "380K views", tag: "Cricket", tagColor: "bg-primary-500" },
  { image: `${cricketImg}&w=400&h=225`, imageAlt: "Cricket", title: "Domestic Heroes: Ranji Round-Up", duration: "5:40", views: "220K views", tag: "Cricket", tagColor: "bg-primary-500" },
];

/** Soccer – dedicated content */
const SOCCER_NEWS: NewsBySport = {
  horizontal: [
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "The Multi-Billion Dollar Transfer That Redefined Football", excerpt: "How one record-breaking move changed the market, what it means for the clubs involved, and why pundits are calling it the deal that reshaped the modern game.", readTime: "6 Min Read" },
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "UCL Semi-Final: Tactical Breakdown of the First Leg", excerpt: "How the managers set up, where the game was won and lost, and what to expect in the return fixture. A deep dive into the key moments.", readTime: "5 Min Read" },
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "Premier League Run-In: Every Game That Matters", excerpt: "The fixtures that could decide the title, top four and relegation. Full schedule and form guide.", readTime: "7 Min Read" },
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "Ballon d'Or 2025: The Case for Each Shortlisted Star", excerpt: "Goals, trophies, impact: we break down why each contender could lift the biggest individual prize in football.", readTime: "8 Min Read" },
  ],
  vertical: [
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "Champions League Draw: Group of Death Explained", excerpt: "Why this group is the toughest in the competition and how the big clubs will navigate it.", readTime: "4 Min Read" },
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "Transfer Window: Biggest Deals So Far This Summer", excerpt: "The fees, the clauses and what each move means for the title race and Europe.", readTime: "5 Min Read" },
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "Haaland vs Mbappé: The Numbers in 2025", excerpt: "Goals, assists, and impact: who's ahead in the battle of the superstars.", readTime: "4 Min Read" },
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "Europa League: Favourites and Dark Horses", excerpt: "Who can go all the way and which underdogs could spring a surprise.", readTime: "3 Min Read" },
  ],
  compact: [
    { image: `${soccerImg}&w=200`, imageAlt: "Soccer", title: "La Liga: Title Race Goes to the Wire", excerpt: "Barcelona, Real Madrid and the final matchday drama.", category: "Soccer", readTime: "3 min" },
    { image: `${soccerImg}&w=200`, imageAlt: "Soccer", title: "Serie A: Inter's Dominance and the Chasers", excerpt: "How the Nerazzurri built their lead and who can catch them.", category: "Soccer", readTime: "4 min" },
    { image: `${soccerImg}&w=200`, imageAlt: "Soccer", title: "Bundesliga: Bayern's Rebuild Under New Boss", excerpt: "Signings, style and the early results of the new era.", category: "Soccer", readTime: "3 min" },
    { image: `${soccerImg}&w=200`, imageAlt: "Soccer", title: "International Break: Key Qualifiers and Friendlies", excerpt: "World Cup and Nations League: who needs what this week.", category: "Soccer", readTime: "2 min" },
    { image: `${soccerImg}&w=200`, imageAlt: "Soccer", title: "Youth Watch: The Next Generation Breaking Through", excerpt: "The teenagers and U21 stars making waves in the top leagues.", category: "Soccer", readTime: "5 min" },
    { image: `${soccerImg}&w=200`, imageAlt: "Soccer", title: "Injury Crisis: How the Big Clubs Are Coping", excerpt: "The key absences and return dates that could shape the run-in.", category: "Soccer", readTime: "3 min" },
    { image: `${soccerImg}&w=200`, imageAlt: "Soccer", title: "Refereeing and VAR: The Big Decisions", excerpt: "The calls that sparked debate and what the rules actually say.", category: "Soccer", readTime: "4 min" },
    { image: `${soccerImg}&w=200`, imageAlt: "Soccer", title: "Women's Football: Champions League and League Title Races", excerpt: "The standout teams and players in the women's game this season.", category: "Soccer", readTime: "4 min" },
  ],
  verticalRow2: [
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "Tactical Trends: How the Top Sides Are Setting Up", excerpt: "Formations, pressing triggers and the patterns defining the elite.", readTime: "6 Min Read" },
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "Stadiums and Atmosphere: The Best Grounds in Europe", excerpt: "Where the noise and the occasion make the difference.", readTime: "4 Min Read" },
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "Finance and FFP: What the Rules Mean for Transfers", excerpt: "How clubs are navigating the regulations and where the pressure is.", readTime: "5 Min Read" },
    { image: `${soccerImg}&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "World Cup 2026: Host Cities and Qualifying Update", excerpt: "The road to North America and who's already in or struggling.", readTime: "4 Min Read" },
  ],
};

const SOCCER_SHORTS: ShortCard[] = [
  { image: `${soccerImg}&w=300&h=400`, imageAlt: "Soccer", tag: "Goal", tagColor: "bg-state-completed", title: "Unbelievable bicycle kick in the 90th min" },
  { image: `${soccerImg}&w=300&h=400`, imageAlt: "Soccer", tag: "UCL", tagColor: "bg-state-upcoming", title: "Champions League: Best goals this week" },
  { image: `${soccerImg}&w=300&h=400`, imageAlt: "Soccer", tag: "Save", tagColor: "bg-accent-orange", title: "Goalkeeper's triple save" },
  { image: `${soccerImg}&w=300&h=400`, imageAlt: "Soccer", tag: "Skill", tagColor: "bg-primary-500", title: "That nutmeg in the derby" },
  { image: `${soccerImg}&w=300&h=400`, imageAlt: "Soccer", tag: "VAR", tagColor: "bg-state-live", title: "Controversial VAR call explained" },
  { image: `${soccerImg}&w=300&h=400`, imageAlt: "Soccer", tag: "Interview", tagColor: "bg-state-upcoming", title: "Manager's post-match reaction" },
  { image: `${soccerImg}&w=300&h=400`, imageAlt: "Soccer", tag: "Tactics", tagColor: "bg-state-completed", title: "How they broke the press" },
  { image: `${soccerImg}&w=300&h=400`, imageAlt: "Soccer", tag: "Transfer", tagColor: "bg-primary-500", title: "New signing's first day" },
  { image: `${soccerImg}&w=300&h=400`, imageAlt: "Soccer", tag: "Fans", tagColor: "bg-accent-orange", title: "Stadium atmosphere: You had to be there" },
  { image: `${soccerImg}&w=300&h=400`, imageAlt: "Soccer", tag: "Throwback", tagColor: "bg-neutral-500", title: "Classic goal from the archives" },
];

const SOCCER_VIDEOS: VideoCard[] = [
  { image: `${soccerImg}&w=400&h=225`, imageAlt: "Soccer", title: "UCL Semi-Final: Full Match Highlights", duration: "8:42", views: "2.1M views", tag: "Soccer", tagColor: "bg-state-upcoming" },
  { image: `${soccerImg}&w=400&h=225`, imageAlt: "Soccer", title: "Premier League: Top 10 Goals of the Month", duration: "6:20", views: "1.5M views", tag: "Soccer", tagColor: "bg-state-upcoming" },
  { image: `${soccerImg}&w=400&h=225`, imageAlt: "Soccer", title: "El Clásico: Full 90 Minutes Recap", duration: "12:00", views: "3.8M views", tag: "Soccer", tagColor: "bg-state-upcoming" },
  { image: `${soccerImg}&w=400&h=225`, imageAlt: "Soccer", title: "Transfer Special: Every Deal of the Summer", duration: "15:30", views: "890K views", tag: "Soccer", tagColor: "bg-state-upcoming" },
  { image: `${soccerImg}&w=400&h=225`, imageAlt: "Soccer", title: "Tactical Analysis: How City Dominated", duration: "9:15", views: "456K views", tag: "Soccer", tagColor: "bg-state-upcoming" },
  { image: `${soccerImg}&w=400&h=225`, imageAlt: "Soccer", title: "Europa League: Semi-Final Highlights", duration: "7:50", views: "612K views", tag: "Soccer", tagColor: "bg-state-upcoming" },
  { image: `${soccerImg}&w=400&h=225`, imageAlt: "Soccer", title: "Ballon d'Or Contenders: Season So Far", duration: "10:20", views: "1.1M views", tag: "Soccer", tagColor: "bg-state-upcoming" },
  { image: `${soccerImg}&w=400&h=225`, imageAlt: "Soccer", title: "Women's Champions League: Final Preview", duration: "5:40", views: "320K views", tag: "Soccer", tagColor: "bg-state-upcoming" },
  { image: `${soccerImg}&w=400&h=225`, imageAlt: "Soccer", title: "World Cup Qualifiers: Key Matches", duration: "8:00", views: "540K views", tag: "Soccer", tagColor: "bg-state-upcoming" },
  { image: `${soccerImg}&w=400&h=225`, imageAlt: "Soccer", title: "Best Saves of the Season", duration: "4:30", views: "2.2M views", tag: "Soccer", tagColor: "bg-state-upcoming" },
];

/** Tennis – dedicated content */
const TENNIS_NEWS: NewsBySport = {
  horizontal: [
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Grand Slam 2025: The Draw That Changed Everything", excerpt: "Seeding shocks, early blockbusters, and why experts are calling this the most open major in decades. We break down the biggest first-round clashes.", readTime: "6 Min Read" },
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Wimbledon 2025: Why the Grass Could Favour the Underdogs", excerpt: "Court speed, bounce and the players who could surprise at the All England Club this year.", readTime: "5 Min Read" },
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Sinner vs Alcaraz: The Rivalry Defining the Next Era", excerpt: "Head-to-head, playing styles and the matches that have set up a decade of duels.", readTime: "7 Min Read" },
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "US Open Build-Up: Form Guide and Dark Horses", excerpt: "Who's peaking at the right time and who could crash the party in New York.", readTime: "4 Min Read" },
  ],
  vertical: [
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Davis Cup Finals: Draw and Schedule", excerpt: "Full fixture list and the ties that could decide the trophy.", readTime: "3 Min Read" },
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "ATP Rankings: The Race to Year-End No.1", excerpt: "Who's in the mix and what they need to do in the remaining Masters and Slams.", readTime: "4 Min Read" },
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Women's Tennis: New No.1 and the Chasers", excerpt: "The rankings shake-up and the players ready to pounce.", readTime: "4 Min Read" },
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Doubles Special: The Teams to Watch", excerpt: "The pairs dominating the circuit and the young guns on the rise.", readTime: "3 Min Read" },
  ],
  compact: [
    { image: `${tennisImg}&w=200`, imageAlt: "Tennis", title: "Wimbledon 2025: Wildcards and Qualifiers", excerpt: "The unexpected names in the draw and the form players on grass.", category: "Tennis", readTime: "3 min" },
    { image: `${tennisImg}&w=200`, imageAlt: "Tennis", title: "Injury Update: Who's In and Who's Out", excerpt: "The latest on the stars battling fitness ahead of the Slams.", category: "Tennis", readTime: "2 min" },
    { image: `${tennisImg}&w=200`, imageAlt: "Tennis", title: "Next Gen Finals: The Contenders", excerpt: "The young guns who could book their place in the year-end showpiece.", category: "Tennis", readTime: "4 min" },
    { image: `${tennisImg}&w=200`, imageAlt: "Tennis", title: "Clay to Grass: How the Top Stars Adapt", excerpt: "The technical and tactical shifts between the surfaces.", category: "Tennis", readTime: "5 min" },
    { image: `${tennisImg}&w=200`, imageAlt: "Tennis", title: "Coaching Carousel: The Latest Moves", excerpt: "Which top players have new voices in their corner this season.", category: "Tennis", readTime: "3 min" },
    { image: `${tennisImg}&w=200`, imageAlt: "Tennis", title: "Grand Slam Prize Money: How It's Grown", excerpt: "The numbers behind the sport's biggest events.", category: "Tennis", readTime: "4 min" },
    { image: `${tennisImg}&w=200`, imageAlt: "Tennis", title: "Retirement and Comebacks: The Stories", excerpt: "Who's hanging up the racket and who's giving it one more shot.", category: "Tennis", readTime: "3 min" },
    { image: `${tennisImg}&w=200`, imageAlt: "Tennis", title: "WTA Finals: Venue and Qualification Race", excerpt: "Where and when the season climax takes place and who's in the mix.", category: "Tennis", readTime: "3 min" },
  ],
  verticalRow2: [
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Technology in Tennis: Hawkeye, Data and the Future", excerpt: "How tech is changing the way we watch and analyse the game.", readTime: "5 Min Read" },
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Grass-Court Masters: History and Highlights", excerpt: "The tournaments that shape the Wimbledon build-up.", readTime: "4 Min Read" },
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Mental Game: How the Elite Handle Pressure", excerpt: "The psychologists and routines behind the biggest points.", readTime: "6 Min Read" },
    { image: `${tennisImg}&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Tennis and Sustainability: Green Initiatives", excerpt: "What the tours and events are doing to reduce their footprint.", readTime: "4 Min Read" },
  ],
};

const TENNIS_SHORTS: ShortCard[] = [
  { image: `${tennisImg}&w=300&h=400`, imageAlt: "Tennis", tag: "Wimbledon", tagColor: "bg-state-completed", title: "Wimbledon 2025: Best rally" },
  { image: `${tennisImg}&w=300&h=400`, imageAlt: "Tennis", tag: "Grand Slam", tagColor: "bg-state-completed", title: "Shot of the tournament" },
  { image: `${tennisImg}&w=300&h=400`, imageAlt: "Tennis", tag: "Break Point", tagColor: "bg-primary-500", title: "That 20-minute game" },
  { image: `${tennisImg}&w=300&h=400`, imageAlt: "Tennis", tag: "Interview", tagColor: "bg-state-upcoming", title: "Champion's press conference" },
  { image: `${tennisImg}&w=300&h=400`, imageAlt: "Tennis", tag: "Tiebreak", tagColor: "bg-state-live", title: "Tiebreak drama: 20-18" },
  { image: `${tennisImg}&w=300&h=400`, imageAlt: "Tennis", tag: "Throwback", tagColor: "bg-neutral-500", title: "Classic final: Full fifth set" },
  { image: `${tennisImg}&w=300&h=400`, imageAlt: "Tennis", tag: "Davis Cup", tagColor: "bg-state-completed", title: "Davis Cup: Deciding rubber" },
  { image: `${tennisImg}&w=300&h=400`, imageAlt: "Tennis", tag: "ATP", tagColor: "bg-primary-500", title: "Masters 1000: Semis highlights" },
  { image: `${tennisImg}&w=300&h=400`, imageAlt: "Tennis", tag: "WTA", tagColor: "bg-accent-orange", title: "Women's final: Match point" },
  { image: `${tennisImg}&w=300&h=400`, imageAlt: "Tennis", tag: "Training", tagColor: "bg-state-upcoming", title: "Behind the scenes: Practice session" },
];

const TENNIS_VIDEOS: VideoCard[] = [
  { image: `${tennisImg}&w=400&h=225`, imageAlt: "Tennis", title: "Wimbledon 2025: Best Points", duration: "6:30", views: "890K views", tag: "Tennis", tagColor: "bg-state-completed" },
  { image: `${tennisImg}&w=400&h=225`, imageAlt: "Tennis", title: "Australian Open Final: Full Highlights", duration: "14:20", views: "2.1M views", tag: "Tennis", tagColor: "bg-state-completed" },
  { image: `${tennisImg}&w=400&h=225`, imageAlt: "Tennis", title: "Sinner vs Alcaraz: Epic Semi-Final", duration: "18:00", views: "1.5M views", tag: "Tennis", tagColor: "bg-state-completed" },
  { image: `${tennisImg}&w=400&h=225`, imageAlt: "Tennis", title: "Davis Cup: Full Match Replay", duration: "45:00", views: "320K views", tag: "Tennis", tagColor: "bg-state-completed" },
  { image: `${tennisImg}&w=400&h=225`, imageAlt: "Tennis", title: "Top 10 Shots of the Month", duration: "5:40", views: "612K views", tag: "Tennis", tagColor: "bg-state-completed" },
  { image: `${tennisImg}&w=400&h=225`, imageAlt: "Tennis", title: "US Open: Draw Analysis", duration: "8:15", views: "280K views", tag: "Tennis", tagColor: "bg-state-completed" },
  { image: `${tennisImg}&w=400&h=225`, imageAlt: "Tennis", title: "Grass Court Season Preview", duration: "7:00", views: "195K views", tag: "Tennis", tagColor: "bg-state-completed" },
  { image: `${tennisImg}&w=400&h=225`, imageAlt: "Tennis", title: "WTA Finals: Contenders", duration: "6:50", views: "410K views", tag: "Tennis", tagColor: "bg-state-completed" },
  { image: `${tennisImg}&w=400&h=225`, imageAlt: "Tennis", title: "Doubles: Best Points of the Year", duration: "4:20", views: "180K views", tag: "Tennis", tagColor: "bg-state-completed" },
  { image: `${tennisImg}&w=400&h=225`, imageAlt: "Tennis", title: "Next Gen: Stars of Tomorrow", duration: "9:30", views: "250K views", tag: "Tennis", tagColor: "bg-state-completed" },
];

/** Football (NFL) – dedicated content */
const FOOTBALL_NEWS: NewsBySport = {
  horizontal: [
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "Super Bowl LIX: The Tactical Battle Nobody Saw Coming", excerpt: "How both teams adjusted at the half, the plays that decided it, and what the stats say about the result. Full breakdown from our analysts.", readTime: "8 Min Read" },
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "NFL Week 12: The Games That Will Define the Playoff Picture", excerpt: "Key matchups, injury updates, and what each result means for the standings. Every game that matters.", readTime: "6 Min Read" },
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "Draft 2026: Top QB Prospects and Where They Could Land", excerpt: "The names every scout is talking about and the teams in the mix for a franchise signal-caller.", readTime: "7 Min Read" },
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "MVP Race: Who's Leading and Who Can Catch Up", excerpt: "The stats, the narratives and the games that could swing the award. A full leaderboard and analysis.", readTime: "5 Min Read" },
  ],
  vertical: [
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "Injury Report: Who's In and Who's Out", excerpt: "Latest updates from every team ahead of the weekend. The key absences and return timelines.", readTime: "4 Min Read" },
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "Fantasy Football: Waiver Wire and Start/Sit", excerpt: "The pickups to make and the lineup calls that could win your week.", readTime: "4 Min Read" },
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "Defensive Rankings: The Best Units in the League", excerpt: "Which defences are dominating and why. Pressure, coverage and the numbers that matter.", readTime: "5 Min Read" },
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "Coaching Hot Seat: Who's Under Pressure", excerpt: "The bosses feeling the heat and what they need to do to turn it around.", readTime: "3 Min Read" },
  ],
  compact: [
    { image: `${footballImg}&w=200`, imageAlt: "Football", title: "Super Bowl LIX: Early Odds and Trends", excerpt: "How the market is moving and where the value is.", category: "Football", readTime: "3 min" },
    { image: `${footballImg}&w=200`, imageAlt: "Football", title: "Trade Deadline: Every Move Explained", excerpt: "Who went where and what it means for the playoff push.", category: "Football", readTime: "4 min" },
    { image: `${footballImg}&w=200`, imageAlt: "Football", title: "Rookie Watch: First-Year Stars Shining", excerpt: "The draft class making an impact and who could win OROY and DROY.", category: "Football", readTime: "4 min" },
    { image: `${footballImg}&w=200`, imageAlt: "Football", title: "Thursday Night Football: Preview", excerpt: "The matchup, the keys and our pick for the primetime game.", category: "Football", readTime: "2 min" },
    { image: `${footballImg}&w=200`, imageAlt: "Football", title: "Contract Year: Who's Playing for a Deal", excerpt: "The stars in walk years and how they're performing.", category: "Football", readTime: "3 min" },
    { image: `${footballImg}&w=200`, imageAlt: "Football", title: "Playoff Scenarios: Who Can Clinch This Week", excerpt: "The magic numbers and what has to happen for each team.", category: "Football", readTime: "3 min" },
    { image: `${footballImg}&w=200`, imageAlt: "Football", title: "Hall of Fame Watch: The 2026 Class", excerpt: "The candidates and the debate around the next inductees.", category: "Football", readTime: "5 min" },
    { image: `${footballImg}&w=200`, imageAlt: "Football", title: "International Games: London and Munich", excerpt: "The overseas slate and what it means for the league's global push.", category: "Football", readTime: "3 min" },
  ],
  verticalRow2: [
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "Analytics in the NFL: How Data Is Changing the Game", excerpt: "Fourth down, two-point tries and the numbers driving decisions.", readTime: "6 Min Read" },
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "Concussion Protocol: Latest Updates and Debate", excerpt: "The policy, the controversies and what the science says.", readTime: "5 Min Read" },
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "Salary Cap 2026: What the Rise Means", excerpt: "How the cap jump affects free agency and extensions.", readTime: "4 Min Read" },
    { image: `${footballImg}&w=600`, imageAlt: "Football", category: "Football", categoryColor: "bg-state-live", title: "College to Pro: The Transition for Top Picks", excerpt: "How the best rookies are adjusting and who's ahead of schedule.", readTime: "5 Min Read" },
  ],
};

const FOOTBALL_SHORTS: ShortCard[] = [
  { image: `${footballImg}&w=300&h=400`, imageAlt: "Football", tag: "NFL", tagColor: "bg-state-live", title: "Super Bowl: Game-winning TD" },
  { image: `${footballImg}&w=300&h=400`, imageAlt: "Football", tag: "Highlight", tagColor: "bg-state-completed", title: "One-handed catch of the year" },
  { image: `${footballImg}&w=300&h=400`, imageAlt: "Football", tag: "Sack", tagColor: "bg-accent-orange", title: "Strip sack in overtime" },
  { image: `${footballImg}&w=300&h=400`, imageAlt: "Football", tag: "Draft", tagColor: "bg-primary-500", title: "Top prospect's pro day" },
  { image: `${footballImg}&w=300&h=400`, imageAlt: "Football", tag: "Interview", tagColor: "bg-state-upcoming", title: "QB post-game presser" },
  { image: `${footballImg}&w=300&h=400`, imageAlt: "Football", tag: "Fantasy", tagColor: "bg-state-live", title: "Waiver wire pick of the week" },
  { image: `${footballImg}&w=300&h=400`, imageAlt: "Football", tag: "Injury", tagColor: "bg-state-completed", title: "Star's return timeline" },
  { image: `${footballImg}&w=300&h=400`, imageAlt: "Football", tag: "Throwback", tagColor: "bg-neutral-500", title: "Classic Super Bowl moment" },
  { image: `${footballImg}&w=300&h=400`, imageAlt: "Football", tag: "Analysis", tagColor: "bg-primary-500", title: "Film breakdown: That play" },
  { image: `${footballImg}&w=300&h=400`, imageAlt: "Football", tag: "Rookie", tagColor: "bg-state-upcoming", title: "First career TD" },
];

const FOOTBALL_VIDEOS: VideoCard[] = [
  { image: `${footballImg}&w=400&h=225`, imageAlt: "Football", title: "NFL Week 12: Top Plays", duration: "5:00", views: "1.2M views", tag: "Football", tagColor: "bg-state-live" },
  { image: `${footballImg}&w=400&h=225`, imageAlt: "Football", title: "Super Bowl LIX: Full Game Highlights", duration: "22:00", views: "4.5M views", tag: "Football", tagColor: "bg-state-live" },
  { image: `${footballImg}&w=400&h=225`, imageAlt: "Football", title: "Draft 2026: Top 10 Prospects", duration: "12:30", views: "680K views", tag: "Football", tagColor: "bg-state-live" },
  { image: `${footballImg}&w=400&h=225`, imageAlt: "Football", title: "MVP Candidates: Mid-Season Review", duration: "8:45", views: "420K views", tag: "Football", tagColor: "bg-state-live" },
  { image: `${footballImg}&w=400&h=225`, imageAlt: "Football", title: "Injury Report: Week 12 Updates", duration: "4:20", views: "310K views", tag: "Football", tagColor: "bg-state-live" },
  { image: `${footballImg}&w=400&h=225`, imageAlt: "Football", title: "Fantasy Football: Start/Sit and Waivers", duration: "10:00", views: "550K views", tag: "Football", tagColor: "bg-state-live" },
  { image: `${footballImg}&w=400&h=225`, imageAlt: "Football", title: "Thursday Night Football: Full Recap", duration: "6:15", views: "290K views", tag: "Football", tagColor: "bg-state-live" },
  { image: `${footballImg}&w=400&h=225`, imageAlt: "Football", title: "Best Rookie Performances So Far", duration: "7:30", views: "380K views", tag: "Football", tagColor: "bg-state-live" },
  { image: `${footballImg}&w=400&h=225`, imageAlt: "Football", title: "Playoff Picture: Who's In and Who's Out", duration: "5:50", views: "410K views", tag: "Football", tagColor: "bg-state-live" },
  { image: `${footballImg}&w=400&h=225`, imageAlt: "Football", title: "Hall of Fame: Class of 2026 Debate", duration: "9:00", views: "195K views", tag: "Football", tagColor: "bg-state-live" },
];

/** Esports – dedicated content */
const ESPORTS_NEWS: NewsBySport = {
  horizontal: [
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "Worlds 2025: The Meta Shift That Defined the Finals", excerpt: "Draft trends, the picks that dominated, and why analysts are calling this the most strategic finals yet. Full breakdown from the rift.", readTime: "7 Min Read" },
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "Valorant Champions: The Story of the Underdog Run", excerpt: "How the surprise package made it to the grand final and what it means for the region. Map-by-map analysis.", readTime: "6 Min Read" },
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "Dota 2 TI: Favourites, Dark Horses and the Meta", excerpt: "The heroes, the strategies and the teams to watch at the biggest event of the year.", readTime: "8 Min Read" },
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "CS2 Major: Map Pool and the Teams to Beat", excerpt: "What the pros are picking, how the meta has evolved and who's in form.", readTime: "5 Min Read" },
  ],
  vertical: [
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "League of Legends: Patch Notes and Meta", excerpt: "The changes that could shake up the competitive landscape.", readTime: "4 Min Read" },
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "Transfer Window: Biggest Moves in Esports", excerpt: "The roster changes that could define the next season.", readTime: "5 Min Read" },
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "Prize Pools and Viewership: The Numbers", excerpt: "How the biggest events performed and what's next for the industry.", readTime: "4 Min Read" },
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "Rising Stars: The Rookies to Watch", excerpt: "The new names making waves in the top leagues and tier-two.", readTime: "3 Min Read" },
  ],
  compact: [
    { image: `${esportsImg}&w=200`, imageAlt: "Esports", title: "Valorant Champions: Grand Final Recap", excerpt: "The plays that decided the biggest event of the year.", category: "Esports", readTime: "4 min" },
    { image: `${esportsImg}&w=200`, imageAlt: "Esports", title: "Dota 2 TI: Favourites and Dark Horses", excerpt: "Which teams are in form and who could surprise.", category: "Esports", readTime: "3 min" },
    { image: `${esportsImg}&w=200`, imageAlt: "Esports", title: "CS2 Major: Map Pool and Meta Breakdown", excerpt: "What the pros are picking and why.", category: "Esports", readTime: "5 min" },
    { image: `${esportsImg}&w=200`, imageAlt: "Esports", title: "League of Legends: MSI Preview", excerpt: "The teams, the meta and the storylines for the mid-season crown.", category: "Esports", readTime: "4 min" },
    { image: `${esportsImg}&w=200`, imageAlt: "Esports", title: "Fortnite: FNCS and the New Season", excerpt: "Format changes, drops and the players to watch.", category: "Esports", readTime: "3 min" },
    { image: `${esportsImg}&w=200`, imageAlt: "Esports", title: "Coaching in Esports: The Hidden Factor", excerpt: "How the best teams use their staff to get an edge.", category: "Esports", readTime: "5 min" },
    { image: `${esportsImg}&w=200`, imageAlt: "Esports", title: "Women in Esports: Growth and Challenges", excerpt: "The initiatives and the players breaking through.", category: "Esports", readTime: "4 min" },
    { image: `${esportsImg}&w=200`, imageAlt: "Esports", title: "Mobile Esports: Worlds and Revenue", excerpt: "The scale of the mobile scene and its place in the industry.", category: "Esports", readTime: "3 min" },
  ],
  verticalRow2: [
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "Mental Health in Esports: The Conversation", excerpt: "Burnout, pressure and what orgs and players are doing about it.", readTime: "6 Min Read" },
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "Broadcasting: How the Best Casts Work", excerpt: "The duos and trios that make the biggest moments land.", readTime: "4 Min Read" },
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "Esports and Education: Scholarships and Programs", excerpt: "How universities and schools are embracing competitive gaming.", readTime: "5 Min Read" },
    { image: `${esportsImg}&w=600`, imageAlt: "Esports", category: "Esports", categoryColor: "bg-primary-500", title: "The Business of Esports: Revenue Streams", excerpt: "Where the money comes from and where it's going next.", readTime: "5 Min Read" },
  ],
};

const ESPORTS_SHORTS: ShortCard[] = [
  { image: `${esportsImg}&w=300&h=400`, imageAlt: "Esports", tag: "Worlds", tagColor: "bg-primary-500", title: "Worlds 2025: Pentakill moment" },
  { image: `${esportsImg}&w=300&h=400`, imageAlt: "Esports", tag: "Valorant", tagColor: "bg-state-live", title: "Valorant: 1v4 clutch" },
  { image: `${esportsImg}&w=300&h=400`, imageAlt: "Esports", tag: "Dota 2", tagColor: "bg-state-completed", title: "TI: Teamfight of the tournament" },
  { image: `${esportsImg}&w=300&h=400`, imageAlt: "Esports", tag: "CS2", tagColor: "bg-accent-orange", title: "CS2: Ace in the final round" },
  { image: `${esportsImg}&w=300&h=400`, imageAlt: "Esports", tag: "Interview", tagColor: "bg-state-upcoming", title: "Champion's winner interview" },
  { image: `${esportsImg}&w=300&h=400`, imageAlt: "Esports", tag: "Draft", tagColor: "bg-primary-500", title: "Why that pick broke the meta" },
  { image: `${esportsImg}&w=300&h=400`, imageAlt: "Esports", tag: "Throwback", tagColor: "bg-neutral-500", title: "Classic finals moment" },
  { image: `${esportsImg}&w=300&h=400`, imageAlt: "Esports", tag: "Behind the Scenes", tagColor: "bg-state-upcoming", title: "Boot camp life" },
  { image: `${esportsImg}&w=300&h=400`, imageAlt: "Esports", tag: "Roster", tagColor: "bg-primary-500", title: "New signing announced" },
  { image: `${esportsImg}&w=300&h=400`, imageAlt: "Esports", tag: "Analysis", tagColor: "bg-state-completed", title: "How they won the fight" },
];

const ESPORTS_VIDEOS: VideoCard[] = [
  { image: `${esportsImg}&w=400&h=225`, imageAlt: "Esports", title: "Worlds 2025: Finals Highlights", duration: "10:00", views: "2.5M views", tag: "Esports", tagColor: "bg-primary-500" },
  { image: `${esportsImg}&w=400&h=225`, imageAlt: "Esports", title: "Valorant Champions: Grand Final Full VOD", duration: "95:00", views: "1.2M views", tag: "Esports", tagColor: "bg-primary-500" },
  { image: `${esportsImg}&w=400&h=225`, imageAlt: "Esports", title: "Dota 2 TI: Top 10 Plays", duration: "8:30", views: "890K views", tag: "Esports", tagColor: "bg-primary-500" },
  { image: `${esportsImg}&w=400&h=225`, imageAlt: "Esports", title: "CS2 Major: Grand Final Recap", duration: "12:20", views: "612K views", tag: "Esports", tagColor: "bg-primary-500" },
  { image: `${esportsImg}&w=400&h=225`, imageAlt: "Esports", title: "League of Legends: Patch Breakdown", duration: "6:45", views: "420K views", tag: "Esports", tagColor: "bg-primary-500" },
  { image: `${esportsImg}&w=400&h=225`, imageAlt: "Esports", title: "Transfer Window: Every Move", duration: "9:00", views: "380K views", tag: "Esports", tagColor: "bg-primary-500" },
  { image: `${esportsImg}&w=400&h=225`, imageAlt: "Esports", title: "Rookie of the Year: Contenders", duration: "5:15", views: "290K views", tag: "Esports", tagColor: "bg-primary-500" },
  { image: `${esportsImg}&w=400&h=225`, imageAlt: "Esports", title: "Meta Shift: Why This Patch Matters", duration: "7:40", views: "350K views", tag: "Esports", tagColor: "bg-primary-500" },
  { image: `${esportsImg}&w=400&h=225`, imageAlt: "Esports", title: "Behind the Scenes: Team House", duration: "15:00", views: "510K views", tag: "Esports", tagColor: "bg-primary-500" },
  { image: `${esportsImg}&w=400&h=225`, imageAlt: "Esports", title: "Prize Pool and Viewership: 2025 So Far", duration: "4:50", views: "180K views", tag: "Esports", tagColor: "bg-primary-500" },
];

/** Getters: return sport-specific data (no filtering) */
export function getNewsBySport(sport: Sport): NewsBySport {
  const map: Record<Sport, NewsBySport> = {
    cricket: CRICKET_NEWS,
    soccer: SOCCER_NEWS,
    tennis: TENNIS_NEWS,
    football: FOOTBALL_NEWS,
    esports: ESPORTS_NEWS,
  };
  return map[sport];
}

export function getShortsBySport(sport: Sport): ShortCard[] {
  const map: Record<Sport, ShortCard[]> = {
    cricket: CRICKET_SHORTS,
    soccer: SOCCER_SHORTS,
    tennis: TENNIS_SHORTS,
    football: FOOTBALL_SHORTS,
    esports: ESPORTS_SHORTS,
  };
  return map[sport];
}

export function getVideosBySport(sport: Sport): VideoCard[] {
  const map: Record<Sport, VideoCard[]> = {
    cricket: CRICKET_VIDEOS,
    soccer: SOCCER_VIDEOS,
    tennis: TENNIS_VIDEOS,
    football: FOOTBALL_VIDEOS,
    esports: ESPORTS_VIDEOS,
  };
  return map[sport];
}

/** Map horizontal/vertical/compact item to ReelArticle */
function toReelArticle(
  item: { image: string; imageAlt: string; category: string; categoryColor?: string; title: string; excerpt: string; readTime: string },
  id: string,
  liveTag?: string,
  quickRundown?: string[]
): ReelArticle {
  return {
    id,
    category: item.category,
    categoryColor: item.categoryColor ?? "bg-primary-500",
    title: item.title,
    image: item.image,
    imageAlt: item.imageAlt,
    liveTag,
    bodyShort: item.excerpt,
    readTime: item.readTime,
    quickRundown,
  };
}

/** Generate quick rundown points based on article index/category */
function generateQuickRundown(category: string, index: number): string[] {
  const rundowns: Record<string, string[][]> = {
    Cricket: [
      [
        "Rohit lost the toss 11th time in a row.",
        "It happened in the Champions Trophy semifinal vs Australia.",
        "Steve Smith won the toss and chose to bat.",
        "The Dubai pitch was slow, favoring batting first.",
      ],
      [
        "India scored 338/4 in their 50 overs.",
        "Kohli top-scored with 113 off 87 balls.",
        "Australia needed 339 to win.",
        "The match was played at the MCG.",
      ],
      [
        "Bumrah took 5 wickets in the match.",
        "He bowled a deadly spell in the death overs.",
        "Australia collapsed from 280/4 to 315 all out.",
        "India won by 23 runs.",
      ],
    ],
    Soccer: [
      [
        "The transfer fee broke the league record.",
        "Player signed a 5-year contract.",
        "Medical completed in under 24 hours.",
        "Announcement came at midnight local time.",
      ],
      [
        "Team won 3-1 in the first leg.",
        "Away goals rule no longer applies.",
        "Second leg scheduled for next week.",
        "Winner faces Real Madrid in the final.",
      ],
    ],
  };
  const categoryRundowns = rundowns[category] || rundowns.Cricket;
  return categoryRundowns[index % categoryRundowns.length];
}

/** Reel articles for news pages: one list per sport, or mixed for home */
export function getReelArticles(sport?: Sport): ReelArticle[] {
  if (sport) {
    const news = getNewsBySport(sport);
    const out: ReelArticle[] = [];
    let idx = 0;
    [...news.horizontal, ...news.vertical, ...news.compact, ...news.verticalRow2].forEach((item) => {
      const id = `${sport}-reel-${idx}`;
      const rundown = generateQuickRundown(item.category, idx);
      out.push(toReelArticle(item, id, idx < 2 ? "LIVE COVERAGE" : undefined, rundown));
      idx += 1;
    });
    return out;
  }
  const cricket = getNewsBySport("cricket");
  const soccer = getNewsBySport("soccer");
  const mixed: Array<{ item: ArticleHorizontal | ArticleVertical | ArticleCompact; prefix: string }> = [];
  cricket.horizontal.forEach((item) => mixed.push({ item, prefix: "home-c" }));
  cricket.vertical.slice(0, 2).forEach((item) => mixed.push({ item, prefix: "home-c" }));
  soccer.horizontal.forEach((item) => mixed.push({ item, prefix: "home-s" }));
  soccer.vertical.slice(0, 2).forEach((item) => mixed.push({ item, prefix: "home-s" }));
  const out: ReelArticle[] = [];
  mixed.forEach(({ item, prefix }, i) => {
    const rundown = generateQuickRundown(item.category, i);
    out.push(toReelArticle(item, `${prefix}-${i}`, i < 2 ? "LIVE COVERAGE" : undefined, rundown));
  });
  return out;
}

/** Video Reels for /reels page */
export function getVideoReels(sport?: Sport): VideoReel[] {
  const reels: VideoReel[] = [
    {
      id: "reel-1",
      thumbnail: `${U}/photo-1579952363873-27f3bade9f55?w=400`,
      thumbnailAlt: "Championship final celebration",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      category: "Football",
      categoryTag: "LIVE",
      title: "Top Moments of the Season",
      description: "Unbelievable scenes at the championship final! Last minute winner creates history! ⚽🔥 #Football #Highlights...",
      author: "@SportsCenter",
      authorAvatar: `${U}/photo-1535713875002-d1d0cf377fde?w=100`,
      verified: true,
      views: "1.2M",
      likes: "890K",
      comments: "4.5k",
      bookmarks: "890",
      duration: "1:12",
      timestamp: "0:37",
      hashtags: ["Football", "Highlights", "Championship"],
    },
    {
      id: "reel-2",
      thumbnail: `${U}/photo-1551958219-acbc608c6377?w=400`,
      thumbnailAlt: "Morning workout routine",
      category: "Training",
      categoryTag: "GDK",
      title: "Morning routine with Fedik",
      description: "Start your day like a champion! Complete morning workout routine for athletes 💪🏃‍♂️",
      author: "@Fedik",
      authorAvatar: `${U}/photo-1599566150163-29194dcaad36?w=100`,
      verified: false,
      views: "456K",
      likes: "125K",
      comments: "2.1k",
      bookmarks: "340",
      duration: "0:58",
      timestamp: "0:12",
      hashtags: ["Workout", "Training", "Morning"],
    },
    {
      id: "reel-3",
      thumbnail: `${U}/photo-1461896836934-ffe607ba8211?w=400`,
      thumbnailAlt: "Post-match interview",
      category: "Cricket",
      categoryTag: "LIVE",
      title: "Post-Match Interview with Suryabha",
      description: "Hear from the match winner! Exclusive interview after an incredible performance 🏏✨",
      author: "@Suryabha_14",
      authorAvatar: `${U}/photo-1570295999919-56ceb5ecca61?w=100`,
      verified: true,
      views: "82K",
      likes: "45K",
      comments: "890",
      bookmarks: "230",
      duration: "2:45",
      timestamp: "0:45",
      hashtags: ["Cricket", "Interview", "Champion"],
    },
    {
      id: "reel-4",
      thumbnail: `${U}/photo-1517466787929-bc90951d0974?w=400`,
      thumbnailAlt: "Tactical breakdown",
      category: "Analysis",
      categoryTag: "EXPLODE",
      title: "Tactical breakdown: How they won",
      description: "Deep dive into the winning strategy! Expert analysis of key moments 📊⚡",
      author: "@TacticsExpert",
      authorAvatar: `${U}/photo-1507003211169-0a1dd7228f2d?w=100`,
      verified: true,
      views: "5.5K",
      likes: "3.2K",
      comments: "156",
      bookmarks: "89",
      duration: "3:22",
      timestamp: "1:05",
      hashtags: ["Tactics", "Analysis", "Strategy"],
    },
    {
      id: "reel-5",
      thumbnail: `${U}/photo-1522778119026-d647f0596c20?w=400`,
      thumbnailAlt: "Stadium atmosphere",
      category: "Experience",
      categoryTag: "LIVE",
      title: "Stadium atmosphere you can't miss",
      description: "Feel the energy! Incredible crowd reactions and stadium vibes 🔥🎉",
      author: "@MatchDay",
      authorAvatar: `${U}/photo-1494790108377-be9c29b29330?w=100`,
      verified: false,
      views: "200K",
      likes: "89K",
      comments: "1.8k",
      bookmarks: "450",
      duration: "1:35",
      timestamp: "0:28",
      hashtags: ["Stadium", "Fans", "Atmosphere"],
    },
    {
      id: "reel-6",
      thumbnail: `${U}/photo-1431324155629-1a6deb1dec8d?w=400`,
      thumbnailAlt: "New world record",
      category: "Records",
      title: "New World Record!! ⚡⚡",
      description: "History in the making! Witness the moment a new world record was set 🏆",
      author: "@GetyNewsYours",
      authorAvatar: `${U}/photo-1527980965255-d3b416303d12?w=100`,
      verified: true,
      views: "82K",
      likes: "56K",
      comments: "980",
      bookmarks: "320",
      duration: "0:42",
      timestamp: "0:18",
      hashtags: ["WorldRecord", "History", "Sports"],
    },
  ];

  if (sport) {
    return reels.filter((r) => r.category.toLowerCase().includes(sport.toLowerCase()));
  }
  return reels;
}

/** YouTube Videos for /videos page */
export function getYouTubeVideos(sport?: Sport): YouTubeVideo[] {
  const videos: YouTubeVideo[] = [
    {
      id: "video-1",
      videoId: "dQw4w9WgXcQ",
      title: "India vs Australia: Best Moments from the Final Over",
      thumbnail: `${U}/photo-1531415074968-036ba1b575da?w=800`,
      category: "Cricket",
      categoryColor: "bg-state-live",
      views: "2.5M",
      duration: "12:34",
      uploadedAt: "2 days ago",
      description: "Watch the thrilling final over that decided the match between India and Australia!",
    },
    {
      id: "video-2",
      videoId: "jNQXAC9IVRw",
      title: "Top 10 Goals of the Premier League Season",
      thumbnail: `${U}/photo-1522778119026-d647f0596c20?w=800`,
      category: "Soccer",
      categoryColor: "bg-primary-500",
      views: "1.8M",
      duration: "15:20",
      uploadedAt: "4 days ago",
      description: "Incredible goals from this season's Premier League action!",
    },
    {
      id: "video-3",
      videoId: "9bZkp7q19f0",
      title: "Behind the Scenes: Training Camp Day 1",
      thumbnail: `${U}/photo-1461896836934-ffe607ba8211?w=800`,
      category: "Training",
      categoryColor: "bg-blue-500",
      views: "890K",
      duration: "8:45",
      uploadedAt: "1 week ago",
      description: "Exclusive look at what happens during training camp!",
    },
    {
      id: "video-4",
      videoId: "kJQP7kiw5Fk",
      title: "Player Interview: Star's Journey to Success",
      thumbnail: `${U}/photo-1517466787929-bc90951d0974?w=800`,
      category: "Interview",
      categoryColor: "bg-purple-500",
      views: "654K",
      duration: "25:10",
      uploadedAt: "1 week ago",
      description: "Sit down with the star player as they share their incredible journey!",
    },
    {
      id: "video-5",
      videoId: "EgqUJOudrcM",
      title: "Match Highlights: Epic Comeback Victory",
      thumbnail: `${U}/photo-1579952363873-27f3bade9f55?w=800`,
      category: "Highlights",
      categoryColor: "bg-red-500",
      views: "3.2M",
      duration: "10:15",
      uploadedAt: "3 days ago",
      description: "An amazing comeback that shocked everyone!",
    },
    {
      id: "video-6",
      videoId: "hHW1oY26kxQ",
      title: "Tactical Analysis: Breaking Down the Strategy",
      thumbnail: `${U}/photo-1431324155629-1a6deb1dec8d?w=800`,
      category: "Analysis",
      categoryColor: "bg-green-500",
      views: "425K",
      duration: "18:30",
      uploadedAt: "5 days ago",
      description: "Expert analysis of the winning strategy!",
    },
  ];

  if (sport) {
    return videos.filter((v) => v.category.toLowerCase().includes(sport.toLowerCase()));
  }
  return videos;
}
