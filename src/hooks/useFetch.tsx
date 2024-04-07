import { useEffect, useState } from "react";

interface FetchResult {
    data: any[];
    isPending: boolean;
    isError: any;
}

export const useFetch = (url: string, page: number = 1, limit: number = 10): FetchResult => {
    const [data, setData] = useState<any[]>([]);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<any>(null);

    const fetchCall = async (url: string, page: number, limit: number) => {
        try {
            setIsPending(true);
            const skip = (page - 1) * limit;
            const req = await fetch(`${url}?limit=${limit}&skip=${skip}`);
            if (!req.ok) {
                throw new Error(`Failed to fetch data from ${url}. Status: ${req.status}`);
            }

            const res = await req.json();
            setData(res);
            setIsPending(false);
            setIsError(null);
        } catch (err) {
            setIsPending(false);
            setIsError(JSON.stringify(err));
        }
    };

    useEffect(() => {
        fetchCall(url, page, limit);
    }, [url, page, limit]);

    return {
        data,
        isPending,
        isError,
    };
};
