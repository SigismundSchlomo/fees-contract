import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  networks: {
    local: {
      url: "http://0.0.0.0:8545",
      accounts: [
        "0x80f702eb861f36fe8fbbe1a7ccceb04ef7ddef714604010501a5f67c8065d446",
      ],
      hardfork: "byzantium",
    },
  },

  solidity: "0.8.21",
};

export default config;
