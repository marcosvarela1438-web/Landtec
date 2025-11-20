"use client";

import { Box, Text, Heading, VStack, HStack, Icon, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FlaskConical, Shield, BookOpen, Zap, Target } from "lucide-react";

const MotionBox = motion(Box);

export default function NuestraHistoria() {
  return (
    <Box  w="100%" minH="100vh" bg="black" pt={5}>

      {/* Encabezado */}
      <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '4xl' }}
                  fontWeight="extrabold"
                  bgGradient="linear(to-r, blue.400, cyan.400)"
                  bgClip="text"
                  color={'white'}
                  textAlign={'center'}
                //   mb={10}
                >
                  Nuestra Historia
                </Heading>

      {/* Fondo oscuro del cuerpo */}
      <Box bg="black" color="white" py={6} px={6}>

        {/* Timeline principal */}
        <VStack padding={16} maxW="1000px" mx="auto">

          {/* Sección 1 */}
          <MotionBox
            w="100%"
            display="flex"
            alignItems="center"
            gap={8}
            flexDir={{ base: "column", md: "row" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            divideY="2px"
          >
            <Image
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              alt="Fundación"
              borderRadius="md"
              w={{ base: "100%", md: "45%" }}
              h="260px"
              objectFit="cover"
            />

            <VStack align="start" padding={3}>
              <HStack>
                <Icon as={BookOpen} boxSize={7} color="cyan.300" />
                <Heading fontSize="2xl">Los comienzos (Década de 1990)</Heading>
              </HStack>
              <Text lineHeight="1.7" fontSize="lg">
                Landtec SRL nace en Córdoba, Argentina, de un grupo de profesionales convencidos
                de que podían ofrecer soluciones reales en seguridad eléctrica, protección contra rayos,
                sobretensiones y sistemas de puesta a tierra, tanto para la industria como para el hogar.
              </Text>
            </VStack>
          </MotionBox>

          {/* <Divider borderColor="gray.700" /> */}

          {/* Sección 2 */}
          <MotionBox
            w="100%"
            display="flex"
            alignItems="center"
            gap={8}
            flexDir={{ base: "column-reverse", md: "row" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            divideY="2px"
          >
            <VStack align="start" padding={3}>
              <HStack>
                <Icon as={FlaskConical} boxSize={7} color="green.300" />
                <Heading fontSize="2xl">Investigación y Desarrollo</Heading>
              </HStack>
              <Text lineHeight="1.7" fontSize="lg">
                Desde el comienzo, Landtec adoptó un enfoque innovador,
                realizando investigaciones y desarrollos que fueron verificados por instituciones de prestigio:
                UNC - FAMAF, INTI, CEFIS, Laboratorio de Alta Tensión, CEPROCOR,
                Agencia Córdoba Ciencia y Laboratorio de Electroquímica.
              </Text>
            </VStack>

            <Image
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Investigaciones"
              borderRadius="md"
              w={{ base: "100%", md: "45%" }}
              h="260px"
              objectFit="cover"
            />
          </MotionBox>

          {/* <Divider borderColor="gray.700" /> */}

          {/* Sección 3 */}
          <MotionBox
            w="100%"
            display="flex"
            alignItems="center"
            gap={8}
            flexDir={{ base: "column", md: "row" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            divideY="2px"
          >
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Productos"
              borderRadius="md"
              w={{ base: "100%", md: "45%" }}
              h="260px"
              objectFit="cover"
            />

            <VStack align="start" padding={3}>
              <HStack>
                <Icon as={Shield} boxSize={7} color="yellow.300" />
                <Heading fontSize="2xl">Especialización y Crecimiento</Heading>
              </HStack>
              <Text lineHeight="1.7" fontSize="lg">
                La empresa se especializó en la fabricación de pararrayos, sistemas de puesta a tierra
                y protectores contra sobretensiones, ofreciendo además asesoramiento profesional de alto nivel.
              </Text>
            </VStack>
          </MotionBox>

          {/* <Divider borderColor="gray.700" /> */}

          {/* Sección 4 – Mercado actual */}
          <MotionBox
            w="100%"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            divideY="2px"
          >
            <VStack align="start" padding={4}>
              <HStack>
                <Icon as={Zap} boxSize={7} color="red.300" />
                <Heading fontSize="2xl">Un mercado específico, una misión clara</Heading>
              </HStack>
              <Text lineHeight="1.7" fontSize="lg">
                Hoy, Landtec se orienta a un mercado especializado: la protección de sistemas eléctricos
                y electrónicos contra daños originados por fenómenos atmosféricos o maniobras en la red.
              </Text>
              <Text lineHeight="1.7" fontSize="lg">
                En su catálogo se encuentran pararrayos, puestas a tierra, protecciones contra sobretensiones
                y otros elementos relacionados, todos desarrollados con precisión y respaldo técnico.
              </Text>
            </VStack>
          </MotionBox>

          {/* <Divider borderColor="gray.700" /> */}

          {/* Lema final */}
          <MotionBox
            textAlign="center"
            py={10}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HStack justify="center" mb={3}>
              <Icon as={Target} color="cyan.300" boxSize={9} />
            </HStack>

            <Heading fontSize="3xl" fontWeight="bold" color="cyan.300">
              “PROTEGER ES NUESTRO TRABAJO”
            </Heading>

            <Text mt={3} fontSize="lg" color="gray.300">
              Un principio que nos acompaña desde el primer día.
            </Text>
          </MotionBox>

        </VStack>
      </Box>
    </Box>
  );
}
