import { ethers } from "hardhat";

async function main() {
    // The contract name as specified in your project
    const contractName = "Fees";

    const contractAddress = "0x2C6808Be96aB532DA69d09137E4632C8C513A33B";

    // Use getContractAt to automatically get the contract instance with the ABI
    const contract = await ethers.getContractAt(contractName, contractAddress);

    // Example: calling a `getValue` method from your contract
    const gasPrice = await contract.getGasPrice();
    const feesParams = await contract.getFeesParams();

    console.log("Current gas price: ", gasPrice.toString());
    console.log("Curernt fees params: ", feesParams.toString());
    
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
