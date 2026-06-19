/* =========================================================
   VIEW SQUAD - MOCK DATA
   ---------------------------------------------------------
   Purpose : Temporary squad data until API integration.

   Future API:
   GET /api/teams/:id/squad

   Team:
   Linge Super Kings

   Owner:
   Suyesh Linge
========================================================= */

import { TeamSquad } from "../../types/teams/viewSquad.types";

export const squads: TeamSquad[] = [
  {
    teamId: 1,

    teamName: "Linge Super Kings",

    teamImage: "/assets/images/teams/Linge Super Kings 1.png",

    captain: "Vaibhav Waghmare",

    owner: "Suyesh Linge",

    achievement: "BPL Season 1 - 3rd Place",

    players: [
      /* ===================================================
         BATTERS
      ==================================================== */
      {
        id: 1,
        name: "Vaibhav Kamble",
        role: "Batter",
      },

      /* ===================================================
         WK BATTERS
      ==================================================== */
      {
        id: 2,
        name: "Ganesh Dambal",
        role: "WK-Batter",
      },

      /* ===================================================
         ALL ROUNDERS
      ==================================================== */
      {
        id: 3,
        name: "Vaibhav Waghmare",
        role: "All-Rounder",
        isCaptain: true,
      },
      {
        id: 4,
        name: "Amol Pawar",
        role: "All-Rounder",
      },

      {
        id: 5,
        name: "Shravan Mhetre",
        role: "All-Rounder",
      },
      {
        id: 6,
        name: "Shamim Shikalakar",
        role: "All-Rounder",
      },

      /* ===================================================
         BOWLERS
      ==================================================== */
      {
        id: 7,
        name: "Somnath Lokhande",
        role: "Bowler",
      },
      {
        id: 8,
        name: "Kiran Shinde",
        role: "Bowler",
      },
      {
        id: 9,
        name: "Vikas Dambal",
        role: "Bowler",
      },
      {
        id: 10,
        name: "Akshay Kamble",
        role: "Bowler",
      },
      {
        id: 11,
        name: "Nitin Lokhande",
        role: "Bowler",
      },

      {
        id: 12,
        name: "Om Shinde",
        role: "Bowler",
      },
    ],
  },
  {
    teamId: 2,

    teamName: "Dayavan 11",

    teamImage: "/assets/images/teams/Dayavan 11 - 1.png",

    captain: "Dada Inamdar",

    owner: "Ranjit Kamble",

    achievement: "BPL Season 1 - 2nd Place",

    players: [
      /* ===================================================
       BATTERS
    ==================================================== */
      {
        id: 1,
        name: "Dada Inamdar",
        role: "Batter",
        isCaptain: true,
      },

      {
        id: 2,
        name: "Ajay Kuchekar",
        role: "Batter",
      },

      {
        id: 3,
        name: "Sonu Shinde",
        role: "Batter",
      },

      {
        id: 4,
        name: "Satish Patil",
        role: "Batter",
      },

      /* ===================================================
       WK BATTER
    ==================================================== */
      {
        id: 5,
        name: "Sahil Shekh",
        role: "WK-Batter",
      },

      /* ===================================================
       ALL ROUNDERS
    ==================================================== */
      {
        id: 6,
        name: "Amit Bhosale",
        role: "All-Rounder",
      },

      {
        id: 7,
        name: "Atharva Shinde",
        role: "All-Rounder",
      },

      {
        id: 8,
        name: "Ravi Gavali",
        role: "All-Rounder",
      },

      /* ===================================================
       BOWLERS
    ==================================================== */
      {
        id: 9,
        name: "Vijay Maruti Shinde",
        role: "Bowler",
      },

      {
        id: 10,
        name: "Avinash Patole",
        role: "Bowler",
      },

      {
        id: 11,
        name: "Atul Kapadkar",
        role: "Bowler",
      },

      {
        id: 12,
        name: "Rohan Lokhande",
        role: "Bowler",
      },
    ],
  },

  {
    teamId: 3,

    teamName: "Gajanan Riders",

    teamImage: "/assets/images/teams/Gajanan Riders 2.png",

    captain: "Arjun Mane",

    owner: "Mahadev Kudale",

    achievement: "BPL Season 1 Participant",

    players: [
      /* ===================================================
       BATTERS
    ==================================================== */
      {
        id: 1,
        name: "Mahadev Kudale",
        role: "Batter",
      },

      {
        id: 2,
        name: "Arjun Mane",
        role: "Batter",
        isCaptain: true,
      },

      {
        id: 3,
        name: "Balaji Khandare",
        role: "Batter",
      },

      {
        id: 4,
        name: "Atul Lokhande",
        role: "Batter",
      },

      /* ===================================================
       WK BATTER
    ==================================================== */
      {
        id: 5,
        name: "Vishal Lokhande",
        role: "WK-Batter",
      },

      /* ===================================================
       ALL ROUNDERS
    ==================================================== */
      {
        id: 6,
        name: "Dildar Bhosale",
        role: "All-Rounder",
      },

      {
        id: 7,
        name: "Kailas Vedpathak",
        role: "All-Rounder",
      },

      {
        id: 8,
        name: "Ranjit Lokhande",
        role: "All-Rounder",
      },

      {
        id: 9,
        name: "Gurudutt Kamble",
        role: "All-Rounder",
      },

      /* ===================================================
       BOWLERS
    ==================================================== */
      {
        id: 10,
        name: "Vilas Lale",
        role: "Bowler",
      },

      {
        id: 11,
        name: "Rajdeep Gayakwad",
        role: "Bowler",
      },

      {
        id: 12,
        name: "Amir Patel",
        role: "Bowler",
      },

      {
        id: 13,
        name: "Yash Nirgoli",
        role: "Bowler",
      },
    ],
  },

  {
    teamId: 4,

    teamName: "Irfan Fighters",

    teamImage: "/assets/images/teams/Irfan Fighters 2.png",

    captain: "Bapu Jadhav",

    owner: "Shabbir Mujawar",

    achievement: "BPL Season 1 Participant",

    players: [
      /* ===================================================
       BATTERS
    ==================================================== */
      {
        id: 1,
        name: "Bapu Jadhav",
        role: "Batter",
        isCaptain: true,
      },

      {
        id: 2,
        name: "Rajendra Lale",
        role: "Batter",
      },

      {
        id: 3,
        name: "Chikya Lokhande",
        role: "Batter",
      },

      {
        id: 4,
        name: "Aryan Bhandare",
        role: "Batter",
      },

      /* ===================================================
       ALL ROUNDERS
    ==================================================== */
      {
        id: 5,
        name: "Atul Gunjal",
        role: "All-Rounder",
      },

      {
        id: 6,
        name: "Saurabh Bhosale",
        role: "All-Rounder",
      },

      {
        id: 7,
        name: "Sushant Dhabale",
        role: "All-Rounder",
      },

      {
        id: 8,
        name: "Nilesh Shinde",
        role: "All-Rounder",
      },

      /* ===================================================
       BOWLERS
    ==================================================== */
      {
        id: 9,
        name: "Shreyas Kuchekar",
        role: "Bowler",
      },

      {
        id: 10,
        name: "Pratik Shinde",
        role: "Bowler",
      },

      {
        id: 11,
        name: "Chaitanya Lokhande",
        role: "Bowler",
      },

      {
        id: 12,
        name: "Dhaval Ingole",
        role: "Bowler",
      },
    ],
  },
  {
    teamId: 5,

    teamName: "Sadguru Lions",

    teamImage: "/assets/images/teams/Sadguru Lions.png",

    captain: "Aamir Mujawar",

    owner: "Shivanand Vibhute",

    achievement: "BPL 2026 Participant",

    players: [
      /* ===================================================
       BATTERS
    ==================================================== */
      {
        id: 1,
        name: "Aamir Mujawar",
        role: "Batter",
        isCaptain: true,
      },

      {
        id: 2,
        name: "Ganesh Gidde",
        role: "Batter",
      },

      {
        id: 3,
        name: "Balaji Shinde",
        role: "Batter",
      },

      /* ===================================================
       ALL ROUNDERS
    ==================================================== */
      {
        id: 4,
        name: "Anand Chavan",
        role: "All-Rounder",
      },

      {
        id: 5,
        name: "Namdev Lale",
        role: "All-Rounder",
      },

      {
        id: 6,
        name: "Ajay Kendale",
        role: "All-Rounder",
      },

      {
        id: 7,
        name: "Prem Dhabale",
        role: "All-Rounder",
      },

      {
        id: 8,
        name: "Navnath Shinde",
        role: "All-Rounder",
      },

      /* ===================================================
       BOWLERS
    ==================================================== */
      {
        id: 9,
        name: "Nagesh Shinde",
        role: "Bowler",
      },
      {
        id: 10,
        name: "Atharva Lokhande",
        role: "Bowler",
      },

      {
        id: 11,
        name: "Nitin Gawali",
        role: "Bowler",
      },

      {
        id: 12,
        name: "Sagar Mane",
        role: "Bowler",
      },

      {
        id: 13,
        name: "Lakhan Sathe",
        role: "Bowler",
      },
    ],
  },
  {
    teamId: 6,

    teamName: "Samrat Yodha",

    teamImage: "/assets/images/teams/Samrat Yodha 1.png",

    captain: "Pradeep Bhosale",

    owner: "Boss",

    achievement: "BPL Season 1 Participant",

    players: [
      /* ===================================================
       BATTERS
    ==================================================== */
      {
        id: 1,
        name: "Pradeep Bhosale",
        role: "Batter",
        isCaptain: true,
      },

      {
        id: 2,
        name: "Ramling Khandare",
        role: "Batter",
      },

      {
        id: 3,
        name: "Onkar Karande",
        role: "Batter",
      },

      {
        id: 4,
        name: "Raj Sayyad",
        role: "Batter",
      },

      {
        id: 5,
        name: "Kaustubh Linge",
        role: "Batter",
      },

      /* ===================================================
       ALL ROUNDERS
    ==================================================== */
      {
        id: 6,
        name: "Chaitanya Lokhande",
        role: "All-Rounder",
      },

      {
        id: 7,
        name: "Siddharth Dhabale",
        role: "All-Rounder",
      },

      {
        id: 8,
        name: "Kuldeep Jadhav",
        role: "All-Rounder",
      },

      {
        id: 9,
        name: "Bandu Pawar",
        role: "All-Rounder",
      },

      {
        id: 10,
        name: "Shubham Lokhande",
        role: "All-Rounder",
      },

      /* ===================================================
       BOWLERS
    ==================================================== */
      {
        id: 11,
        name: "Shivtej Ingole",
        role: "Bowler",
      },

      {
        id: 12,
        name: "Monu Shinde Akshay",
        role: "Bowler",
      },

      {
        id: 13,
        name: "Sanket Bodhe",
        role: "Bowler",
      },

      {
        id: 14,
        name: "Ayush Mhetre",
        role: "Bowler",
      },
    ],
  },

  {
    teamId: 7,

    teamName: "Mahalaxmi Warriors",

    teamImage: "/assets/images/teams/Mahalaxmi Warriors.png",

    captain: "Samadhan Gawali",

    owner: "Nagesh Gawali",

    achievement: "BPL Season 1 Participant",

    players: [
      /* ===================================================
       BATTERS
    ==================================================== */
      {
        id: 1,
        name: "Samadhan Gawali",
        role: "Batter",
        isCaptain: true,
      },

      {
        id: 2,
        name: "Ashok Lale",
        role: "Batter",
      },

      {
        id: 3,
        name: "Somnath Kapase",
        role: "Batter",
      },

      {
        id: 4,
        name: "Vaibhav Shinde",
        role: "Batter",
      },

      /* ===================================================
       ALL ROUNDERS
    ==================================================== */
      {
        id: 5,
        name: "Ashfaq Inamdar",
        role: "All-Rounder",
      },

      {
        id: 6,
        name: "Vijay Kendale",
        role: "All-Rounder",
      },

      {
        id: 7,
        name: "Raju Vibhute",
        role: "All-Rounder",
      },

      {
        id: 8,
        name: "Noor Inamdar",
        role: "All-Rounder",
      },

      /* ===================================================
       BOWLERS
    ==================================================== */
      {
        id: 9,
        name: "Gaurav Shinde",
        role: "Bowler",
      },

      {
        id: 10,
        name: "Yash Mane",
        role: "Bowler",
      },

      {
        id: 11,
        name: "Sarthak Shinde",
        role: "Bowler",
      },

      {
        id: 12,
        name: "Jakir Patel",
        role: "Bowler",
      },
    ],
  },
];
