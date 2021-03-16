/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle')

INFURA =''
PRIVATE =''

module.exports = {
  solidity: "0.7.3",
  networks: {
    goerli: {
      url: INFURA,
      accounts: ['0x'+ PRIVATE]
    }

  }
};
