import { useQuery } from "@tanstack/react-query";
import { getAuth } from "../api/apiCalls";


  

export function useAuth(initSessionData: string) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['auth', initSessionData],
    queryFn: () => getAuth(initSessionData),
    staleTime: 50 * 60 * 1000,
    refetchOnMount: false
  });
  return { data, isError, isLoading };
}