// https://eth-ropsten.alchemyapi.io/v2/F3z1MSY2J5Ap0GZpikXwCdS_ZxTFxIuU

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/F3z1MSY2J5Ap0GZpikXwCdS_ZxTFxIuU',
      accounts: [ '2c3a0bdfa36b75d0adcae59a6fe650128e2e9324f0de892e038a66e71ab84515' ]
    }
  }
}
