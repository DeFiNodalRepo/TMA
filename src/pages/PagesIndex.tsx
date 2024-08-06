import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Vaults from "./Vaults";
import Referrals from "./Referral";
import Missions from "./Missions";
import { useSyncData } from "../react-query/useSyncData";
import Loader from "../components/Loader";

function PagesIndex({apiToken}: any) {

  const token = apiToken?.body

  const {isLoading, isError} = useSyncData(token, '')

  if(isLoading){
    return <Loader />
  }

  if (isError){
    <Loader />
  }

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
