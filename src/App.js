import React from 'react';
import { Box } from '@chakra-ui/react';
import Login from './Login';
import WalletBook from './WalletBook';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Box>
      {loggedIn ? (
        <WalletBook />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </Box>
  );
}

export default App;
