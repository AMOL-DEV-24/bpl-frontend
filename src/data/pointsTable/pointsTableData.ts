interface pointTable {
  team: string;
  played: number;
  won: number;
  lost: number;
  tied: number;
  nr: number;
  points: number;
  nrr: string;
}

const pointsTableData: pointTable[] = [
  {
    team: "Sadguru Lions",
    played: 6,
    won: 4,
    lost: 2,
    tied: 0,
    nr: 0,
    points: 8,
    nrr: "+1.587",
  },
  {
    team: "Gajanan Riders",
    played: 6,
    won: 4,
    lost: 2,
    tied: 0,
    nr: 0,
    points: 8,
    nrr: "+1.528",
  },
  {
    team: "Dayavan 11",
    played: 6,
    won: 4,
    lost: 2,
    tied: 0,
    nr: 0,
    points: 8,
    nrr: "-1.333",
  },
  {
    team: "Mahalaxmi Warriors",
    played: 6,
    won: 3,
    lost: 3,
    tied: 0,
    nr: 0,
    points: 6,
    nrr: "+2.302",
  },
  {
    team: "Linge Super Kings",
    played: 6,
    won: 3,
    lost: 3,
    tied: 0,
    nr: 0,
    points: 6,
    nrr: "+0.712",
  },
  {
    team: "Samrat Yoddha",
    played: 6,
    won: 3,
    lost: 3,
    tied: 0,
    nr: 0,
    points: 6,
    nrr: "-0.805",
  },
  {
    team: "Irfan Fighters",
    played: 6,
    won: 0,
    lost: 6,
    tied: 0,
    nr: 0,
    points: 0,
    nrr: "-4.130",
  },
];

export default pointsTableData