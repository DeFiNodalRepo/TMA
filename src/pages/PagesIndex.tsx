import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Vaults from "./Vaults";
import Referrals from "./Referral";
import Missions from "./Missions";
import { useSyncData } from "../react-query/useSyncData";
import { AppContext } from "../state-management/context";
import { useContext } from "react";
import Loader from "../components/Loader";

function PagesIndex() {

  const apiToken = useContext(AppContext);

  const token = apiToken?.body

  const {data, isLoading, isError} = useSyncData(token, '')

  if(isLoading){
    return <Loader />
  }

  if (isError){
    <Loader />
  }

  console.log("datadatadatadatadatadatadatadatadatadatadatadatadatadata",data)

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