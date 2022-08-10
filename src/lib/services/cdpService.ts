import {
  cdpInfoContractAbi,
  cdpInfoContractAddress,
  ilksContractAbi,
  ilksContractAddress,
} from "../constants";
import Cdp from "../models/Cdp";
import { AbiType } from "../types";
import { initializeContract } from "../web3";

const cdpContract = initializeContract(
  cdpInfoContractAbi as AbiType,
  cdpInfoContractAddress
);

const ilksContract = initializeContract(
  ilksContractAbi as AbiType,
  ilksContractAddress
);

class CdpService {
  async fetchSingleCdp(id: number) {
    try {
      const res = await cdpContract.methods.getCdpInfo(id).call();

      return new Cdp({ id, ...res });
    } catch (err) {
      throw Error(`something went wrong ${err}`);
    }
  }

  async fetchMultipleCdp(ids: number[]) {
    try {
      const res = await Promise.all(ids.map((id) => this.fetchSingleCdp(id)));
      return res;
    } catch (err) {
      throw Error(`something went wrong ${err}`);
    }
  }

  async fetchIlkRate(ilk: string) {
    try {
      const res = await ilksContract.methods.ilks(ilk).call();
      return res;
    } catch (err) {
      throw Error(`something went wrong ${err}`);
    }
  }
}

export const cdpService = new CdpService();
