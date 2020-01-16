export const uta_movie_url = "https://youtu.be/XwdN0ggVzVs";

export const hisagi_movie_url = "https://youtu.be/CoXMwAL6GoY";

export const team_uta = [
  {
    player: ["うた", "№π ヨクバリス", "ののむら 0729", "しえん"]
  },
  {
    player: ["うた", "うたさんチーム じょ", "ベニー", "よつぎ"]
  },
  {
    player: ["うた", "うたスナ", "aolare ika", "ちび"]
  },
  {
    player: ["うた", "かに", "aolare ika", "うたスナ"]
  },
  {
    player: ["うた", "ゼハハハハハハWWW", "aolare ika", "うたスナ"]
  }
];

export const team_hisagi = [
  {
    player: ["ひさぎ", "TR♪", "TKG.さいきんひま", "ラ～タタッタ☆ラタタ"]
  },
  {
    player: ["ひさぎ", "ルリアンナ", "many", "*MS*|+ひの+|"]
  },
  {
    player: ["ひさぎ", "ちくわのさいぼうぐん", "ぽんぷ", "TR♪"]
  },
  {
    player: ["ひさぎ", "て", "ぽんぷ", "はねのついたカヌーよ"]
  },
  {
    player: ["ひさぎ", "ちくわのさいぼうぐん", "TR♪", "こいよはる「こう」!"]
  }
];

export const match_result = {
  order1: [
    {
      rule: "ナワバリバトル",
      stage: "スーメシーワールド",
      team1: {
        member: team_uta[0],
        win: false,
        dominance: "36.8"
      },
      team2: {
        member: team_hisagi[0],
        win: true,
        domainance: "55.7"
      },
      hisagi_movie: "1018",
      uta_movie: "866"
    },
    {
      rule: "ガチエリア",
      stage: "Bバスパーク",
      team1: {
        member: team_uta[0],
        win: false,
        dominance: "81"
      },
      team2: {
        member: team_hisagi[0],
        win: true,
        domainance: "96"
      },
      hisagi_movie: "1445",
      uta_movie: "1295"
    },
    {
      rule: "ガチアサリ",
      stage: "コンブトラック",
      team1: {
        member: team_uta[0],
        win: false,
        dominance: "23"
      },
      team2: {
        member: team_hisagi[0],
        win: true,
        domainance: "43"
      },
      hisagi_movie: "1944",
      uta_movie: "1793"
    },
    {
      rule: "ガチホコバトル",
      stage: "ショッツル鉱山",
      team1: {
        member: team_uta[0],
        win: true,
        dominance: "75"
      },
      team2: {
        member: team_hisagi[0],
        win: false,
        domainance: "55"
      },
      hisagi_movie: "2409",
      uta_movie: "2257"
    },
    {
      rule: "ガチヤグラ",
      stage: "マンタマリア号",
      team1: {
        member: team_uta[0],
        win: false,
        dominance: "34"
      },
      team2: {
        member: team_hisagi[0],
        win: true,
        domainance: "95"
      },
      hisagi_movie: "2870",
      uta_movie: "2718"
    }
  ],
  order2: [
    {
      rule: "ナワバリバトル",
      stage: "アロワナモール",
      team1: {
        member: team_uta[1],
        win: true,
        dominance: "65.0"
      },
      team2: {
        member: team_hisagi[1],
        win: false,
        domainance: "26.9"
      },
      hisagi_movie: "2440",
      uta_movie: "3288"
    },
    {
      rule: "ガチエリア",
      stage: "モンガラキャンプ場",
      team1: {
        member: team_uta[1],
        win: true,
        dominance: "100"
      },
      team2: {
        member: team_hisagi[1],
        win: false,
        hisagi_domainance: "0"
      },
      hisagi_movie: "3772",
      uta_movie: "3620"
    },
    {
      rule: "ガチアサリ",
      stage: "エンガワ河川敷",
      team1: {
        member: team_uta[1],
        win: true,
        dominance: "70"
      },
      team2: {
        member: team_hisagi[1],
        win: false,
        domainance: "56"
      },
      hisagi_movie: "4293",
      uta_movie: "4141"
    },
    {
      rule: "ガチホコバトル",
      stage: "デボン海洋博物館",
      team1: {
        member: team_uta[1],
        win: true,
        dominance: "100"
      },
      team2: {
        member: team_hisagi[1],
        win: false,
        domainance: "0"
      },
      hisagi_movie: "4729",
      uta_movie: "4577"
    },
    {
      rule: "ガチヤグラ",
      stage: "ホテルニューオートロ",
      team1: {
        member: team_uta[1],
        win: false,
        dominance: "19"
      },
      team2: {
        member: team_hisagi[1],
        win: true,
        domainance: "91"
      },
      hisagi_movie: "4996",
      uta_movie: "4844"
    }
  ]
};
