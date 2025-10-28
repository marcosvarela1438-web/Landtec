'use client';

import { HStack, Button } from '@chakra-ui/react';

export default function ProductsFilter({ categories, selected, onSelect }: any) {
  return (
    <HStack padding={4} mb={8} justify="center" flexWrap="wrap">
      {categories.map((cat: string) => (
        <Button
          key={cat}
          colorScheme={selected === cat ? 'teal' : 'gray'}
          variant={selected === cat ? 'solid' : 'outline'}
          onClick={() => onSelect(cat)}
        >
          {cat === 'all' ? 'Todos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </Button>
      ))}
    </HStack>
  );
}
