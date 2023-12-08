import { ethers } from "hardhat";

async function main() {
  const wallet = ethers.Wallet.createRandom();
  console.log("Generated Address:", wallet.address);
  console.log("Private Key:", wallet.privateKey);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
