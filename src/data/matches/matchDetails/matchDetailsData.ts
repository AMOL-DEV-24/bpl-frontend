import type { Match } from "@/types/matches/matchDetails/matchDetails.type";

const matchesData: Match[] = [
  {
    matchNo: 1,

    teamA: "Mahalaxmi Warriors",
    teamB: "Gajanan Riders",

    logoA: "/assets/images/teams/Mahalaxmi Warriors.png",
    logoB: "/assets/images/teams/Gajanan Riders 2.png",

    venue: "Bhalawani Cricket Ground",

    status: "Completed",

    date: "20 June 2026",
    time: "07:00 PM",

    tossWinner: "Mahalaxmi Warriors",
    electedTo: "Bat",

    playingXI: {
      teamA: [
        "Samadhan Gawali",
        "Ashok Lale",
        "Somnath Kapase",
        "Vaibhav Shinde",
        "Ashfaq Inamdar",
        "Pratik Shinde",
        "Vijay Kenjale",
        "Raj Vibhute",
      ],
      teamB: [
        "Mahadev Kudale",
        "Arjun Mane",
        "Kailas Vedpathak",
        "Anutal Lokhande",
      ],
    },

    scorecard: {
      firstInnings: {
        team: "Mahalaxmi Warriors",
        score: "67/3",
        overs: "5.0",

        batting: [
          {
            name: "Samadhan Gawali",
            runs: 46,
            balls: 15,
            fours: 3,
            sixes: 4,
          },
          {
            name: "Ashok Lale",
            runs: 0,
            balls: 1,
            fours: 0,
            sixes: 0,
          },
          {
            name: "Somnath Kapase",
            runs: 0,
            balls: 3,
            fours: 0,
            sixes: 0,
          },
          {
            name: "Vaibhav Shinde",
            runs: 16,
            balls: 6,
            fours: 1,
            sixes: 1,
          },
          {
            name: "Ashfaq Inamdar",
            runs: 4,
            balls: 5,
            fours: 0,
            sixes: 0,
          },
        ],

        bowling: [
          {
            name: "Mahadev Kudale",
            overs: 2,
            runs: 18,
            wickets: 2,
          },
          {
            name: "Arjun Mane",
            overs: 1,
            runs: 15,
            wickets: 1,
          },
        ],
      },

      secondInnings: {
        team: "Gajanan Riders",
        score: "33/6",
        overs: "5.0",

        batting: [
          {
            name: "Mahadev Kudale",
            runs: 12,
            balls: 8,
            fours: 1,
            sixes: 0,
          },
          {
            name: "Arjun Mane",
            runs: 8,
            balls: 6,
            fours: 0,
            sixes: 1,
          },
          {
            name: "Kailas Vedpathak",
            runs: 5,
            balls: 4,
            fours: 1,
            sixes: 0,
          },
          {
            name: "Anutal Lokhande",
            runs: 3,
            balls: 5,
            fours: 0,
            sixes: 0,
          },
        ],

        bowling: [
          {
            name: "Samadhan Gawali",
            overs: 2,
            runs: 10,
            wickets: 3,
          },
          {
            name: "Vaibhav Shinde",
            overs: 1,
            runs: 8,
            wickets: 1,
          },
          {
            name: "Pratik Shinde",
            overs: 1,
            runs: 7,
            wickets: 1,
          },
        ],
      },
    },

    result: {
      winner: "Mahalaxmi Warriors",
      winBy: "34 Runs",
      playerOfTheMatch: "Samadhan Gawali",
      summary: "Mahalaxmi Warriors defeated Gajanan Riders by 34 runs.",
    },
  },
  {
    matchNo: 2,

    teamA: "Samrat Yoddha",
    teamB: "Sadguru Lions",

    logoA: "/assets/images/teams/Samrat Yodha 1.png",
    logoB: "/assets/images/teams/Sadguru Lions.png",

    venue: "Bhalawani Cricket Ground",

    status: "Completed",

    date: "20 June 2026",
    time: "08:00 PM",

    tossWinner: "Samrat Yoddha",
    electedTo: "Bat",

    playingXI: {
      teamA: [
        "Siddharth Ubale",
        "Ramling Khandare",
        "Omkar Karande",
        "Bandu Pawar",
        "Keshav Linge",
        "Pradeep Bhosale",
        "Kuldeep Jadhav",
        "Chetan Lokhande",
      ],

      teamB: [
        "Tillu Mujawar",
        "Ganesh Ghode",
        "Balasaheb Shinde",
        "Rahul Pawar",
        "Rohit Jadhav",
        "Nitin Shinde",
        "Sagar Mane",
        "Vikas Kharat",
      ],
    },

    scorecard: {
      firstInnings: {
        team: "Samrat Yoddha",
        score: "74/2",
        overs: "5.0",

        batting: [
          {
            name: "Siddharth Ubale",
            runs: 28,
            balls: 12,
            fours: 1,
            sixes: 2,
          },
          {
            name: "Ramling Khandare",
            runs: 28,
            balls: 12,
            fours: 1,
            sixes: 2,
          },
          {
            name: "Omkar Karande",
            runs: 14,
            balls: 6,
            fours: 1,
            sixes: 1,
          },
          {
            name: "Bandu Pawar",
            runs: 1,
            balls: 1,
            fours: 0,
            sixes: 0,
          },
        ],

        bowling: [
          {
            name: "Tillu Mujawar",
            overs: 1,
            runs: 15,
            wickets: 1,
          },
          {
            name: "Ganesh Ghode",
            overs: 1,
            runs: 12,
            wickets: 1,
          },
        ],
      },

      secondInnings: {
        team: "Sadguru Lions",
        score: "67/4",
        overs: "5.0",

        batting: [
          {
            name: "Tillu Mujawar",
            runs: 58,
            balls: 20,
            fours: 4,
            sixes: 6,
          },
          {
            name: "Ganesh Ghode",
            runs: 4,
            balls: 3,
            fours: 0,
            sixes: 0,
          },
          {
            name: "Balasaheb Shinde",
            runs: 2,
            balls: 2,
            fours: 0,
            sixes: 0,
          },
        ],

        bowling: [
          {
            name: "Siddharth Ubale",
            overs: 1,
            runs: 10,
            wickets: 1,
          },
          {
            name: "Ramling Khandare",
            overs: 1,
            runs: 12,
            wickets: 1,
          },
          {
            name: "Omkar Karande",
            overs: 1,
            runs: 8,
            wickets: 1,
          },
        ],
      },
    },

    result: {
      winner: "Samrat Yoddha",
      winBy: "7 Runs",
      playerOfTheMatch: "Tillu Mujawar",
      summary:
        "Samrat Yoddha defeated Sadguru Lions by 7 runs. Tillu Mujawar was awarded Player of the Match for his explosive 58 runs off 20 balls and 1 wicket.",
    },
  },
];

export default matchesData;
