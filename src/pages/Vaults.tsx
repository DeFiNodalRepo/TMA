import { useMutation, useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

import VaultCards from '../components/VaultCards'
import DefaultLayout from '../layout/DefaultLayout'
import { getVaults } from '../api/apiCalls';
import CardTabs from '../components/CardTabs';
import { useContext } from 'react';
import { ConfDataContext, IVault, SyncDataContext } from '../state-management/context';
import { config } from 'chai';

function Vaults() {

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


  const confData = useContext(ConfDataContext);
  if (!confData) {
      throw new Error('Expected confData to be defined');
  }
  
  const vaultsConfData: VaultsCollection = confData.vaults as VaultsCollection;
  
  // console.log(vaultsConfData)
  const rawSyncData = useContext(SyncDataContext)

  const syncData = JSON.parse(rawSyncData?.Body)

  const vaultsUserData: VaultUserDetails = syncData.upgrades

  console.log(vaultsUserData)

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
              updateVault='update vault cost'
            />
            </motion.div>
          ))}
        </div>
    </DefaultLayout>
  )
}

export default Vaults