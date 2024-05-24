import { getLocalStorageItem } from "../../utils/storageService";
import { baseApi } from "../api/baseApi";

const settingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //create privacy policy
    createPrivacyPolicy: builder.mutation({
      query: (privacyData) => ({
        url: "privacyPolicies",
        method: "POST",
        data: privacyData,
        headers:{
          "Content-Type": "application/json", // "Content-Type": "application/json" or "multipart/form-data"
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        }
      }),
      invalidatesTags: ["privacyPolicies"]
    }),
    //Get privacy policy
    getPrivacyPolicy: builder.query({
      query: () => ({
        url: "privacyPolicies",
        method: "GET"
      }),
      providesTags: ["privacyPolicies"]
    }),
    //create terms and conditions
    createTermsAndConditions: builder.mutation({
      query: (termsAndConditionsData) => ({
        url: "termsAndConditions",
        method: "POST",
        data: termsAndConditionsData,
        headers:{
          "Content-Type": "application/json", // "Content-Type": "application/json" or "multipart/form-data"
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        }
      }),
      invalidatesTags: ["termsAndConditions"]
    }),
    //Get privacy policy
    getTermsAndConditions: builder.query({
      query: () => ({
        url: "termsAndConditions",
        method: "GET"
      }),
      providesTags: ["termsAndConditions"]
    }),
  }),
});

export const { useCreatePrivacyPolicyMutation, useGetPrivacyPolicyQuery, useCreateTermsAndConditionsMutation, useGetTermsAndConditionsQuery } = settingApi;
