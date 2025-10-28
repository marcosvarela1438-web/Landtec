'use client';

import { Box, SimpleGrid, Image, Text, Heading, Flex, Wrap, WrapItem, Button } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import ProductModal from '@/components/ui/productModal';
import products from '../../components/data/productos.json';

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [selectedSubcategory, setSelectedSubcategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

    const categories = ['Todos', ...new Set(products.map((p) => p.category))];
  // Subcategorías únicas para la categoría seleccionada
  const subcategories = useMemo(() => {
    if (selectedCategory === 'Todos') return [];
    const subs = products
      .filter((p) => p.category === selectedCategory)
      .map((p) => p.subcategory)
      .filter(Boolean);
    return ['Todos', ...new Set(subs)];
  }, [selectedCategory]);

  // Filtrado principal
  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== 'Todos') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (
      selectedSubcategory !== 'Todos' &&
      selectedCategory !== 'Todos' &&
      subcategories.length > 0
    ) {
      result = result.filter((p) => p.subcategory === selectedSubcategory);
    }
    return result;
  }, [selectedCategory, selectedSubcategory]);

  return (
    <Box p={10}>
      <Heading textAlign="center">
        Nuestros Productos
      </Heading>

      {/* FILTROS */}
      <Flex direction="column" align="center">
        {/* Categorías */}
        <Wrap padding={4} justify="center">
          {categories.map((cat) => (
            <WrapItem key={cat}>
              <Button
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedSubcategory('Todos');
                }}
                colorScheme={selectedCategory === cat ? 'blue' : 'gray'}
                variant={selectedCategory === cat ? 'solid' : 'outline'}
                borderRadius="full"
              >
                {cat}
              </Button>
            </WrapItem>
          ))}
        </Wrap>

        {/* Subcategorías (solo si hay categoría seleccionada distinta de "Todos") */}
        {selectedCategory !== 'Todos' && subcategories.length > 1 && (
          <Wrap padding={3} justify="center">
            {subcategories.map((sub) => (
              <WrapItem key={sub}>
                <Button
                  onClick={() => setSelectedSubcategory(sub)}
                  colorScheme={selectedSubcategory === sub ? 'green' : 'gray'}
                  variant={selectedSubcategory === sub ? 'solid' : 'outline'}
                  borderRadius="full"
                  size="sm"
                >
                  {sub}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        )}
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
        {filteredProducts.map((product) => (
          <Box
            key={product.id}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            cursor="pointer"
            _hover={{ transform: 'scale(1.03)', transition: '0.3s' }}
            onClick={() => setSelectedProduct(product)}
          >
            <Image
              src={product.images[0]}
              alt={product.title}
              borderRadius="md"
              w="100%"
              h="200px"
              objectFit="cover"
            />
            <Heading mt={4} fontSize="xl">
              {product.title}
            </Heading>
            <Text mt={2}>{product.shortDescription}</Text>
          </Box>
        ))}
      </SimpleGrid>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </Box>
  );
}
