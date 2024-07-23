import { useContext, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import MissionCard from '../components/MissionCard';
import DefaultLayout from '../layout/DefaultLayout'
import { AppContext, ConfDataContext, InitUserContext, useContextSyncData } from '../state-management/context';
import { useSyncData } from '../react-query/useSyncData';
import { useMutation } from '@tanstack/react-query';
import { getSyncData } from '../api/apiCalls';

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
  const [selectedMission, setSellectMission] = useState('')

  const userData = useContext(InitUserContext)
  const authData = useContext(AppContext)

  const token = authData.body

  const {data, isError, isLoading, refetch} = useSyncData(token)

  const {setSyncData} = useContextSyncData()

  const mutation = useMutation({
    mutationFn: (selectedMission) => getSyncData(token, selectedMission),
    onSuccess: (data) => {
      setSyncData(data)
      }
    })


  if (!userData) {
    return (
      <DefaultLayout>
        <h1>Something went wrong, our team is working on fixing the issue. If the issue persists please contact one of our team members via telegram</h1>
        <Loader />
      </DefaultLayout>
    )
  }

  const confUser = JSON.parse(userData.conf)
  const syncUser = JSON.parse(data.Body)

  const missionsConfData = confUser.missions

  const handleMissionSelect = (missionId) => {
    setSellectMission(missionId)
    mutation.mutate(missionId)
  };

  let missionsUserData

  if (!mutation.data) {
    missionsUserData = syncUser.missions
  } else {
    missionsUserData = JSON.parse(mutation.data.Body)
  }

  const missions = missionsConfData;

  console.log(missionsUserData)

  return (
    <DefaultLayout >
        <MissionCard missions={missions} syncMissions={missionsUserData} onSelectMission={handleMissionSelect}/>
    </DefaultLayout>
  )
}

export default Missions