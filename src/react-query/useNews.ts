import { useQuery } from "@tanstack/react-query";
import { getNews } from "../api/apiCalls";

export function useNews(){

  const {data, isError, isLoading} = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
    staleTime: 100 * 60 * 1000,
    refetchOnMount: false
  })
  return {data, isError, isLoading}
}