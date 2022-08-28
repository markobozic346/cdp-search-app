import { useContext, createContext } from "react";

export type MetaMaskContextType = {
  contract?: string;
  accounts: string[];
  loggedIn: boolean;
  onConnect: () => void;
  onSignContract: (message: string, address: string, password: string) => void;
};

const MetaMaskContext = createContext<MetaMaskContextType | null>(null);

export const useMetaMaskContext = () => {
  const ctx = useContext(MetaMaskContext);

  if (!ctx) {
    throw Error("useMetaMaskContext must be used within a MetaMaskProvider");
  }
  return ctx;
};

export default MetaMaskContext;
