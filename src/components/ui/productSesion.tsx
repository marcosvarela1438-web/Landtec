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

// const MotionImage = motion(Image);
const MotionImage = motion(Image);

const products = [
  {
    name: 'Protectores contra Sobretension',
    description:
      "Los picos de tensión son aumentos muy bruscos e intempestivos que afectan la forma de onda de la tensión provista por la compañía eléctrica. Se caracterizan por alcanzar valores muy elevados en fracciones de tiempo extremadamente cortas. Pueden ser producidos por descargas atmosféricas o por maniobras en la red eléctrica. Estos eventos son altamente dañinos y pueden afectar a todos los artefactos electrónicos conectados.",
    image: '/productos/1000325631.png',
    href: '/protectores-contra-sobretension',
  },
  {
    name: 'Pararrayos',
    description:
      "Los pararrayos comunes (Tipo Franklin) poseen un radio de cobertura limitado (que depende de la altura de instalacion), cuando el area a proteger es muy grande, se deben colocar varias puntas captoras, lo que encarece el proyecto. Para evitarlo, en Landtec desarrollamos otro tipo.",
    image: '/productos/1000325632.png',
    href: '/pararrayos',
  },
  {
    name: 'Puestas a Tierra',
    description:
      "Para la proteccion de los equipamientos, y de las personas que usen nuestra instalacion electrica, es indispensable lograr un bajo valor de resistencia de PAT y que ademas permanezca estable en el tiempo. Pero muchas veces los distintos tipos de suelo no ayudan a conseguirlo. Agregar sales minerales al momento de colocar una jabalina puede ayudar en el momento, pero con el correr del tiempo, las sales se disuelven y nuestro valor de PAT vuelve a subir. Para evitarlo, tenemos la solucion.",
    image: '/productos/1000325629.png',
    href: '/puesta-a-tierra',
  },
  {
    name: 'Vías de Chispas',
    description:
      "",
    image: '/productos/1000325626.png',
    href: '/vias-de-chispas',
  },
];

export default function ProductsSection() {
  return (
    <Box as="section" bg='#000' color="gray.800" py={5}>
        <Heading bg='blackAlpha.900' color={'white'} fontSize={'5xl'}>
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
      direction={reverse ? 'row-reverse' : 'row'}
      align="center"
      justify="space-between"
    //   minH="100vh"
      bg={'blackAlpha.900'}
      px={{ base: 6, md: 16 }}
    //   py={12}
    pt={5}
      gap={8}
    >
        
      {/* 🖼️ Imagen con efecto de encuadre */}
<Box flex="0 0 40%" position="relative" h="500px" overflow="hidden">
        <MotionImage
          src={image}
          alt={name}
        //   fill
          style={{ x, opacity }}
          sizes="(max-width: 768px) 100vw, 40vw"
          className="rounded-xl object-contain"
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        />
      </Box>

      {/* 📝 Texto */}
      <VStack
        flex="0 0 50%"
        align={reverse ? 'flex-end' : 'flex-start'}
        textAlign={reverse ? 'right' : 'left'}
        padding={4}
        gap={5}
        color={'white'}
      >
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="bold"
        >
          {name}
        </Heading>
        <Text fontSize={{ base: 'md', md: 'xl' }} maxW="600px">
          {description}
        </Text>
        <Flex></Flex>
        <Link
        justifyContent={'center'}
        alignSelf={'center'}
          as={NextLink}
          href={href}
          colorScheme="blue"
          color={'white'}
          textDecoration= 'none'
        //   size="lg"
        //   mt={4}
        >
           <Button
        //    as={NextLink}
    //   href="/productos"
      size="lg"
      px={10}
      py={6}
      fontSize="xl"
      borderRadius="full" // 🔹 bordes redondeados
      textDecoration="none" // 🔹 sin subrayado
      color="black"
      bg="white"
      _hover={{
        bg: 'gray.900',
        color: 'white',
        // textDecoration: 'none',
      }}
      transition="all 0.3s ease" // 🔹 transición suave
      fontWeight="bold"
      boxShadow="md">Ver Más</Button>
        </Link>
      </VStack>
    </Flex>
  );
}
