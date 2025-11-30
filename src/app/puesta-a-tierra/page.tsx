'use client';

import { Box, Heading, Text } from '@chakra-ui/react';
import ProductCard from '@/components/ui/productCard';

const products = [
  {
    image: '/productos/1000325629.png',
    title: 'ED-C20',
    description: 'Electrodos dinámicos para tomas de tierra.',
    features: [
      'Recomendados para aplicaciones que requieren bajos valores óhmicos.',
      'Alta capacidad de dispersión de corrientes impulsivas.',
      'Kit completo con accesorios para su instalación.',
      'Probado en suelos extremadamente exigentes, como “Base Marambio” en la Antártida Argentina.'
    ],
  },
  {
    image: '/productos/1000325630.png',
    title: 'ED-A300',
    description: 'Electrodo dinámico de alto rendimiento.',
    features: [
      'Diseñado para instalaciones de mayor exigencia.',
      'Estabilidad de resistencia eléctrica a largo plazo.',
      'Excelente comportamiento en suelos de baja conductividad.'
    ],
    reverse: true,
  },
];

export default function ElectrodosDinamicos() {
  return (
    <Box px={5} py={10} bg="black">
      
      {/* TÍTULO PRINCIPAL */}
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="extrabold"
        bgGradient="linear(to-r, blue.400, cyan.400)"
        bgClip="text"
        textAlign="center"
        mb={10}
      >
        Puesta a Tierra
      </Heading>

      {/* TEXTO INTRODUCTORIO */}
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
          Para garantizar la protección de los equipos y de las personas que utilicen una instalación eléctrica, 
          es indispensable lograr un bajo valor de resistencia de puesta a tierra (PAT) y, además, que dicho valor 
          permanezca estable con el paso del tiempo.
        </Text>

        <Text mb={4}>
          Sin embargo, muchos tipos de suelo no favorecen alcanzar estos valores. Una práctica habitual consiste 
          en agregar sales minerales durante la instalación de una jabalina, lo que ayuda inicialmente, pero con 
          el tiempo las sales se disuelven y la resistencia de PAT vuelve a incrementarse.
        </Text>

        <Text>
          Para evitar este problema y garantizar un rendimiento consistente a largo plazo, desarrollamos nuestras 
          soluciones de electrodos dinámicos.
        </Text>
      </Box>

      {/* PRODUCTOS */}
      {products.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </Box>
  );
}
