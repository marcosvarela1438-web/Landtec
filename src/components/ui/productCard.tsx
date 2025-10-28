'use client';

import { Box, Image, Text, Heading } from '@chakra-ui/react';
import ProductDialog from './productModal';

export default function ProductCard({ product }: any) {
  return (
    <ProductDialog
      product={product}
      trigger={
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          overflow="hidden"
          cursor="pointer"
          transition="0.2s"
          _hover={{ transform: 'scale(1.03)' }}
          w={{ base: '100%', md: '30%' }}
        >
          <Image
            src={product.images[0]}
            alt={product.title}
            w="100%"
            h="200px"
            objectFit="cover"
          />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>
              {product.title}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              {product.shortDescription}
            </Text>
          </Box>
        </Box>
      }
    />
  );
}
