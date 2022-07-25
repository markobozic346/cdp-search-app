import { cdpInfoContractAbi, cdpInfoContractAddress } from "../constants";
import Cdp from "../models/Cdp";
import { AbiType } from "../types";
import { initializeContract } from "../web3";

const udpContract = initializeContract(
  cdpInfoContractAbi as AbiType,
  cdpInfoContractAddress
);

class CdpService {
  async fetchSingleCdp(uuid: number) {
    try {
      const res = await udpContract.methods.getCdpInfo(uuid).call();

      return new Cdp({ uuid, ...res });
    } catch (err) {
      throw Error(`something went wrong ${err}`);
    }
  }

  async fetchMultipleCdp(uuids: number[]) {
    try {
      const res = await Promise.all(
        uuids.map((uuid) => this.fetchSingleCdp(uuid))
      );
      return res;
    } catch (err) {
      throw Error(`something went wrong ${err}`);
    }
  }
}

export const cdpService = new CdpService();
