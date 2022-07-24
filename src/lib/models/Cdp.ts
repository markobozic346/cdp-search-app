class Cdp {
  readonly uuid: string;
  readonly urn: string;
  readonly owner: string;
  readonly userAddr: string;
  readonly ilk: string;
  readonly collateral: string;
  readonly debt: string;

  constructor(data: any) {
    this.uuid = data?.uuid;
    this.urn = data.urn;
    this.owner = data.owner;
    this.userAddr = data.userAddr;
    this.ilk = data.ilk;
    this.collateral = data.collateral;
    this.debt = data.debt;
  }
}

export default Cdp;
