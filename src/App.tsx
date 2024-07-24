//Todo fix error UI - add the layout

import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { initInitData } from '@telegram-apps/sdk';
import { queryClient } from '../src/react-query/queryClient'
import { getAuth, getConfData, getInitData } from "./api/apiCalls";
import { AppContext, InitUserContext, SyncDataProvider } from "./state-management/context";

import PagesIndex from "./pages/PagesIndex";



function App() {
  const [apiToken, setApiToken] = useState()
  const [initUserData, setInitUserData] = useState()
  const [confData, setConfData] = useState()
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const tgData = window.Telegram.WebApp
  const initSessionData = tgData.initData

  const initialData = initInitData();

  console.log(initialData)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading state, use initSessionData for production
        setIsLoading(true);
  
        // Fetch API Token
        const apiTokenData = await getAuth('user=%7B%22id%22%3A6915997019%2C%22first_name%22%3A%22LePezoun%22%2C%22last_name%22%3A%22%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=447728990447128365&chat_type=private&auth_date=1720541535&hash=5232c3496c02e894d81368bf23565bcf1e2a7d2ef4c3f5a42a2b4e761a909113');
        
          setApiToken(apiTokenData);
          const token = await apiTokenData?.body
          console.log(token)
          const initData = await getInitData(token)
          setInitUserData(initData)
          console.log("initData", typeof initData)
          const conf = await getConfData();
          setConfData(conf);
        } catch (error) {
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
