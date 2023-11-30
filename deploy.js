const Web3 = require('web3');

const WEB3_RPC = process.env.WEB3_RPC;
const WEB3_NODEPRIVATEKEY = process.env.WEB3_NODEPRIVATEKEY;

const DEFAULT_GAS = 6000000;
const BlockRewardsProxy2Json = require('./contracts/BlockRewardsProxy2.json');

async function deployContract(web3, json, args = [], options = {}) {
  return new web3.eth.Contract(json.abi, undefined, {
    gas: DEFAULT_GAS,
    gasPrice: web3.utils.toWei('1', 'gwei')
  }).deploy({data: json.bytecode, arguments: args})
    .send({
      from: web3.eth.defaultAccount,
      gas: DEFAULT_GAS,
      ...options
    });
}

async function deploy()
{
    const account = web3.eth.accounts.privateKeyToAccount(WEB3_NODEPRIVATEKEY);
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;
    console.log('Default address:', web3.eth.defaultAccount);

    const contract = await deployContract(web3, BlockRewardsProxy2Json);
    console.log('Address:', contract.options.address);
}

const web3 = new Web3(WEB3_RPC);

deploy().catch(error => { console.log(error); });
