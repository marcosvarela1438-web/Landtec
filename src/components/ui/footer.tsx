"use client";

import { EmailIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Icon, Image, Link, Menu, Portal, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaChevronDown, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Logo from '../../../public/logo_negro.png'
import { useEffect, useState } from "react";

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/fichas-tecnicas' },
  { name: 'Productos', href: '/productos' },
  { name: 'Fichas Técnicas', href: '/fichas-tecnicas' },
  { name: 'Contacto', href: '/#contacto' },
];

  const productos = [
    { name: "Barreras Protectoras", href: "/barreras-protectoras" },
    { name: "Descargas Atmosfericas", href: "/descargas-atmosfericas" },
    { name: "Electrodos Dinamicos", href: "/electrodos-dinamicos" },
    { name: "Vias de Chispas", href: "/vias-de-chispas" },
  ];

export default function Footer() {

        //  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
           const [currentPath, setCurrentPath] = useState('');
         
         useEffect(() => {
           setCurrentPath(window.location.pathname);
         }, []);

  return (
    <Box bg="#000" color="white" textAlign={'center'}>
      <Flex mx={5} justify={'space-between'} w={'100%'} ml={{base: '0%', md: '0%'}} p={5}>
        <Flex>
          <VStack
            as="nav"
            padding={1}
            align="flex-start"
            display={{ base: "flex", md: "flex" }}
          >
            {links.map((link) => {
              const isActive = currentPath === link.href;

              if (link.name === 'Productos') {
                            return (
                              <Menu.Root key={link.name}>
                                <Menu.Trigger asChild p={0}>
                                  <Button
                                    variant="ghost"
                                    color="white"
                                    fontSize={18}
                                    fontWeight="normal"
                                    bg={'none'}
                                    position="relative"
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
                                      bg:'none'
                                    }}
                                    _active={{ bg: 'transparent' }}
                                  >
                                     {link.name}<FaChevronDown />
                                  </Button>
                                </Menu.Trigger>
              
                                <Portal>
                                  <Menu.Positioner>
                              <Menu.Content
                                bg="gray.900"
                                border="1px solid"
                                borderColor="gray.700"
                                rounded="md"
                                shadow="lg"
                                py={2}
                                zIndex={2000}
                              >
                                {productos.map((p) => (
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
            // paddingY={2}
            // paddingX={5}
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
          </VStack>
        </Flex>

        <Flex display={{base: 'none', md: 'flex'}}>
          <Image src={Logo.src} w={'50%'} h={'50%'} ml={'30%'} my={10}/>
        </Flex>

        <Flex>

            <VStack align="flex-start" padding={4} color="white">
      {/* 📧 Correo */}
      <Link
        href="mailto:ventas@landtec.com.ar"
        display="flex"
        alignItems="center"
        _hover={{ color: 'teal.200' }}
      >
        <HStack color='white'>
          <Icon as={EmailIcon} boxSize={5} />
          <Text>ventas@landtec.com.ar</Text>
        </HStack>
      </Link>

      {/* 📍 Ubicación */}
      <Link
        href="https://www.google.com/maps?q=Administraci%C3%B3n+y+Ventas:+Jer%C3%B3nimo+Cortez+727,+Alta+C%C3%B3rdoba,+C%C3%B3rdoba,+Argentina"
  target="_blank"
        display="flex"
        alignItems="center"
        _hover={{ color: 'teal.200' }}
      >
        <HStack color='white'>
          <Icon as={FaMapMarkerAlt} boxSize={5} />
          <Text>Administración y Ventas</Text>
        </HStack>
      </Link>

      {/* 💬 WhatsApp */}
      <Link
        href="https://wa.me/5491123456789?text=Hola!%20Quisiera%20consultar%20por%20el%20área%20de%20ventas."
  target="_blank"
        display="flex"
        alignItems="center"
        _hover={{ color: 'teal.200' }}
      >
        <HStack color='white'>
          <Icon as={FaWhatsapp} boxSize={5} />
          <Text>Contactar área de ventas</Text>
        </HStack>
      </Link>

      {/* 📸 Instagram */}
      <Link
        href="https://www.instagram.com/miempresa"
  target="_blank"
        display="flex"
        alignItems="center"
        _hover={{ color: 'teal.200' }}
      >
        <HStack color='white'>
          <Icon as={FaInstagram} boxSize={5} />
          <Text>@miempresa</Text>
        </HStack>
      </Link>
    </VStack>

        </Flex>
      </Flex>

      <Text fontSize="sm">
        LANDTEC S.R.L. © 2025. Todos los derechos reservados.
      </Text>
    </Box>
  );
}
