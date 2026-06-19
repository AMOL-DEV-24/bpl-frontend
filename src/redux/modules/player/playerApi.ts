import { baseApi } from "../../api/baseApi";
import { PlayersApiResponse, PlayerRole } from "@/types/players/player.types";


export interface GetPlayersParams {
  page?: number;
  limit?: number;
  role?: PlayerRole | "ALL";
}

export const playerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getPlayers: builder.query<PlayersApiResponse, GetPlayersParams>({
      query: ({ page = 1, limit = 50, role }) => {
        const params: Record<string, string | number> = { page, limit };

        if (role && role !== "ALL") {
          params.role = role;
        }

        return {
          url: "/player/all",   // ← was "/players"
          params,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: "Player" as const,
                id: _id,
              })),
              { type: "Player", id: "LIST" },
            ]
          : [{ type: "Player", id: "LIST" }],
    }),

  }),
});

export const { useGetPlayersQuery } = playerApi;