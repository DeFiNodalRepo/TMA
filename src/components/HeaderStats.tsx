import { useContext } from "react"
import { AppContext, useContextSyncData } from "../state-management/context"
import { useSyncData } from "../react-query/useSyncData";
import Loader from "./Loader";

function HeaderStats() {
  const apiToken = useContext(AppContext);
  const token = apiToken?.body
  const {data, isLoading, isError} = useSyncData(token, '')
  const {syncData} = useContextSyncData()

  let userHeaderParsed

  if (syncData){
      userHeaderParsed = JSON.parse(syncData.Body)
    } else {
      userHeaderParsed = JSON.parse(data?.Body)
  }

  if(isLoading){
    return <Loader />
  }

  if (isError){
    <Loader />
  }

  return (
    <div className="w-full">
      <dl className="grid grid-cols-2 gap-2 px-4">
        <div className="px-2 py-3 overflow-hidden bg-gray-900 border border-gray-700 rounded-lg shadow">
          <dt className={`text-md truncate text-center font-medium text-amber-500`}>Harvesting Rate</dt>
          <dd className="mt-1 text-base font-semibold tracking-tight text-center text-gray-300">{userHeaderParsed.ratePerHour}</dd>
        </div>
        <div className="px-2 py-3 overflow-hidden bg-gray-900 border border-gray-700 rounded-lg shadow">
          <dt className={`text-md truncate text-center font-medium text-sky-500`}>Total Coins</dt>
          <dd className="mt-1 text-base font-semibold tracking-tight text-center text-gray-300">{userHeaderParsed.balance}</dd>
        </div>
      </dl>
    </div>
  )
}

export default HeaderStats

