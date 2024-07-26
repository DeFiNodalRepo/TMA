import React, { useContext } from "react";
import { createContext, ReactNode, useState } from "react";
import { AppConf } from "../types";

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

export const AppContext = createContext<InitApiHash | undefined>(undefined)
export const InitUserContext = React.createContext<AppConf | undefined>(undefined);


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