'use client';

import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  IconButton,
  Portal,
} from '@chakra-ui/react';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function ProductModal({ product, onClose }: any) {
  const [currentImage, setCurrentImage] = useState(0);

  const next = () =>
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prev = () =>
    setCurrentImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );

  return (
    <Portal>
      <Flex
        position="fixed"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        bg="rgba(0,0,0,0.8)"
        justify="center"
        align="center"
        zIndex="1000"
      >
        <Box
          bg="white"
          borderRadius="lg"
          maxW="800px"
          w="90%"
          maxH="90vh"
          overflowY="auto"
          position="relative"
          p={6}
        >
          {/* Botón de cerrar */}
          <IconButton
            // icon={<CloseIcon />}
            aria-label="Cerrar"
            position="sticky"
            top="10px"
            right="10px"
            float="right"
            onClick={onClose}
            bg="black"
            _hover={{ bg: 'gray.200', color: 'black' }}
            zIndex={10}
          >
            <CloseIcon/>
          </IconButton>

          {/* Imagen */}
          <Box position="relative">
            <Image
              src={product.images[currentImage]}
              alt={product.title}
              w="100%"
              h={{ base: '250px', md: '400px' }}
              objectFit="contain"
              borderRadius="md"
              mb={4}
            />

            {product.images.length > 1 && (
              <>
                <IconButton
                  // icon={<ChevronLeftIcon boxSize={6} />}
                  aria-label="Anterior"
                  position="absolute"
                  top="50%"
                  left="10px"
                  transform="translateY(-50%)"
                  onClick={prev}
                  bg="black"
                  borderRadius="full"
                  _hover={{ bg: 'whiteAlpha.900' }}
                >
                  <ChevronLeftIcon/>
                </IconButton>
                <IconButton
                  // icon={<ChevronRightIcon boxSize={6} />}
                  aria-label="Siguiente"
                  position="absolute"
                  top="50%"
                  right="10px"
                  transform="translateY(-50%)"
                  onClick={next}
                  bg="black"
                  borderRadius="full"
                  _hover={{ bg: 'whiteAlpha.900' }}
                >
                  <ChevronRightIcon/>
                </IconButton>
              </>
            )}
          </Box>

          <Heading mb={2}>{product.title}</Heading>
          <Text fontWeight="medium" mb={4}>
            {product.description}
          </Text>
          <Text color="gray.600">{product.longDescription}</Text>
        </Box>
      </Flex>
    </Portal>
  );
}
