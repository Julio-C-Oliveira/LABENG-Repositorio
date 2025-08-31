import { createContext, useContext } from "react";
import { Outlet } from "react-router";
import { Home } from "./Pages/Home/Home";

interface GlobalContextInterface {
  //children: React.ReactNode;
  children: React.JSX.Element;
}

export const GlobalContextProvider = createContext(
  {} as GlobalContextInterface,
);

export function GlobalContext() {
  return (
    <GlobalContextProvider.Provider value={{ children: <Home /> }}>
      <Outlet />
    </GlobalContextProvider.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContextProvider);
