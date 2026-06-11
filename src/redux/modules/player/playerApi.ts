import { baseApi } from "../../api/baseApi";

export interface RegisterPlayerRequest {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  village: string;
  age: number;
  jerseyNumber: number;
  role: string;
  battingStyle: string;
  bowlingStyle: string;
  experience: number;
  stats: {
    matches: number;
    runs: number;
    wickets: number;
    strikeRate: number;
    economy: number;
    catches: number;
  };
  imageUrl: string;
  orderId: string;
  about: string;
}

export const playerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    registerPlayer: builder.mutation<void, RegisterPlayerRequest>({
      query: (body) => ({
        url: "/player/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Player"],
    }),

  }),
});

export const { useRegisterPlayerMutation } = playerApi;