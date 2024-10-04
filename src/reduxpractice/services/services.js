import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByNameAll: builder.query({
      query: () => `pokemon`,
    }),
    getPokemonByName: builder.query({
      query: () => `pokemon`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonByNameAllQuery } =
  pokemonApi;
