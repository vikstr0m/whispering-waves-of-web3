const Web3 = require('web3');

class BlockchainConnector {
    constructor(rpcUrl) {
        this.web3 = new Web3(rpcUrl);
    }

    async getLatestBlock() {
        const latestBlock = await this.web3.eth.getBlock('latest');
        console.log(latestBlock);
        return latestBlock;
    }

    async getTransaction(txHash) {
        const transaction = await this.web3.eth.getTransaction(txHash);
        console.log(transaction);
        return transaction;
    }
}

module.exports = BlockchainConnector;
