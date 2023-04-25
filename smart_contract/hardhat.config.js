
require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.0",
  networks: {
    seploia: {
      url:'https://eth-sepolia.g.alchemy.com/v2/ISlSg5wCo1nzMdEKunzaAQiqXre2uLJ4',
      accounts: ["309dd832f48d43db3a10ccb3915c474374aea89ca9274357784a7ac0005f31ec"]

    }
  }
};

