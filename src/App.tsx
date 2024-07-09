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

"user=%7B%22id%22%3A6915997019%2C%22first_name%22%3A%22LePezoun%22%2C%22last_name%22%3A%22%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=447728990447128365&chat_type=private&auth_date=1720541535&hash=5232c3496c02e894d81368bf23565bcf1e2a7d2ef4c3f5a42a2b4e761a909113"


console.log(tgData.initData)

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
  );
}

export default App
