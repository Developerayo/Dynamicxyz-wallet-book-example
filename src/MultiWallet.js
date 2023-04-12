import { Wallet } from 'ethers';

class MultiWallet {
  constructor() {
    this.wallets = [];
  }

  addWallet(privateKey) {
    const wallet = new Wallet(privateKey);
    this.wallets.push(wallet);
  }

  removeWallet(address) {
    this.wallets = this.wallets.filter((wallet) => wallet.address !== address);
  }
}

export default MultiWallet;
