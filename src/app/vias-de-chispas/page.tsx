'use client';

import { Box, Heading, Text } from '@chakra-ui/react';
import ProductCard from '@/components/ui/productCard';

const products = [
  {
    image: '/productos/1000325626.png',
    title: 'EQ 4025',
    description: 'Vias de chispas para juntas aisladas (Equipotencializadores para estructuras de potenciales diferentes permanentes o temporales).',
    features: ['Facil conexion mediante planchuelas de cobre niqueladas', 'Conexiones usuales en cañerias, proteccion catodica, tanques de combustibles, bajada de pararrayos, estaciones de gnc, etc.'],
  },
  {
    image: '/productos/1000325627.png',
    title: 'EQ 8050',
    description: 'Ideal para uso profesional, con excelente rendimiento.',
    features: ['Motor silencioso', 'Alta eficiencia', 'Fácil mantenimiento'],
    reverse: true, // alterna lado de la imagen
  },
  {
    image: '/productos/1000325625.png',
    title: 'EQ 10065',
    description: 'Ideal para uso profesional, con excelente rendimiento.',
    features: ['Motor silencioso', 'Alta eficiencia', 'Fácil mantenimiento'],
    // reverse: true, // alterna lado de la imagen
  }
];

export default function ViasDeChispas() {
  return (
    <Box px={5} py={10} bg={'black'}>
                    <Heading
                      as="h2"
                      fontSize={{ base: '2xl', md: '4xl' }}
                      fontWeight="extrabold"
                      bgGradient="linear(to-r, blue.400, cyan.400)"
                      bgClip="text"
                      color={'white'}
                      textAlign={'center'}
                      mb={10}
                    >
                      Vías de chispas
                    </Heading>
                    <Box
             maxW="900px"
          mx="auto"
          bg="gray.50"
          color="gray.900"
          p={{ base: 6, md: 10 }}
          rounded="xl"
          shadow="2xl"
          mb={16}
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="1.8"
          letterSpacing="0.5px"
          style={{
            animation: "fadeInUp 0.8s ease forwards"
          }}
          _hover={{
            transform: "scale(1.02)",
            transition: "transform 0.3s ease"
          }}
        >
          <Text mb={4}>
            Los pararrayos comunes (Tipo Franklin) poseen un radio de cobertura limitado (que depende de la altura de instalacion), cuando el area a proteger es muy grande, se deben colocar varias puntas captoras, lo que encarece el proyecto. Para evitarlo, en Landtec desarrollamos otro tipo.
          </Text>
        </Box>
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </Box>
  );
}