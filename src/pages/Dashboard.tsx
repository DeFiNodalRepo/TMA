//Todo fix error return

import DashboardCryptoStats from "../components/DashboardCryptoStats"
import DefaultLayout from "../layout/DefaultLayout"
import News from "../components/News";
import { useNews } from "../react-query/useNews";
import Loader from "../components/Loader";

function Dashboard() {
  const {data: news, isError: newsError, isLoading: newsIsLoading} = useNews()

  if (newsError){
    return <Loader />
  }

  if (newsIsLoading){
    return <Loader />
  }

  return (
    <DefaultLayout>
      <News news={news}/>
      <DashboardCryptoStats />
    </DefaultLayout>
  )
}

export default Dashboard