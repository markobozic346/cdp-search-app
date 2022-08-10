import { AbiItem } from "web3-utils";

import Cdp from "./models/Cdp";

type CdpReducerStateType = {
  cdp: Cdp | undefined;
  nearestCdps: Cdp[] | [];
};

type AbiType = AbiItem | AbiItem[];

type ReducerActionType = "SINGLE_CDP_QUERY" | "NEAREST_CDP_QUERY";

export type { CdpReducerStateType, ReducerActionType, AbiType };
