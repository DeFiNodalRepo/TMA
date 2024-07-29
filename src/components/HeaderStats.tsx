import { useContext, useEffect, useRef, useState } from "react"
import { AppContext, useContextSyncData } from "../state-management/context"
import { useSyncData } from "../react-query/useSyncData";
import Loader from "./Loader";
import { NumberFormating } from "../utils/numberFormating";

function HeaderStats() {
  const apiToken = useContext(AppContext);
  const token = apiToken?.body
  const {data, isLoading, isError} = useSyncData(token, '')
  const {syncData} = useContextSyncData()
  const [displayBalance, setDisplayBalance] = useState(0);
  const realBalanceRef = useRef(0);
  const lastUpdateTime = useRef(Date.now());

  useEffect(() => {
    if (data) {
      const parsedData = JSON.parse(data.Body);
      setDisplayBalance(parsedData.balance);
      realBalanceRef.current = parsedData.balance;
    }
  }, [data]);

  useEffect(() => {
    if (syncData) {
      const parsedSyncData = JSON.parse(syncData.Body);
      setDisplayBalance(parsedSyncData.balance);
      realBalanceRef.current = parsedSyncData.balance;
      lastUpdateTime.current = Date.now();
    }
  }, [syncData]);

  const userHeaderParsed = syncData ? JSON.parse(syncData.Body) : (data ? JSON.parse(data.Body) : null);

  useEffect(() => {
    if (!userHeaderParsed) return;

    const intervalId = setInterval(() => {
      const now = Date.now();
      const elapsedHours = (now - lastUpdateTime.current) / 3600000; // Convert ms to hours
      const increment = userHeaderParsed.ratePerHour * elapsedHours;
      
      setDisplayBalance(prevBalance => prevBalance + increment);
    }, 1000); 

    return () => clearInterval(intervalId);
  }, [userHeaderParsed]);

  if (isLoading || isError) {
    return <Loader />;
  }

  if (!userHeaderParsed) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      <dl className="grid grid-cols-2 gap-2 px-4">
        <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-900 px-2 py-3 shadow">
          <dt className={`text-md truncate text-center font-medium text-amber-500`}>Harvesting Rate</dt>
          <dd className="mt-1 text-center text-base font-semibold tracking-tight text-gray-300">{userHeaderParsed.ratePerHour}</dd>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-900 px-2 py-3 shadow">
          <dt className={`text-md truncate text-center font-medium text-sky-500`}>Total Coins</dt>
          <dd className="mt-1 text-center text-base font-semibold tracking-tight text-gray-300">{NumberFormating(displayBalance)}</dd>
        </div>
      </dl>
    </div>
  )
}
export default HeaderStats

