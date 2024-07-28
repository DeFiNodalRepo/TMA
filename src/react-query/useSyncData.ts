import { useQuery } from "@tanstack/react-query";
import { getSyncData } from "../api/apiCalls";

export function useSyncData(apiToken: string | undefined, upgradeId=''){
    try {
      const { data, isError, isLoading, refetch } = useQuery({
        queryKey: ['sync', apiToken, upgradeId],
        queryFn: () => getSyncData(apiToken, upgradeId),
        enabled: !!apiToken,
        // staleTime:  10 * 60 * 1000,
        refetchOnMount: false,
      });
      return { data, isError, isLoading, refetch };
    } catch (error) {
      console.error("Error in useSyncData hook:", error);
      return { data: null, isError: true, isLoading: false };
    }
  }