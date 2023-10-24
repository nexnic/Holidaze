import { useEffect, useState } from "react";

export function ApiRequeset() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function apiRequset() {
            try {
                setIsLoading(true);
                setIsError(false);
                const fetcheData = await fetch('https://api.noroff.dev/api/v1/holidaze/venues');
                const json = await fetcheData.json();
                setData(json);
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        apiRequset();
    }, []);
    return { data, isLoading, isError };
}
