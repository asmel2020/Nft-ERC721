const NftErc721 = artifacts.require("NftErc721");

module.exports = function (deployer) {
  deployer.deploy(NftErc721);
};
