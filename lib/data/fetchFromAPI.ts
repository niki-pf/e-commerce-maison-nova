export const fetchFromAPI = async (endpoint: string) => {
 const BASE_URL = "https://dummyjson.com/products";

    const res = await fetch(`${BASE_URL}${endpoint}`, {
            cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`An error occured: ${res.statusText}`);
    }

    return res.json()

};