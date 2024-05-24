import { getLocalStorageItem } from "../../utils/storageService";
import { baseApi } from "../api/baseApi";

const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Get all notifications
    allNotifications: builder.query({
      query: (earningFilters) => ({
        url: `notifications?page=${earningFilters.page}&limit=${earningFilters.limit}`,
        method: "GET",
        headers: {
          "Authorization": `Bearer ${getLocalStorageItem("token")}`,
        },
      }),
    })
  }),
});

export const { useAllNotificationsQuery } = notificationApi;
