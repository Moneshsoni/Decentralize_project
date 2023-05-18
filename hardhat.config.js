require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:{
    compilers:[
      {
        version: "0.8.9",
      },
      {
        version: "0.8.2"
      }
    ]
  },

  networks:{
    hardhat:{
      chainId:1337,
    },
  },
  paths:{
    artifacts:"./file-storage/src/artifacts",
  },
};
