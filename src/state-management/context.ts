import { createContext } from "react";

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