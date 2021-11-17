import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '/config/theme/theme.js';
import { Box } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        position="fixed"
        overflow="auto"
        h="100vh"
        w="100%"
        background="rgba(17, 21, 52, 0.6)"
      >
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
