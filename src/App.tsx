//Todo fix error UI - add the layout

import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from '../src/react-query/queryClient'
import { getAuth, getConfData, getSyncData } from "./api/apiCalls";
import { AppContext, ConfDataContext, SyncDataContext } from "./state-management/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import Vaults from "../src/pages/Vaults";
import Referrals from "../src/pages/Referral";
import Missions from "../src/pages/Missions";

function App() {
  const [apiToken, setApiToken] = useState()
  const [syncData, setSyncData] = useState()
  const [confData, setConfData] = useState()
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const tgData = window.Telegram.WebApp
  const initSessionData = tgData.initData


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
  
        // After setting the API token, fetch sync data
        if (apiTokenData) {
          const syncData = await getSyncData(apiTokenData.body);
          setSyncData(syncData);
        }
  
        // Fetch configuration data
        const conf = await getConfData();
        setConfData(conf);
  
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.toString());
      } finally {
        // Reset loading state
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [initSessionData]);

  console.log("conf", confData);
  console.log("syncData", syncData)

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    // return <Loader />;
    return <div>Error: {error}</div>;
  }


  return loading ? (
    <Loader />
  ) : (
    <AppContext.Provider value={apiToken}>
      <ConfDataContext.Provider value={confData}>
        <SyncDataContext.Provider value={syncData}>
          <QueryClientProvider client={queryClient}>
            <Router>
            <Routes>
              <Route
                index
                element={<Dashboard />}
              />
              <Route
                path="/vaults"
                element={<Vaults />}
              />
              <Route
                path="/missions"
                element={<Missions />}
              />
              <Route
                path="/referrals"
                element={<Referrals />}
              />

            </Routes>
          </Router>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </SyncDataContext.Provider>
      </ConfDataContext.Provider>
    </AppContext.Provider>
  );
}

export default App
