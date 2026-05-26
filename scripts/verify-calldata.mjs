import { encodeFunctionData } from "viem";
import { Attribution } from "ox/erc8021";

const BUILDER_CODE = "bc_w6mg1cwt";
const suffix = Attribution.toDataSuffix({ codes: [BUILDER_CODE] }).slice(2);
const withSuffix = (data) => `${data}${suffix}`;

const abi = [
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
];

const tap = encodeFunctionData({ abi, functionName: "tap", args: [3n] });
const checkIn = encodeFunctionData({ abi, functionName: "checkIn" });

console.log("Builder code:", BUILDER_CODE);
console.log("Expected suffix:", `0x${suffix}`);
console.log("");
console.log("tap(3):", withSuffix(tap));
console.log("checkIn():", withSuffix(checkIn));
