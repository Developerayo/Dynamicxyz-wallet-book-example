import React from 'react';
import { Box, Button, VStack, Heading } from '@chakra-ui/react';
import { ethers } from 'ethers';
import SdkApi from '@dynamic-labs/sdk-api';

function Login({ onLogin }) {
  const [provider, setProvider] = React.useState(null);

  React.useEffect(() => {
    if (window.ethereum) {
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    }
  }, []);

  const handleLogin = async () => {
    if (!provider) {
      alert('Please install MetaMask or another compatible wallet to proceed.');
      return;
    }

    try {
      const sdk = new SdkApi(provider);
      await sdk.connect();
      onLogin();
    } catch (err) {
      console.error(err);
      alert('Error logging in. Please try again.');
    }
  };

  return (
    <VStack spacing={4} paddingTop="8" alignItems="center">
      <Heading>DynamicXYZ Wallet-Book with @Multi-Wallet</Heading>
      <Box>
        <Button onClick={handleLogin} colorScheme="teal">
          Login with Wallet
        </Button>
      </Box>
    </VStack>
  );
}

export default Login;
