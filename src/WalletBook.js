import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import MultiWallet from './MultiWallet';
import { Contract, utils } from 'ethers';

function WalletBook({ provider }) {
  const [balances, setBalances] = React.useState([]);

  React.useEffect(() => {
    if (!provider) return;

    const multiWallet = new MultiWallet();
    multiWallet.addWallet('0x0');
    multiWallet.addWallet('0x0');

    const contract = new Contract('0x0', [], provider);

    const fetchBalances = async () => {
      const newBalances = [];

      for (const wallet of multiWallet.wallets) {
        const balance = await contract.balanceOf(wallet.address);
        newBalances.push(utils.formatEther(balance));
      }

      setBalances(newBalances);
    };

    fetchBalances();
  }, [provider]);

  return (
    <VStack spacing={4} paddingTop="8">
      {balances.map((balance, index) => (
        <Box key={index}>
          <Text>Wallet {index + 1}: {balance} ETH</Text>
        </Box>
      ))}
    </VStack>
  );
}

export default WalletBook;