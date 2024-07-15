import { useQuery } from "@tanstack/react-query";
import { getSyncData } from "../api/apiCalls";

export function useSyncData(apiToken){
    try {
      const { data, isError, isLoading } = useQuery({
        queryKey: ['sync'],
        queryFn: () => getSyncData(apiToken),
        staleTime:  60 * 1000,
        // refetchOnMount: false,
        onError: (error) => {
          console.error("Failed to fetch sync data:", error);
        },
      });

      console.log("Fetched sync data:", data);  
      console.log("apiToken", apiToken)
      return { data, isError, isLoading };
    } catch (error) {
      console.error("Error in useSyncData hook:", error);
      return { data: null, isError: true, isLoading: false };
    }
  }