import { useQuery } from "@tanstack/react-query";
import { getSyncData } from "../api/apiCalls";

export function useSyncData(){

  const {data, isError, isLoading} = useQuery({
    queryKey: ['sync'],
    queryFn: getSyncData,
    staleTime: 50 * 60 * 1000,
    refetchOnMount: false
  })
  return {data, isError, isLoading}
}