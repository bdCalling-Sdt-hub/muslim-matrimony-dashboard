import { getLocalStorageItem } from "../../utils/storageService";
import { baseApi } from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Get all users
    allUsers: builder.query({
      query: (userFilterData) => ({
        url: `users/user-list?page=${userFilterData.page}&limit=${userFilterData.limit}&role=${userFilterData.role}&gender=${userFilterData.gender}&isBlocked=${userFilterData.isBlocked}`,
        method: "GET",
        headers: {
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        },
      }),
      providesTags: ["allUsers"],
    }),
    //create a new user
    createUser: builder.mutation({
      query: (userData) => ({
        url: `users/add-user`,
        method: "POST",
        data: userData,
        headers:{
          "Content-Type": "multipart/form-data", // "Content-Type": "application/json" or "multipart/form-data"
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        }
      }),
      invalidatesTags: ["allUsers"],
    }),
    //delete a user
    deleteUser: builder.mutation({
      query: (userData) => ({
        url: `users/${userData._id}`,
        method: "DELETE",
        headers:{
          "Content-Type": "multipart/form-data", // "Content-Type": "application/json" or "multipart/form-data"
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        }
      }),
      invalidatesTags: ["allUsers"],
    }),
    //update a new user
    updateUser: builder.mutation({
      query: (userData) => ({
        url: `users/update/${userData._id}`,
        method: "PUT",
        data: userData,
        headers:{
          "Content-Type": "application/json", // "Content-Type": "application/json" or "multipart/form-data"
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        }
      }),
      invalidatesTags: ["allUsers"],
    }),
  }),
});

export const { useAllUsersQuery, useCreateUserMutation, useDeleteUserMutation, useUpdateUserMutation } = userApi;
