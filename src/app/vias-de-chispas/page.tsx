'use client';

import { Box, Heading, Text } from '@chakra-ui/react';
import ProductCard from '@/components/ui/productCard';

const products = [
  {
    image: '/productos/1000325626.png',
    title: 'EQ 4025',
    description: 'Modelo de 40 kA.',
    features: [
      'Fácil conexión mediante planchuelas de cobre niqueladas.',
      'Usadas comúnmente en cañerías, protección catódica, tanques de combustibles, bajadas de pararrayos, estaciones de GNC, entre otros.'
    ],
  },
  {
    image: '/productos/1000325627.png',
    title: 'EQ 8050',
    description: 'Modelo de 80 kA.',
    features: [
      'Fácil conexión mediante planchuelas de cobre niqueladas.',
      'Usadas comúnmente en cañerías, protección catódica, tanques de combustibles, bajadas de pararrayos, estaciones de GNC, entre otros.'
    ],
    reverse: true,
  },
  {
    image: '/productos/1000325625.png',
    title: 'EQ 10065',
    description: 'Modelo de 100 kA.',
    features: [
      'Fácil conexión mediante planchuelas de cobre niqueladas.',
      'Usadas comúnmente en cañerías, protección catódica, tanques de combustibles, bajadas de pararrayos, estaciones de GNC, entre otros.'
    ],
  }
];

export default function ViasDeChispas() {
  return (
    <Box px={{ base: 4, md: 6 }} py={10} bg="black">
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="extrabold"
        bgGradient="linear(to-r, blue.400, cyan.400)"
        bgClip="text"
        textAlign="center"
        mb={10}
      >
        Vías de chispas
      </Heading>

      <Box
        maxW="900px"
        mx="auto"
        bg="gray.50"
        color="gray.900"
        p={{ base: 5, md: 10 }}
        rounded="xl"
        shadow="xl"
        mb={16}
        fontSize={{ base: 'md', md: 'lg' }}
        lineHeight="1.8"
        letterSpacing="0.4px"
        style={{ animation: 'fadeInUp 0.8s ease forwards' }}
        _hover={{ transform: 'scale(1.02)', transition: '0.3s ease' }}
      >
        <Text mb={4}>
          Vías de chispas para juntas aisladas (equipotencializadores para estructuras con potenciales diferentes, ya sean permanentes o temporales).
        </Text>
      </Box>

      {products.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </Box>
  );
}
