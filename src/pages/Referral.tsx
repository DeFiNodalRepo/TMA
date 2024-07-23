import DefaultLayout from '../layout/DefaultLayout'
import { FaEnvelopeOpen } from "react-icons/fa";

function Referrals() {
  return (
    <DefaultLayout >
      <div className='text-white'>Referrals</div>
      <div className="flex flex-wrap items-center justify-center gap-5">

        <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-xl font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">

          Invite Link
          <FaEnvelopeOpen size={20} className='ml-2'/>
        </button>     
      </div>
    </DefaultLayout>
  )
}

export default Referrals