'use client';

import {
  Box,
  Flex,
  IconButton,
  HStack,
  Link,
  useDisclosure,
  Stack,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { LuSearch } from 'react-icons/lu';
import { IoMdMenu } from 'react-icons/io';
import Logo from '../../../public/logo.jpg'
import Logo2 from '../../../public/logo_negro.png'
import { useRouter } from 'next/navigation';

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/fichas-tecnicas' },
  { name: 'Productos', href: '/productos' },
  { name: 'Fichas Técnicas', href: '/fichas-tecnicas' },
  { name: 'Contacto', href: '/fichas-tecnicas' },
];

const MotionBox = motion(Box);

export default function Header() {
  // const { open, onOpen, onClose } = useDisclosure();
    const { open, onToggle } = useDisclosure();
      // const router = useRouter();
       const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <Box bg='#000' color="white" px={6} py={3} shadow="md" position={'sticky'} top={0} zIndex={1000} borderBottom={'1px solid white'}>
      <Flex align="center" justify="space-between">
        {/* Ícono o logo */}
        <Box fontWeight="bold" fontSize="lg">
          <Image src={Logo2.src} w={{base:'70%', lg: '60%'}}/>
        </Box>

        {/* Menú de escritorio */}
     <HStack as="nav" display={{ base: 'none', md: 'flex' }} padding={2}>
      {links.map((link) => {
              const isActive = currentPath === link.href;

        return (
          <Link
            as={NextLink}
            key={link.name}
            href={link.href}
            paddingY={2}
            paddingX={5}
            color="white"
            fontSize={18}
            // fontWeight="bold"
            whiteSpace="nowrap"
            position="relative"
            textDecoration="none"
            _after={{
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: isActive ? '100%' : '0%',
              height: '2px', // más grosor
              backgroundColor: 'white',
              transition: 'width 0.3s ease-in-out',
            }}
            _hover={{
              _after: {
                width: '100%',
              },
            }}
          >
            {link.name}
          </Link>
        );
      })}
    </HStack>

        {/* Botón hamburguesa (solo móvil) */}
<IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          // icon={open ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          color="black"
          aria-label="Abrir menú"
        >
          <IoMdMenu  />
        </IconButton>
      </Flex>

      {/* Menú colapsable (solo móvil) */}
<AnimatePresence>
        {open && (
          <MotionBox
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            bg='gray.200'
            rounded="md"
            mt={2}
            p={4}
            display={{ md: 'none' }}
          >
            <Stack padding={4}>
              {links.map((link) => (
                <Link
                fontWeight={'bold'}
                  as={NextLink}
                  key={link.name}
                  href={link.href}
                  _hover={{ textDecoration: 'underline' }}
                  onClick={onToggle}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}
