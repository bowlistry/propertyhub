// ── CURSOR ──────────────────────────────────────────────────────
const cur = document.getElementById("cur");
const curR = document.getElementById("curR");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + "px";
  cur.style.top = my + "px";
});

(function animR() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  curR.style.left = rx + "px";
  curR.style.top = ry + "px";
  requestAnimationFrame(animR);
})();

function addHover(sel) {
  document.querySelectorAll(sel).forEach((el) => {
    el.addEventListener("mouseenter", () => curR.classList.add("big"));
    el.addEventListener("mouseleave", () => curR.classList.remove("big"));
  });
}

// ── NAVIGATION & MOBILE MENU ───────────────────────────────────
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + id).classList.add("active");
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.id === "nav-" + id);
  });
  document.getElementById("nav-links").classList.remove("show");
  window.scrollTo(0, 0);
  injectFooters();
  setTimeout(() => {
    initReveal();
    addHover(
      "button,a,.rc,.ab,.loc-card,.team-card,.office-card,.faq-q,.tc,.fg,.qt,.filter-btn,.logo,.nav-cta",
    );
  }, 50);
}

// ── ROOM DATA ──────────────────────────────────────────────────
const rooms = [
  {
    id: 1,
    name: "Unity The Amaryllis",
    loc: "karol bagh",
    city: "delhi",
    type: "2BHK/3BHK/4BHK",
    price: 95000,
    avail: "now",
    tier: "elite",
    locLabel: "Karol Bagh, Delhi",
    sub: "Central Delhi · Skywalk Access",
    chips: ["Pool", "Gym", "Clubhouse", "Parking", "Security"],
    rating: "4.9",
    reviews: 120,
    img: "ri1",
  },
  {
    id: 2,
    name: "DLF Capital Greens",
    loc: "moti nagar",
    city: "delhi",
    type: "2BHK/3BHK/4BHK",
    price: 85000,
    avail: "now",
    tier: "premium",
    locLabel: "Moti Nagar, Delhi",
    sub: "Metro Access · Green Views",
    chips: ["Gym", "Clubhouse", "Pool", "Park", "Security"],
    rating: "4.7",
    reviews: 95,
    img: "ri1",
  },
  {
    id: 3,
    name: "DLF Kings Court",
    loc: "greater kailash",
    city: "delhi",
    type: "3BHK/4BHK/5BHK",
    price: 250000,
    avail: "now",
    tier: "ultra-luxury",
    locLabel: "Greater Kailash II, Delhi",
    sub: "Jahanpanah Forest View",
    chips: ["Pool", "Gym", "Concierge", "Parking", "WiFi"],
    rating: "4.9",
    reviews: 45,
    img: "ri1",
  },
  {
    id: 4,
    name: "Godrej South Estate",
    loc: "okhla",
    city: "delhi",
    type: "2BHK/3BHK/4BHK",
    price: 120000,
    avail: "soon",
    tier: "elite",
    locLabel: "Okhla, South Delhi",
    sub: "Wellness Facilities",
    chips: ["Pool", "Gym", "Clubhouse", "Security", "Parking"],
    rating: "4.8",
    reviews: 72,
    img: "ri1",
  },
  {
    id: 5,
    name: "Shakuntalam Apartments",
    loc: "dwarka",
    city: "delhi",
    type: "2BHK/3BHK",
    price: 45000,
    avail: "now",
    tier: "standard",
    locLabel: "Sector 10, Dwarka",
    sub: "Airport Connectivity",
    chips: ["Security", "Parking", "Park", "Intercom"],
    rating: "4.5",
    reviews: 60,
    img: "ri1",
  },
  {
    id: 6,
    name: "Shivalik Apartments",
    loc: "malviya nagar",
    city: "delhi",
    type: "2BHK/3BHK",
    price: 55000,
    avail: "now",
    tier: "premium",
    locLabel: "Malviya Nagar, Delhi",
    sub: "South Delhi Prime",
    chips: ["Gym", "Security", "Parking", "Power Backup"],
    rating: "4.6",
    reviews: 55,
    img: "ri1",
  },
  {
    id: 7,
    name: "Mayfair Garden",
    loc: "hauz khas",
    city: "delhi",
    type: "3BHK/4BHK/5BHK",
    price: 180000,
    avail: "occupied",
    tier: "elite",
    locLabel: "Hauz Khas, Delhi",
    sub: "Green Enclave",
    chips: ["Clubhouse", "Security", "Parking", "WiFi", "Gardens"],
    rating: "4.9",
    reviews: 30,
    img: "ri1",
  },
  {
    id: 8,
    name: "Harsh Apartments",
    loc: "dwarka",
    city: "delhi",
    type: "1BHK/2BHK",
    price: 35000,
    avail: "now",
    tier: "standard",
    locLabel: "Sector 10, Dwarka",
    sub: "Metro Proximity",
    chips: ["Security", "Parking", "CCTV", "Rainwater Harvesting"],
    rating: "4.4",
    reviews: 40,
    img: "ri1",
  },
  {
    id: 9,
    name: "Subhash Nagar Heights",
    loc: "subhash nagar",
    city: "delhi",
    type: "2BHK/3BHK",
    price: 40000,
    avail: "now",
    tier: "mid-range",
    locLabel: "Subhash Nagar, Delhi",
    sub: "Market Access",
    chips: ["Security", "Parking", "WiFi", "Power Backup"],
    rating: "4.3",
    reviews: 50,
    img: "ri1",
  },
  {
    id: 10,
    name: "Lodha Woods",
    loc: "malad west",
    city: "mumbai",
    type: "1BHK/2BHK/3BHK",
    price: 45000,
    avail: "now",
    tier: "elite",
    locLabel: "Malad West, Mumbai",
    sub: "Mindspace · 5 min to Metro",
    chips: ["AC", "WiFi", "Pool", "Gym", "Clubhouse", "Parking"],
    rating: "4.8",
    reviews: 52,
    img: "mw1",
  },
  {
    id: 11,
    name: "Raheja Residency",
    loc: "malad east",
    city: "mumbai",
    type: "1BHK/2BHK",
    price: 40000,
    avail: "now",
    tier: "premium",
    locLabel: "Malad East, Mumbai",
    sub: "Infinity IT Park · Near WEH",
    chips: ["AC", "WiFi", "Gym", "Security", "Parking"],
    rating: "4.7",
    reviews: 34,
    img: "me1",
  },
  {
    id: 12,
    name: "Sunteck City",
    loc: "goregaon west",
    city: "mumbai",
    type: "2BHK/3BHK",
    price: 85000,
    avail: "now",
    tier: "elite",
    locLabel: "Goregaon West, Mumbai",
    sub: "NESCO · Metro Access",
    chips: ["Pool", "Gym", "Garden", "Clubhouse", "Parking"],
    rating: "4.9",
    reviews: 64,
    img: "gw1",
  },
  {
    id: 13,
    name: "Oberoi Exquisite",
    loc: "goregaon east",
    city: "mumbai",
    type: "2BHK/3BHK",
    price: 120000,
    avail: "now",
    tier: "luxury",
    locLabel: "Goregaon East, Mumbai",
    sub: "Oberoi Mall · Business Park",
    chips: ["Infinity Pool", "Gym", "Spa", "Parking", "Security"],
    rating: "4.9",
    reviews: 78,
    img: "ge1",
  },
  {
    id: 14,
    name: "Runwal Elegante",
    loc: "andheri west",
    city: "mumbai",
    type: "2BHK/3BHK",
    price: 140000,
    avail: "now",
    tier: "luxury",
    locLabel: "Andheri West, Mumbai",
    sub: "Lokhandwala · Metro Nearby",
    chips: ["Pool", "Gym", "Spa", "Skydeck", "Parking"],
    rating: "4.9",
    reviews: 90,
    img: "aw1",
  },
  {
    id: 15,
    name: "Lodha Eternis",
    loc: "andheri east",
    city: "mumbai",
    type: "1BHK/2BHK",
    price: 70000,
    avail: "now",
    tier: "premium",
    locLabel: "Andheri East, Mumbai",
    sub: "SEEPZ · Chakala Metro",
    chips: ["Gym", "Pool", "Security", "Parking"],
    rating: "4.7",
    reviews: 48,
    img: "ae1",
  },
  {
    id: 16,
    name: "Lodha Bel Air",
    loc: "jogeshwari west",
    city: "mumbai",
    type: "1BHK/2BHK",
    price: 65000,
    avail: "now",
    tier: "premium",
    locLabel: "Jogeshwari West, Mumbai",
    sub: "Link Road · Metro Access",
    chips: ["Gym", "Pool", "Clubhouse", "Parking"],
    rating: "4.7",
    reviews: 29,
    img: "jw1",
  },
  {
    id: 17,
    name: "Hubtown Premier",
    loc: "jogeshwari east",
    city: "mumbai",
    type: "1BHK/2BHK",
    price: 50000,
    avail: "now",
    tier: "premium",
    locLabel: "Jogeshwari East, Mumbai",
    sub: "JVLR · WEH Access",
    chips: ["Gym", "Security", "Parking"],
    rating: "4.5",
    reviews: 21,
    img: "je1",
  },
  {
    id: 18,
    name: "Rustomjee Seasons",
    loc: "bandra east",
    city: "mumbai",
    type: "2BHK/3BHK",
    price: 180000,
    avail: "now",
    tier: "luxury",
    locLabel: "Bandra East, Mumbai",
    sub: "BKC · Metro Line 3",
    chips: ["Pool", "Gym", "Sky Lounge", "Parking"],
    rating: "4.9",
    reviews: 81,
    img: "be1",
  },
  {
    id: 19,
    name: "Supreme Evana",
    loc: "bandra west",
    city: "mumbai",
    type: "2BHK/3BHK",
    price: 250000,
    avail: "now",
    tier: "ultra-luxury",
    locLabel: "Bandra West, Mumbai",
    sub: "Carter Road · Sea Facing",
    chips: ["Sea View", "Gym", "Pool", "Concierge", "Parking"],
    rating: "5.0",
    reviews: 102,
    img: "bw1",
  },
  {
    id: 20,
    name: "Hiranandani Gardens",
    loc: "powai",
    city: "mumbai",
    type: "1BHK/2BHK/3BHK",
    price: 85000,
    avail: "now",
    tier: "elite",
    locLabel: "Powai, Mumbai",
    sub: "Business Park · IIT Bombay",
    chips: ["Pool", "Gym", "Garden", "Parking", "Security"],
    rating: "4.8",
    reviews: 110,
    img: "pw1",
  },
  {
    id: 21,
    name: "Lodha Belmondo",
    loc: "hinjewadi",
    city: "pune",
    type: "1BHK/2BHK/3BHK",
    price: 42000,
    avail: "now",
    tier: "elite",
    locLabel: "Hinjewadi, Pune",
    sub: "Rajiv Gandhi IT Park · Metro Access",
    chips: ["Pool", "Gym", "Golf", "Clubhouse", "Parking"],
    rating: "4.8",
    reviews: 74,
    img: "pn1",
  },
  {
    id: 22,
    name: "Panchshil Towers",
    loc: "kharadi",
    city: "pune",
    type: "2BHK/3BHK",
    price: 85000,
    avail: "now",
    tier: "luxury",
    locLabel: "Kharadi, Pune",
    sub: "EON IT Park · World Trade Center",
    chips: ["Infinity Pool", "Gym", "Sky Lounge", "Parking"],
    rating: "4.9",
    reviews: 58,
    img: "pn2",
  },
  {
    id: 23,
    name: "Blue Ridge",
    loc: "hinjewadi phase 1",
    city: "pune",
    type: "1BHK/2BHK",
    price: 35000,
    avail: "now",
    tier: "premium",
    locLabel: "Hinjewadi Phase 1, Pune",
    sub: "IT Hub · Riverside",
    chips: ["Pool", "Gym", "Sports", "Security"],
    rating: "4.6",
    reviews: 44,
    img: "pn3",
  },
  {
    id: 24,
    name: "Godrej Hillside",
    loc: "mahalunge",
    city: "pune",
    type: "1BHK/2BHK/3BHK",
    price: 38000,
    avail: "now",
    tier: "elite",
    locLabel: "Mahalunge, Pune",
    sub: "Balewadi High Street · IT Corridor",
    chips: ["Clubhouse", "Gym", "Pool", "Garden"],
    rating: "4.7",
    reviews: 39,
    img: "pn4",
  },
  {
    id: 25,
    name: "VTP Pegasus",
    loc: "wakad",
    city: "pune",
    type: "1BHK/2BHK",
    price: 32000,
    avail: "now",
    tier: "premium",
    locLabel: "Wakad, Pune",
    sub: "Mumbai Highway · IT Parks Nearby",
    chips: ["Gym", "Pool", "Parking", "WiFi"],
    rating: "4.5",
    reviews: 28,
    img: "pn5",
  },
];

const hyderabadProperties = [
  {
    id: 26,
    name: "My Home Bhooja",
    loc: "hitech city",
    city: "hyderabad",
    type: "2BHK/3BHK/4BHK",
    price: 125000,
    avail: "now",
    tier: "ultra-luxury",
    locLabel: "Hitech City, Hyderabad",
    sub: "Cyber Towers · Financial District",
    chips: ["Infinity Pool", "Gym", "Spa", "Concierge"],
    rating: "5.0",
    reviews: 132,
    img: "hy1",
  },
  {
    id: 27,
    name: "Prestige High Fields",
    loc: "gachibowli",
    city: "hyderabad",
    type: "2BHK/3BHK",
    price: 72000,
    avail: "now",
    tier: "luxury",
    locLabel: "Gachibowli, Hyderabad",
    sub: "Financial District · Wipro Circle",
    chips: ["Pool", "Gym", "Garden", "Parking"],
    rating: "4.8",
    reviews: 67,
    img: "hy2",
  },
  {
    id: 28,
    name: "Aparna Sarovar Zenith",
    loc: "nallagandla",
    city: "hyderabad",
    type: "2BHK/3BHK",
    price: 55000,
    avail: "now",
    tier: "elite",
    locLabel: "Nallagandla, Hyderabad",
    sub: "Gachibowli Access · IT Corridor",
    chips: ["Pool", "Clubhouse", "Gym", "Security"],
    rating: "4.7",
    reviews: 51,
    img: "hy3",
  },
  {
    id: 29,
    name: "Lansum Etania",
    loc: "financial district",
    city: "hyderabad",
    type: "3BHK/4BHK",
    price: 98000,
    avail: "now",
    tier: "luxury",
    locLabel: "Financial District, Hyderabad",
    sub: "Microsoft Campus · ORR Access",
    chips: ["Gym", "Spa", "Sky Lounge", "Parking"],
    rating: "4.9",
    reviews: 60,
    img: "hy4",
  },
  {
    id: 30,
    name: "Phoenix Golf Edge",
    loc: "gachibowli",
    city: "hyderabad",
    type: "2BHK/3BHK",
    price: 68000,
    avail: "now",
    tier: "elite",
    locLabel: "Gachibowli, Hyderabad",
    sub: "DLF Cyber City · Golf View",
    chips: ["Golf View", "Pool", "Gym", "Parking"],
    rating: "4.8",
    reviews: 48,
    img: "hy5",
  },
  {
    id: 31,
    name: "Prestige Shantiniketan",
    loc: "whitefield",
    city: "bangalore",
    type: "1BHK/2BHK/3BHK",
    price: 65000,
    avail: "now",
    tier: "elite",
    locLabel: "Whitefield, Bangalore",
    sub: "ITPL · Metro Access",
    chips: ["Pool", "Gym", "Clubhouse", "Parking", "WiFi"],
    rating: "4.8",
    reviews: 88,
    img: "bl1",
  },
  {
    id: 32,
    name: "Sobha Dream Acres",
    loc: "panathur",
    city: "bangalore",
    type: "1BHK/2BHK",
    price: 42000,
    avail: "now",
    tier: "premium",
    locLabel: "Panathur, Bangalore",
    sub: "Outer Ring Road · Tech Parks",
    chips: ["Gym", "Pool", "Security", "Garden"],
    rating: "4.6",
    reviews: 49,
    img: "bl2",
  },
  {
    id: 33,
    name: "Embassy Lake Terraces",
    loc: "hebbal",
    city: "bangalore",
    type: "3BHK/4BHK",
    price: 180000,
    avail: "now",
    tier: "ultra-luxury",
    locLabel: "Hebbal, Bangalore",
    sub: "Manyata Tech Park · Airport Road",
    chips: ["Sky Lounge", "Pool", "Spa", "Concierge"],
    rating: "5.0",
    reviews: 116,
    img: "bl3",
  },
  {
    id: 34,
    name: "Brigade Exotica",
    loc: "old madras road",
    city: "bangalore",
    type: "2BHK/3BHK",
    price: 72000,
    avail: "now",
    tier: "luxury",
    locLabel: "Old Madras Road, Bangalore",
    sub: "KR Puram · Metro Nearby",
    chips: ["Pool", "Gym", "Garden", "Parking"],
    rating: "4.7",
    reviews: 54,
    img: "bl4",
  },
  {
    id: 35,
    name: "Purva Westend",
    loc: "jp nagar",
    city: "bangalore",
    type: "2BHK/3BHK",
    price: 78000,
    avail: "now",
    tier: "elite",
    locLabel: "JP Nagar, Bangalore",
    sub: "Bannerghatta Road · Metro Access",
    chips: ["Pool", "Gym", "Clubhouse", "Sports"],
    rating: "4.8",
    reviews: 63,
    img: "bl5",
  },
  {
    id: 36,
    name: "Godrej Air",
    loc: "whitefield",
    city: "bangalore",
    type: "2BHK/3BHK",
    price: 85000,
    avail: "now",
    tier: "luxury",
    locLabel: "Whitefield, Bangalore",
    sub: "IT Corridor · Metro Connectivity",
    chips: ["Air Purification", "Pool", "Gym", "Spa"],
    rating: "4.9",
    reviews: 70,
    img: "bl6",
  },
  {
    id: 37,
    name: "Salarpuria Sattva Greenage",
    loc: "hosur road",
    city: "bangalore",
    type: "1BHK/2BHK/3BHK",
    price: 58000,
    avail: "now",
    tier: "premium",
    locLabel: "Hosur Road, Bangalore",
    sub: "Electronic City Access · Silk Board",
    chips: ["Gym", "Pool", "Security", "Parking"],
    rating: "4.6",
    reviews: 45,
    img: "bl7",
  },
  {
    id: 38,
    name: "Prestige Falcon City",
    loc: "kanakapura road",
    city: "bangalore",
    type: "2BHK/3BHK",
    price: 69000,
    avail: "now",
    tier: "elite",
    locLabel: "Kanakapura Road, Bangalore",
    sub: "Metro Station · South Bangalore",
    chips: ["Mall", "Pool", "Gym", "Clubhouse"],
    rating: "4.8",
    reviews: 58,
    img: "bl8",
  },
  {
    id: 39,
    name: "Merlin Waterfront",
    loc: "howrah",
    city: "kolkata",
    type: "2BHK/3BHK",
    price: 48000,
    avail: "now",
    tier: "luxury",
    locLabel: "Howrah, Kolkata",
    sub: "Riverfront · Kona Expressway",
    chips: ["Pool", "Gym", "River View", "Parking"],
    rating: "4.7",
    reviews: 36,
    img: "kk1",
  },
  {
    id: 40,
    name: "DLF New Town Heights",
    loc: "new town",
    city: "kolkata",
    type: "2BHK/3BHK",
    price: 42000,
    avail: "",
    tier: "elite",
    locLabel: "New Town, Kolkata",
    sub: "IT Hub · Eco Park",
    chips: ["Pool", "Gym", "Clubhouse", "Security"],
    rating: "4.8",
    reviews: 44,
    img: "kk2",
  },
  {
    id: 41,
    name: "PS One 10",
    loc: "new town",
    city: "kolkata",
    type: "1BHK/2BHK/3BHK",
    price: 39000,
    avail: "now",
    tier: "premium",
    locLabel: "New Town, Kolkata",
    sub: "Sector V · Tech Parks",
    chips: ["Gym", "Pool", "Garden", "WiFi"],
    rating: "4.6",
    reviews: 31,
    img: "kk3",
  },
  {
    id: 42,
    name: "South City Residency",
    loc: "tollygunge",
    city: "kolkata",
    type: "2BHK/3BHK",
    price: 62000,
    avail: "now",
    tier: "luxury",
    locLabel: "Tollygunge, Kolkata",
    sub: "South City Mall · Metro Access",
    chips: ["Pool", "Gym", "Sky Lounge", "Parking"],
    rating: "4.9",
    reviews: 52,
    img: "kk4",
  },
  {
    id: 43,
    name: "Siddha Sky",
    loc: "em bypass",
    city: "kolkata",
    type: "2BHK/3BHK",
    price: 45000,
    avail: "",
    tier: "elite",
    locLabel: "EM Bypass, Kolkata",
    sub: "Ruby Hospital · Business Hub",
    chips: ["Pool", "Gym", "Skywalk", "Security"],
    rating: "4.7",
    reviews: 38,
    img: "kk5",
  },
];

const svgMap = {
  ri1: '<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#1c1c15"/><rect x="0" y="190" width="400" height="40" fill="#141410"/><rect x="90" y="15" width="220" height="170" fill="#0d1520"/><radialGradient id="s1"><stop offset="0%" stop-color="#7aa8d0" stop-opacity=".2"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="90" y="15" width="220" height="170" fill="url(#s1)"/><line x1="200" y1="15" x2="200" y2="185" stroke="#1e2a3a" stroke-width="1"/><line x1="90" y1="100" x2="310" y2="100" stroke="#1e2a3a" stroke-width="1"/><rect x="90" y="15" width="220" height="170" fill="none" stroke="#2a2a22" stroke-width="1.5"/><rect x="20" y="155" width="180" height="75" fill="#1a1a12"/><rect x="24" y="165" width="76" height="55" rx="3" fill="#222218"/><rect x="112" y="165" width="64" height="55" rx="3" fill="#202016"/><rect x="230" y="135" width="140" height="95" fill="#171714"/><rect x="234" y="65" width="84" height="65" rx="1" fill="#0c0c10" stroke="#222230" stroke-width="1"/><rect x="237" y="68" width="78" height="59" fill="#0e1420"/><circle cx="50" cy="55" r="1.5" fill="#c8af7840"><animate attributeName="opacity" values=".3;1;.3" dur="3s" repeatCount="indefinite"/></circle><circle cx="360" cy="75" r="1" fill="#c8af7840"><animate attributeName="opacity" values=".2;.8;.2" dur="4s" repeatCount="indefinite"/></circle></svg>',
  ri2: '<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#111118"/><rect x="0" y="190" width="400" height="40" fill="#0d0d14"/><rect x="50" y="10" width="300" height="175" fill="#0a0f1a"/><radialGradient id="s2"><stop offset="0%" stop-color="#6080b0" stop-opacity=".18"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="50" y="10" width="300" height="175" fill="url(#s2)"/><line x1="200" y1="10" x2="200" y2="185" stroke="#151c28" stroke-width="1"/><line x1="50" y1="95" x2="350" y2="95" stroke="#151c28" stroke-width="1"/><rect x="50" y="10" width="300" height="175" fill="none" stroke="#232330" stroke-width="1.5"/><rect x="20" y="155" width="220" height="75" fill="#121218"/><rect x="24" y="165" width="92" height="55" rx="3" fill="#1a1a24"/><rect x="128" y="165" width="88" height="55" rx="3" fill="#181820"/><rect x="270" y="140" width="110" height="90" fill="#101015"/><rect x="274" y="68" width="90" height="66" rx="1" fill="#080810" stroke="#1a1a28" stroke-width="1"/><rect x="277" y="71" width="84" height="60" fill="#0c1220"/><circle cx="55" cy="50" r="1.2" fill="#8090c040"><animate attributeName="opacity" values=".2;.9;.2" dur="3.5s" repeatCount="indefinite"/></circle></svg>',
  ri3: '<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#151510"/><rect x="0" y="190" width="400" height="40" fill="#111110"/><rect x="70" y="12" width="260" height="174" fill="#0e1010"/><radialGradient id="s3"><stop offset="0%" stop-color="#c0b080" stop-opacity=".1"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="70" y="12" width="260" height="174" fill="url(#s3)"/><line x1="200" y1="12" x2="200" y2="186" stroke="#222218" stroke-width="1"/><line x1="70" y1="99" x2="330" y2="99" stroke="#222218" stroke-width="1"/><rect x="70" y="12" width="260" height="174" fill="none" stroke="#2a2a20" stroke-width="1.5"/><rect x="15" y="155" width="200" height="75" fill="#181812"/><rect x="19" y="165" width="86" height="55" rx="3" fill="#201e14"/><rect x="117" y="165" width="86" height="55" rx="3" fill="#1e1c12"/><rect x="255" y="140" width="130" height="90" fill="#141412"/><rect x="259" y="68" width="88" height="66" rx="1" fill="#0c0c0a" stroke="#222218" stroke-width="1"/><circle cx="35" cy="55" r="1.5" fill="#c8af7838"><animate attributeName="opacity" values=".2;1;.2" dur="3s" repeatCount="indefinite"/></circle></svg>',
  ri4: '<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#181814"/><rect x="0" y="190" width="400" height="40" fill="#131310"/><rect x="45" y="10" width="310" height="176" fill="#0d0f0c"/><radialGradient id="s4"><stop offset="0%" stop-color="#80c090" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="45" y="10" width="310" height="176" fill="url(#s4)"/><line x1="200" y1="10" x2="200" y2="186" stroke="#1e2018" stroke-width="1"/><line x1="45" y1="98" x2="355" y2="98" stroke="#1e2018" stroke-width="1"/><rect x="45" y="10" width="310" height="176" fill="none" stroke="#28281e" stroke-width="1.5"/><rect x="10" y="155" width="230" height="75" fill="#181812"/><rect x="14" y="165" width="100" height="55" rx="3" fill="#201e14"/><rect x="126" y="165" width="100" height="55" rx="3" fill="#1e1c12"/><rect x="268" y="138" width="122" height="92" fill="#141410"/><rect x="272" y="62" width="86" height="70" rx="1" fill="#0c0c0a" stroke="#22221a" stroke-width="1"/><circle cx="28" cy="55" r="1.5" fill="#c8af7838"><animate attributeName="opacity" values=".2;1;.2" dur="3.2s" repeatCount="indefinite"/></circle></svg>',
  ri5: '<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#111118"/><rect x="0" y="190" width="400" height="40" fill="#0d0d14"/><rect x="60" y="12" width="280" height="174" fill="#0c0c16"/><radialGradient id="s5"><stop offset="0%" stop-color="#7080c0" stop-opacity=".12"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="60" y="12" width="280" height="174" fill="url(#s5)"/><line x1="200" y1="12" x2="200" y2="186" stroke="#18182a" stroke-width="1"/><line x1="60" y1="99" x2="340" y2="99" stroke="#18182a" stroke-width="1"/><rect x="60" y="12" width="280" height="174" fill="none" stroke="#20202e" stroke-width="1.5"/><rect x="15" y="155" width="210" height="75" fill="#10101a"/><rect x="19" y="165" width="92" height="55" rx="3" fill="#18182a"/><rect x="123" y="165" width="92" height="55" rx="3" fill="#16162a"/><rect x="255" y="138" width="130" height="92" fill="#0e0e16"/><rect x="259" y="62" width="88" height="70" rx="1" fill="#08080e" stroke="#1a1a28" stroke-width="1"/><circle cx="35" cy="60" r="1.5" fill="#c8af7835"><animate attributeName="opacity" values=".2;.9;.2" dur="4s" repeatCount="indefinite"/></circle></svg>',
  ri6: '<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#181512"/><rect x="0" y="190" width="400" height="40" fill="#141210"/><rect x="55" y="10" width="290" height="176" fill="#0e0c0a"/><radialGradient id="s6"><stop offset="0%" stop-color="#c09060" stop-opacity=".09"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="55" y="10" width="290" height="176" fill="url(#s6)"/><line x1="200" y1="10" x2="200" y2="186" stroke="#201c14" stroke-width="1"/><line x1="55" y1="98" x2="345" y2="98" stroke="#201c14" stroke-width="1"/><rect x="55" y="10" width="290" height="176" fill="none" stroke="#28221a" stroke-width="1.5"/><rect x="12" y="155" width="220" height="75" fill="#161410"/><rect x="16" y="165" width="98" height="55" rx="3" fill="#1e1a12"/><rect x="126" y="165" width="98" height="55" rx="3" fill="#1c1810"/><rect x="262" y="138" width="126" height="92" fill="#121008"/><rect x="266" y="62" width="86" height="70" rx="1" fill="#0a0806" stroke="#20180e" stroke-width="1"/><circle cx="30" cy="60" r="1.5" fill="#c8af7838"><animate attributeName="opacity" values=".2;1;.2" dur="3.8s" repeatCount="indefinite"/></circle></svg>',
  ri7: '<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#141818"/><rect x="0" y="190" width="400" height="40" fill="#0f1214"/><rect x="65" y="12" width="270" height="174" fill="#0c1214"/><radialGradient id="s7"><stop offset="0%" stop-color="#60a0b0" stop-opacity=".1"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="65" y="12" width="270" height="174" fill="url(#s7)"/><line x1="200" y1="12" x2="200" y2="186" stroke="#1a2224" stroke-width="1"/><line x1="65" y1="99" x2="335" y2="99" stroke="#1a2224" stroke-width="1"/><rect x="65" y="12" width="270" height="174" fill="none" stroke="#242c2e" stroke-width="1.5"/><rect x="18" y="155" width="214" height="75" fill="#121618"/><rect x="22" y="165" width="94" height="55" rx="3" fill="#1a2022"/><rect x="128" y="165" width="94" height="55" rx="3" fill="#182022"/><rect x="258" y="140" width="126" height="90" fill="#101416"/><rect x="262" y="64" width="86" height="68" rx="1" fill="#0a0e10" stroke="#1a2224" stroke-width="1"/><circle cx="40" cy="58" r="1.5" fill="#c8af7836"><animate attributeName="opacity" values=".2;.9;.2" dur="3.6s" repeatCount="indefinite"/></circle></svg>',
  ri8: '<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#161612"/><rect x="0" y="190" width="400" height="40" fill="#101010"/><rect x="58" y="10" width="284" height="176" fill="#0e0e0c"/><radialGradient id="s8"><stop offset="0%" stop-color="#b0a060" stop-opacity=".09"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="58" y="10" width="284" height="176" fill="url(#s8)"/><line x1="200" y1="10" x2="200" y2="186" stroke="#201e14" stroke-width="1"/><line x1="58" y1="98" x2="342" y2="98" stroke="#201e14" stroke-width="1"/><rect x="58" y="10" width="284" height="176" fill="none" stroke="#28261a" stroke-width="1.5"/><rect x="14" y="155" width="212" height="75" fill="#161612"/><rect x="18" y="165" width="94" height="55" rx="3" fill="#1e1c14"/><rect x="124" y="165" width="94" height="55" rx="3" fill="#1c1a12"/><rect x="262" y="138" width="124" height="92" fill="#121210"/><rect x="266" y="62" width="84" height="70" rx="1" fill="#0c0c0a" stroke="#20201a" stroke-width="1"/><circle cx="36" cy="57" r="1.5" fill="#c8af7836"><animate attributeName="opacity" values=".2;1;.2" dur="4.2s" repeatCount="indefinite"/></circle></svg>',
  ri9: '<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#181414"/><rect x="0" y="190" width="400" height="40" fill="#141010"/><rect x="62" y="10" width="276" height="176" fill="#0e0c0c"/><radialGradient id="s9"><stop offset="0%" stop-color="#c06060" stop-opacity=".07"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#s9)"/><line x1="200" y1="10" x2="200" y2="186" stroke="#221818" stroke-width="1"/><line x1="62" y1="98" x2="338" y2="98" stroke="#221818" stroke-width="1"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#2a2020" stroke-width="1.5"/><rect x="14" y="155" width="216" height="75" fill="#161010"/><rect x="18" y="165" width="96" height="55" rx="3" fill="#201614"/><rect x="126" y="165" width="96" height="55" rx="3" fill="#1e1412"/><rect x="266" y="138" width="120" height="92" fill="#12100c"/><rect x="270" y="62" width="82" height="70" rx="1" fill="#0c0a08" stroke="#22180e" stroke-width="1"/><circle cx="36" cy="57" r="1.5" fill="#c8af7836"><animate attributeName="opacity" values=".2;1;.2" dur="3.4s" repeatCount="indefinite"/></circle></svg>',
  mw1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#14181a"/><rect x="0" y="190" width="400" height="40" fill="#101416"/><rect x="62" y="10" width="276" height="176" fill="#0d1113"/><radialGradient id="s1"><stop offset="0%" stop-color="#4fc3f7" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#s1)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#20303a" stroke-width="1.5"/><rect x="14" y="155" width="216" height="75" fill="#11181b"/><rect x="18" y="165" width="96" height="55" rx="3" fill="#172126"/><rect x="126" y="165" width="96" height="55" rx="3" fill="#1a252b"/><circle cx="36" cy="57" r="2" fill="#6bdcff55"><animate attributeName="opacity" values=".2;1;.2" dur="3s" repeatCount="indefinite"/></circle></svg>`,

  me1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#181614"/><rect x="0" y="190" width="400" height="40" fill="#12100f"/><rect x="62" y="10" width="276" height="176" fill="#0f0d0c"/><radialGradient id="s2"><stop offset="0%" stop-color="#ffb74d" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#s2)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#3a2a1f" stroke-width="1.5"/><rect x="14" y="155" width="216" height="75" fill="#171310"/><rect x="18" y="165" width="96" height="55" rx="3" fill="#241b15"/><rect x="126" y="165" width="96" height="55" rx="3" fill="#2b1f18"/><circle cx="52" cy="45" r="2" fill="#ffcc8050"><animate attributeName="opacity" values=".2;1;.2" dur="4s" repeatCount="indefinite"/></circle></svg>`,

  gw1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#121818"/><rect x="0" y="190" width="400" height="40" fill="#0d1212"/><rect x="62" y="10" width="276" height="176" fill="#0a1010"/><radialGradient id="s3"><stop offset="0%" stop-color="#66bb6a" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#s3)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#204030" stroke-width="1.5"/><rect x="14" y="155" width="216" height="75" fill="#101716"/><rect x="18" y="165" width="96" height="55" rx="3" fill="#17221d"/><rect x="126" y="165" width="96" height="55" rx="3" fill="#1b2822"/><circle cx="38" cy="52" r="2" fill="#7cff9c55"><animate attributeName="opacity" values=".2;1;.2" dur="2.8s" repeatCount="indefinite"/></circle></svg>`,

  ge1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#18141c"/><rect x="0" y="190" width="400" height="40" fill="#120f16"/><rect x="62" y="10" width="276" height="176" fill="#0f0c12"/><radialGradient id="s4"><stop offset="0%" stop-color="#ba68c8" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#s4)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#332040" stroke-width="1.5"/><rect x="14" y="155" width="216" height="75" fill="#16111a"/><rect x="18" y="165" width="96" height="55" rx="3" fill="#22182a"/><rect x="126" y="165" width="96" height="55" rx="3" fill="#2a1d33"/><circle cx="48" cy="60" r="2" fill="#d28cff55"><animate attributeName="opacity" values=".2;1;.2" dur="3.5s" repeatCount="indefinite"/></circle></svg>`,

  aw1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#171717"/><rect x="0" y="190" width="400" height="40" fill="#111111"/><rect x="62" y="10" width="276" height="176" fill="#0c0c0c"/><radialGradient id="s5"><stop offset="0%" stop-color="#ef5350" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#s5)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#3c2020" stroke-width="1.5"/><rect x="14" y="155" width="216" height="75" fill="#151212"/><rect x="18" y="165" width="96" height="55" rx="3" fill="#231818"/><rect x="126" y="165" width="96" height="55" rx="3" fill="#2a1b1b"/><circle cx="40" cy="40" r="2" fill="#ff8a8055"><animate attributeName="opacity" values=".2;1;.2" dur="2.6s" repeatCount="indefinite"/></circle></svg>`,

  ae1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#14161b"/><rect x="0" y="190" width="400" height="40" fill="#101217"/><rect x="62" y="10" width="276" height="176" fill="#0c0e13"/><radialGradient id="s6"><stop offset="0%" stop-color="#5c6bc0" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#s6)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#26304a" stroke-width="1.5"/><rect x="14" y="155" width="216" height="75" fill="#10141a"/><rect x="18" y="165" width="96" height="55" rx="3" fill="#182030"/><rect x="126" y="165" width="96" height="55" rx="3" fill="#1d2740"/><circle cx="42" cy="50" r="2" fill="#8ea0ff55"><animate attributeName="opacity" values=".2;1;.2" dur="3.2s" repeatCount="indefinite"/></circle></svg>`,

  jw1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#181817"/><rect x="0" y="190" width="400" height="40" fill="#121211"/><rect x="62" y="10" width="276" height="176" fill="#0d0d0c"/><radialGradient id="s7"><stop offset="0%" stop-color="#d4e157" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#s7)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#40451f" stroke-width="1.5"/><rect x="14" y="155" width="216" height="75" fill="#151510"/><rect x="18" y="165" width="96" height="55" rx="3" fill="#222315"/><rect x="126" y="165" width="96" height="55" rx="3" fill="#2c2d1b"/><circle cx="50" cy="48" r="2" fill="#efff8a55"><animate attributeName="opacity" values=".2;1;.2" dur="3.7s" repeatCount="indefinite"/></circle></svg>`,

  je1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#171414"/><rect x="0" y="190" width="400" height="40" fill="#120f0f"/><rect x="62" y="10" width="276" height="176" fill="#0e0b0b"/><radialGradient id="s8"><stop offset="0%" stop-color="#ff8a65" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#s8)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#40241d" stroke-width="1.5"/><rect x="14" y="155" width="216" height="75" fill="#161111"/><rect x="18" y="165" width="96" height="55" rx="3" fill="#241715"/><rect x="126" y="165" width="96" height="55" rx="3" fill="#2b1c18"/><circle cx="46" cy="44" r="2" fill="#ffab9155"><animate attributeName="opacity" values=".2;1;.2" dur="3.1s" repeatCount="indefinite"/></circle></svg>`,

  be1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#14171a"/><rect x="0" y="190" width="400" height="40" fill="#101316"/><rect x="62" y="10" width="276" height="176" fill="#0b0f12"/><radialGradient id="s9"><stop offset="0%" stop-color="#26c6da" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#s9)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#1f3840" stroke-width="1.5"/><rect x="14" y="155" width="216" height="75" fill="#101518"/><rect x="18" y="165" width="96" height="55" rx="3" fill="#162329"/><rect x="126" y="165" width="96" height="55" rx="3" fill="#1c2d34"/><circle cx="44" cy="54" r="2" fill="#7ff6ff55"><animate attributeName="opacity" values=".2;1;.2" dur="3.9s" repeatCount="indefinite"/></circle></svg>`,

  bw1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#181414"/><rect x="0" y="190" width="400" height="40" fill="#141010"/><rect x="62" y="10" width="276" height="176" fill="#0e0c0c"/><radialGradient id="s10"><stop offset="0%" stop-color="#c06060" stop-opacity=".07"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#s10)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#2a2020" stroke-width="1.5"/><rect x="14" y="155" width="216" height="75" fill="#161010"/><rect x="18" y="165" width="96" height="55" rx="3" fill="#201614"/><rect x="126" y="165" width="96" height="55" rx="3" fill="#1e1412"/><circle cx="36" cy="57" r="1.5" fill="#c8af7836"><animate attributeName="opacity" values=".2;1;.2" dur="3.4s" repeatCount="indefinite"/></circle></svg>`,

  pn1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#141a18"/><rect x="0" y="190" width="400" height="40" fill="#101412"/><rect x="62" y="10" width="276" height="176" fill="#0c120f"/><radialGradient id="p1"><stop offset="0%" stop-color="#81c784" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#p1)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#284032" stroke-width="1.5"/></svg>`,

  pn2: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#18141a"/><rect x="0" y="190" width="400" height="40" fill="#120f14"/><rect x="62" y="10" width="276" height="176" fill="#0f0c10"/><radialGradient id="p2"><stop offset="0%" stop-color="#ba68c8" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#p2)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#3a2442" stroke-width="1.5"/></svg>`,

  pn3: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#15191b"/><rect x="0" y="190" width="400" height="40" fill="#101417"/><rect x="62" y="10" width="276" height="176" fill="#0b1012"/><radialGradient id="p3"><stop offset="0%" stop-color="#4dd0e1" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#p3)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#24404a" stroke-width="1.5"/></svg>`,

  pn4: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#181816"/><rect x="0" y="190" width="400" height="40" fill="#121210"/><rect x="62" y="10" width="276" height="176" fill="#0e0e0c"/><radialGradient id="p4"><stop offset="0%" stop-color="#ffd54f" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#p4)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#4a3b22" stroke-width="1.5"/></svg>`,

  pn5: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#171518"/><rect x="0" y="190" width="400" height="40" fill="#121014"/><rect x="62" y="10" width="276" height="176" fill="#0d0b0f"/><radialGradient id="p5"><stop offset="0%" stop-color="#f06292" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#p5)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#4a2332" stroke-width="1.5"/></svg>`,

  hy1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#141414"/><rect x="0" y="190" width="400" height="40" fill="#101010"/><rect x="62" y="10" width="276" height="176" fill="#0c0c0c"/><radialGradient id="h1"><stop offset="0%" stop-color="#ef5350" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#h1)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#402020" stroke-width="1.5"/></svg>`,

  hy2: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#15181a"/><rect x="0" y="190" width="400" height="40" fill="#101315"/><rect x="62" y="10" width="276" height="176" fill="#0c0f11"/><radialGradient id="h2"><stop offset="0%" stop-color="#64b5f6" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#h2)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#224058" stroke-width="1.5"/></svg>`,

  hy3: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#171917"/><rect x="0" y="190" width="400" height="40" fill="#111311"/><rect x="62" y="10" width="276" height="176" fill="#0d0f0d"/><radialGradient id="h3"><stop offset="0%" stop-color="#81c784" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#h3)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#284030" stroke-width="1.5"/></svg>`,

  hy4: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#191519"/><rect x="0" y="190" width="400" height="40" fill="#141014"/><rect x="62" y="10" width="276" height="176" fill="#100c10"/><radialGradient id="h4"><stop offset="0%" stop-color="#ce93d8" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#h4)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#42284a" stroke-width="1.5"/></svg>`,

  hy5: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#161816"/><rect x="0" y="190" width="400" height="40" fill="#111311"/><rect x="62" y="10" width="276" height="176" fill="#0d0f0d"/><radialGradient id="h5"><stop offset="0%" stop-color="#aed581" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#h5)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#394a28" stroke-width="1.5"/></svg>`,
  bl1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#14191c"/><rect x="62" y="10" width="276" height="176" fill="#0c1114"/><radialGradient id="b1"><stop offset="0%" stop-color="#42a5f5" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#b1)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#24445c" stroke-width="1.5"/></svg>`,

  bl2: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#181816"/><rect x="62" y="10" width="276" height="176" fill="#0f0f0d"/><radialGradient id="b2"><stop offset="0%" stop-color="#ffee58" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#b2)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#4a4420" stroke-width="1.5"/></svg>`,

  bl3: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#171417"/><rect x="62" y="10" width="276" height="176" fill="#0f0c10"/><radialGradient id="b3"><stop offset="0%" stop-color="#ab47bc" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#b3)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#44204a" stroke-width="1.5"/></svg>`,

  bl4: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#161818"/><rect x="62" y="10" width="276" height="176" fill="#0d1010"/><radialGradient id="b4"><stop offset="0%" stop-color="#26a69a" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#b4)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#205048" stroke-width="1.5"/></svg>`,

  bl5: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#191615"/><rect x="62" y="10" width="276" height="176" fill="#100d0c"/><radialGradient id="b5"><stop offset="0%" stop-color="#ff7043" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#b5)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#5a2f20" stroke-width="1.5"/></svg>`,

  bl6: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#141819"/><rect x="62" y="10" width="276" height="176" fill="#0c1011"/><radialGradient id="b6"><stop offset="0%" stop-color="#80cbc4" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#b6)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#285048" stroke-width="1.5"/></svg>`,

  bl7: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#171717"/><rect x="62" y="10" width="276" height="176" fill="#0e0e0e"/><radialGradient id="b7"><stop offset="0%" stop-color="#ef5350" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#b7)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#502828" stroke-width="1.5"/></svg>`,

  bl8: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#15181a"/><rect x="62" y="10" width="276" height="176" fill="#0c0f11"/><radialGradient id="b8"><stop offset="0%" stop-color="#64b5f6" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#b8)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#24445c" stroke-width="1.5"/></svg>`,

  kk1: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#181616"/><rect x="62" y="10" width="276" height="176" fill="#100e0e"/><radialGradient id="k1"><stop offset="0%" stop-color="#8d6e63" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#k1)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#4a342c" stroke-width="1.5"/></svg>`,

  kk2: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#15191a"/><rect x="62" y="10" width="276" height="176" fill="#0c1011"/><radialGradient id="k2"><stop offset="0%" stop-color="#4db6ac" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#k2)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#245048" stroke-width="1.5"/></svg>`,

  kk3: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#171518"/><rect x="62" y="10" width="276" height="176" fill="#0f0c10"/><radialGradient id="k3"><stop offset="0%" stop-color="#ba68c8" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#k3)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#44284a" stroke-width="1.5"/></svg>`,

  kk4: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#181514"/><rect x="62" y="10" width="276" height="176" fill="#100c0b"/><radialGradient id="k4"><stop offset="0%" stop-color="#ff8a65" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#k4)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#5a3024" stroke-width="1.5"/></svg>`,

  kk5: `<svg width="100%" height="100%" viewBox="0 0 400 230"><rect width="400" height="230" fill="#14181a"/><rect x="62" y="10" width="276" height="176" fill="#0b1012"/><radialGradient id="k5"><stop offset="0%" stop-color="#4fc3f7" stop-opacity=".08"/><stop offset="100%" stop-opacity="0"/></radialGradient><rect x="62" y="10" width="276" height="176" fill="url(#k5)"/><rect x="62" y="10" width="276" height="176" fill="none" stroke="#245060" stroke-width="1.5"/></svg>`,
};

function makeCard(r, delay = 0) {
  const stars =
    parseFloat(r.rating) >= 4.9
      ? "★★★★★"
      : parseFloat(r.rating) >= 4.7
        ? "★★★★★"
        : "★★★★☆";
  const badge =
    r.tier === "elite"
      ? '<div class="rbadget be">Elite</div>'
      : '<div class="rbadget be">Premium</div>';
  const avBadge =
    r.avail === "now"
      ? '<div class="rbadge ba" style="position:absolute;top:14px;right:14px;z-index:2">Available</div>'
      :`<div class="rbadge bp style="position:absolute;top:14px;right:14px;z-index:2">Coming Soon</div>`;
  const chips = r.chips.map((c) => `<span class="chip">${c}</span>`).join("");
  return `<div class="rc" data-loc="${r.loc}" data-city="${r.city}" data-type="${r.type}" data-price="${r.price}" data-avail="${r.avail}" data-tier="${r.tier}" style="animation-delay:${delay}s">
    <div class="rc-img"><div class="rc-img-inner ${r.img}">${svgMap[r.img] || ""}</div>${badge}${avBadge}<div class="rl-tag">${r.locLabel}</div></div>
    <div class="rc-body">
      <div class="rc-top"><div class="rc-name">${r.name}</div><div class="rc-price"><div class="rc-price-n">₹${(r.price / 1000).toFixed(0)}K</div><div class="rc-price-l">/ month</div></div></div>
      <div class="rc-loc">${r.sub}</div>
      <div class="chips">${chips}</div>
      <div class="rc-foot"><div class="rating"><span class="stars">${stars}</span> ${r.rating} (${r.reviews} reviews)</div><button class="rc-btn" onclick="showPage('contact')">Book Tour</button></div>
    </div>
  </div>`;
}

// Populate content on load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home-rooms-grid").innerHTML = rooms
    .slice(0, 3)
    .map((r, i) => makeCard(r, i * 0.08))
    .join("");
  renderRooms(rooms);
  injectFooters();
  initReveal();
  addHover(
    "button,a,.rc,.ab,.loc-card,.team-card,.office-card,.faq-q,.tc,.fg,.qt,.filter-btn,.logo,.nav-cta,.form-input,.form-select,.form-textarea",
  );
});

// Populate rooms page
function renderRooms(list) {
  const grid = document.getElementById("rooms-grid");
  grid.innerHTML = list.map((r, i) => makeCard(r, i * 0.05)).join("");
  document.getElementById("r-count").textContent =
    `Showing ${list.length} ${list.length === 1 ? "property" : "properties"}`;
  document.getElementById("rooms-no-res").style.display = list.length
    ? "none"
    : "block";
  addHover(".rc,.rc-btn");
}

let activeQF = "";
function qf(btn, tag) {
  document.querySelectorAll(".qt").forEach((b) => b.classList.remove("on"));
  btn.classList.add("on");
  activeQF = tag;
  filterRooms();
}

function filterRooms() {
  const loc = document.getElementById("r-loc").value;
  const type = document.getElementById("r-type").value;
  const budget = document.getElementById("r-budget").value;
  const avail = document.getElementById("r-avail").value;
  const furn = document.getElementById("r-furn").value;

  let list = rooms.filter((r) => {
    if (activeQF === "mumbai" && r.city !== "mumbai") return false;
    if (activeQF === "bangalore" && r.city !== "bangalore") return false;
    if (activeQF === "delhi" && r.city !== "delhi") return false;
    if (activeQF === "hyderabad" && r.city !== "hyderabad") return false;
    if (activeQF === "pune" && r.city !== "pune") return false;
    if (activeQF === "now" && r.avail !== "now") return false;
    if (activeQF === "elite" && r.tier !== "elite") return false;
    if (loc && r.loc !== loc) return false;
    if (type && r.type !== type) return false;
    if (avail && r.avail !== avail) return false;
    if (furn && r.tier !== furn) return false;
    if (budget) {
      if (budget === "15" && r.price >= 15000) return false;
      if (budget === "25" && (r.price < 15000 || r.price > 25000)) return false;
      if (budget === "35" && (r.price < 25000 || r.price > 35000)) return false;
      if (budget === "50" && r.price < 35000) return false;
    }
    return true;
  });
  renderRooms(list);
}

function sortRooms(val) {
  let list = [...rooms];
  if (val === "price-asc") list.sort((a, b) => a.price - b.price);
  if (val === "price-desc") list.sort((a, b) => b.price - a.price);
  if (val === "rating")
    list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  renderRooms(list);
}

// ── FOOTER INJECTION ─────────────────────────────────────────
function injectFooters() {
  const tpl = document.getElementById("footer-tpl").innerHTML;
  ["home", "rooms", "locations", "amenities", "about", "contact"].forEach(
    (p) => {
      const el = document.getElementById(p + "-footer");
      if (el && !el.hasChildNodes()) el.innerHTML = tpl;
    },
  );
}

// ── REVEAL ON SCROLL ─────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll(".page.active .reveal:not(.vis)");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = i * 0.06 + "s";
          e.target.classList.add("vis");
        }
      });
    },
    { threshold: 0.08 },
  );
  els.forEach((el) => io.observe(el));
}

// ── FAQ TOGGLE ───────────────────────────────────────────────
function toggleFaq(q) {
  const a = q.nextElementSibling;
  const arrow = q.querySelector(".faq-arrow");
  const isOpen = a.classList.contains("open");
  document
    .querySelectorAll(".faq-a")
    .forEach((x) => x.classList.remove("open"));
  document
    .querySelectorAll(".faq-arrow")
    .forEach((x) => x.classList.remove("rot"));
  if (!isOpen) {
    a.classList.add("open");
    arrow.classList.add("rot");
  }
}

// ── FORM SUBMIT ──────────────────────────────────────────────
async function submitForm() {
  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const loader = document.getElementById("loader");
  const successBox = document.getElementById("form-success");
  const errorBox = document.getElementById("form-error");

  successBox.style.display = "none";
  errorBox.style.display = "none";

  const data = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    company: document.getElementById("company").value.trim(),
    designation: document.getElementById("designation").value.trim(),
    location: document.getElementById("location").value,
    timeline: document.getElementById("timeline").value,
    roomType: document.getElementById("roomType").value,
    message: document.getElementById("message").value.trim(),
  };

  // 1. COMPULSORY FIELDS CHECK
  if (!data.firstName || !data.email || !data.phone) {
    errorBox.innerText =
      "⚠ Please fill in all compulsory fields: First Name, Email, and Phone Number.";
    errorBox.style.display = "block";
    return;
  }

  // 2. BASIC EMAIL VALIDATION
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    errorBox.innerText = "⚠ Please enter a valid email address.";
    errorBox.style.display = "block";
    return;
  }

  // SHOW LOADER
  submitBtn.disabled = true;
  btnText.style.display = "none";
  loader.style.display = "inline-flex";

  // PASTE YOUR APPS SCRIPT URL HERE
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzu6LGkOLoY3X9M7AHNW5-he8kbwEp4Q7l915p158DBl3aKjyEHtiEXsEhVqbvYCPG-zA/exec";

  try {
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // SUCCESS MESSAGE
    successBox.style.display = "block";

    // RESET CONTACT FORM SPECIFICALLY
    document
      .querySelectorAll(".contact-form-wrap input")
      .forEach((el) => (el.value = ""));
    document
      .querySelectorAll(".contact-form-wrap textarea")
      .forEach((el) => (el.value = ""));
    document
      .querySelectorAll(".contact-form-wrap select")
      .forEach((el) => (el.selectedIndex = 0));
  } catch (error) {
    errorBox.innerText =
      "⚠ Something went wrong with the submission. Please try again.";
    errorBox.style.display = "block";
    console.error(error);
  } finally {
    // HIDE LOADER
    submitBtn.disabled = false;
    btnText.style.display = "inline";
    loader.style.display = "none";
  }
}
