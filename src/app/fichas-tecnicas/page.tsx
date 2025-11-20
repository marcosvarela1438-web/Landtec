'use client';

import { Box, Flex, Image, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const images = [
  '/ss-static-01.esmsv.jpg',
  '/ss-static-02.esmsv.jpg',
  '/ss-static-03.esmsv.jpg',
];

export default function FichasTecnicasPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = images.length;
  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <Flex
      direction="column"
      align="center"
    //   w={'100%'}
      justify="center"
      minH="100vh"
      bg="black"
      p={6}
      position="relative"
      overflow="hidden"
    >
      <Box position="relative" w="100%">
        <Image
          src={images[currentIndex]}
          alt={`Ficha técnica ${currentIndex + 1}`}
          borderRadius="xl"
          boxShadow="xl"
          objectFit="contain"
          w="100%"
          h={{ base: '300px', md: '1000px' }}
          transition="opacity 0.6s ease-in-out"
        />

        {/* Botón Anterior */}
        <IconButton
          aria-label="Anterior"
          position="absolute"
          top="40%"
          left="15px"
          transform="translateY(-50%)"
          onClick={prev}
          borderRadius="full"
          color="white"
          shadow="md"
          _hover={{ bg: 'gray.100', color: 'black' }}
        >
            <ChevronLeftIcon />
        </IconButton>

        {/* Botón Siguiente */}
        <IconButton
          aria-label="Siguiente"
          position="absolute"
          top="40%"
          right="15px"
          transform="translateY(-50%)"
          onClick={next}
          borderRadius="full"
          color="white"
          shadow="md"
          _hover={{ bg: 'gray.100', color: 'black' }}
        >
            <ChevronRightIcon/>
        </IconButton>
      </Box>

      {/* Indicadores */}
      <Flex mt={6} gap={2}>
        {images.map((_, i) => (
          <Box
            key={i}
            w="10px"
            h="10px"
            borderRadius="full"
            bg={i === currentIndex ? 'blue.500' : 'gray.300'}
            transition="background 0.3s"
          />
        ))}
      </Flex>
    </Flex>
  );
}
