import { getLocalStorageItem } from "../../utils/storageService";
import { baseApi } from "../api/baseApi";

const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Create subscription
    createSubscription: builder.mutation({
      query: (subsData) => ({
        url: "subscriptions",
        method: "POST",
        data: subsData,
        headers:{
          "Content-Type": "application/json", // "Content-Type": "application/json" or "multipart/form-data"
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        }
      }),
      invalidatesTags: ["subscription"]
    }),
    //Update subscription
    updateSubscription: builder.mutation({
      query: (subsData) => ({
        url: `subscriptions/${subsData._id}`,
        method: "PUT",
        data: subsData,
        headers:{
          "Content-Type": "application/json", // "Content-Type": "application/json" or "multipart/form-data"
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        }
      }),
      invalidatesTags: ["subscription"]
    }),
    //Get subscriptions
    getSubscriptions: builder.query({
      query: (subsFilter) => ({
        url: `subscriptions?name=${subsFilter.name}&page=${subsFilter.page}&limit=${subsFilter.limit}`,
        method: "GET"
      }),
      providesTags: ["subscription"],
    }),
    //Delete subscription
    deleteSubscription: builder.mutation({
      query: (subsData) => ({
        url: `subscriptions/${subsData.id}`,
        method: "DELETE",
        headers:{
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        }
      }),
      invalidatesTags: ["subscription"]
    })
  }),
});

export const { useCreateSubscriptionMutation, useGetSubscriptionsQuery, useDeleteSubscriptionMutation, useUpdateSubscriptionMutation } = subscriptionApi;
