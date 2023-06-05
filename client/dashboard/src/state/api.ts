import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    GetKpisResponse,
    GetProductsResponse,
    GetTransactionsResponse,
} from "./types";

// Create the API
export const api = createApi({
    // Configure the base query using the fetchBaseQuery function
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    // Specify the reducer path where API data will be stored in the Redux store
    reducerPath: "main",
    // Define tag types for caching and invalidation
    tagTypes: ["Kpis", "Products", "Transactions"],
    // Define the API endpoints
    endpoints: (build) => ({
        // Endpoint for getting KPIs
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/", // The API endpoint URL
            providesTags: ["Kpis"], // Tags for caching and invalidation
        }),
        // Endpoint for getting products
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "product/products/", // The API endpoint URL
            providesTags: ["Products"], // Tags for caching and invalidation
        }),
        // Endpoint for getting transactions
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
            query: () => "transaction/transactions/", // The API endpoint URL
            providesTags: ["Transactions"], // Tags for caching and invalidation
        }),
    }),
});

// Export the API hooks for making queries
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
    api;
