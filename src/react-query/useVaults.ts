import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../api/constants";

async function getVaults(){
  const res = await fetch(`${baseUrl}/upgradesForBuy`)
  return res.json()
}

export function useVaults(){

  const fallbackData = []

  const {data = fallbackData} = useQuery({
    queryKey: ['vaults'],
    queryFn: getVaults,
    staleTime: 5 * 60 * 1000,
  })
  return data
}