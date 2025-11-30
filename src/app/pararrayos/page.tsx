'use client';

import { Box, Heading, Text } from '@chakra-ui/react';
import ProductCard from '@/components/ui/productCard';

const products = [
  {
    image: '/productos/1000325632.png',
    title: 'LD-300',
    description:
      'Pararrayos con punta captora, apto para la protección de estructuras y personas contra impactos directos de rayos.',
    features: [],
  },
  {
    image: '/productos/1000325621.png',
    title: 'LD-1000',
    description:
      'Pararrayos activo de gran radio de acción (equivalente a 3 veces la altura de instalación).',
    features: [
      'Totalmente autónomo y libre de mantenimiento',
      'Avanzado dispositivo de cebado electrostático',
      'Fabricado bajo norma IRAM 2426',
    ],
    reverse: true,
  },
];

export default function Pararrayos() {
  return (
    <Box px={5} py={10} bg="black">
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="extrabold"
        bgGradient="linear(to-r, blue.400, cyan.400)"
        bgClip="text"
        color="white"
        textAlign="center"
        mb={10}
      >
        Pararrayos
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
        fontSize={{ base: 'md', md: 'lg' }}
        lineHeight="1.8"
        letterSpacing="0.5px"
        style={{
          animation: 'fadeInUp 0.8s ease forwards',
        }}
        _hover={{
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        }}
      >
        <Text mb={4}>
          Los pararrayos tradicionales (tipo Franklin) poseen un radio de cobertura
          limitado que depende directamente de la altura de instalación. Cuando el área
          a proteger es muy grande, es necesario colocar varias puntas captoras, lo que
          incrementa el costo del proyecto. Para solucionar este problema, en Landtec
          desarrollamos una alternativa más eficiente.
        </Text>
      </Box>

      {products.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </Box>
  );
}
