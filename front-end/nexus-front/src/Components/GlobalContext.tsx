import { createContext, useContext, } from "react";
import { Outlet, } from "react-router";

interface GlobalContextInterface{

};

export const GlobalContextProvider = createContext({} as GlobalContextInterface);

export function GlobalContext(){
  return(
    <GlobalContextProvider.Provider
      value={{}}
    >
      <Outlet/>
    </GlobalContextProvider.Provider>
  )
};

export const useGlobalContext = () => useContext(GlobalContextProvider);
