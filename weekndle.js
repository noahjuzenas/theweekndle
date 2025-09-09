// ===========================
// SONG DATABASE
// ===========================
const songs = [
  //House Of Balloons//
  { title: "High For This", album: "House Of Balloons", track: 1, duration: 249, streams: 390000000, cover: "AlbumArts/HouseOfBalloons.jpg" },
  { title: "What You Need", album: "House Of Balloons", track: 2, duration: 206, streams: 340000000, cover: "AlbumArts/HouseOfBalloons.jpg" },
  { title: "House Of Balloons / Glass Table Girls", album: "House Of Balloons", track: 3, duration: 407, streams: 540000000, cover: "AlbumArts/HouseOfBalloons.jpg" },
  { title: "The Morning", album: "House Of Balloons", track: 4, duration: 314, streams: 570000000, cover: "AlbumArts/HouseOfBalloons.jpg" },
  { title: "Wicked Games", album: "House Of Balloons", track: 5, duration: 325, streams: 690000000, cover: "AlbumArts/HouseOfBalloons.jpg" },
  { title: "The Party & The After Party", album: "House Of Balloons", track: 6, duration: 459, streams: 340000000, cover: "AlbumArts/HouseOfBalloons.jpg" },
  { title: "Coming Down", album: "House Of Balloons", track: 7, duration: 295, streams: 340000000, cover: "AlbumArts/HouseOfBalloons.jpg" },
  { title: "Loft Music", album: "House Of Balloons", track: 8, duration: 363, streams: 140000000, cover: "AlbumArts/HouseOfBalloons.jpg" },
  { title: "The Knowing", album: "House Of Balloons", track: 9, duration: 342, streams: 77000000, cover: "AlbumArts/HouseOfBalloons.jpg" },
  { title: "Twenty Eight", album: "House Of Balloons", track: 10, duration: 258, streams: 150000000, cover: "AlbumArts/HouseOfBalloons.jpg" },
  //Thursday//
  { title: "Lonely Star", album: "Thursday", track: 1, duration: 349, streams: 68000000, cover: "AlbumArts/Thursday.jpg" },
  { title: "Life of the Party", album: "Thursday", track: 2, duration: 296, streams: 62000000, cover: "AlbumArts/Thursday.jpg" },
  { title: "Thursday", album: "Thursday", track: 3, duration: 320, streams: 52000000, cover: "AlbumArts/Thursday.jpg" },
  { title: "The Zone", album: "Thursday", track: 4, duration: 418, streams: 150000000, cover: "AlbumArts/Thursday.jpg" },
  { title: "The Birds Part 1", album: "Thursday", track: 5, duration: 214, streams: 84000000, cover: "AlbumArts/Thursday.jpg" },
  { title: "The Birds Part 2", album: "Thursday", track: 6, duration: 250, streams: 80000000, cover: "AlbumArts/Thursday.jpg" },
  { title: "Gone", album: "Thursday", track: 7, duration: 486, streams: 50000000, cover: "AlbumArts/Thursday.jpg" },
  { title: "Rolling Stone", album: "Thursday", track: 8, duration: 230, streams: 73000000, cover: "AlbumArts/Thursday.jpg" },
  { title: "Heaven Or Las Vegas", album: "Thursday", track: 9, duration: 356, streams: 36000000, cover: "AlbumArts/Thursday.jpg" },
  { title: "Valerie", album: "Thursday", track: 10, duration: 286, streams: 100000000, cover: "AlbumArts/Thursday.jpg" },
  //Echoes Of Silence//
  { title: "D.D.", album: "Echoes Of Silence", track: 1, duration: 244, streams: 120000000, cover: "AlbumArts/EchoesOfSilence.jpg" },
  { title: "Montreal", album: "Echoes Of Silence", track: 2, duration: 250, streams: 80000000, cover: "AlbumArts/EchoesOfSilence.jpg" },
  { title: "Outside", album: "Echoes Of Silence", track: 3, duration: 259, streams: 51000000, cover: "AlbumArts/EchoesOfSilence.jpg" },
  { title: "XO / The Host", album: "Echoes Of Silence", track: 4, duration: 444, streams: 67000000, cover: "AlbumArts/EchoesOfSilence.jpg" },
  { title: "Initiation", album: "Echoes Of Silence", track: 5, duration: 260, streams: 45000000, cover: "AlbumArts/EchoesOfSilence.jpg" },
  { title: "Same Old Song", album: "Echoes Of Silence", track: 6, duration: 312, streams: 57000000, cover: "AlbumArts/EchoesOfSilence.jpg" },
  { title: "The Fall", album: "Echoes Of Silence", track: 7, duration: 345, streams: 44000000, cover: "AlbumArts/EchoesOfSilence.jpg" },
  { title: "Next", album: "Echoes Of Silence", track: 8, duration: 361, streams: 64000000, cover: "AlbumArts/EchoesOfSilence.jpg" },
  { title: "Echoes Of Silence", album: "Echoes Of Silence", track: 9, duration: 239, streams: 50000000, cover: "AlbumArts/EchoesOfSilence.jpg" },
  { title: "Till Dawn (Here Comes the Sun)", album: "Echoes Of Silence", track: 10, duration: 319, streams: 52000000, cover: "AlbumArts/EchoesOfSilence.jpg" },
  //Kiss Land//
  { title: "Professional", album: "Kiss Land", track: 1, duration: 368, streams: 90000000, cover: "AlbumArts/KissLand.jpg" },
  { title: "The Town", album: "Kiss Land", track: 2, duration: 307, streams: 62000000, cover: "AlbumArts/KissLand.jpg" },
  { title: "Adaptation", album: "Kiss Land", track: 3, duration: 283, streams: 67000000, cover: "AlbumArts/KissLand.jpg" },
  { title: "Love In The Sky", album: "Kiss Land", track: 4, duration: 267, streams: 80000000, cover: "AlbumArts/KissLand.jpg" },
  { title: "Belong To The World", album: "Kiss Land", track: 5, duration: 307, streams: 55000000, cover: "AlbumArts/KissLand.jpg" },
  { title: "Live For", album: "Kiss Land", track: 6, duration: 222, streams: 110000000, cover: "AlbumArts/KissLand.jpg" },
  { title: "Wanderlust", album: "Kiss Land", track: 7, duration: 306, streams: 71000000, cover: "AlbumArts/KissLand.jpg" },
  { title: "Kiss Land", album: "Kiss Land", track: 8, duration: 455, streams: 120000000, cover: "AlbumArts/KissLand.jpg" },
  { title: "Pretty", album: "Kiss Land", track: 9, duration: 375, streams: 85000000, cover: "AlbumArts/KissLand.jpg" },
  { title: "Tears In The Rain", album: "Kiss Land", track: 10, duration: 444, streams: 70000000, cover: "AlbumArts/KissLand.jpg" },
  //Beauty Behind the Madness//
  { title: "Real Life", album: "Beauty Behind the Madness", track: 1, duration: 223, streams: 140000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "Losers", album: "Beauty Behind the Madness", track: 2, duration: 281, streams: 140000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "Tell Your Friends", album: "Beauty Behind the Madness", track: 3, duration: 334, streams: 290000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "Often", album: "Beauty Behind the Madness", track: 4, duration: 249, streams: 1200000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "The Hills", album: "Beauty Behind the Madness", track: 5, duration: 242, streams: 2800000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "Acquainted", album: "Beauty Behind the Madness", track: 6, duration: 348, streams: 570000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "Can't Feel My Face", album: "Beauty Behind the Madness", track: 7, duration: 213, streams: 2000000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "Shameless", album: "Beauty Behind the Madness", track: 8, duration: 253, streams: 230000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "Earned It", album: "Beauty Behind the Madness", track: 9, duration: 277, streams: 2000000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "In the Night", album: "Beauty Behind the Madness", track: 10, duration: 235, streams: 620000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "As You Are", album: "Beauty Behind the Madness", track: 11, duration: 340, streams: 170000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "Dark Times", album: "Beauty Behind the Madness", track: 12, duration: 260, streams: 280000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "Prisoner", album: "Beauty Behind the Madness", track: 13, duration: 274, streams: 220000000, cover: "AlbumArts/BBTM.jpg" },
  { title: "Angel", album: "Beauty Behind the Madness", track: 14, duration: 377, streams: 150000000, cover: "AlbumArts/BBTM.jpg" },
  //Starboy//
  { title: "Starboy", album: "Starboy", track: 1, duration: 230, streams: 4100000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Party Monster", album: "Starboy", track: 2, duration: 249, streams: 950000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "False Alarm", album: "Starboy", track: 3, duration: 220, streams: 340000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Reminder", album: "Starboy", track: 4, duration: 218, streams: 1300000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Rockin'", album: "Starboy", track: 5, duration: 232, streams: 280000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Secrets", album: "Starboy", track: 6, duration: 265, streams: 390000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "True Colors", album: "Starboy", track: 7, duration: 206, streams: 320000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Stargirl Interlude", album: "Starboy", track: 8, duration: 111, streams: 1400000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Sidewalks", album: "Starboy", track: 9, duration: 231, streams: 460000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Six Feet Under", album: "Starboy", track: 10, duration: 237, streams: 330000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Love To Lay", album: "Starboy", track: 11, duration: 223, streams: 170000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "A Lonely Night", album: "Starboy", track: 12, duration: 220, streams: 280000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Attention", album: "Starboy", track: 13, duration: 197, streams: 200000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Ordinary Life", album: "Starboy", track: 14, duration: 221, streams: 240000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Nothing Without You", album: "Starboy", track: 15, duration: 198, streams: 210000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "All I Know", album: "Starboy", track: 16, duration: 321, streams: 180000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "Die for You", album: "Starboy", track: 17, duration: 260, streams: 2900000000, cover: "AlbumArts/Starboy.jpg" },
  { title: "I Feel It Coming", album: "Starboy", track: 18, duration: 269, streams: 2000000000, cover: "AlbumArts/Starboy.jpg" },
  //My Dear Melancholy,//
  { title: "Call Out My Name", album: "My Dear Melancholy,", track: 1, duration: 228, streams: 2200000000, cover: "AlbumArts/MDM.jpg" },
  { title: "Try Me", album: "My Dear Melancholy,", track: 2, duration: 221, streams: 410000000, cover: "AlbumArts/MDM.jpg" },
  { title: "Wasted Times", album: "My Dear Melancholy,", track: 3, duration: 220, streams: 370000000, cover: "AlbumArts/MDM.jpg" },
  { title: "I Was Never There", album: "My Dear Melancholy,", track: 4, duration: 241, streams: 1300000000, cover: "AlbumArts/MDM.jpg" },
  { title: "Hurt You", album: "My Dear Melancholy,", track: 5, duration: 170, streams: 370000000, cover: "AlbumArts/MDM.jpg" },
  { title: "Privilege", album: "My Dear Melancholy,", track: 6, duration: 224, streams: 210000000, cover: "AlbumArts/MDM.jpg" },
  { title: "Call Out My Name - A Cappella", album: "My Dear Melancholy,", track: 7, duration: 224, streams: 39000000, cover: "AlbumArts/MDM.jpg" },
  //After Hours//
  { title: "Alone Again", album: "After Hours", track: 1, duration: 250, streams: 210000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "Too Late", album: "After Hours", track: 2, duration: 239, streams: 210000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "Hardest To Love", album: "After Hours", track: 3, duration: 211, streams: 210000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "Scared To Live", album: "After Hours", track: 4, duration: 191, streams: 190000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "Snowchild", album: "After Hours", track: 5, duration: 247, streams: 180000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "Escape From LA", album: "After Hours", track: 6, duration: 355, streams: 210000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "Heartless", album: "After Hours", track: 7, duration: 198, streams: 1100000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "Faith", album: "After Hours", track: 8, duration: 283, streams: 220000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "Blinding Lights", album: "After Hours", track: 9, duration: 200, streams: 5000000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "In Your Eyes", album: "After Hours", track: 10, duration: 237, streams: 1100000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "Save Your Tears", album: "After Hours", track: 11, duration: 215, streams: 2500000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "Repeat After Me (Interlude)", album: "After Hours", track: 12, duration: 195, streams: 130000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "After Hours", album: "After Hours", track: 13, duration: 361, streams: 1200000000, cover: "AlbumArts/AfterHours.jpg" },
  { title: "Until I Bleed Out", album: "After Hours", track: 14, duration: 190, streams: 120000000, cover: "AlbumArts/AfterHours.jpg" },
  //Dawn FM//
  { title: "Dawn FM", album: "Dawn FM", track: 1, duration: 96, streams: 70000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Gasoline", album: "Dawn FM", track: 2, duration: 212, streams: 180000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "How Do I Make You Love Me?", album: "Dawn FM", track: 3, duration: 214, streams: 180000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Take My Breath", album: "Dawn FM", track: 4, duration: 339, streams: 240000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Sacrifice", album: "Dawn FM", track: 5, duration: 188, streams: 440000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "A Tale by Quincy", album: "Dawn FM", track: 6, duration: 96, streams: 53000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Out of Time", album: "Dawn FM", track: 7, duration: 214, streams: 570000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Here We Go... Again", album: "Dawn FM", track: 8, duration: 209, streams: 120000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Best Friends", album: "Dawn FM", track: 9, duration: 163, streams: 140000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Is There Someone Else?", album: "Dawn FM", track: 10, duration: 199, streams: 940000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Starry Eyes", album: "Dawn FM", track: 11, duration: 148, streams: 110000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Every Angel is Terrifying", album: "Dawn FM", track: 12, duration: 167, streams: 47000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Don't Break My Heart", album: "Dawn FM", track: 13, duration: 205, streams: 90000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "I Heard You're Married", album: "Dawn FM", track: 14, duration: 263, streams: 120000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Less Than Zero", album: "Dawn FM", track: 15, duration: 211, streams: 370000000, cover: "AlbumArts/DawmFM.jpg" },
  { title: "Phantom Regret by Jim", album: "Dawn FM", track: 16, duration: 179, streams: 42000000, cover: "AlbumArts/DawmFM.jpg" },
  //Hurry Up Tomorrow//
  { title: "Wake Me Up", album: "Hurry Up Tomorrow", track: 1, duration: 308, streams: 68000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Cry For Me", album: "Hurry Up Tomorrow", track: 2, duration: 224, streams: 260000000, cover: "AlbumArts/HUT.jpg" },
  { title: "I Can't Fucking Sing", album: "Hurry Up Tomorrow", track: 3, duration: 12, streams: 45000, cover: "AlbumArts/HUT.jpg" },
  { title: "Sao Paulo", album: "Hurry Up Tomorrow", track: 4, duration: 301, streams: 440000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Until Were Skin & Bone", album: "Hurry Up Tomorrow", track: 5, duration: 22, streams: 93000, cover: "AlbumArts/HUT.jpg" },
  { title: "Baptized In Fear", album: "Hurry Up Tomorrow", track: 6, duration: 232, streams: 25000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Open Hearts", album: "Hurry Up Tomorrow", track: 7, duration: 234, streams: 94000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Opening Night", album: "Hurry Up Tomorrow", track: 8, duration: 96, streams: 40000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Reflections Laughing", album: "Hurry Up Tomorrow", track: 9, duration: 291, streams: 69000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Enjoy The Show", album: "Hurry Up Tomorrow", track: 10, duration: 301, streams: 50000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Given Up On Me", album: "Hurry Up Tomorrow", track: 11, duration: 354, streams: 45000000, cover: "AlbumArts/HUT.jpg" },
  { title: "I Can't Wait To Get There", album: "Hurry Up Tomorrow", track: 12, duration: 188, streams: 42000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Timeless", album: "Hurry Up Tomorrow", track: 13, duration: 256, streams: 1100000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Niagra Falls", album: "Hurry Up Tomorrow", track: 14, duration: 277, streams: 65000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Take Me Back To LA", album: "Hurry Up Tomorrow", track: 15, duration: 253, streams: 49000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Big Sleep", album: "Hurry Up Tomorrow", track: 16, duration: 225, streams: 28000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Give Me Mercy", album: "Hurry Up Tomorrow", track: 17, duration: 216, streams: 33000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Drive", album: "Hurry Up Tomorrow", track: 18, duration: 188, streams: 32000000, cover: "AlbumArts/HUT.jpg" },
  { title: "The Abyss", album: "Hurry Up Tomorrow", track: 19, duration: 282, streams: 105000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Red Terror", album: "Hurry Up Tomorrow", track: 20, duration: 231, streams: 29000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Without A Warning", album: "Hurry Up Tomorrow", track: 21, duration: 297, streams: 32000000, cover: "AlbumArts/HUT.jpg" },
  { title: "Hurry Up Tomorrow", album: "Hurry Up Tomorrow", track: 22, duration: 291, streams: 30000000, cover: "AlbumArts/HUT.jpg" },
];

// Album order (for ±2 “yellow” logic)
const albumOrderMap = {
  "House Of Balloons": 1,
  "Thursday": 2,
  "Echoes Of Silence": 3,
  "Kiss Land": 4,
  "Beauty Behind the Madness": 5,
  "Starboy": 6,
  "My Dear Melancholy,": 7,
  "After Hours": 8,
  "Dawn FM": 9,
  "Hurry Up Tomorrow": 10,
};

// ===========================
// HELPERS
// ===========================
const $ = (id) => document.getElementById(id);
function formatDuration(seconds){ const m = Math.floor(seconds/60); const s = seconds % 60; return `${m}:${s.toString().padStart(2,"0")}`; }
function isTestMode(){ return new URLSearchParams(location.search).has("test"); }

// ===========================
// DAILY SONG (DETERMINISTIC)
// ===========================
// Use a single, global start date. Everyone maps the same calendar day → same song index.
const WEEKNDLE_START_DATE = "2025-09-01"; // set your official launch date (UTC)
const epochDays = () => Math.floor(Date.now() / 86400000);
const startDay = Math.floor(new Date(WEEKNDLE_START_DATE).getTime() / 86400000);
const today = epochDays();
const dayOffset = today - startDay;
const songIndex = ((dayOffset % songs.length) + songs.length) % songs.length;
const target = songs[songIndex];

// ===========================
// PERSISTED RESULT / LOCKS
// ===========================
const RESULT_DAY_KEY  = "weekndle_result_day";   // numeric day id when finished
const RESULT_TYPE_KEY = "weekndle_result_type";  // "win" | "loss"
const GAMEOVER_KEY    = "weekndle_game_over_day";// disables guessing for today

// In test/reset modes, clear locks so dev can replay
(function replaySafety(){
  const p = new URLSearchParams(location.search);
  if (p.has("test") || p.has("reset")){
    [RESULT_DAY_KEY, RESULT_TYPE_KEY, GAMEOVER_KEY, "weekndle_win_day"].forEach(k => localStorage.removeItem(k));
  }
})();

function markResultToday(type){
  if (isTestMode()) return; // don’t persist in test mode
  localStorage.setItem(RESULT_DAY_KEY, String(today));
  localStorage.setItem(RESULT_TYPE_KEY, type);
  localStorage.setItem(GAMEOVER_KEY, String(today));
}

function getTodayResult(){
  if (isTestMode()) return null;
  const d = parseInt(localStorage.getItem(RESULT_DAY_KEY), 10);
  return d === today ? localStorage.getItem(RESULT_TYPE_KEY) : null;
}

function hasGameEndedToday(){
  if (isTestMode()) return false;
  return parseInt(localStorage.getItem(GAMEOVER_KEY), 10) === today;
}

// ===========================
// PLAYER STATS
// ===========================
const STATS_KEY = "weekndle_stats";
function defaultStats(){ return { plays:0, wins:0, winPct:0, currentStreak:0, maxStreak:0, guessDistribution:Array(8).fill(0), lastCompletedDay:null }; }
function loadStats(){ try{ const raw = localStorage.getItem(STATS_KEY); return raw ? JSON.parse(raw) : defaultStats(); } catch{ return defaultStats(); } }
function saveStats(s){ s.winPct = s.plays > 0 ? Math.round((s.wins/s.plays)*100) : 0; localStorage.setItem(STATS_KEY, JSON.stringify(s)); }

function finalizeDay(result, guessesCount){
  if (hasGameEndedToday()) return;
  const s = loadStats();
  if (s.lastCompletedDay !== today){
    s.plays += 1;
    if (s.lastCompletedDay === today - 1) s.currentStreak = (result === "win") ? s.currentStreak + 1 : 0;
    else s.currentStreak = (result === "win") ? 1 : 0;

    if (result === "win"){
      s.wins += 1;
      if (guessesCount && guessesCount >=1 && guessesCount <=8) s.guessDistribution[guessesCount-1] += 1;
      if (s.currentStreak > s.maxStreak) s.maxStreak = s.currentStreak;
    }
    s.lastCompletedDay = today;
    saveStats(s);
  }
  markResultToday(result);
  if (!isTestMode()) disableGuessingUI();
}

// ===========================
// GAME STATE
// ===========================
let guesses = [];

// ===========================
// SUBMIT GUESS
// ===========================
function submitGuess(){
  if (hasGameEndedToday()){ alert("You’ve already completed today’s game. Come back tomorrow!"); return; }

  const input = $("guessInput");
  const guessTitle = (input.value || "").trim();
  input.value = "";

  const guessSong = songs.find(s => s.title.toLowerCase() === guessTitle.toLowerCase());
  if (!guessSong){ alert("Song not found in the database!"); return; }

  const feedback = {
    track: guessSong.track === target.track ? "green" : (Math.abs(guessSong.track - target.track) <= 2 ? "yellow" : "gray"),
    trackArrow: guessSong.track < target.track ? "↑" : (guessSong.track > target.track ? "↓" : ""),
    duration: Math.abs(guessSong.duration - target.duration) <= 30 ? "yellow" : "gray",
    durationArrow: guessSong.duration < target.duration ? "↑" : (guessSong.duration > target.duration ? "↓" : ""),
    album: guessSong.album === target.album ? "green" : (Math.abs(albumOrderMap[guessSong.album] - albumOrderMap[target.album]) <= 2 ? "yellow" : "gray"),
    albumArrow: albumOrderMap[guessSong.album] < albumOrderMap[target.album] ? "↑" : (albumOrderMap[guessSong.album] > albumOrderMap[target.album] ? "↓" : ""),
    streams: guessSong.streams,
    streamsClass: guessSong.title === target.title ? "green" : "gray",
    streamsArrow: guessSong.streams < target.streams ? "↑" : (guessSong.streams > target.streams ? "↓" : ""),
  };

  guesses.push({ guessSong, feedback });
  renderGuesses();

  if (guessSong.title === target.title){
    finalizeDay("win", guesses.length);
    swapToSeeResults("win");
    showWinOverlay();
    const gi = $("guessInput");
    if (gi){ gi.disabled = true; gi.placeholder = `You guessed it in ${guesses.length}!`; }
    return;
  }

  if (guesses.length >= 8){
    finalizeDay("loss", null);
    swapToSeeResults("loss");
    showLossOverlay();
  }
}

// ===========================
// RENDER GUESSES
// ===========================
function renderGuesses(){
  const tbody = document.querySelector("#guessesTable tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  guesses.forEach((g, idx) => {
    const row = document.createElement("tr");

    const guessNumTd = document.createElement("td");
    guessNumTd.innerText = idx + 1;

    const titleTd = document.createElement("td");
    titleTd.innerText = g.guessSong.title;

    const albumTd = document.createElement("td");
    albumTd.className = `${g.feedback.album} album-cell`;
    const img = document.createElement("img");
    img.src = g.guessSong.cover; img.alt = g.guessSong.album;
    const albumText = document.createElement("span");
    albumText.className = "album-text";
    albumText.textContent = `${g.guessSong.album} ${g.feedback.albumArrow || ""}`;
    albumTd.append(img, albumText);

    const trackTd = document.createElement("td");
    trackTd.innerText = `${g.guessSong.track} ${g.feedback.trackArrow || ""}`;
    trackTd.className = g.feedback.track;

    const durationTd = document.createElement("td");
    durationTd.innerText = `${formatDuration(g.guessSong.duration)} ${g.feedback.durationArrow || ""}`;
    durationTd.className = g.feedback.duration;

    const streamsTd = document.createElement("td");
    streamsTd.innerText = `~ ${g.guessSong.streams.toLocaleString()} ${g.feedback.streamsArrow || ""}`;
    streamsTd.className = g.feedback.streamsClass;

    if (g.guessSong.title === target.title) row.classList.add("win-row");

    row.append(guessNumTd, titleTd, albumTd, trackTd, durationTd, streamsTd);
    tbody.appendChild(row);
  });
}

// ===========================
// AUTOCOMPLETE
// ===========================
function acNorm(s){ return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/&/g," and ").replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim(); }
function acTokens(s){ return acNorm(s).split(" ").filter(Boolean); }
function acCategory(title, qNorm){ const norm = acNorm(title); if (!qNorm) return 3; if (norm.startsWith(qNorm)) return 0; const tokens = acTokens(title); if (tokens.some(t => t.startsWith(qNorm))) return 1; if (norm.includes(qNorm)) return 2; return 3; }
function acEscapeRe(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"); }
function acHighlight(title, raw){ if (!raw) return title; const re = new RegExp(acEscapeRe(raw), "i"); const m = title.match(re); return m ? title.replace(re, "<strong>"+m[0]+"</strong>") : title; }
function autocomplete(input, songs){
  let currentFocus;
  input.addEventListener("input", function(){
    const val = this.value || "";
    closeAllLists();
    if (!val) return false;
    currentFocus = -1;
    const listDiv = document.createElement("div");
    listDiv.id = this.id + "autocomplete-list";
    listDiv.className = "autocomplete-items";
    this.parentNode.appendChild(listDiv);
    const qNorm = acNorm(val);
    const matches = songs.map(s => ({ title: s.title, cat: acCategory(s.title, qNorm) }))
                         .filter(x => x.cat !== 3)
                         .sort((a,b)=> a.cat!==b.cat ? a.cat-b.cat : a.title.localeCompare(b.title, undefined, {sensitivity:"base"}));
    matches.slice(0,5).forEach(({title})=>{
      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = acHighlight(title, val);
      itemDiv.addEventListener("click", function(){ input.value = title; closeAllLists(); });
      listDiv.appendChild(itemDiv);
    });
  });
  input.addEventListener("keydown", function(e){
    let list = document.getElementById(this.id + "autocomplete-list");
    if (list) list = list.getElementsByTagName("div");
    if (e.keyCode === 40){ currentFocus++; addActive(list); }
    else if (e.keyCode === 38){ currentFocus--; addActive(list); }
    else if (e.keyCode === 13){ e.preventDefault(); if (currentFocus > -1 && list) list[currentFocus].click(); }
  });
  function addActive(list){ if (!list) return; removeActive(list); if (currentFocus >= list.length) currentFocus = 0; if (currentFocus < 0) currentFocus = list.length - 1; list[currentFocus].classList.add("autocomplete-active"); }
  function removeActive(list){ for (let i=0;i<list.length;i++) list[i].classList.remove("autocomplete-active"); }
  function closeAllLists(elmnt){ const items = document.getElementsByClassName("autocomplete-items"); for (let i=0;i<items.length;i++){ if (elmnt !== items[i] && elmnt !== input){ items[i].parentNode && items[i].parentNode.removeChild(items[i]); } } }
  document.addEventListener("click", function(e){ closeAllLists(e.target); });
}
autocomplete($("guessInput"), songs);

// ===========================
// SHARE / DAY NUMBER
// ===========================
const COLOR_SQUARE = { green:"🟩", yellow:"🟨", gray:"⬛" };
function getWeekndleNumber(){
  const sd = Math.floor(new Date(WEEKNDLE_START_DATE).getTime() / 86400000);
  return today - sd + 1;
}
function feedbackToSquare(cls){ return COLOR_SQUARE[cls] || "⬛"; }
function buildShareText(){
  const dayNo = getWeekndleNumber();
  const attempts = guesses.length;
  const header = `Weekndle #${dayNo} ${attempts}/8`;
  const lines = guesses.map(g => {
    const songSquare = g.guessSong.title === target.title ? "🟩" : "⬛";
    const albumSquare = feedbackToSquare(g.feedback.album);
    const trackSquare = feedbackToSquare(g.feedback.track);
    const durationSquare = feedbackToSquare(g.feedback.duration);
    let streamsEmoji = "";
    if (g.feedback.streamsArrow === "↑") streamsEmoji = "⬆️";
    if (g.feedback.streamsArrow === "↓") streamsEmoji = "⬇️";
    return `${songSquare}${albumSquare}${trackSquare}${durationSquare}${streamsEmoji}`.trimEnd();
  });
  const url = location.origin; // replace with your canonical domain if needed
  return [header, "", ...lines, "", url].join("\n");
}
function shareScore(){
  const text = buildShareText();
  if (navigator.share){
    navigator.share({ text }).catch(()=> navigator.clipboard ? navigator.clipboard.writeText(text).then(()=>alert("Score copied to clipboard!")) : prompt("Copy your score:", text));
  } else if (navigator.clipboard){
    navigator.clipboard.writeText(text).then(()=>alert("Score copied to clipboard!"));
  } else {
    prompt("Copy your score:", text);
  }
}

// ===========================
// OVERLAYS
// ===========================
function renderGuessDistributionInto(elId){
  const root = $(elId);
  if (!root) return;
  let dist = Array(8).fill(0);
  try{
    const raw = localStorage.getItem(STATS_KEY);
    if (raw){
      const s = JSON.parse(raw);
      if (s && Array.isArray(s.guessDistribution)) dist = s.guessDistribution.slice(0,8);
    }
  } catch {}
  const justPlayed = Array.isArray(guesses) && guesses.length > 0;
  if (dist.every(n=>n===0) && justPlayed){
    const idx = Math.min(Math.max(guesses.length,1),8) - 1;
    dist[idx] = 1;
  }
  const max = Math.max(1, ...dist);
  root.innerHTML = dist.map((count,i)=>`<div class="gd-row" style="display:flex;align-items:center;gap:8px;margin:4px 0;"><div class="gd-num" style="width:20px;text-align:right;opacity:.8;">${i+1}</div><div class="gd-bar" style="flex:1;height:14px;background:#333;border-radius:6px;overflow:hidden;"><div style="width:${Math.round((count/max)*100)}%;height:100%;background:#1db954;text-align:right;padding-right:6px;font-size:12px;line-height:14px;">${count}</div></div></div>`).join("");
}

function renderStatsIntoOverlay(){
  const s = loadStats();
  const byId = id => $(id);
  if (byId("statPlays")) byId("statPlays").innerText = s.plays;
  if (byId("statWinPct")) byId("statWinPct").innerText = s.winPct;
  if (byId("statCurrentStreak")) byId("statCurrentStreak").innerText = s.currentStreak;
  if (byId("statMaxStreak")) byId("statMaxStreak").innerText = s.maxStreak;

  const distRoot = byId("guessDist");
  if (distRoot){
    const max = Math.max(1, ...s.guessDistribution);
    distRoot.innerHTML = s.guessDistribution.map((count,i)=>{
      const pct = Math.round((count/max)*100);
      return `<div style="display:flex; align-items:center; gap:8px; margin:4px 0;">
        <div style="width:20px; text-align:right;">${i+1}</div>
        <div style="flex:1; height:10px; background:#333;"><div style="width:${pct}%; height:10px; background:#1db954;"></div></div>
        <div style="width:40px; text-align:left;">${count}</div>
      </div>`;
    }).join("");
  }
}

function showWinOverlay(){
  const cover = $("albumCover");
  const title = $("winSongTitle");
  if (cover) cover.src = target.cover;
  if (title) title.innerText = target.title;
  renderStatsIntoOverlay();
  $("winOverlay").style.display = "flex";
  document.body.classList.add("modal-open");
}
function closeWinOverlay(){
  const ov = $("winOverlay");
  if (ov) ov.style.display = "none";
  document.body.classList.remove("modal-open");
}

function showLossOverlay(){
  const cover = $("lossAlbumCover");
  const title = $("lossSongTitle");
  if (cover) cover.src = target.cover;
  if (title) title.innerText = target.title;
  renderGuessDistributionInto("guessDistLoss");
  $("lossOverlay").style.display = "flex";
  document.body.classList.add("modal-open");
}
function closeLossOverlay(){
  const ov = $("lossOverlay");
  if (ov) ov.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Bind static overlay buttons
(function bindStaticButtons(){
  const shareWin = $("shareScoreBtn");
  if (shareWin) shareWin.addEventListener("click", shareScore);
  const shareLoss = $("shareLossBtn");
  if (shareLoss) shareLoss.addEventListener("click", shareScore);
  const closeLoss = $("closeLossBtn");
  if (closeLoss) closeLoss.addEventListener("click", closeLossOverlay);
})();

// ===========================
// SEE RESULTS (single source of truth)
// ===========================
function swapToSeeResults(outcome /* "win" | "loss" */){
  const guessBtn = $("guessBtn");
  const seeBtn   = $("seeResultsBtn");
  if (!seeBtn) return;

  if (outcome) seeBtn.dataset.result = outcome;

  if (!seeBtn.dataset.bound){
    seeBtn.addEventListener("click", () => {
      const btnOutcome = seeBtn.dataset.result;
      const stored = getTodayResult();
      const liveWon  = Array.isArray(guesses) && guesses.at(-1)?.guessSong?.title === target.title;
      const liveLost = Array.isArray(guesses) && guesses.length >= 8 && !liveWon;
      const finalOutcome = btnOutcome || stored || (liveWon ? "win" : (liveLost ? "loss" : "win"));
      if (finalOutcome === "loss") showLossOverlay(); else showWinOverlay();
    });
    seeBtn.dataset.bound = "1";
  }

  if (isTestMode()){
    seeBtn.style.display = "inline-block";
    if (guessBtn) guessBtn.style.display = "inline-block";
    return;
  }
  seeBtn.style.display = "inline-block";
  if (guessBtn) guessBtn.style.display = "none";
}

// If finished earlier today, default to “See results”
(function initSeeResultsBtn(){
  if (isTestMode()) return;
  const guessBtn = $("guessBtn");
  const seeBtn   = $("seeResultsBtn");
  if (!guessBtn || !seeBtn) return;
  const res = getTodayResult();
  if (res){
    guessBtn.style.display = "none";
    seeBtn.style.display   = "inline-block";
    if (!seeBtn.dataset.bound){
      seeBtn.addEventListener("click", () => {
        const r = getTodayResult();
        if (r === "loss") showLossOverlay(); else showWinOverlay();
      });
      seeBtn.dataset.bound = "1";
    }
  }
})();

// ===========================
// HOW TO PLAY + COUNTDOWN
// ===========================
$("howToPlayBtn").addEventListener("click", () => { $("howToPlayOverlay").style.display = "flex"; document.body.classList.add("modal-open"); });
$("closeHowTo").addEventListener("click", () => { $("howToPlayOverlay").style.display = "none"; document.body.classList.remove("modal-open"); });

function updateCountdown(){
  const el = $("countdown");
  if (!el) return;
  const now = new Date();
  const nextMidnight = new Date();
  nextMidnight.setHours(24,0,0,0);
  const diff = nextMidnight - now;
  const hours = Math.floor(diff / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60))/(1000*60));
  el.innerText = `Next song unlocks in ${hours}h ${minutes}m`;
}
setInterval(updateCountdown, 1000); updateCountdown();

// ===========================
// GUESSING UI (enable/disable)
// ===========================
function disableGuessingUI(){
  if (isTestMode()) return;
  const input = $("guessInput");
  if (input){ input.disabled = true; input.placeholder = "Come back tomorrow!"; }
  const guessBtn = document.querySelector('button[onclick="submitGuess()"]');
  if (guessBtn) guessBtn.disabled = true;
}
function enableGuessingUI(){
  const input = $("guessInput");
  if (input){ input.disabled = false; input.placeholder = "Enter song title"; }
  const guessBtn = document.querySelector('button[onclick="submitGuess()"]');
  if (guessBtn) guessBtn.disabled = false;
}
if (hasGameEndedToday()) disableGuessingUI(); else enableGuessingUI();

// ===========================
// ABOUT / PRIVACY MODALS (index.html variants)
// ===========================
(function wireAboutPrivacy(){
  const aboutLink = document.getElementById("aboutLink");
  const privacyLink = document.getElementById("privacyLink");

  function openOverlayById(id){ const el = document.getElementById(id); if (!el) return; el.style.display = "flex"; document.body.classList.add("modal-open"); }
  function closeOverlayById(id){ const el = document.getElementById(id); if (!el) return; el.style.display = "none"; document.body.classList.remove("modal-open"); }

  if (aboutLink)  aboutLink.addEventListener("click",  (e)=>{ e.preventDefault(); openOverlayById("aboutOverlay"); });
  if (privacyLink)privacyLink.addEventListener("click", (e)=>{ e.preventDefault(); openOverlayById("privacyOverlay"); });

  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "aboutCloseBtn")   closeOverlayById("aboutOverlay");
    if (e.target && e.target.id === "privacyCloseBtn") closeOverlayById("privacyOverlay");
    const aboutOv   = document.getElementById("aboutOverlay");
    const privacyOv = document.getElementById("privacyOverlay");
    if (e.target === aboutOv)   closeOverlayById("aboutOverlay");
    if (e.target === privacyOv) closeOverlayById("privacyOverlay");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){ closeOverlayById("aboutOverlay"); closeOverlayById("privacyOverlay"); }
  });
})();
