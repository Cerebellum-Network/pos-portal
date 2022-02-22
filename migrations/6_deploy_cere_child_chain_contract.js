const ChildERC20 = artifacts.require('ChildERC20')

const utils = require('./utils')

const CHILD_CHAIN_MANAGER_ADDRESS = process.env.CHILD_CHAIN_MANAGER_ADDRESS

module.exports = async(deployer) => {
  deployer.then(async() => {
    if (!CHILD_CHAIN_MANAGER_ADDRESS) {
      throw new Error(`Unknown child chain manager address`);
    }

    await deployer.deploy(ChildERC20, 'CERE Network', 'CERE', 10, CHILD_CHAIN_MANAGER_ADDRESS)

    const contractAddresses = utils.getContractAddresses()

    contractAddresses.child.DummyERC20 = ChildERC20.address

    utils.writeContractAddresses(contractAddresses)
  })
}
