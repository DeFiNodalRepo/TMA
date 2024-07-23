import { useQuery } from "@tanstack/react-query";
import { getSyncData } from "../api/apiCalls";

export function useSyncData(apiToken, upgradeId=''){
    try {
      const { data, isError, isLoading, refetch } = useQuery({
        queryKey: ['sync', apiToken, upgradeId],
        queryFn: () => getSyncData(apiToken, upgradeId),
        enabled: !!apiToken,
        // staleTime:  10 * 60 * 1000,
        // refetchOnMount: false,
        onError: (error) => {
          console.error("Failed to fetch sync data:", error);
        },
      });
      return { data, isError, isLoading, refetch };
    } catch (error) {
      console.error("Error in useSyncData hook:", error);
      return { data: null, isError: true, isLoading: false };
    }
  }