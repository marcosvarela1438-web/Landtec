import { Box, Heading, Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const logos = [
  "/logo.jpg",
  "/logos/cs_logo.png",
  "/logos/ea_logo.png",
  "/logo.jpg",
  "/logos/cs_logo.png",
  "/logos/ea_logo.png",
  "/logo.jpg",
  "/logos/cs_logo.png",
  "/logos/ea_logo.png",
];

export default function Clients() {
  return (
    <Box
      w="100%"
      bg="white"
      py={{ base: 10, md: 16 }}
      textAlign="center"
      fontFamily={'sans-serif'}
    >
      <Heading
        mb={10}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        color="black"
      >
        Empresas que confiaron en nosotros
      </Heading>

      <Marquee gradient={false} speed={50}>
        {logos.map((logo, index) => (
          <Box key={index} mx={10}>
            <Image
              src={logo}
              alt={`Logo ${index}`}
              h={{ base: "50px", md: "70px" }}
              objectFit="contain"
              opacity={0.8}
              _hover={{ opacity: 1 }}
              transition="all 0.2s"
            />
          </Box>
        ))}
      </Marquee>
    </Box>
  );
}
