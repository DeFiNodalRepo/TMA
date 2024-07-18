import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AppContext } from '../state-management/context';
import { useSyncData } from '../react-query/useSyncData';


function CardPopUp({ isPopupOpen, img, name, description, currentLevel, price, earnings, id, profitPerHourDelta}) {

  const [open, setOpen] = useState(isPopupOpen || false)
  const [vaultId, setVaultId] = useState('')
  
  const apiToken = useContext(AppContext);

  const token = apiToken?.body

  const {data, isLoading, isError, refetch} = useSyncData(token, "ETHVault")

  console.log("data", data)
  const onInvestClick = (id) => {
    setOpen(false)
    // console.log(id)
    setVaultId(id)
    refetch()
    // setVaultId('')
  }

  console.log(vaultId)

  // console.log(profitPerHourDelta)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition>

        <div className="fixed inset-0 z-10 mb-20 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <div className="relative transform overflow-hidden rounded-xl bg-neutral-950 px-4 pb-4 pt-5 text-left shadow-xl transition-all">
                <div>
                  <div className="mx-auto flex h-24 w-24 items-center justify-center">
                    <img className='rounded-full' src={img}/>
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="mb-4 text-2xl font-semibold leading-6">
                      {name}
                    </h3>
                    <div className="mt-2">
                      <p className='mb-4'>
                        {description}
                      </p>
                      <p>Cost of upgrade: <span className='font-semibold text-amber-300'>{price}</span></p>
                      <p>After Upgrade: <span className='font-semibold text-amber-300'>{Number(profitPerHourDelta) + Number(earnings)}</span> e/h</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-center">
                  <button
                    type="button"
                    className="mb-4 inline-flex w-2/4 justify-center rounded-xl bg-indigo-600 px-3 py-3 text-xl font-semibold text-white shadow-sm"
                    onClick={() => onInvestClick(id)}
                  >
                    Invest 
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root >
  )
}


export default CardPopUp