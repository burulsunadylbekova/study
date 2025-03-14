import {
    BaseQueryFn,
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_PRODUCT_ICONS}`,
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    return result;
};

export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryExtended,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ["study"],
    endpoints: () => ({}),
});
