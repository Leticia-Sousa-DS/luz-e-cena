import { useEffect, useState } from "react";
import { getCities} from "../api";
import type { City} from "../types";

const useFetchCities = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCities = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const cities = await getCities();
            setCities(cities);
        } catch (error) {
            setError("Erro ao buscar cidades. Tente novamente!")
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCities();
    }, []);

    return { cities, isLoading, error };
}

export default useFetchCities;