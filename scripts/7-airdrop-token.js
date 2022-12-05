import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // This is the address to our ERC-1155 membership NFT contract.
    const editionDrop = await sdk.getContract(process.env.INSERT_EDITION_DROP_ADDRESS, "edition-drop");
    // This is the address to our ERC-20 token contract.
    const token = await sdk.getContract(process.env.INSERT_TOKEN_ADDRESS, "token");
    // Grab all the addresses of people who own our membership NFT, which has 
    // a tokenId of 0.
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);
    console.log("✅ editionDrop history:", walletAddresses);
  
    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
      );
      process.exit(0);
    }

    // Loop through the array of addresses.
    const airdropTargets = walletAddresses.map((address) => {
      // Pick a random # between 1000 and 10000.
      const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      // Set up the target.
      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };

      return airdropTarget;
    });

    // Call transferBatch on all our airdrop targets.
    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
    console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();

// PS C:\Users\Eric\Documents\Projets\buildspace-dao-starter-main> node scripts/7-airdrop-token.js 
// 👋 SDK initialized by address: 0x17ad75240270C90c7dD6904bC916A507237dA563
// ✅ editionDrop history: []
// No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!


// '0x17ad75240270C90c7dD6904bC916A507237dA563',
// '0xd5d4bFEb7ECDeb2d1A00Dd61b9a9900D65A3f181',
// '0x4ccdfE6F45a113417E5d7041952F0C7305e14132'
// ]
// ✅ Going to airdrop 7720 tokens to 0x17ad75240270C90c7dD6904bC916A507237dA563
// ✅ Going to airdrop 5263 tokens to 0xd5d4bFEb7ECDeb2d1A00Dd61b9a9900D65A3f181
// ✅ Going to airdrop 4202 tokens to 0x4ccdfE6F45a113417E5d7041952F0C7305e14132
// 🌈 Starting airdrop...
// ✅ Successfully airdropped tokens to all the holders of the NFT!
