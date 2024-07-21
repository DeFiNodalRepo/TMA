import React, { useContext } from "react";
import { createContext, ReactNode, useState } from "react";

interface InitApiHash{
    body?:string,
    status: "Success" | "Failure" | undefined
  }

  export interface IVault {
    uri: string;
    title: string;
    description: string;
    section: string;
    ConditionType: string;
    conditionId: string;
    conditionValue: number;
    isEnabled: boolean;
  }

  interface IMission {
    uri: string;
    externalURL: string;
    title: string;
    description: string;
    reward: number;
    ExpiresAt: string;
    isEnabled: boolean;
  }

  interface IDailyRewards {
    [number];
  }

  interface IDataStructure {
    vaults: Record<string, IVault>;
    missions: Record<string, IMission[]>;
    daily: IDailyRewards[];
  }

export const AppContext = createContext<InitApiHash | undefined>(undefined)
export const InitUserContext = createContext(undefined)

interface SyncDataContextType {
  syncData: any | null;  // Replace 'any' with a more specific type if possible
  setSyncData: React.Dispatch<React.SetStateAction<any | null>>;
}

const SyncDataContext = createContext<SyncDataContextType | undefined>(undefined);

interface SyncDataProviderProps {
  children: ReactNode;
}

export const SyncDataProvider = ({ children }: SyncDataProviderProps) => {
  const [syncData, setSyncData] = useState<any | null>(null);

  const value = React.useMemo(() => ({ syncData, setSyncData }), [syncData]);

  return React.createElement(SyncDataContext.Provider, { value }, children);
};


export const useContextSyncData = (): SyncDataContextType => {
  const context = useContext(SyncDataContext);
  if (context === undefined) {
    throw new Error('useSyncData must be used within a SyncDataProvider');
  }
  return context;
};