"use client";

import { Box, Heading, Text, Stack, Flex, Icon } from "@chakra-ui/react";
import { FiCheckCircle, FiEye, FiStar, FiTarget } from "react-icons/fi";

export default function QuienesSomos() {
  return (
    <Box w="100%" bg="black" pt={8}>
      
      {/* TÍTULO PRINCIPAL */}
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="extrabold"
        bgGradient="linear(to-r, blue.400, cyan.400)"
        bgClip="text"
        textAlign="center"
        mb={10}
      >
        ¿Quiénes Somos?
      </Heading>

      {/* CONTENIDO */}
      <Box
        maxW="900px"
        mx="auto"
        px={{ base: 5, md: 10 }}
        pb={14}
        color="white"
      >
        {/* MISIÓN */}
        <Stack padding={5} py={6} borderTop="1px" borderColor="gray.700">
          <Flex align="center" gap={3}>
            <Icon as={FiTarget} w={7} h={7} color="teal.200" />
            <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              Misión
            </Heading>
          </Flex>

          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" opacity={0.9}>
            Fabricamos productos confiables, duraderos y de alta calidad para la protección contra
            sobretensiones y descargas atmosféricas, garantizando tanto la continuidad operativa de
            nuestros clientes como la seguridad de sus instalaciones.
            <br /><br />
            Nos comprometemos a mantener procesos de producción eficientes, cumpliendo con los
            estándares y normativas vigentes para asegurar productos duraderos y de alto rendimiento,
            reflejando nuestra experiencia y dedicación a la excelencia.
          </Text>
        </Stack>

        {/* VISIÓN */}
        <Stack padding={5} py={6} borderTop="1px" borderColor="gray.700">
          <Flex align="center" gap={3}>
            <Icon as={FiEye} w={7} h={7} color="teal.200" />
            <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              Visión
            </Heading>
          </Flex>

          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" opacity={0.9}>
            Consolidarnos como una empresa líder en la fabricación de pararrayos y protectores contra
            sobretensión, reconocida por su calidad, confiabilidad y tecnología, convirtiéndonos en un
            referente del sector.
          </Text>
        </Stack>

        {/* VALORES */}
        <Stack padding={5} py={10} borderTop="1px" borderColor="gray.700">
          <Flex align="center" gap={3}>
            <Icon as={FiStar} w={7} h={7} color="teal.200" />
            <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              Valores
            </Heading>
          </Flex>

          <Stack padding={8} pt={4}>
            {/* CALIDAD */}
            <Box>
              <Flex align="center" gap={2} mb={2}>
                <Icon as={FiCheckCircle} w={6} h={6} color="teal.200" />
                <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                  Calidad
                </Heading>
              </Flex>
              <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
                Productos que cumplen las más altas exigencias técnicas y normativas.
              </Text>
            </Box>

            {/* TRAYECTORIA */}
            <Box>
              <Flex align="center" gap={2} mb={2}>
                <Icon as={FiCheckCircle} w={6} h={6} color="teal.200" />
                <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                  Trayectoria
                </Heading>
              </Flex>
              <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
                Más de 20 años de experiencia respaldan nuestra mejora continua y dedicación.
              </Text>
            </Box>

            {/* COMPROMISO */}
            <Box>
              <Flex align="center" gap={2} mb={2}>
                <Icon as={FiCheckCircle} w={6} h={6} color="teal.200" />
                <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                  Compromiso
                </Heading>
              </Flex>
              <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
                Actuamos con responsabilidad, brindando confianza y respaldo en cada producto.
              </Text>
            </Box>

            {/* SERIEDAD */}
            <Box>
              <Flex align="center" gap={2} mb={2}>
                <Icon as={FiCheckCircle} w={6} h={6} color="teal.200" />
                <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                  Seriedad
                </Heading>
              </Flex>
              <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
                Cumplimos cada compromiso, priorizando la transparencia y la confianza.
              </Text>
            </Box>
          </Stack>
        </Stack>

      </Box>
    </Box>
  );
}
