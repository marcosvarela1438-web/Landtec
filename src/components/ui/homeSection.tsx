"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Link,
  Input,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useColorModeValue } from "./color-mode";
import { FaWhatsapp } from "react-icons/fa";
import Thunder1 from '../../../public/Thunder1.jpg';
import Thunder2 from '../../../public/Thunder2.jpg';
import Thunder3 from '../../../public/Thunder3.jpg';
import Thunder4 from '../../../public/Thunder4.jpg';
import { TypeAnimation } from "react-type-animation";

const images = [Thunder1, Thunder2, Thunder3, Thunder4];
const MotionImage = motion(Image);
const MotionVStack = motion(VStack);

export default function HomeSection() {

      const [index, setIndex] = useState(0);
      const isDesktop = useBreakpointValue({ base: false, md: true });
    
      // Cambia de imagen cada 4 segundos solo si está en desktop
      useEffect(() => {
        if (!isDesktop) return;
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 7000);
        return () => clearInterval(interval);
      }, [isDesktop]);
return (
<Flex
      mx={'5%'}
      // my={'2%'}
      py={5}
        direction={{ base: 'column', md: 'row' }}
        w="90%"
        gap={{ base: '3%', md: '5%' }}
        align="center"
        color={'white'}
      >
        {/* Texto */}
        <Flex
          direction="column"
          w={{ base: '100%', md: '50%' }}
          gap="5%"
          mb={{ base: 6, md: 0 }}
        >
                <MotionVStack
        padding={4}
        position="relative"
        zIndex={1}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        gap={10}
      >
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}
          fontWeight="bold"
          lineHeight="shorter"
          textTransform="uppercase"
        >
          MÁXIMA TECNOLOGÍA EN PROTECCIÓN CONTRA RAYOS
        </Heading>

        <Text
          fontSize={{ base: 'lg', md: 'lg' }}
          fontWeight="semibold"
          color="blue.300"
          minH="30px" // asegura que el espacio no cambie durante la animación
        >
          <TypeAnimation
            sequence={[
              'Innovación y confianza para la seguridad eléctrica.', // texto a escribir
              2000, // espera 2 segundos
            ]}
            wrapper="span"
            speed={50}
            repeat={0} // no repite
          />
        </Text>

        <Text
          maxW="800px"
          fontSize={{ base: 'md', md: 'lg' }}
          color="gray.200"
        >
          En <strong>LANDTEC S.R.L.</strong>, desarrollamos y fabricamos sistemas
          de protección contra sobretensiones y descargas atmosféricas. Más de 20
          años de experiencia nos respaldan, garantizando calidad, asesoramiento
          y certificaciones IRAM.
        </Text>
      </MotionVStack>
        </Flex>

        {/* Imagen con transición */}
        <Flex w={{ base: '90%', md: '50%' }} justify="center">
          {isDesktop ? (
            <Box position="relative" w="100%" h="100%" overflow="hidden">
              <AnimatePresence mode="wait">
                <MotionImage
                  key={images[index].src}
                  src={images[index].src}
                  alt={`Thunder ${index + 1}`}
                  w="90%"
                  borderRadius="md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                />
              </AnimatePresence>
            </Box>
          ) : (
            // En móvil: una sola imagen fija
            <Image src={Thunder4.src} w="100%" borderRadius="md" />
          )}
        </Flex>
      </Flex>

        )
    }