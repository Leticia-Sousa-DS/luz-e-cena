import axios from "axios";
import type { City, Movie } from "../types";

const BASE_URL = "http://localhost:3001"

export const getMovies = async (): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(`${BASE_URL}/movies`);
    return response.data;
};

export const getCities = async (): Promise<City[]> => {
    const response = await axios.get<City[]>(`${BASE_URL}/cities`);
    return response.data;
}