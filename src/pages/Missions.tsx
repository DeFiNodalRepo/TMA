import { useContext, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import MissionCard from '../components/MissionCard';
import DefaultLayout from '../layout/DefaultLayout'
import { AppContext, ConfDataContext } from '../state-management/context';
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
  const [userData, setUserData] = useState('')
  const [selectedMission, setSellectMission] = useState('')

  const apiToken = useContext(AppContext);

  const token = apiToken?.body

  const {data, isLoading, isError, refetch} = useSyncData(token, "cash")

  const mutation = useMutation({
    mutationFn: (selectedMission) => getSyncData(token, selectedMission),
    onSuccess: (data) => {
      // Handle successful response
      setUserData(data)
      console.log('Mission data posted successfully:', userData);
    },
    onError: (error) => {
      // Handle error
      console.error('Error posting mission data:', error);
    }
  });

  const handleMissionSelect = (missionId) => {
    mutation.mutate(missionId);
  };

  const confData = useContext(ConfDataContext)

  const missions = confData?.missions;

  if (!confData || !confData.missions) {
    return <Loader />
  }

  if (isLoading){
    return <Loader />
  }

  if (isError){
    <Loader />
  }



  console.log("selecte mission", selectedMission)

  const syncData = JSON.parse(data?.Body)

  const syncMissions = syncData.missions

  
  console.log("usedata", userData)


  return (
    <DefaultLayout >
        <MissionCard missions={missions} syncMissions={syncMissions} onSelectMission={handleMissionSelect}/>
    </DefaultLayout>
  )
}

export default Missions