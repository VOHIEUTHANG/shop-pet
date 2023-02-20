import axios, { AxiosRequestConfig } from "axios";
import {
    createApi,
    fetchBaseQuery,
    BaseQueryApi,
    FetchArgs,
} from "@reduxjs/toolkit/query";
import { setCredentials, logOut } from "../auth/authSlice";

export const BASE_URL = "https://nestjs-api.up.railway.app/";

export const HTTP_STATUS_CODES = {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    GATEWAY_TIMEOUT: 504,
};

export const baseApi = async ({
    method = "GET",
    body = {},
    headers = {},
    path = "",
}) => {
    const axiosConfig: AxiosRequestConfig = {
        method,
        url: `${BASE_URL}${path}`,
        data: body,
        headers,
    };

    try {
        const { data: response } = await axios(axiosConfig);
        return response.data;
    } catch (error: any) {
        console.log("Error when call API: ", error);
        const data = error?.response?.data;
        return Promise.reject({
            statusCode: data.statusCode || 400,
            message: data?.message || "Sorry! Something went wrong",
        });
    }
};

export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
    prepareHeaders: (headers: Headers, { getState }) => {
        const getCustomState = getState as any;
        const token = getCustomState()?.auth?.token;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const baseQueryReAuth = async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions = {}
) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === HTTP_STATUS_CODES.FORBIDDEN) {
        console.log("Sending refresh token");
        const refreshResult = await baseQuery(
            "/refresh-token",
            api,
            extraOptions
        );
        if (refreshResult?.data) {
            const getCustomState = api.getState as any;
            const user = getCustomState()?.auth?.user;
            api.dispatch(setCredentials({ ...refreshResult?.data, user }));
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryReAuth,
    endpoints: () => ({}),
});