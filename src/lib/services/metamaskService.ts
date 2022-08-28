import { web3 } from "../web3";

class MetaMaskService {
  async signContract(dataToSign: string, address: string, password: string) {
    try {
      const res = await web3.eth.personal.sign(dataToSign, address, password);
      return res;
    } catch (err) {
      throw Error("something went wrong");
    }
  }

  async connectMetaMask() {
    try {
      const res = await web3.eth.requestAccounts();
      return res;
    } catch (err) {
      throw Error("something went wrong");
    }
  }

  async getAccounts() {
    try {
      const res = await web3.eth.getAccounts();
      return res;
    } catch (err) {
      throw Error("something went wrong");
    }
  }
}

export const metaMaskService = new MetaMaskService();
