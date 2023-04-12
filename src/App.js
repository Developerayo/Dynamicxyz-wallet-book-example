import React from "react";
import "./styles.css";
import { Box, VStack, Button, Heading, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ethers } from "ethers";

function DynamicWallet({ wallet }) {
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
    </Box>
  );
}

function App() {
  const [wallets, setWallets] = React.useState([]);

  const addWallet = async () => {
    const randomWallet = ethers.Wallet.createRandom();
    setWallets([...wallets, randomWallet]);
  };

  return (
    <Box>
      <VStack spacing={4} paddingTop="8" alignItems="center">
        <Heading>Dynamic Wallet-Book Example</Heading>
        <Button leftIcon={<AddIcon />} onClick={addWallet} colorScheme="teal">
          Add Wallet
        </Button>
        {wallets.map((wallet, index) => (
          <DynamicWallet key={index} wallet={wallet} />
        ))}
      </VStack>
    </Box>
  );
}

export default App;
