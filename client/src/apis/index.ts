import axios, { AxiosRequestConfig } from "axios";

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
