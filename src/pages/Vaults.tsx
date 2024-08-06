import { motion } from 'framer-motion';
import VaultCards from '../components/VaultCards'
import DefaultLayout from '../layout/DefaultLayout'
import { useContext, useState } from 'react';
import { AppContext, InitUserContext, useContextSyncData } from '../state-management/context';
import { useSyncData } from '../react-query/useSyncData';
import Loader from '../components/Loader';
import { useMutation } from '@tanstack/react-query';
import { getSyncData } from '../api/apiCalls';
import { VaultConf, VaultSync } from '../types'

function Vaults() {

  const [vaultId, setVaultId] = useState("")
  
  const userData = useContext(InitUserContext)
  const authData = useContext(AppContext)
  const token = authData?.body

  const {data, isError, isLoading} = useSyncData(token)

  const {setSyncData} = useContextSyncData()

  const mutation = useMutation({
    mutationFn: () => getSyncData(token, vaultId),
    onSuccess: (data) => {
      setSyncData(data)
      }
    })

  const onInvestClick = (selectedVault: any) => {
    setVaultId(selectedVault)
    mutation.mutate(selectedVault)
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

  const vaultsConfData: VaultConf = confUser.vaults as VaultConf
  const vaultsUserData: VaultSync = syncUser.upgrades

  const enabledVaults = Object.entries(vaultsConfData).filter(([, vault]) => vault.isEnabled)

  enabledVaults.forEach(([id, details]) => {
    const vaultData = vaultsUserData[id];
    if (vaultData && vaultData.currentLevel !== undefined) {
      if (vaultData.currentLevel >= details.conditionValue) {
        details.buttonEnabled = true;
      } else {
        details.buttonEnabled = false;
      }
    } else {
      details.buttonEnabled = true;
    }
  });

  return (
    <DefaultLayout >
      <h1>Vaults</h1>
      <div className="grid grid-cols-2 gap-x-4">
        {enabledVaults.map(([key, vault], index) => (
            <motion.div
              key={key}
              initial={{ x: -100 }} // Start off-screen to the left
              animate={{ x: 0 }} // Move to original position
              exit={{ x: 100 }} // Slkeye out to the right
              transition={{ duration: 0.05 * index }}
            >
              <VaultCards
                img={vault.uri}
                name={vault.title}
                description={vault.description}
                buttonEnabled={vault.buttonEnabled}
                currentLevel={vaultsUserData[key].currentLevel}
                price={vaultsUserData[key].upgradePrice}
                earnings={vaultsUserData[key].currentProfitPerHour}
                profitPerHourDelta={vaultsUserData[key].profitPerHourDelta}
                id={key}
                onInvestClick={onInvestClick}
                userBalance= {syncUser.balance}
              /> 
            </motion.div>
          ))}
        </div>
    </DefaultLayout>
  )
}

export default Vaults