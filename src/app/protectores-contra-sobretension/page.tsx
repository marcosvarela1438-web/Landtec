'use client';

import { Box, Heading, Text } from '@chakra-ui/react';
import ProductCard from '@/components/ui/productCard';

const products = [
  {
    image: '/productos/1000319229.jpg',
    title: 'DMP-1',
    description: 'Protector monofásico contra picos de sobretensión (formato DIN para tableros monofásicos).',
    features: [
      'Protege Fase-Tierra / Fase-Neutro / Neutro-Tierra',
      'Fácil colocación en tablero general',
      'Indicador luminoso de falla',
    ],
  },
  {
    image: '/productos/1000325631.png',
    title: 'DMP-3',
    description: 'Protector trifásico contra picos de sobretensión (formato DIN para tableros trifásicos).',
    features: [
      'Protege Fase-Tierra / Fase-Neutro / Neutro-Tierra',
      'Fácil colocación en tablero general',
      'Indicador luminoso de falla',
    ],
    reverse: true,
  },
  {
    image: '/productos/1000328478.jpg',
    title: 'DMP-2',
    description: 'Protector monofásico para baja tensión.',
    features: [
      'Protege Fase-Tierra / Fase-Neutro / Neutro-Tierra',
      'Fácil colocación en tablero general – Tensión de trabajo: 135 V',
      'Indicador luminoso de falla',
    ],
  },
  {
    image: '/productos/1000325633.png',
    title: 'DMP-BT',
    description: 'Protector monofásico para baja tensión.',
    features: [
      'Protege Fase-Tierra / Fase-Neutro / Neutro-Tierra',
      'Fácil colocación en tablero general – Tensión de trabajo: 48 V',
      'Indicador luminoso de falla',
    ],
    reverse: true,
  },
  {
    image: '/productos/1000328479.jpg',
    title: 'DMP-SE',
    description: 'Protector monofásico para energía eólica y solar.',
    features: [
      'Protege Fase-Tierra / Fase-Neutro / Neutro-Tierra',
      'Fácil colocación en tablero general – Tensión de trabajo: 24 V',
      'Indicador luminoso de falla',
    ],
  },
  {
    image: '/productos/1000330126.jpg',
    title: 'DMP-1 36 kA',
    description: 'Protector monofásico contra picos de sobretensión de 36 kA.',
    features: [
      'Protege Fase-Tierra / Fase-Neutro / Neutro-Tierra',
      'Fácil colocación en tablero general',
      'Requiere interruptor termomagnético previo (térmica 20 A)',
      'Indicador luminoso de falla',
    ],
    reverse: true,
  },
  {
    image: '/productos/1000325628.png',
    title: 'DMP-3 84 kA',
    description: 'Protector trifásico contra picos de sobretensión de 84 kA.',
    features: [
      'Protege Fase-Tierra / Fase-Neutro / Neutro-Tierra',
      'Fácil colocación en tablero general',
      'Requiere interruptor termomagnético previo (térmica 20 A)',
      'Indicador luminoso de falla',
    ],
  },
];

export default function BarrerasProtectoras() {
  return (
    <Box px={5} py={10} bg="black">
      
      {/* TÍTULO */}
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="extrabold"
        bgGradient="linear(to-r, blue.400, cyan.400)"
        bgClip="text"
        textAlign="center"
        mb={10}
      >
        Protectores contra sobretensión
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
        style={{ animation: 'fadeInUp 0.8s ease forwards' }}
        _hover={{ transform: 'scale(1.02)', transition: 'transform 0.3s ease' }}
      >
        <Text mb={4}>
          Los picos de tensión son aumentos bruscos e intempestivos que alteran la forma
          de onda de la energía suministrada por la red eléctrica. Se caracterizan por
          alcanzar valores muy elevados en lapsos extremadamente breves.
        </Text>

        <Text mb={4}>
          Estos eventos pueden originarse por descargas atmosféricas o maniobras en la red
          eléctrica. Son altamente perjudiciales y pueden dañar todo tipo de dispositivos
          electrónicos conectados.
        </Text>

        <Text fontWeight="bold" color="blue.700">
          En Landtec contamos con una amplia gama de protectores diseñados para evitar que 
          los picos de tensión afecten los equipos más importantes de tu hogar o industria.
        </Text>
      </Box>

      {/* PRODUCTOS */}
      {products.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}

    </Box>
  );
}
