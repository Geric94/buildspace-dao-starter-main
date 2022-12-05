import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const token = await sdk.getContract(process.env.INSERT_TOKEN_ADDRESS, "token");
    // Log the current roles.
    const allRoles = await token.roles.getAll();

    console.log("👀 Roles that exist right now:", allRoles);

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    await token.roles.setAll({ admin: [], minter: [] });
    console.log(
      "🎉 Roles after revoking ourselves",
      await token.roles.getAll()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO trasury", error);
  }
})();


// '0x4ccdfE6F45a113417E5d7041952F0C7305e14132',    '0x0000000000000000000000000000000000000000'
// ]
// }
// 🎉 Roles after revoking ourselves {
// admin: [],
// minter: [],
// transfer: [
//   '0x4ccdfE6F45a113417E5d7041952F0C7305e14132',
//   '0x0000000000000000000000000000000000000000'
// ]
// }
// ✅ Successfully revoked our superpowers from the ERC-20 contract
