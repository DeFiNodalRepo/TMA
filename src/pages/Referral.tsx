import { useContext } from 'react';
import DefaultLayout from '../layout/DefaultLayout'
import { FaEnvelopeOpen } from "react-icons/fa";
import { AppContext } from '../state-management/context';
import { useSyncData } from '../react-query/useSyncData';
import Loader from '../components/Loader';

function Referrals() {

  const authData = useContext(AppContext)
  const token = authData?.body

  const {data, isError, isLoading} = useSyncData(token)

  if(isLoading){
    <DefaultLayout>
      <Loader />
    </DefaultLayout>
  }

  if(isError){
    <DefaultLayout>
      <Loader />
    </DefaultLayout>
  }

  const parsedDataBody = JSON.parse(data?.Body)
  console.log(parsedDataBody.invites)

  const handleCopyInviteLink = () => {
    console.log("handleCopyInviteLink")
  }

  return (
    <DefaultLayout >
      <div className='text-white'>Referrals</div>
      <div className="flex flex-wrap items-center justify-center gap-5">

        <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-xl font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300" onClick={handleCopyInviteLink}>

          Invite Link
          <FaEnvelopeOpen size={20} className='ml-2'/>
        </button>     
      </div>
    </DefaultLayout>
  )
}

export default Referrals

