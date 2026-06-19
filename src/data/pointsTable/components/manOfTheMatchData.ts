interface ManOfTheMatchEntry {
  matchNo: number;
  team: string;
  playerName: string;
  stats: string[];
  logo: string;
  photo?: string;
  initials: string;
}

const manOfTheMatchData: ManOfTheMatchEntry[] = [
  {
    matchNo: 1,
    team: "Mahalaxmi Warriors",
    playerName: "Samadhan Gavali",
    stats: ["15 Balls", "46 Runs"],
    logo: "/assets/images/teams/Mahalaxmi Warriors.png",
    initials: "SG",
  },
  {
    matchNo: 2,
    team: "Samrat Yoddha",
    playerName: "Siddharth Ubale",
    stats: ["12 Balls", "38 Runs"],
    logo: "/assets/images/teams/Samrat Yodha 1.png",
    initials: "SU",
  },
  {
    matchNo: 3,
    team: "Linge Super Kings",
    playerName: "Vaibhav Kamble",
    stats: ["12 Balls", "35 Runs"],
    logo: "/assets/images/teams/Linge Super Kings 1.png",
    initials: "VK",
  },
  {
    matchNo: 4,
    team: "Gajanan Riders",
    playerName: "Mahadev Kudale",
    stats: ["12 Balls", "32 Runs"],
    logo: "/assets/images/teams/Gajanan Rider 1.png",
    initials: "MK",
  },
  {
    matchNo: 5,
    team: "Mahalaxmi Warriors",
    playerName: "Vaibhav Shinde",
    stats: ["9 Balls", "20 Runs", "2 Wkts"],
    logo: "/assets/images/teams/Mahalaxmi Warriors.png",
    initials: "VS",
  },
  {
    matchNo: 6,
    team: "Sadguru Lions",
    playerName: "Balnana Shinde",
    stats: ["5 Balls", "20 Runs", "1 Catch"],
    logo: "/assets/images/teams/Sadguru Lions.png",
    initials: "BS",
  },
  {
    matchNo: 7,
    team: "Linge Super Kings",
    playerName: "Vaibhav Waghmare",
    stats: ["13 Balls", "36 Runs"],
    logo: "/assets/images/teams/Linge Super Kings 1.png",
    initials: "VW",
  },
  {
    matchNo: 8,
    team: "Gajanan Riders",
    playerName: "Balaji Khandare",
    stats: ["5 Balls", "12 Runs", "3 Wkts"],
    logo: "/assets/images/teams/Gajanan Rider 1.png",
    initials: "BK",
  },
  {
    matchNo: 9,
    team: "Dayavan Eleven",
    playerName: "Dada Inamdar",
    stats: ["9 Balls", "20 Runs", "1 Wkt"],
    logo: "/assets/images/teams/Dayavan 11 - 1.png",
    initials: "DI",
  },
  {
    matchNo: 10,
    team: "Sadguru Lions",
    playerName: "Amir Mujawar",
    stats: ["13 Balls", "30 Runs", "1 Wkt"],
    logo: "/assets/images/teams/Sadguru Lions.png",
    initials: "AM",
  },
  {
    matchNo: 11,
    team: "Gajanan Riders",
    playerName: "Arjun Mane",
    stats: ["6 Balls", "8 Runs", "2 Wkts"],
    logo: "/assets/images/teams/Gajanan Rider 1.png",
    initials: "AR",
  },
];

export default manOfTheMatchData;