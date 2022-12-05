import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(process.env.INSERT_EDITION_DROP_ADDRESS, "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Mushroom Village Headband",
        description: "This NFT will give you access to MushroomDAO!",
        image: readFileSync("scripts/assets/fungitos1.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

// PS C:\Users\Eric\Documents\Projets\buildspace-dao-starter-main> node scripts/3-config-nft.js
// 👋 SDK initialized by address: 0x17ad75240270C90c7dD6904bC916A507237dA563
// ✅ Successfully created a new NFT in the drop!
