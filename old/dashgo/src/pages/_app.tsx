import { SidebarDrawerProvider } from '@/context/SidebarDrawerContext';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}
