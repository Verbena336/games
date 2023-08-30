import { commonApi } from './commonApi';

import { gamesResponse, gameResponse, gamesRequest } from './types/games';

export const gamesApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getGames: build.query<gamesResponse[], gamesRequest>({
      query: ({ platform, category, sort }) => ({
        url: `games?platform=${platform}${category && `&category=${category}`}&sort-by=${sort}`,
        method: 'GET',
      }),
    }),
    getGameById: build.query<gameResponse, string>({
      query: (id: string) => ({
        url: `game?id=${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetGameByIdQuery,
  useLazyGetGamesQuery,
  useLazyGetGameByIdQuery,
} = gamesApi;
