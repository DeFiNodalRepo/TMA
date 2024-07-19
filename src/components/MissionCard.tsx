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


export default function MissionCard({missions, syncMissions, onSelectMission}: Missions) {

  const activeMissions = Object.entries(missions).filter(([key, mission]) => mission.isEnabled === true)

  const expiredMissions = Object.entries(missions).filter(([key, mission]) => mission.isEnabled ===false)

  const handleMissionClick = (key) => {
    onSelectMission(key);
  }

  return (
    <>
      <h1 className='my-4 text-2xl'>Active Missions</h1>
      {/* <div className="flex max-w-md my-2 overflow-hidden bg-gray-900 border border-gray-700 rounded-lg shadow-md shadow-blue-900/30">

      </div> */}
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8">
      {activeMissions.map(([key, mission]) => (
        <li key={key} className="overflow-hidden border border-gray-700 rounded-xl" onClick={() => handleMissionClick(key)}>
          <div className="flex items-center p-2 gap-x-4">
            {syncMissions[key]?.isCompleted ? <p>Completed</p> : <p>Not yet</p>}
            <img
              src={mission.externalURL}
              alt={mission.title}
              className="flex-none object-cover w-12 h-12 rounded-lg"
            />
            <div className="text-sm font-medium ">{mission.title}</div>
          </div>
          <dl className="px-2 py-2 -my-3 text-sm leading-6">
            <div className="flex justify-between py-3 gap-x-4">
              <dt className="text-amber-600">Reward</dt>
              <dd className="text-gray-300">{mission.reward}</dd>
              <dt className="font-semibold text-sky-600">Amount</dt>
              <dd className="text-gray-300">{mission.reward}</dd>
            </div>
          </dl>
        </li>
      ))}
      
    </ul>
    <h1 className='my-4 text-2xl'>Expired Missions</h1>
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8">
      {expiredMissions.map(([key, mission]) => (
        <li key={key} className="overflow-hidden border border-gray-700 rounded-xl">
          <div className="flex items-center p-6 bg-gray-500 border-b gap-x-4 border-gray-900/5">
            <img
              src={mission.externalURL}
              alt={mission.title}
              className="flex-none object-cover w-12 h-12 bg-white rounded-lg ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">{mission.title}</div>

          </div>
          <dl className="px-6 py-4 -my-3 text-sm leading-6 divide-y divide-gray-800">
            <div className="flex justify-between py-3 gap-x-4">
              <dt className="text-gray-500">Reward</dt>
              <dd className="text-gray-700">{mission.reward}
                {/* <time dateTime={mission.reward}>{mission.title}</time> */}
              </dd>
            </div>
            <div className="flex justify-between py-3 gap-x-4">
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
