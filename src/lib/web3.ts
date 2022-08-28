import Web3 from "web3";
import { AbiItem } from "web3-utils";

declare const window: any; // temp fix

const initializeWeb3 = () => {
  const web3 = new Web3(window.ethereum);
  window.web3 = web3;

  return web3;
};

export const web3 = initializeWeb3();

export const initializeContract = (abi: AbiItem | AbiItem[], address: string) =>
  new web3.eth.Contract(abi, address);
