'use client';

import { Box, Heading, Text } from '@chakra-ui/react';
import ProductCard from '@/components/ui/productCard';

const products = [
  {
    image: '/productos/1000325629.png',
    title: 'ED-C20',
    description: 'Electrodos dinamicos para tomas de tierras.',
    features: ['Recomendadas para aplicaciones que requieran bajo valor ohmico', 'Alta capacidad de dispercion de corrientes impulsivas', 'Kit completo con sus accesorios para la instalacion', 'Comprobado en suelos mas que exigentes, como "Base Marambio" en la Antartida Argentina'],
  },
  {
    image: '/productos/1000325630.png',
    title: 'ED-A300',
    description: '',
    features: [],
    reverse: true, // alterna lado de la imagen
  },
];

export default function ElectrodosDinamicos() {
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
                      Puesta a tierra
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
            Para la proteccion de los equipamientos, y de las personas que usen nuestra instalacion electrica, es indispensable lograr un bajo valor de resistencia de PAT y que ademas permanezca estable en el tiempo. Pero muchas veces los distintos tipos de suelo no ayudan a conseguirlo. Agregar sales minerales al momento de colocar una jabalina puede ayudar en el momento, pero con el correr del tiempo, las sales se disuelven y nuestro valor de PAT vuelve a subir. Para evitarlo, tenemos la solucion.
          </Text>
        </Box>
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </Box>
  );
}