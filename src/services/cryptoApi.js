import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const React_Crypto_Api_Key = "5365562dc8msh06f2cc3162c0280p1fdfe0jsn6f7d79da7344";
const React_Crypto_Api_Host = "coinranking1.p.rapidapi.com";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": React_Crypto_Api_Key,
  "X-RapidAPI-Host": React_Crypto_Api_Host,
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  endpoints: (builder) => ({}),
});
