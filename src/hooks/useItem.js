import { useState, useEffect, useCallback } from "react";

const useItem = id => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchItemInfo = useCallback(async () => {
        try {
            const response = await fetch(`https://api.restful-api.dev/objects/${id}`);
            const data = await response.json();
            setItem(data);
            setError(null);
        } catch (responseError) {
            console.error(responseError);
            setError("Item isn't found!");
        }
    }, [id]);

    useEffect(async () => {
        setIsLoading(true);
        await fetchItemInfo();
        setIsLoading(false);
    }, [fetchItemInfo, setIsLoading]);

    return {
        isLoading,
        error,
        item
    };
};

export default useItem;
