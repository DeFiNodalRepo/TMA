
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Missions, Mission } from '../pages/Missions'

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export interface Mission {
  uri: string;
  externalURL: string;
  title: string;
  description: string;
  reward: number;
  ExpiresAt: string;
  isEnabled: boolean;
}

interface Missions {
  [key: string]: Mission;
}



export default function MissionCard({missions}: Missions) {
  
  // console.log(missions)
  // Object.entries(missions).map(([key, mission]) => console.log(key, mission))

  const activeMissions = Object.entries(missions).filter(([key, mission]) => mission.isEnabled === true)
  console.log(activeMissions)

  const expiredMissions = Object.entries(missions).filter(([key, mission]) => mission.isEnabled ===false)
  
  // (([key, mission]) => (
  //   <li key={key} className="overflow-hidden rounded-xl border border-gray-700">
  //     <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-500 p-6">
  //       <img
  //         src={mission.externalURL}
  //         alt={mission.title}
  //         className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
  //       />
  //       <div className="text-sm font-medium leading-6 text-gray-900">{mission.title}</div>

  //     </div>
  //     <dl className="-my-3 divide-y divide-gray-800 px-6 py-4 text-sm leading-6">
  //       <div className="flex justify-between gap-x-4 py-3">
  //         <dt className="text-gray-500">Reward</dt>
  //         <dd className="text-gray-700">{mission.reward}
  //           {/* <time dateTime={mission.reward}>{mission.title}</time> */}
  //         </dd>
  //       </div>
  //       <div className="flex justify-between gap-x-4 py-3">
  //         <dt className="text-gray-500">Amount</dt>
  //         <dd className="flex items-start gap-x-2">
  //           <div className="text-gray-700">{mission.reward}</div>
  //         </dd>
  //       </div>
  //     </dl>
  //   </li>
  // ))

// const missionMap = Object.entries(mission).map(item => console.log(item[1]))
// console.log(missionMap)

  return (
    <>
    <h1 className='my-4 text-2xl'>Active Missions</h1>
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8">
      {activeMissions.map(([key, mission]) => (
        <li key={key} className="overflow-hidden rounded-xl border border-gray-700">
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-500 p-6">
            <img
              src={mission.externalURL}
              alt={mission.title}
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">{mission.title}</div>

          </div>
          <dl className="-my-3 divide-y divide-gray-800 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Reward</dt>
              <dd className="text-gray-700">{mission.reward}
                {/* <time dateTime={mission.reward}>{mission.title}</time> */}
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Amount</dt>
              <dd className="flex items-start gap-x-2">
                <div className="text-gray-700">{mission.reward}</div>
              </dd>
            </div>
          </dl>
        </li>
      ))}
      
    </ul>
    <h1 className='my-4 text-2xl'>Expired Missions</h1>
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8">
      {expiredMissions.map(([key, mission]) => (
        <li key={key} className="overflow-hidden rounded-xl border border-gray-700">
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-500 p-6">
            <img
              src={mission.externalURL}
              alt={mission.title}
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">{mission.title}</div>

          </div>
          <dl className="-my-3 divide-y divide-gray-800 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Reward</dt>
              <dd className="text-gray-700">{mission.reward}
                {/* <time dateTime={mission.reward}>{mission.title}</time> */}
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Amount</dt>
              <dd className="flex items-start gap-x-2">
                <div className="text-gray-700">{mission.reward}</div>
              </dd>
            </div>
          </dl>
        </li>
      ))}
      
    </ul>
    </>
  )
}
