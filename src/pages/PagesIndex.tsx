import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Vaults from "./Vaults";
import Referrals from "./Referral";
import Missions from "./Missions";

function PagesIndex() {

  return (
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
  )
}

export default PagesIndex