require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Hjj-px33KobByLkN13U_zNclsqZNjE2n',
      accounts: ['4a974db3bc916a16447d948f4b0a753d84479e9ab8147e6bb89125a4d3024f5d'],
    },
  },
};
