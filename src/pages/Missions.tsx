import { useContext, useState } from 'react';
import Loader from '../components/Loader';
import MissionCard from '../components/MissionCard';
import DefaultLayout from '../layout/DefaultLayout'
import { AppContext, InitUserContext, useContextSyncData } from '../state-management/context';
import { useSyncData } from '../react-query/useSyncData';
import { useMutation } from '@tanstack/react-query';
import { getSyncData } from '../api/apiCalls';

function Missions() {
  const [selectedMission, setSellectMission] = useState('')

  const userData = useContext(InitUserContext)
  const authData = useContext(AppContext)
  const token = authData?.body

  const {data, isError, isLoading} = useSyncData(token)

  const {setSyncData} = useContextSyncData()

  const mutation = useMutation({
    mutationFn: () => getSyncData(token, selectedMission),
    onSuccess: (data) => {
      setSyncData(data)
      }
    })

    const handleMissionSelect = (missionId: any) => {
      setSellectMission(missionId)
      mutation.mutate(missionId)
    };

  if (!userData) {
    return (
      <DefaultLayout>
        <h1>Something went wrong, our team is working on fixing the issue. If the issue persists please contact one of our team members via telegram</h1>
        <Loader />
      </DefaultLayout>
    )
  }

  if (isError){
    <Loader />
  }

  if (isLoading){
    <Loader />
  }

  const confUser = JSON.parse(userData.conf)
  
  if (mutation.isPending) {
    return (
      <DefaultLayout>
        <Loader />  
      </DefaultLayout>)
  }
  
  let syncUser = JSON.parse(data.Body)

  if (mutation.isSuccess){
    syncUser = JSON.parse(mutation.data.Body)
  } 

  const missionsConfData = confUser.missions
  const missionsUserData = syncUser.missions

  console.log("missionsConfData", missionsConfData)

  return (
    <DefaultLayout >
        <MissionCard missions={missionsConfData} syncMissions={missionsUserData} onSelectMission={handleMissionSelect}/>
    </DefaultLayout>
  )
}

export default Missions

