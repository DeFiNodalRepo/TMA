import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


function CardPopUp({ isPopupOpen, img, name, description, currentLevel, price, earnings, id, profitPerHourDelta}) {

  const [open, setOpen] = useState(isPopupOpen || false)

  const onInvestClick = (id) => {
    setOpen(false)
    console.log(id)
  }

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
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition>

        <div className="fixed inset-0 z-10 mb-20 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <div className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform shadow-xl rounded-xl bg-neutral-950">
                <div>
                  <div className="flex items-center justify-center w-24 h-24 mx-auto ">
                    <img className='rounded-full' src={img}/>
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="mb-4 text-2xl font-semibold leading-6 ">
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
                <div className="flex items-center justify-center mt-5">
                  <button
                    type="button"
                    className="inline-flex justify-center w-2/4 px-3 py-3 mb-4 text-xl font-semibold text-white bg-indigo-600 shadow-sm rounded-xl"
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