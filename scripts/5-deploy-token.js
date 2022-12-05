import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenAddress = await sdk.deployer.deployToken({
      // What's your token's name? Ex. "Ethereum"
      name: "MushroomDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "MSH",
      // This will be in case we want to sell our token,
      // because we don't, we set it to AddressZero again.
      primary_sale_recipient: AddressZero,
    });
    console.log(
      "✅ Successfully deployed token contract, address:",
      tokenAddress,
    );
  } catch (error) {
    console.error("failed to deploy token contract", error);
  }
})();

// PS C:\Users\Eric\Documents\Projets\buildspace-dao-starter-main> node scripts/5-deploy-token.js  
// 👋 SDK initialized by address: 0x17ad75240270C90c7dD6904bC916A507237dA563
// ✅ Successfully deployed token contract, address: 0x1f47D2bb5DDCc26a32Fa8580e1A444370AB61af0
