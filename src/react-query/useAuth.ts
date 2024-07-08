import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../api/constants";

async function getAuth() {
    try {
        const res = await fetch(`${baseUrl}sync`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch auth:", error);
        throw error; // Rethrow to handle in the calling function
    }
  }
  

export function useAuth(){

  const {data, isError, isLoading} = useQuery({
    queryKey: ['auth'],
    queryFn: getAuth,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  })
  return {data, isError, isLoading}
}