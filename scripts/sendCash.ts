import { ethers } from "hardhat";

async function main() {
  const [sender] = await ethers.getSigners();

  const recipientAddress = "";
  const amount = ethers.parseEther("0.01"); // 0.01 ETH

  const tx = await sender.sendTransaction({
    to: recipientAddress,
    value: amount,
  });

  const receipt = await tx.wait();

  console.log(`Transaction successful with hash: ${tx.hash}`);
  console.log(`Block Number: ${receipt.blockNumber}`);
  console.log(`Gas Used: ${receipt.gasUsed.toString()}`);

  const block = await ethers.provider.getBlock(receipt.blockNumber);
  console.log(`Block Timestamp: ${new Date(block.timestamp * 1000).toISOString()}`);
  console.log(`Block Miner: ${block.miner}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
