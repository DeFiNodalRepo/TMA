import { useContext } from 'react';
import Loader from '../components/Loader';
import MissionCard from '../components/MissionCard';
import DefaultLayout from '../layout/DefaultLayout'
import { ConfDataContext } from '../state-management/context';

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



function Missions() {

  const confData = useContext(ConfDataContext)

  const missions = confData.missions as Missions;

  console.log(confData)

  // if (confData === error){
  //   return <Loader />
  // }

  return (
    <DefaultLayout >
        {/* {Object.entries(missions).map(([missionName, mission]) => (
          <div key={missionName}>
            <h3 className='text-white'>{mission.title}</h3>
            <p>{mission.description}</p>
            <a href={mission.externalURL}>Learn More</a>
            <p>Reward: {mission.reward}</p>
            <p>Expires At: {new Date(mission.ExpiresAt).toLocaleString()}</p>
            <p>Status: {mission.isEnabled ? 'Enabled' : 'Disabled'}</p>
          </div>
        ))} */}
        <MissionCard missions={missions} />
        {/* {Object.entries(missions).map(([key, mission]) => (<MissionCard key={missionNme} mission={mission}/>))} */}
    </DefaultLayout>
  )
}

export default Missions