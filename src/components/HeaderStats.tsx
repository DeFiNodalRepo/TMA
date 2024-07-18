import { useContext } from "react"
import { AppContext, SyncDataContext } from "../state-management/context"
import { useSyncData } from "../react-query/useSyncData";
import Loader from "./Loader";

const stats = [
  { name: 'Harvesting Rate', stat: '71,897', fontColor: 'text-amber-500' },
  { name: 'Total Coins', stat: '58,700,034', fontColor: 'text-sky-500' },

]

function HeaderStats() {

  const apiToken = useContext(AppContext);

  const token = apiToken?.body

  const {data, isLoading, isError} = useSyncData(token, '')

  if(isLoading){
    return <Loader />
  }

  if (isError){
    <Loader />
  }

  const userHeaderParsed = JSON.parse(data?.Body)

  // const userRawHeader = useContext(SyncDataContext)

  // const userHeaderParsed = JSON.parse(userRawHeader?.Body)

  return (
    <div className="w-full">
      <dl className="grid grid-cols-2 gap-2 px-4">
        <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-900 px-2 py-3 shadow">
          <dt className={`text-md truncate text-center font-medium text-amber-500`}>Harvesting Rate</dt>
          <dd className="mt-1 text-center text-base font-semibold tracking-tight text-gray-300">{userHeaderParsed.ratePerHour}</dd>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-900 px-2 py-3 shadow">
          <dt className={`text-md truncate text-center font-medium text-sky-500`}>Total Coins</dt>
          <dd className="mt-1 text-center text-base font-semibold tracking-tight text-gray-300">{userHeaderParsed.balance}</dd>
        </div>
      </dl>
    </div>
  )
}

export default HeaderStats

