const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();

// first contract deployesd at: 0x2f193beAE218D9F7CA6820BeB52D0fE8c36663Ef
// second at: 0x75AEA152681F926BF6fabA5a1f183E325e9CE823
// Third, no errors: 0x0AD0f351abc618f8327fFedcCaba635F1c211FDD