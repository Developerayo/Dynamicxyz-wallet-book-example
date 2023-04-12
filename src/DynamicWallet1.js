import React from 'react';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

function WalletItem({ wallet, onDelete }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      maxWidth="400px"
      borderWidth="1px"
      borderRadius="lg"
      padding="4"
      marginTop="4"
    >
      <Text fontWeight="bold">{wallet.address}</Text>
      <IconButton
        aria-label="Delete wallet"
        icon={<DeleteIcon />}
        onClick={onDelete}
        colorScheme="red"
      />
    </Box>
  );
}

export default WalletItem;
