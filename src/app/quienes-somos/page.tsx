"use client";

import { Box, Heading, Text, Stack, Flex, Icon } from "@chakra-ui/react";
import { HeadingSection } from "@/components/ui/heading";
import { FiCheckCircle, FiEye, FiStar, FiTarget } from "react-icons/fi";

export default function QuienesSomos() {
  return (
    <Box w="100%" minH="100vh" bg="black" pt={5}>

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
                  ¿Quiénes Somos?
                </Heading>

     {/* CONTENIDO PRINCIPAL — FONDO NEGRO */}
      <Box bg="black" color="white" px={{ base: 6, md: 12 }} py={5}>

        {/* Misión */}
        <Stack padding={6} mb={5} divideY="2px">
          <Flex align="center" gap={3}>
            <Icon as={FiTarget} w={7} h={7} color="teal.200" />
            <Heading size="2xl" fontWeight={'bold'}>Misión</Heading>
          </Flex>

          <Text fontSize="lg" lineHeight="1.8" opacity={0.9}>
            Fabricamos productos confiables, duraderos y de alta calidad para la
            protección contra sobretensiones y descargas atmosféricas, con el fin
            de garantizar tanto la continuidad operativa de nuestros clientes como
            la seguridad de sus instalaciones.
            <br /><br />
            Nuestro compromiso es mantener procesos de producción eficientes,
            cumpliendo con los estándares y normativas vigentes para asegurar
            productos duraderos y eficientes que reflejen nuestra experiencia y
            compromiso con la excelencia.
          </Text>
        </Stack>

        

        {/* Visión */}
        <Stack padding={6} py={5} divideY="2px">
          <Flex align="center" gap={3}>
            <Icon as={FiEye} w={7} h={7} color="teal.200" />
            <Heading size="2xl" fontWeight={'bold'}>Visión</Heading>
          </Flex>

          <Text fontSize="lg" lineHeight="1.8" opacity={0.9}>
            Consolidarnos como una empresa líder en la fabricación de pararrayos
            y protectores contra sobretensión, reconocida por la calidad,
            confiabilidad y tecnología de nuestros productos, convirtiéndonos en
            un referente en el sector.
          </Text>
        </Stack>

        

        {/* VALORES */}
        <Box padding={6} py={16} divideY="2px">
          <Flex align="center" gap={3} mb={8}>
            <Icon as={FiStar} w={7} h={7} color="teal.200" />
            <Heading size="2xl" fontWeight={'bold'}>Valores</Heading>
          </Flex>

          <Stack padding={10}>
            {/* Calidad */}
            <Box>
              <Flex align="center" gap={2} mb={2}>
                <Icon as={FiCheckCircle} w={6} h={6} color="teal.200" />
                <Heading size="xl" fontWeight={'bold'}>Calidad</Heading>
              </Flex>
              <Text fontSize="lg" opacity={0.9}>
                Productos que cumplen con las más altas exigencias técnicas y
                normativas.
              </Text>
            </Box>

            

            {/* Trayectoria */}
            <Box>
              <Flex align="center" gap={2} mb={2}>
                <Icon as={FiCheckCircle} w={6} h={6} color="teal.200" />
                <Heading size="xl" fontWeight={'bold'}>Trayectoria</Heading>
              </Flex>
              <Text fontSize="lg" opacity={0.9}>
                Más de 20 años de experiencia respaldan nuestra mejora constante
                y dedicación.
              </Text>
            </Box>

            

            {/* Compromiso */}
            <Box>
              <Flex align="center" gap={2} mb={2}>
                <Icon as={FiCheckCircle} w={6} h={6} color="teal.200" />
                <Heading size="xl" fontWeight={'bold'}>Compromiso</Heading>
              </Flex>
              <Text fontSize="lg" opacity={0.9}>
                Actuamos con responsabilidad, brindando confianza y respaldo en
                cada producto.
              </Text>
            </Box>

            

            {/* Seriedad */}
            <Box>
              <Flex align="center" gap={2} mb={2}>
                <Icon as={FiCheckCircle} w={6} h={6} color="teal.200" />
                <Heading size="xl" fontWeight={'bold'}>Seriedad</Heading>
              </Flex>
              <Text fontSize="lg" opacity={0.9}>
                Cumplimos con cada compromiso, priorizando la transparencia y la
                confianza.
              </Text>
            </Box>
          </Stack>
        </Box>

      </Box>
    </Box>
  );
}
