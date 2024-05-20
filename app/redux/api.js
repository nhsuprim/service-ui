// api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.pujakaitem.com/api/" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products",
        }),
        getSingleProducts: builder.query({
            query: (id) => `products/${id}`,
        }),
    }),
});

export const userApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => "userdetails",
        }),
        // getSingleProducts: builder.query({
        //     query: (id) => `products/${id}`,
        // }),
    }),
});

export const { useGetProductsQuery, useGetSingleProductsQuery } = productApi;
export const { useGetUserDetailsQuery } = userApi;
