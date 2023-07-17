import { createContext, useContext } from "react";
import { useDarkMode } from "usehooks-ts";
import { AppContextProps, ContextProviderProps } from "../types";

const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }: ContextProviderProps) => {
  const { isDarkMode, toggle } = useDarkMode();
  const context = { isDarkMode, toggle };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
