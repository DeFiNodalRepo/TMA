import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Earn from "./pages/Missions";
import Vaults from "./pages/Vaults";
import Referrals from "./pages/Referral";
import Missions from "./pages/Missions";
function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return loading ? (
    <Loader />
  ) : (
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

  );
}

export default App
