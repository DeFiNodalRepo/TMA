import { motion } from 'framer-motion';
import VaultCards from '../components/VaultCards'
import DefaultLayout from '../layout/DefaultLayout'
import { useContext } from 'react';
import { AppContext, ConfDataContext } from '../state-management/context';
import { useSyncData } from '../react-query/useSyncData';
import Loader from '../components/Loader';


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

  const confData = useContext(ConfDataContext);
  if (!confData) {
      throw new Error('Expected confData to be defined');
  }
  const apiToken = useContext(AppContext);

  const token = apiToken?.body

  const {data, isLoading, isError, refetch} = useSyncData(token, "")

  console.log("quey sync", data)

  if (isLoading){
    return <Loader />
  }

  if (isError){
    <Loader />
  }
 
  const vaultsConfData: VaultsCollection = confData.vaults as VaultsCollection;
  const syncData = JSON.parse(data?.Body)
  const vaultsUserData: VaultUserDetails = syncData.upgrades

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
            />
            </motion.div>
          ))}
        </div>
    </DefaultLayout>
  )
}

export default Vaults