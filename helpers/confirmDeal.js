const Web3 = require('web3');
const web3 = new Web3('wss://ropsten.infura.io/ws');
const config = require('./config');

async function confirmDeal() {
  const contract = new web3.eth.Contract(config.swapContract.abi, config.swapContract.address);
  const method = contract.methods.confirmDeal(process.argv[2]);

  const txInput = {
    to: config.swapContract.address,
    gas: 300000,
    gasPrice: web3.utils.toWei('100', 'gwei'),
    data: method.encodeABI()
  };

  web3.eth.accounts.signTransaction(txInput, process.env.INITIATOR_PK).then(transaction => {
    web3.eth.sendSignedTransaction(transaction.rawTransaction)
      .on('transactionHash', (transactionHash) => {
        console.log(`txhash: ${ transactionHash }`);
      })
      .on('error', (error) => {
        console.log(error);
        process.exit();
      })
      .catch((error) => {
        console.log(error);
        process.exit();
      })
      .then((receipt) => {
        console.log('deal confirmed');
        console.log(receipt);
        process.exit();
      });
  });
}

confirmDeal();
