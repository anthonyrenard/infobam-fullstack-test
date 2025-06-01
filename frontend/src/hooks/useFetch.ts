import { useState } from "react";


export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const post = async (payload: any): Promise<T | undefined> => {
        setIsFetching(true);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const responseData: T = await response.json();
            setData(responseData);
            return responseData;
        } catch (error) {
            setError(error as Error);
            throw error;
        } finally {
            setIsFetching(false);
        }
    };

    const get = async (): Promise<T | undefined> => {
        setIsFetching(true);
        try {
            const response = await fetch(url);
            const responseData: T = await response.json();
            setData(responseData);
            return responseData;
        } catch (error) {
            setError(error as Error);
            throw error;
        } finally {
            setIsFetching(false);
        }
    };

    return {
        data,
        isFetching,
        error,
        post,
        get,
    };
};
