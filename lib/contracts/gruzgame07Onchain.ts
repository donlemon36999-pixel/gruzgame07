/** Deployed on Base Mainnet — https://basescan.org/address/0x28C2A59D2E10640f5Aa4f1B469F8F76d53cC3A85 */
export const GRUZGAME07_CONTRACT_ADDRESS: `0x${string}` =
  "0x28C2A59D2E10640f5Aa4f1B469F8F76d53cC3A85";

export const GRUZGAME07_CHECKIN_PRICE_ETH = "0.00001";

/** base.dev → Builder Codes (gruzgame07 / donlemon36999-pixel) */
export const GRUZGAME07_BUILDER_CODE = "bc_9p8ygfen";
export const GRUZGAME07_BUILDER_CODE_DATA_SUFFIX: `0x${string}` =
  "0x62635f397038796766656e0b0080218021802180218021802180218021";

export const gruzGame07OnchainAbi = [
  {
    inputs: [{ internalType: "uint256", name: "tapsCount", type: "uint256" }],
    name: "tap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkIn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export function withGruzGame07BuilderCodeDataSuffix(data: `0x${string}`): `0x${string}` {
  const suffix = GRUZGAME07_BUILDER_CODE_DATA_SUFFIX;
  if (!suffix || suffix === "0x" || suffix.length <= 2) {
    return data;
  }
  return `${data}${suffix.slice(2)}` as `0x${string}`;
}

export function getGruzGame07ContractAddress(): `0x${string}` {
  return GRUZGAME07_CONTRACT_ADDRESS;
}

export function isGruzGame07ContractConfigured(): boolean {
  return GRUZGAME07_CONTRACT_ADDRESS !== "0x0000000000000000000000000000000000000000";
}
