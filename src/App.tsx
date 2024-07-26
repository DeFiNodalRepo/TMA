//Todo fix error UI - add the layout

import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from '../src/react-query/queryClient'
import { getAuth, getConfData, getInitData } from "./api/apiCalls";
import { AppContext, InitUserContext, SyncDataProvider } from "./state-management/context";
import PagesIndex from "./pages/PagesIndex";

function App() {
  const [apiToken, setApiToken] = useState()
  const [initUserData, setInitUserData] = useState()
  // @ts-ignore
  const [confData, setConfData] = useState()
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // @ts-ignore
  const tgData = window.Telegram.WebApp
  const initSessionData = tgData.initData

  // console.log("initSessionData", initSessionData)


  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading state, use initSessionData for production
        setIsLoading(true);
  
        // Fetch API Token
        const apiTokenData = await getAuth(initSessionData);
        
          setApiToken(apiTokenData);
          const token = await apiTokenData?.body
          console.log(token)
          const initData = await getInitData(token)
          setInitUserData(initData)
          console.log("initData", typeof initData)
          const conf = await getConfData();
          setConfData(conf);
        } catch (error: any) {
          console.error("Error fetching data:", error);
          setError(error.toString());
      } finally {
          setIsLoading(false);
      }
    };
  
    fetchData();
  }, [initSessionData]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return loading ? (
    <Loader />
  ) : (
    <AppContext.Provider value={apiToken}>
      <InitUserContext.Provider value={initUserData}>
        <SyncDataProvider>
          <QueryClientProvider client={queryClient}>
            <PagesIndex apiToken={apiToken}/>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </SyncDataProvider>
      </InitUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App
