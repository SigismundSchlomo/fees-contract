const Fees = artifacts.require("Fees");

module.exports = function(deployer) {
  deployer.deploy(Fees);
};
