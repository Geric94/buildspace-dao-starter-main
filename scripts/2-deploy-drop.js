import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      // The collection's name, ex. CryptoPunks
      name: "MushroomDAO Membership",
      // A description for the collection.
      description: "A DAO for fans of Mushroom.",
      // The image that will be held on our NFT! The fun part :).
      image: readFileSync("scripts/assets/fungitos1.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the contract.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primary_sale_recipient: AddressZero,
    });

    // this initialization returns the address of our contract
    // we use this to initialize the contract on the thirdweb sdk
    const editionDrop = await sdk.getContract(editionDropAddress, "edition-drop");

    // with this, we can get the metadata of our contract
    const metadata = await editionDrop.metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress,
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();

// PS C:\Users\Eric\Documents\Projets\buildspace-dao-starter-main> node scripts/2-deploy-drop.js
// 👋 SDK initialized by address: 0x17ad75240270C90c7dD6904bC916A507237dA563
// ✅ Successfully deployed editionDrop contract, address: 0xeC78D36F471B778C8Aad7084a20A827C8d949224
// ✅ editionDrop metadata: {
//   name: 'MushroomDAO Membership',
//   description: 'A DAO for fans of Mushroom.',
//   image: 'https://gateway.ipfscdn.io/ipfs/QmVypoxN3AU2QSwb9PrhhWoCRo3YNuF27RgEeTyLcBGSBJ/0',
//   seller_fee_basis_points: 0,
//   fee_recipient: '0x0000000000000000000000000000000000000000',
//   merkle: {},
//   symbol: ''
// }
