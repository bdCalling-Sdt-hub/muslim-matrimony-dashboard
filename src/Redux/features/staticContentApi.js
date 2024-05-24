import { getLocalStorageItem } from "../../utils/storageService";
import { baseApi } from "../api/baseApi";

const staticContentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Get static contents
    getStaticContents: builder.query({
      query: () => ({
        url: `static-contents`,
        method: "GET"
      }),
      providesTags: ['staticContents']
    }),
    //Get static contents Details
    getStaticContentDetails: builder.query({
      query: (followerData) => ({
        url: `static-contents/details?screenName=${followerData.screenName}&pageName=${followerData.pageName}`,
        method: "GET",
      }),
      providesTags: ['staticContents']
    }),
    //Create static contents
    createStaticContents: builder.mutation({
      query: (formData) => ({
        url: "static-contents",
        method: "POST",
        data: formData,
        headers:{
          "Content-Type": "multipart/form-data", // "Content-Type": "application/json" or "multipart/form-data"
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        }
      }),
      invalidatesTags: ['staticContents']
    }),
  }),
});

export const { useGetStaticContentsQuery, useGetStaticContentDetailsQuery, useCreateStaticContentsMutation } = staticContentApi;
