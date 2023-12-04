import { ethers } from "hardhat";

async function main() {
  // Deploying the Ownable contract
  const ownable = await ethers.deployContract("Ownable");
  await ownable.waitForDeployment();
  console.log("Ownable deployed to:", ownable);

  // Deploying the Fees contract
  // Assuming Fees contract constructor does not require parameters, or else include them as an array
  const fees = await ethers.deployContract("Fees");
  await fees.waitForDeployment();
  console.log("Fees deployed to:", fees);
 }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
