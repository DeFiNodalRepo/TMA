import Loader from '../components/Loader';
import MissionCard from '../components/MissionCard';
import DefaultLayout from '../layout/DefaultLayout'
import { useConfData } from '../react-query/useConfData'

interface Mission {
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



function Missions() {

  const {data, isError} = useConfData()

  const missions = data?.missions as Missions;

  if (isError || !missions){
    return <Loader />
  }

  console.log(missions)

  return (
    <DefaultLayout >
        {Object.entries(missions).map(([missionName, mission]) => (
          <div key={missionName}>
            <h3 className='text-white'>{mission.title}</h3>
            <p>{mission.description}</p>
            <a href={mission.externalURL}>Learn More</a>
            <p>Reward: {mission.reward}</p>
            <p>Expires At: {new Date(mission.ExpiresAt).toLocaleString()}</p>
            <p>Status: {mission.isEnabled ? 'Enabled' : 'Disabled'}</p>
          </div>
        ))}
        <MissionCard />
    </DefaultLayout>
  )
}

export default Missions