import {
  Box,
  Flex,
  IconButton,
  HStack,
  Link,
  useDisclosure,
  Stack,
  Image,
  Portal,
  Button,
  Menu,
} from '@chakra-ui/react';
import { IoMdMenu } from 'react-icons/io';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo2 from '../../../public/logo_negro.png';
import { FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Productos', href: '/productos' },
  { name: 'Fichas Técnicas', href: '/fichas-tecnicas' },
  { name: 'Contacto', href: '/#contacto' },
];

  const productos = [
    { name: "Protectores contra Sobretension", href: "/protectores-contra-sobretension" },
    { name: "Descargas Atmosfericas", href: "/descargas-atmosfericas" },
    { name: "Pararrayos", href: "/pararrayos" },
    { name: "Puesta a Tierra", href: "/puesta-a-tierra" },
    { name: "Vias de Chispas", href: "/vias-de-chispas" },
  ];

  const nosotros = [
    { name: "Quiénes Somos", href: "/quienes-somos" },
    { name: "Nuestra Historía", href: "/nuestra-historia" }
  ];

const MotionBox = motion(Box);

export default function Header() {
  const { open, onToggle } = useDisclosure();
  // const currentPath =
  //   typeof window !== 'undefined' ? window.location.pathname : '';
  const [currentPath, setCurrentPath] = useState('');

useEffect(() => {
  setCurrentPath(window.location.pathname);
}, []);

  return (
    <Box
      bg="#000"
      color="white"
      px={6}
      py={3}
      shadow="md"
      position="sticky"
      top={0}
      zIndex={1000}
      borderBottom="1px solid white"
    >
      <Flex align="center" justify="space-between">
        {/* LOGO */}
        <Box fontWeight="bold" fontSize="lg">
          <Image src={Logo2.src} w={{ base: '70%', lg: '60%' }} />
        </Box>

        {/* NAV DESKTOP */}
        <HStack as="nav" display={{ base: 'none', md: 'flex' }} padding={6}>
          {links.map((link) => {
            const isActive = currentPath === link.href;

            if (link.name === 'Productos' || link.name === 'Nosotros') {
      const items = link.name === 'Productos' ? productos : nosotros;
               const [openProductos, setOpenProductos] = useState(false);
              return (
                <Menu.Root
      key={link.name}
      open={openProductos}
      onOpenChange={(details) => setOpenProductos(details.open)}
    >
      <Menu.Trigger asChild>
        <Button
          variant="ghost"
          color="white"
          fontSize={18}
          fontWeight="normal"
          bg={'none'}
          position="relative"
          onMouseEnter={() => setOpenProductos(true)}
          onMouseLeave={() => setOpenProductos(false)}
          _after={{
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: openProductos ? '100%' : '0%',
            height: '2px',
            backgroundColor: 'white',
            transition: 'width 0.3s ease-in-out',
          }}
          _hover={{
            _after: { width: '100%' },
            bg: 'none',
          }}
          _active={{ bg: 'transparent' }}
        >
          {link.name}
          <FaChevronDown />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content
            onMouseEnter={() => setOpenProductos(true)}
            onMouseLeave={() => setOpenProductos(false)}
            bg="gray.900"
            border="1px solid"
            borderColor="gray.700"
            rounded="md"
            shadow="lg"
            py={2}
            zIndex={2000}
          >
            {items.map((p) => (
              <Link
                key={p.name}
                as={NextLink}
                href={p.href}
                display="block"
                px={4}
                py={2}
                color="gray.100"
                _hover={{ bg: "gray.700", color: "teal.200" }}
                textAlign="left"
              >
                {p.name}
              </Link>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
                </Menu.Root>
              );
            }

            return (
              <Link
                as={NextLink}
                key={link.name}
                href={link.href}
                py={2}
                px={4}
                color="white"
                fontSize={18}
                position="relative"
                textDecoration="none"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: isActive ? '100%' : '0%',
                  height: '2px',
                  backgroundColor: 'white',
                  transition: 'width 0.3s ease-in-out',
                }}
                _hover={{
                  _after: { width: '100%' },
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </HStack>

        {/* MENU MOBILE */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          variant="ghost"
          color="white"
          aria-label="Abrir menú"
        >
          <IoMdMenu />
        </IconButton>
      </Flex>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <MotionBox
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            bg="gray.200"
            rounded="md"
            mt={2}
            p={4}
            display={{ md: 'none' }}
          >
            <Stack padding={4}>
              {links.map((link) => (
                <Link
                  fontWeight="bold"
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
