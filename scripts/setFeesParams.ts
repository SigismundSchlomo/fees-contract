import { ethers } from "hardhat";

async function main() {
    const contractName = "Fees";
    const contractAddress = "0x2C6808Be96aB532DA69d09137E4632C8C513A33B";

    const contract = await ethers.getContractAt(contractName, contractAddress);

    const address = "0x407d73d8a49eeb85d32cf465507dd71d507100c1";
    const percent = "300000";

    const transaction = await contract.setFeesParams(address, percent);

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
