import { bytesToString } from "@defisaver/tokens/esm/utils";
import BigNumber from "bignumber.js";

import { currentPrices, ilksRate, liqRatio } from "../constants";
import {
  bigNumberFormatter,
  calculateRatio,
  readableFormatter,
} from "../utils";

BigNumber.config({
  FORMAT: {
    prefix: "",
    decimalSeparator: ".",
    groupSeparator: ",",
    groupSize: 9,
    secondaryGroupSize: 0,
    fractionGroupSeparator: " ",
    fractionGroupSize: 9,
    suffix: "",
  },
});

class Cdp {
  readonly id: number;
  readonly urn: string;
  readonly owner: string;
  readonly userAddr: string;
  readonly exist?: boolean;
  readonly ilk?: string;
  readonly collateral: BigNumber;
  readonly debt: BigNumber;
  readonly rate: BigNumber;
  readonly ratio: number;
  readonly collateralInUsd: BigNumber;
  readonly collPrice: number;
  readonly liquidationPrice: BigNumber;
  readonly liquidationRatio: number;

  constructor(data: any) {
    this.id = data?.id;
    this.urn = data.urn;
    this.owner = data.owner;
    this.userAddr = data.userAddr;
    this.ilk = bytesToString(data.ilk);
    this.collateral = new BigNumber(data.collateral);
    this.rate = new BigNumber(ilksRate[this.ilk] ? ilksRate[this.ilk] : 0);
    this.debt = new BigNumber(data.debt).times(this.rate);
    this.collateralInUsd = new BigNumber(data.collateral).times(
      currentPrices[this.ilk]
    );
    this.exist = Boolean(this.ilk);

    this.liquidationRatio = liqRatio[this.ilk] ? liqRatio[this.ilk] : 1;
    this.ratio = calculateRatio(this.collateralInUsd, this.debt);
    this.collPrice = currentPrices[this.ilk] ? currentPrices[this.ilk] : 0;

    this.liquidationPrice = new BigNumber(this.debt)
      .times(this.liquidationRatio / 100)
      .div(this.collateral);
  }

  get formatCollateral() {
    return `${readableFormatter(this.collateral)} ${this.ilk}`;
  }

  get stringFullCollateral() {
    return bigNumberFormatter(this.collateral);
  }

  get stringFullDebt() {
    return this.debt.toFormat().toString();
  }

  get formatDebt() {
    return `${readableFormatter(this.debt)} DAI`;
  }

  get formatLiquidationPrice() {
    return `$${readableFormatter(this.liquidationPrice)}`;
  }

  get formatRatio() {
    return `${this.ratio} %`;
  }

  get formatCollPrice() {
    return `$${this.collPrice}`;
  }

  get status() {
    if (this.liquidationRatio < this.ratio) return "Safe";
    if (this.liquidationRatio > this.ratio) return "Unsafe";
  }
  get formatCollateralInUsd() {
    return `$${readableFormatter(this.collateralInUsd)}`;
  }

  get stringFullCollateralINUsd() {
    return bigNumberFormatter(this.collateralInUsd);
  }
}

export default Cdp;
