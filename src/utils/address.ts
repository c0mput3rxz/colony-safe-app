import { getAddress } from "ethers/utils";

function isAddress(address: string) {
  try {
    getAddress(address);
  } catch (e) {
    return false;
  }
  return true;
}

export function shortenAddress(address: string, digits: number = 4) {
  if (!isAddress(address)) {
    throw new Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${address.substring(0, digits + 2)}...${address.substring(42 - digits)}`;
}
