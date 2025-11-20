'use client';

import { Box, Heading, Text } from '@chakra-ui/react';
import ProductCard from '@/components/ui/productCard';



const products = [
  {
    image: '/productos/1000319229.jpg',
    title: 'DMP-1',
    description: 'Protector Monofasico contra picos de sobretensiones (Formato DIN para tableros monofasicos).',
    features: ['Protege Fase-Tierra / Fase-Neutro / Netro-Tierra', 'Facil colocacion en tablero general', 'Indicador luminoso de falla'],
  },
  {
    image: '/productos/1000325631.png',
    title: 'DMP-3',
    description: 'Protector Trifasico contra picos de sobretensiones (Formato DIN para tableros trifasicos).',
    features: ['Protege Fase-Tierra / Fase-Neutro / Netro-Tierra', 'Facil colocacion en tablero general', 'Indicador luminoso de falla'],
    reverse: true, // alterna lado de la imagen
  },
  {
    image: '/productos/1000319229.pg',
    title: 'DMP-2',
    description: 'Protector Monofasico para baja tension.',
    features: ['Protege Fase-Tierra / Fase-Neutro / Netro-Tierra', 'Facil colocacion en tablero general - Tension de trabajo 135V', 'Indicador luminoso de falla'],
    // reverse: true, // alterna lado de la imagen
  },
  {
    image: '/productos/1000325633.png',
    title: 'DMP-BT',
    description: 'Protector Monofasico para baja tension.',
    features: ['Protege Fase-Tierra / Fase-Neutro / Netro-Tierra', 'Facil colocacion en tablero general - Tension de trabajo 48V', 'Indicador luminoso de falla'],
    reverse: true, // alterna lado de la imagen
  },
  {
    image: '/productos/1000319229.jg',
    title: 'DMP-SE',
    description: 'Protector Monofasico para energia Eolica y Solar.',
    features: ['Protege Fase-Tierra / Fase-Neutro / Netro-Tierra', 'Facil colocacion en tablero general - Tension de trabajo 24V', 'Indicador luminoso de falla'],
    // reverse: true, // alterna lado de la imagen
  },
  {
    image: '/productos/1000319229.jg',
    title: 'DMP-1 36kA',
    description: 'Protector Monofasico contra picos de sobretensiones de 36kA.',
    features: ['Protege Fase-Tierra / Fase-Neutro / Netro-Tierra', 'Facil colocacion en tablero general', 'Previo interruptor termomagnetico (termica 20A)', 'Indicador luminoso de falla'],
    reverse: true, // alterna lado de la imagen
  },
  {
    image: '/productos/1000325628.png',
    title: 'DMP-3 84kA',
    description: 'Protector Trifasico contra picos de sobretensiones de 84kA.',
    features: ['Protege Fase-Tierra / Fase-Neutro / Netro-Tierra', 'Facil colocacion en tablero general', 'Previo interruptor termomagnetico (termica 20A)', 'Indicador luminoso de falla'],
    // reverse: true, // alterna lado de la imagen
  },
];

export default function BarrerasProtectoras() {
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
                  Protectores contra sobretensíon
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
        Los picos de tensión son aumentos muy bruscos e intempestivos que afectan
        la forma de onda de la tensión provista por la compañía eléctrica. Se caracterizan
        por alcanzar valores muy elevados en fracciones de tiempo extremadamente cortas.
      </Text>

      <Text mb={4}>
        Pueden ser producidos por descargas atmosféricas o por maniobras en la red
        eléctrica. Estos eventos son altamente dañinos y pueden afectar a todos los
        artefactos electrónicos conectados.
      </Text>

      <Text fontWeight="bold" color="blue.700">
        En Landtec contamos con una amplia gama de protectores para asegurar que los
        picos de tensión no dañen los dispositivos más importantes de tu hogar o industria.
      </Text>
    </Box>
      {products.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </Box>
  );
}