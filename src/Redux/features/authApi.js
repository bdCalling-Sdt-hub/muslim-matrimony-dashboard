import { getLocalStorageItem } from "../../utils/storageService";
import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Login
    signIn: builder.mutation({
      query: (loginData) => ({
        url: "users/sign-in",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    //Forget password
    forgetPassword: builder.mutation({
      query: (forgetData) => ({
        url: `users/forget-password`,
        method: "POST",
        data: forgetData,
      }),
      invalidatesTags: ["user"]
    }),
    //Reset Password
    resetPassword: builder.mutation({
      query: (resetPasswordData) => ({
        url: `users/reset-password`,
        method: "POST",
        data: resetPasswordData.resetData,
        headers:{
          "Forget-password": `forget-password ${resetPasswordData.token}`
        }
      }),
      invalidatesTags: ["user"]
    }),
    // Change Password
    changePassword: builder.mutation({
      query: (changePassData) => ({
        url: `users/change-password`,
        method: "PATCH",
        data: changePassData,
        headers: {
          "Authorization": `Bearer ${getLocalStorageItem("token")}`
        }
      }),
      invalidatesTags: ["user"]
    }),
    // Update profile
    updateProfile: builder.mutation({
      query: (updateData) => ({
        url: "users",
        method: "PUT",
        data: updateData,
        headers: {
          "Authorization": `Bearer ${getLocalStorageItem("token")}`
        }
      }),
      invalidatesTags: ["user"]
    }),
  }),
});

export const { useSignInMutation, useForgetPasswordMutation, useResetPasswordMutation, useChangePasswordMutation, useUpdateProfileMutation } = authApi;
