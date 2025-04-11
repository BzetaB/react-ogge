import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginRequest, LoginResponse } from '../../schema/loginUser.schema';


const API = "http://localhost:8080/ogge-eupg-unfv/auth"

export const loginApi = createApi({
    reducerPath : "loginApi",
    baseQuery: fetchBaseQuery({baseUrl: API}),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest >({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials
            }),
        }),
    }),
});

export const { useLoginMutation } = loginApi