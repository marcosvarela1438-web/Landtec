"use client";

import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Menu,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  FaChevronDown,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../../../public/logo_negro.png";
import { useEffect, useState } from "react";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Productos", href: "/productos" },
  { name: "Fichas Técnicas", href: "/fichas-tecnicas" },
  { name: "Contacto", href: "/#contacto" },
];

const productos = [
  {
    name: "Protectores contra Sobretension",
    href: "/protectores-contra-sobretension",
  },
  // { name: "Descargas Atmosfericas", href: "/descargas-atmosfericas" },
  { name: "Pararrayos", href: "/pararrayos" },
  { name: "Puesta a Tierra", href: "/puesta-a-tierra" },
  { name: "Vias de Chispas", href: "/vias-de-chispas" },
];

const nosotros = [
  { name: "Quiénes Somos", href: "/quienes-somos" },
  { name: "Nuestra Historía", href: "/nuestra-historia" },
];

export default function Footer() {
  //  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <Box bg="#000" color="white" textAlign={"center"}>
      <Flex
  direction={{ base: "column", md: "row" }}
  mx={5}
  justify={{ base: "flex-start", md: "space-between" }}
  w="100%"
  p={5}
  gap={{ base: 10, md: 0 }}
>
  {/* 🔹 NAV - Links */}
  <Flex w={{ base: "100%", md: "33%" }}>
    <VStack
      as="nav"
      padding={1}
      align={{ base: "center", md: "flex-start" }}
      
      w="100%"
    >
      {links.map((link) => {
        const isActive = currentPath === link.href;

        if (link.name === "Productos" || link.name === "Nosotros") {
          const items = link.name === "Productos" ? productos : nosotros;
          const [openProductos, setOpenProductos] = useState(false);

          return (
            <Menu.Root
              key={link.name}
              open={openProductos}
              onOpenChange={(details) => setOpenProductos(details.open)}
            >
              <Menu.Trigger asChild p={0}>
                <Button
                  variant="ghost"
                  color="white"
                  fontSize={18}
                  fontWeight="normal"
                  bg="none"
                  position="relative"
                  onClick={() => setOpenProductos(!openProductos)}
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: openProductos ? "100%" : "0%",
                    height: "2px",
                    backgroundColor: "white",
                    transition: "width 0.3s ease-in-out",
                  }}
                  _hover={{ _after: { width: "100%" }, bg: "none" }}
                  _active={{ bg: "transparent" }}
                >
                  {link.name}
                  <FaChevronDown style={{ marginLeft: 6 }} />
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
            color="white"
            fontSize={18}
            whiteSpace="nowrap"
            position="relative"
            textDecoration="none"
            _after={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: isActive ? "100%" : "0%",
              height: "2px",
              backgroundColor: "white",
              transition: "width 0.3s ease-in-out",
            }}
            _hover={{ _after: { width: "100%" } }}
          >
            {link.name}
          </Link>
        );
      })}
    </VStack>
  </Flex>

  {/* 🔹 LOGO — oculto en mobile */}
  <Flex display={{ base: "none", md: "flex" }} w="40%" justify="center">
    <Image src={Logo.src} w="100%" h="50%" my={10} />
  </Flex>

  {/* 🔹 CONTACTO */}
  <Flex w={{ base: "100%", md: "33%" }} justify={{ base: "center", md: "flex-end" }}>
    <VStack
      align={{ base: "center", md: "flex-start" }}
  
      padding={4}
      color="white"
    >
      {/* Email */}
      <Link href="mailto:ventas@landtec.com.ar" _hover={{ color: "white" }} color={'white'}>
        <HStack>
          <Icon as={EmailIcon} boxSize={5} />
          <Text>ventas@landtec.com.ar</Text>
        </HStack>
      </Link>

      {/* Dirección */}
      <Link
        href="https://www.google.com/maps?q=Administraci%C3%B3n+y+Ventas:+Jer%C3%B3nimo+Cortez+727,+Alta+C%C3%B3rdoba,+C%C3%B3rdoba,+Argentina"
        target="_blank"
        _hover={{ color: "white" }} color={'white'}
      >
        <HStack>
          <Icon as={FaMapMarkerAlt} boxSize={5} />
          <Text>Administración y Ventas</Text>
        </HStack>
      </Link>

      {/* WhatsApp */}
      <Link
        href="https://wa.me/5491123456789?text=Hola!%20Quisiera%20consultar%20por%20el%20área%20de%20ventas."
        target="_blank"
        _hover={{ color: "white" }} color={'white'}
      >
        <HStack>
          <Icon as={FaWhatsapp} boxSize={5} />
          <Text>Contactar área de ventas</Text>
        </HStack>
      </Link>

      {/* Instagram */}
      <Link
        href="https://www.instagram.com/miempresa"
        target="_blank"
        _hover={{ color: "white" }} color={'white'}
      >
        <HStack>
          <Icon as={FaInstagram} boxSize={5} />
          <Text>@miempresa</Text>
        </HStack>
      </Link>
    </VStack>
  </Flex>
</Flex>


      <Text fontSize="sm" px={2}>
        LANDTEC S.R.L. © {new Date().getFullYear()}. Todos los derechos reservados.
      </Text>
    </Box>
  );
}
