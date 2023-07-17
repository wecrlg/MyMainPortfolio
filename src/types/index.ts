import { ReactNode } from "react";


export interface ContextProviderProps{
    children: ReactNode; 
}

export interface AppContextProps {
  isDarkMode: boolean;
  toggle: () => void;
}