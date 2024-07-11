import DashboardCryptoStats from "../components/DashboardCryptoStats"
import DefaultLayout from "../layout/DefaultLayout"
import { useAuth } from "../react-query/useAuth"


function Dashboard(initSessionData) {

  console.log(initSessionData)

const {data, isError, isLoading} = useAuth()
console.log(data, "Error", isError)



  return (
    <DefaultLayout >

      <DashboardCryptoStats />
    </DefaultLayout>
  )
}

export default Dashboard