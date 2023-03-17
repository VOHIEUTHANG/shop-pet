import { apiSlice } from "./index";

const basePathAnimal = "animals";

interface IPhoto {
    small: string;
    large: string;
    medium: string;
    full: string;
}
export interface IAnimal {
    _id: string;
    name: string;
    description: string;
    photos: IPhoto[];
    breeds: {
        primary: string;
    };
    gender: string;
    type: string;
    age: string;
    size: string;
}

export const animalApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getListAnimal: builder.query({
            query: (type: string) => {
                return `${basePathAnimal}?type=${type}`;
            },
        }),
        getAnimalById: builder.query({
            query: (id: string) => {
                return `${basePathAnimal}/${id}`;
            },
        }),
    }),
});

export const { useGetListAnimalQuery, useGetAnimalByIdQuery } = animalApiSlice;
