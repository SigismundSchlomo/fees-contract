import { ethers } from "hardhat";

async function main() {

    const contractName = "Fees";
    const contractAddress = "0x2C6808Be96aB532DA69d09137E4632C8C513A33B";

    // Use getContractAt to automatically get the contract instance with the ABI
    const contract = await ethers.getContractAt(contractName, contractAddress);

    const gasPrice = "10";

    const transaction = await contract.setGasPrice(gasPrice);

    console.log("Transaction sent, hash:", transaction.hash);

    await transaction.wait();

    console.log("Transaction confirmed.");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
