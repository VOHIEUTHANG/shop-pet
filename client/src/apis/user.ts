import { baseApi } from "./index";

const basePathUser = "users";

export const register = async (user: {
    email: string;
    username: string;
    password?: string;
    typeLogin: string;
    fullName: string;
}) => {
    return baseApi({
        method: "POST",
        body: user,
        path: `${basePathUser}/register`,
    });
};

export const login = async (user: {
    email?: string;
    username?: string;
    password?: string;
    typeLogin: string;
    fullName?: string;
}) => {
    return baseApi({
        method: "POST",
        body: user,
        path: `${basePathUser}/login`,
    });
};
