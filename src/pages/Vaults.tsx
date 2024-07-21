import { motion } from 'framer-motion';
import VaultCards from '../components/VaultCards'
import DefaultLayout from '../layout/DefaultLayout'
import { useContext, useEffect, useState } from 'react';
import { AppContext, ConfDataContext, InitUserContext } from '../state-management/context';
import { useSyncData } from '../react-query/useSyncData';
import Loader from '../components/Loader';
import { useMutation } from '@tanstack/react-query';
import { getSyncData } from '../api/apiCalls';


interface Vault {
  uri: string;
  title: string;
  description: string;
  section: string;
  ConditionType: string;
  conditionId: string;
  conditionValue: number;
  isEnabled: boolean;
}

interface VaultsCollection {
  [vaultId: string]: Vault;
}

interface VaultUserDetails {
upgradePrice: number | undefined;
currentProfitPerHour: number;
profitPerHourDelta: number;
currentLevel: number;
[key: string]: number | undefined;
}

function Vaults() {

  const [vaultId, setVaultId] = useState("")

  const userData = useContext(InitUserContext)
  const authData = useContext(AppContext)
  const token = authData.body

  const {data, isError, isLoading, refetch} = useSyncData(token)

  const mutation = useMutation({
    mutationFn: (vaultId) => getSyncData(token, vaultId),
    onSuccess: (data) => {
      console.log('Sync data fetched successfully:', data);
      refetch();
      }
    })

  const onInvestClick = (selectedVault) => {
    console.log("setvaut Id", selectedVault)
    // setIsPopupOpen(false)
    setVaultId(selectedVault)
    mutation.mutate(token, selectedVault)
  }

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
  const syncUser = JSON.parse(data.Body)

  const vaultsConfData: VaultsCollection = confUser.vaults as VaultsCollection
  const vaultsUserData: VaultUserDetails = syncUser.upgrades


  console.log(token)

  return (
    <DefaultLayout >
      <h1>Vaults</h1>
      <div className="grid grid-cols-2 gap-x-4">
        {Object.entries(vaultsConfData).map(([key, vault], index) => (
            <motion.div
              key={key}
              initial={{ x: -100 }} // Start off-screen to the left
              animate={{ x: 0 }} // Move to original position
              exit={{ x: 100 }} // Slkeye out to the right
              transition={{ duration: 0.12 * index }}
            >
            <VaultCards
              img={vault.uri}
              name={vault.title}
              description={vault.description}
              currentLevel={typeof vaultsUserData[key] === 'object' ? (vaultsUserData[key] as VaultUserDetails)?.currentLevel : undefined}
              price={typeof vaultsUserData[key] === 'object' ? (vaultsUserData[key] as VaultUserDetails)?.upgradePrice : undefined}
              id={key}
              earnings={typeof vaultsUserData[key] === 'object' ? (vaultsUserData[key] as VaultUserDetails)?.currentProfitPerHour : undefined}
              profitPerHourDelta={typeof vaultsUserData[key] === 'object' ? (vaultsUserData[key] as VaultUserDetails)?.profitPerHourDelta : undefined}
              onInvestClick={onInvestClick}
            />
            </motion.div>
          ))}
        </div>
    </DefaultLayout>
  )
}

export default Vaults