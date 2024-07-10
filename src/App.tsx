import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Vaults from "./pages/Vaults";
import Referrals from "./pages/Referral";
import Missions from "./pages/Missions";
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from '../src/react-query/queryClient'

function App() {

  const tgData = window.Telegram.WebApp

  const initSessionData = tgData.initData

  const [loading, setLoading] = useState<boolean>(true);

  // const isFetching = useIsFetching()

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            index
            element={<Dashboard initSessionData={initSessionData}/>}
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
  );
}

export default App
