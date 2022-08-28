import BigNumber from "bignumber.js";

export const intl = Intl.NumberFormat("en", { notation: "compact" });

export const bigNumberFormatter = (value: BigNumber) =>
  new BigNumber(value).toFormat().toString();

export const readableFormatter = (value: BigNumber) =>
  intl.format(
    parseInt(new BigNumber(value).toFormat().toString().split(",")[0])
  );

export const calculateRatio = (first: BigNumber, second: BigNumber) => {
  if (first.isZero() || second.isZero()) return 0;

  const firstInt = parseInt(readableFormatter(first));
  const secondInt = parseInt(readableFormatter(second));

  const rawRatio = (firstInt / secondInt) * 100;

  return parseInt(rawRatio.toString().split(".")[0]);
};

const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

export const truncateEthAddress = (address: string) => {
  const match = address.match(truncateRegex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};
