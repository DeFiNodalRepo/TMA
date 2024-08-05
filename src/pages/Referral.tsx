import { useContext } from 'react';
import DefaultLayout from '../layout/DefaultLayout'
import { FaEnvelopeOpen } from "react-icons/fa";
import { AppContext } from '../state-management/context';
import { useSyncData } from '../react-query/useSyncData';
import Loader from '../components/Loader';
import { initInitData, initUtils  } from '@telegram-apps/sdk';

function Referrals() {

  const authData = useContext(AppContext)
  const token = authData?.body

  const {data, isError, isLoading} = useSyncData(token)

  
  const initialData = initInitData();
  const utils = initUtils()

  const inviteLink = `https://t.me/DeFiNodal_bot/definodal_miniapp/start?startapp=${initialData?.user?.id}`

  // https://t.me/DeFiNodal_bot/definodal_miniapp/start?startapp=3A6915997019

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

  const handleCopyInviteLink = () => {
    utils.shareURL(inviteLink)
  }

  return (
    <DefaultLayout >
      <div>Referrals</div>
      <div className="flex items-center justify-center space-x-6">
        <button type="button" className="text-md inline-flex items-center gap-1.5 rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300" onClick={handleCopyInviteLink}>
          Share Link
          <FaEnvelopeOpen size={20} className='ml-2'/>
        </button>     
          <button type="button" className="text-md inline-flex items-center gap-1.5 rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300" onClick={handleCopyInviteLink}>
          Copy Link
          <FaEnvelopeOpen size={20} className='ml-2'/>
        </button>  
      </div>
    </DefaultLayout>
  )
}

export default Referrals

