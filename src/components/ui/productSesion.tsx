'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  Link,
} from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import NextLink from 'next/link';

interface ProductBlockProps {
  name: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean;
}

const MotionImage = motion(Image);

const products = [
  {
    name: 'Protectores contra Sobretensión',
    description:
      "Los picos de tensión son aumentos muy bruscos e intempestivos que afectan la forma de onda de la tensión provista por la compañía eléctrica. Se caracterizan por alcanzar valores muy elevados en fracciones de tiempo extremadamente cortas. Pueden ser producidos por descargas atmosféricas o por maniobras en la red eléctrica. Estos eventos son altamente dañinos y pueden afectar a todos los artefactos electrónicos conectados.",
    image: '/productos/1000325631.png',
    href: '/protectores-contra-sobretension',
  },
  {
    name: 'Pararrayos',
    description:
      "Los pararrayos comunes (tipo Franklin) poseen un radio de cobertura limitado, que depende de la altura de instalación. Cuando el área a proteger es muy grande, se deben colocar varias puntas captoras, lo que encarece el proyecto. Para evitarlo, en Landtec desarrollamos otra solución.",
    image: '/productos/1000325632.png',
    href: '/pararrayos',
  },
  {
    name: 'Puestas a Tierra',
    description:
      "Para la protección de los equipamientos y de las personas que utilicen nuestra instalación eléctrica, es indispensable lograr un bajo valor de resistencia de PAT que además permanezca estable en el tiempo. Sin embargo, los distintos tipos de suelo muchas veces dificultan este objetivo. Agregar sales minerales puede ayudar momentáneamente, pero con el tiempo se disuelven y el valor de la PAT vuelve a subir. Para evitarlo, ofrecemos la solución adecuada.",
    image: '/productos/1000325629.png',
    href: '/puesta-a-tierra',
  },
  {
    name: 'Vías de Chispas',
    description:
      "Vías de chispas para juntas aisladas (equipotencializadores para estructuras con potenciales diferentes, permanentes o temporales).",
    image: '/productos/1000325626.png',
    href: '/vias-de-chispas',
  },
];

export default function ProductsSection() {
  return (
    <Box as="section" bg="#000" color="gray.800" py={10} overflowX="hidden">
      <Heading
        // bg="black"
        color="white"
        fontSize={{ base: '3xl', md: '5xl' }}
        textAlign="center"
        mb={10}
      >
        Nuestros Productos
      </Heading>

      {products.map((product, i) => (
        <ProductBlock key={product.name} {...product} reverse={i % 2 !== 0} />
      ))}
    </Box>
  );
}

function ProductBlock({ name, description, image, href, reverse }: ProductBlockProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const x = useTransform(scrollYProgress, [0, 1], reverse ? ['150px', '0px'] : ['-150px', '0px']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.8, 1]);

  return (
    <Flex
      ref={ref}
      direction={{
        base: 'column',
        md: reverse ? 'row-reverse' : 'row',
      }}
      align="center"
      justify="space-between"
      bg="blackAlpha.900"
      px={{ base: 4, md: 16 }}
      py={{ base: 10, md: 16 }}
      gap={{ base: 10, md: 8 }}
      overflowX="hidden" 
    >
      {/* Imagen */}
      <Box
        flex={{ base: '0 0 100%', md: '0 0 40%' }}
        h={{ base: '250px', md: '450px' }}
        position="relative"
        overflow="hidden"
      >
        <MotionImage
          src={image}
          alt={name}
          style={{ x, opacity }}
          className="rounded-xl object-contain"
          w="100%"
          h="100%"
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        />
      </Box>

      {/* Texto */}
      <VStack
        flex={{ base: '0 0 100%', md: '0 0 50%' }}
        align={{
          base: 'center',
          md: reverse ? 'flex-end' : 'flex-start',
        }}
        textAlign={{
          base: 'center',
          md: reverse ? 'right' : 'left',
        }}
        padding={5}
        color="white"
      >
        <Heading fontSize={{ base: '2xl', md: '4xl' }}>
          {name}
        </Heading>

        <Text fontSize={{ base: 'md', md: 'xl' }} maxW="600px">
          {description}
        </Text>

        <Link as={NextLink} href={href} textDecoration="none">
          <Button
            size={{ base: 'md', md: 'lg' }}
            px={10}
            py={6}
            fontSize={{ base: 'md', md: 'xl' }}
            borderRadius="full"
            color="black"
            bg="white"
            _hover={{
              bg: 'gray.900',
              color: 'white',
            }}
            fontWeight="bold"
            boxShadow="md"
            transition="all 0.3s ease"
          >
            Ver Más
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
}
