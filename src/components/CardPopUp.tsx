import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


function CardPopUp({ isPopupOpen, updateVault, id }) {

  const [open, setOpen] = useState(isPopupOpen || false)

  const onInvestClick = (id) => {
    setOpen(false)
    updateVault.mutate(id)
  }

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-neutral-950 px-4 pb-4 pt-5 text-left shadow-xl transition-all">
                <div>
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                    Photo or Icon
                  </div>
                  <div className="mt-3 text-center">
                    <Dialog.Title as="h3" className="mb-4 text-2xl font-semibold leading-6 text-gray-200">
                      Title jhkj
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-300">
                        Description jkhjk hjkh jk hkjh kj hkj hkjh jk hkj hjk hkj h
                      </p>
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root >
  )
}


export default CardPopUp