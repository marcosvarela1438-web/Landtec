'use client';

import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from '@/components/ui/provider';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import WhatsAppButton from '@/components/ui/whatsappButton';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header></Header>
          {children}
          <WhatsAppButton/>
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  );
}