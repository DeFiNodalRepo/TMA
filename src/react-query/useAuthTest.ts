import { useQuery } from "@tanstack/react-query";
import { getAuth } from "../api/apiCalls";


  

export function useAuth(){

  const {data, isError, isLoading} = useQuery({
    queryKey: ['auth'],
    queryFn: getAuth,
    staleTime: 50 * 60 * 1000,
    refetchOnMount: false
  })
  return {data, isError, isLoading}
}