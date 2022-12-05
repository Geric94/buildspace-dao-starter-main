import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      // Give your governance contract a name.
      name: "My amazing Mushroom DAO",

      // This is the location of our governance token, our ERC-20 contract!
      voting_token_address: process.env.INSERT_TOKEN_ADDRESS,

      // These parameters are specified in number of blocks. 
      // Assuming block time of around 13.14 seconds (for Ethereum)

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      voting_delay_in_blocks: 0,

      // How long do members have to vote on a proposal when it's created?
      // we will set it to 1 day = 6570 blocks
      voting_period_in_blocks: 6570,

      // The minimum % of the total supply that need to vote for
      // the proposal to be valid after the time for the proposal has ended.
      voting_quorum_fraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      proposal_token_threshold: 0,
    });

    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress,
    );
  } catch (err) {
    console.error("Failed to deploy vote contract", err);
  }
})();

// PS C:\Users\Eric\Documents\Projets\buildspace-dao-starter-main> node scripts/8-deploy-vote.js
// 👋 SDK initialized by address: 0x4ccdfE6F45a113417E5d7041952F0C7305e14132
// ✅ Successfully deployed vote contract, address: 0x2F5d58A45ceF1012A9D663Ae197038df2e7837A8
