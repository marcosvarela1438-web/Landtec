"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Thunder1 from "../../../public/Thunder1.jpg";
import Thunder2 from "../../../public/Thunder2.jpg";
import Thunder3 from "../../../public/Thunder3.jpg";
import Thunder4 from "../../../public/Thunder4.jpg";
import { TypeAnimation } from "react-type-animation";

const images = [Thunder1, Thunder2, Thunder3, Thunder4];
const MotionImage = motion(Image);
const MotionVStack = motion(VStack);

export default function HomeSection() {
  const [index, setIndex] = useState(0);

  // Siempre rota imágenes, sin importar el breakpoint
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      7000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      mx={{ base: "4%", md: "5%" }}
      py={8}
      direction={{ base: "column", md: "row" }}
      w="90%"
      gap={{ base: 8, md: 10 }}
      align="center"
      color="white"
    >
      {/* TEXTO */}
      <Flex
        direction="column"
        w={{ base: "100%", md: "50%" }}
        gap={8}
        mb={{ base: 10, md: 0 }}
      >
        <MotionVStack
          padding={4}
          position="relative"
          zIndex={1}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          gap={6}
          align="start"
        >
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            textTransform="uppercase"
          >
            MÁXIMA TECNOLOGÍA EN PROTECCIÓN CONTRA RAYOS
          </Heading>

          <Text
          alignSelf={'center'}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="semibold"
            color="blue.300"
            minH="32px"
          >
            <TypeAnimation
              sequence={[
                "Innovación y confianza para la seguridad eléctrica.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </Text>

          <Text fontSize={{ base: "md", md: "lg" }} color="gray.200" maxW="800px">
            En <strong>LANDTEC S.R.L.</strong>, desarrollamos y fabricamos
            sistemas de protección contra sobretensiones y descargas
            atmosféricas. Más de 20 años de experiencia nos respaldan,
            garantizando calidad, asesoramiento y certificaciones IRAM.
          </Text>
        </MotionVStack>
      </Flex>

      {/* IMAGEN SIEMPRE CON ROTACIÓN */}
      <Flex w={{ base: "100%", md: "50%" }} justify="center">
        <Box position="relative" w="100%" overflow="hidden">
          <AnimatePresence mode="wait">
            <MotionImage
              key={images[index].src}
              src={images[index].src}
              alt={`Thunder ${index + 1}`}
              w="100%"
              borderRadius="xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            />
          </AnimatePresence>
        </Box>
      </Flex>
    </Flex>
  );
}
