import { notFound } from "next/navigation";

import ViewSquad from "@/features/teams/components/ViewSquad/index.viewSquad";
import { squads } from "@/data/teams/squadMockData";

export default async function TeamSquadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const squad = squads.find(
    (team) => team.teamId === Number(id)
  );

  if (!squad) {
    notFound();
  }

  return <ViewSquad squad={squad} />;
}