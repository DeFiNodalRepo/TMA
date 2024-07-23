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

interface Props {
  missions: Record<string, Mission>;
  syncMissions: Record<string, any>; 
  onSelectMission: (key: string) => void; 
}


export default function MissionCard({missions, syncMissions, onSelectMission}: Props) {

  const activeMissions = Object.entries(missions).filter(([key, mission]) => mission.isEnabled === true)

  const expiredMissions = Object.entries(missions).filter(([key, mission]) => mission.isEnabled ===false)

  const handleMissionClick = (key) => {
    onSelectMission(key);
  }

  return (
    <>
      <h1 className='my-4 text-2xl'>Active Missions</h1>
      {/* <div className="my-2 flex max-w-md overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-md shadow-blue-900/30">

      </div> */}
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8">
      {activeMissions.map(([key, mission]) => (
        <li key={key} className="overflow-hidden rounded-xl border border-gray-700" onClick={() => handleMissionClick(key)}>
          <div className="flex items-center gap-x-4 p-2">
            {syncMissions[key]?.isCompleted ? <p>Completed</p> : <p>Not yet</p>}
            <img
              src={mission.uri}
              alt={mission.title}
              className="h-12 w-12 flex-none rounded-lg object-cover"
            />
            <div className="text-sm font-medium">{mission.title}</div>
          </div>
          <dl className="-my-3 px-2 py-2 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
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
