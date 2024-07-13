import { createContext } from "react";

interface InitApiHash{
    body?:string,
    status: "Success" | "Failure" | undefined
  }

export const AppContext = createContext<InitApiHash | undefined>(undefined)
export const ConfDataContext = createContext({})