import { baseApi } from "./index";
import { apiSlice } from "./index";

const basePathUser = "users";

export type IUser = {
    email?: string;
    username?: string;
    password?: string;
    typeLogin?: string;
    fullName?: string;
};

export const register = async (user: IUser) => {
    return baseApi({
        method: "POST",
        body: user,
        path: `${basePathUser}/register`,
    });
};

export const login = async (user: IUser) => {
    return baseApi({
        method: "POST",
        body: user,
        path: `${basePathUser}/login`,
    });
};

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "users/login",
                method: "POST",
                body: { ...credentials },
            }),
        }),
    }),
});

export const { useLoginMutation } = authApiSlice;
