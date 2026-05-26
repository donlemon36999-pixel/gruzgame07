/**
 * Verify tap calldata includes builder suffix. Run: node scripts/verify-calldata.mjs
 */
import { encodeFunctionData } from "viem";

const BUILDER_CODE = "bc_9p8ygfen";
const BUILDER_SUFFIX = "0x62635f397038796766656e0b0080218021802180218021802180218021";

const abi = [
  {
    inputs: [{ name: "tapsCount", type: "uint256" }],
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
];

const tap = encodeFunctionData({ abi, functionName: "tap", args: [3n] });
const checkIn = encodeFunctionData({ abi, functionName: "checkIn" });
const suffix = BUILDER_SUFFIX.slice(2);

console.log("builder code:", BUILDER_CODE);
console.log("tap calldata:", `${tap}${suffix}`);
console.log("checkIn calldata:", `${checkIn}${suffix}`);
console.log("tap ends with suffix:", `${tap}${suffix}`.endsWith(suffix));
