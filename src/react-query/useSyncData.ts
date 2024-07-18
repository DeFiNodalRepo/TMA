import { useQuery } from "@tanstack/react-query";
import { getSyncData } from "../api/apiCalls";

export function useSyncData(apiToken, upgradeId){
    try {
      const { data, isError, isLoading, refetch } = useQuery({
        queryKey: ['sync'],
        queryFn: () => getSyncData(apiToken, upgradeId),
        staleTime:  10 * 60 * 1000,
        refetchOnMount: false,
        onError: (error) => {
          console.error("Failed to fetch sync data:", error);
        },
      });

      console.log("Fetched sync data:", data);  
      console.log("apiToken", apiToken)
      return { data, isError, isLoading, refetch };
    } catch (error) {
      console.error("Error in useSyncData hook:", error);
      return { data: null, isError: true, isLoading: false };
    }
  }