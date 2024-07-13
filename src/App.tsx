//Todo fix error UI - add the layout

import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from '../src/react-query/queryClient'
import { getAuth, getConfData } from "./api/apiCalls";
import { AppContext, ConfDataContext } from "./state-management/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import Vaults from "../src/pages/Vaults";
import Referrals from "../src/pages/Referral";
import Missions from "../src/pages/Missions";


function App() {
  const [apiToken, setApiToken] = useState()
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
    const fetchInitialData = async () => {
      const data = await getAuth(initSessionData)
      setApiToken(data)
    }
    fetchInitialData()
  }, [initSessionData])

  useEffect(() => {
    const fetchConfData = async () => {
      try{
        setIsLoading(true)
        const conf = await getConfData()
        console.log(conf)
        setConfData(conf)} catch (error){
          setError(error.toString())
        } finally {
          setIsLoading(false)
        }

    }
    fetchConfData()
  }, [initSessionData])

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
      </ConfDataContext.Provider>
    </AppContext.Provider>
  );
}

export default App
