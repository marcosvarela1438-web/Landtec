'use client';

import { IconButton, Link } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5491123456789?text=Hola!%20Quisiera%20más%20información%20sobre%20sus%20productos."
    //   isExternal
      position="fixed"
      bottom="30px"
      right="30px"
      zIndex={1000}
    >
      <IconButton
        // icon={<FaWhatsapp />}
        colorScheme="whatsapp"
        aria-label="WhatsApp"
        size="2xl"
        borderRadius={'50%'}
        bg={'green'}
        // isRound
        boxShadow="lg"
        _hover={{ transform: 'scale(1.3)' }}
      ><FaWhatsapp/></IconButton>
    </Link>
  );
}
