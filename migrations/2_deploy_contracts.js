const CarDetails = artifacts.require("./CarDetails.sol");

module.exports = function (deployer) {
  deployer.deploy(CarDetails);
};
