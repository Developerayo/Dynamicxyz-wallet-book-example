import React from 'react';
import { Box, VStack, Button, Heading, Text, IconButton } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { ethers } from 'ethers';
import MultiWallet from './MultiWallet';

function DynamicWallet({ wallet, onDelete }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      padding="4"
      shadow="md"
      backgroundColor="white"
      width="100%"
    >
      <Text fontWeight="bold">Wallet Address:</Text>
      <Text>{wallet.address}</Text>
      <Text fontWeight="bold">Private Key:</Text>
      <Text>{wallet.privateKey}</Text>
      <IconButton
        icon={<DeleteIcon />}
        variant="outline"
        colorScheme="red"
        aria-label="Remove Wallet"
        onClick={onDelete}
        float="right"
      />
    </Box>
  );
}

function App() {
  const [wallets, setWallets] = React.useState([]);
  const multiWallet = React.useRef(new MultiWallet());

  const addWallet = () => {
    const randomWallet = ethers.Wallet.createRandom();
    multiWallet.current.addWallet(randomWallet.privateKey);
    setWallets([...wallets, randomWallet]);
  };

  const removeWallet = (walletToRemove) => {
    multiWallet.current.removeWallet(walletToRemove.address);
    setWallets(wallets.filter((wallet) => wallet.address !== walletToRemove.address));
  };

  return (
    <Box>
      <VStack spacing={4} paddingTop="8" alignItems="center">
        <Heading>DynamicXYZ Wallet-Book with @Multi-Wallet</Heading>
        <Button leftIcon={<AddIcon />} onClick={addWallet} colorScheme="teal">
          Initate Wallet
        </Button>
        {wallets.map((wallet, index) => (
          <DynamicWallet key={index} wallet={wallet} onDelete={() => removeWallet(wallet)} />
        ))}
      </VStack>
    </Box>
  );
}

export default App;
