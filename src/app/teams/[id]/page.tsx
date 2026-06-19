import { notFound } from "next/navigation";

import ViewSquad from "@/features/teams/components/ViewSquad/index.viewSquad";
import { squadsData } from "@/data/teams/viewSquad/squadMockData";

export default async function TeamSquadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const squad = squadsData.find(
    (team) => team.teamId === Number(id)
  );

  if (!squad) {
    notFound();
  }

  return <ViewSquad squad={squad} />;
}