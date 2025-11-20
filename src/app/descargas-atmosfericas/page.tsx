'use client';

import { Box } from '@chakra-ui/react';
import ProductCard from '@/components/ui/productCard';

const products = [
  {
    image: '/productos/1000319228.jpg',
    title: 'Producto 1',
    description: 'Este es un producto de alta calidad con materiales duraderos.',
    features: ['Resistente al agua', 'Garantía de 2 años', 'Diseño ergonómico'],
  },
  {
    image: '/productos/1000319229.jpg',
    title: 'Producto 2',
    description: 'Ideal para uso profesional, con excelente rendimiento.',
    features: ['Motor silencioso', 'Alta eficiencia', 'Fácil mantenimiento'],
    // reverse: true, // alterna lado de la imagen
  },
];

export default function DescargasAtmosfericas() {
  return (
    <Box px={5} py={10} bg={'black'}>
      {products.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </Box>
  );
}