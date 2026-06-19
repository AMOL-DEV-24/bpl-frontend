import MatchDetailsPage from "@/features/matches/matchDetails/index.matchDetails";

interface PageProps {
  params: Promise<{
    matchNo: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {
  const { matchNo } = await params;

  return (
    <MatchDetailsPage
      matchNo={Number(matchNo)}
    />
  );
}