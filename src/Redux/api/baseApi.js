import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) => async ({ url, method, data, params, headers }) => {
  try {
    const result = await axios({
      url: baseUrl + url,
      method,
      data,
      params,
      headers
    })
    return { data: result.data }
  } catch (axiosError) {
    const err = axiosError
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    }
  }
}

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_BACKED_BASE_URL }),
  endpoints: () => ({}),
  tagTypes: ['user', 'subscription', 'allUsers', 'privacyPolicies', 'termsAndConditions'],
})

