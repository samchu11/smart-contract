var contractABI = [];
var contractAddress = '0xFc6fbaA4491efcB6f2Fb6191f5089c6FF657CA57';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);
