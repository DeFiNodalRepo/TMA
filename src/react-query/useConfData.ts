import { useQuery } from "@tanstack/react-query";
import { getConfData } from "../api/apiCalls";


  

export function useConfData(){

  const {data, isError, isLoading} = useQuery({
    queryKey: ['conf'],
    queryFn: getConfData,
    staleTime: 50 * 60 * 1000,
    refetchOnMount: false
  })
  return {data, isError, isLoading}
}