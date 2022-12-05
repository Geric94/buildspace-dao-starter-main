import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // This is the address of our ERC-20 contract printed out in the step before.
    const token = await sdk.getContract(process.env.INSERT_TOKEN_ADDRESS, "token");
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1_000_000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "$MSH in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();

// PS C:\Users\Eric\Documents\Projets\buildspace-dao-starter-main> node scripts/6-print-money.js   
// 👋 SDK initialized by address: 0x17ad75240270C90c7dD6904bC916A507237dA563
// ✅ There now is 1000000.0 $HOKAGE in circulation
