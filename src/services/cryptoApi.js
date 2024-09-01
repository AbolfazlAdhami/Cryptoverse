import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_url = "https://coinranking1.p.rapidapi.com";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.CRYPTO_API_KEY,
  // "X-RapidAPI-Key": process.env.CRYPTO_API_KEY,
  "X-RapidAPI-Host": process.env.Cyrpto_Api_Host,
  // "X-RapidAPI-Host": process.env.Cyrpto_Api_Host,
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    //
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest("/exchange/-zdvbieRdZ/coins"),
    }),
    getGloblaState: builder.query({
      query: () => createRequest("/stats"),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery, useGetGloblaStateQuery } = cryptoApi;
