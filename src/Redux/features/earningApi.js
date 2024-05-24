import { getLocalStorageItem } from "../../utils/storageService";
import { baseApi } from "../api/baseApi";

const earningApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Get all earnings
    allEarnings: builder.query({
      query: (earningFilters) => ({
        url: `payments?page=${earningFilters.page}&limit=${earningFilters.limit}`,
        method: "GET",
        headers: {
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        },
      }),
    }),
    //Get earning chart
    earningChart: builder.query({
      query: (year) => ({
        url: `payments/charts?year=${year}`,
        method: "GET",
        headers: {
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        },
      }),
    }),
    //Get total Users and Eearnings
    totalCounts: builder.query({
      query: () => ({
        url: `dashboards/admin-dashboard`,
        method: "GET",
        headers: {
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        },
      }),
    }),
  }),
});

export const { useAllEarningsQuery, useEarningChartQuery, useTotalCountsQuery } = earningApi;
