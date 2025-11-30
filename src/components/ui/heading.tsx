import { Box, Heading, Text } from "@chakra-ui/react";

interface SectionContainerProps {
  title: string;
  description?: string;
}

export const HeadingSection = ({ title, description }: SectionContainerProps) => {
  return (
    <Box
      bg="white"
      color="black"
      w="100%"
      py={10}
      borderBottom="1px solid"
      borderColor="gray.300"
    >
      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 0 }}
      >
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
        >
          {title}
        </Heading>

        {description && (
          <Text
            mt={4}
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            maxW={{ base: "100%", md: "70%" }}  // más responsive
            lineHeight="1.7"
          >
            {description}
          </Text>
        )}
      </Box>
    </Box>
  );
};
