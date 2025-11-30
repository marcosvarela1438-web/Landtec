'use client';

import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { CheckCircle, Sparkles, Star } from 'lucide-react';

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  features?: string[];
  reverse?: boolean;
};

export default function ProductCard({
  image,
  title,
  description,
  features = [],
  reverse = false,
}: ProductCardProps) {
  return (
    <Flex
      direction={{ base: 'column', md: reverse ? 'row-reverse' : 'row' }}
      align="center"
      justify="space-between"
      w="100%"
      my={4}
      py={6}
      px={{ base: 2, md: 6 }}
      gap={10}
      borderRadius="2xl"
      border="1px solid white"
    >
      {/* 🖼️ Imagen */}
      <Box
        flex={{ base: '0 0 100%', md: '0 0 35%' }}
        textAlign="center"
      >
        <Image
          src={image}
          alt={title}
          borderRadius="2xl"
          w="100%"
          maxW="480px"
          mx="auto"
          objectFit="cover"
          shadow="xl"
        />
      </Box>

      {/* 📄 Texto & Contenido */}
      <VStack
        align={{ base: 'center', md: 'start' }}
        textAlign={{ base: 'center', md: 'left' }}
        padding={4}
        flex="1"
        color="gray.100"
      >
        {/* ⭐ Título */}
        <HStack padding={3}>
          <Icon as={Sparkles} color="blue.400" boxSize={6} />
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, blue.400, cyan.400)"
            bgClip="text"
            color="white"
          >
            {title}
          </Heading>
        </HStack>

        {/* 📝 Descripción */}
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="gray.300"
          lineHeight="1.7"
          fontWeight="medium"
        >
          {description}
        </Text>

        {/* Línea decorativa */}
        <Box
          w="60px"
          h="3px"
          bgGradient="linear(to-r, blue.400, cyan.400)"
          borderRadius="full"
          my={2}
        />

        {/* ✔️ Features */}
        {features.length > 0 && (
          <VStack
            align="stretch"
            padding={3}
            mt={2}
            w="100%"
          >
            {features.map((f, idx) => (
              <HStack
                key={idx}
                padding={3}
                align="center"
                _hover={{ transform: 'translateX(4px)', transition: '0.2s' }}
              >
                <Icon as={CheckCircle} color="cyan.400" boxSize={5} />
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  color="gray.200"
                  fontWeight="semibold"
                >
                  {f}
                </Text>
              </HStack>
            ))}
          </VStack>
        )}

        {/* ⭐ Footer */}
        <HStack pt={4} padding={2} opacity={0.8}>
          <Icon as={Star} color="yellow.400" boxSize={5} />
          <Text fontSize="sm" color="gray.400">
            Más de 500 clientes satisfechos con este producto
          </Text>
        </HStack>
      </VStack>
    </Flex>
  );
}
