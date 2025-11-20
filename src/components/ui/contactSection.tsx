"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Link,
  Input,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useColorModeValue } from "./color-mode";
import { FaWhatsapp } from "react-icons/fa";

const MotionBox = motion(Box);

export default function ContactSection() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      // 🔹 Cuando entra en pantalla → aparece
      controlsLeft.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
      controlsRight.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    } else {
      // 🔹 Cuando sale de pantalla → desaparece
      controlsLeft.start({
        x: -100,
        opacity: 0,
        transition: { duration: 0.6 },
      });
      controlsRight.start({
        x: 100,
        opacity: 0,
        transition: { duration: 0.6 },
      });
    }
  }, [controlsLeft, controlsRight, inView]);

  const bgLeft = useColorModeValue("#000", "teal.700");
  const bgRight = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex
      ref={ref}
      direction={{ base: "column", md: "row" }}
      justify="center"
      align="stretch"
      w="90%"
      mx="auto"
      // my={10}
      py={10}
      gap={6}
    >
      {/* BOX IZQUIERDO */}
      <MotionBox
        bg={bgLeft}
        color="white"
        borderRadius="lg"
        p={8}
        flex="1"
        initial={{ x: -100, opacity: 0 }}
        animate={controlsLeft}
        textAlign="left"
      >
        <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4}>
          ¡Contactanos!
        </Heading>
        <Text mb={4} fontSize={{ base: "xl", md: "2xl" }}>
          Si querés más información sobre nuestros productos o asesoramiento
          técnico, completá el formulario y te responderemos a la brevedad.
        </Text>
        <Text>
          También podés comunicarte por{" "}
          <Link
            href="https://wa.me/5491123456789?text=Hola!%20Quisiera%20consultar%20por%20el%20área%20de%20ventas."
            // isExternal
            color="white"
            fontWeight="bold"
          >
            <Flex as="span" align="center" gap={2}>
              <FaWhatsapp /> WhatsApp
            </Flex>
          </Link>
        </Text>
      </MotionBox>

      {/* BOX DERECHO */}
      <MotionBox
        bg={bgRight}
        borderRadius="lg"
        p={8}
        flex="1"
        initial={{ x: 100, opacity: 0 }}
        animate={controlsRight}
        boxShadow="md"
      >
        <VStack padding={4} align="stretch">
          <Input placeholder="Nombre" bg="white" />
          <Input placeholder="Email" type="email" bg="white" />
          <Input placeholder="Teléfono" type="tel" bg="white" />
          <Input placeholder="Asunto" bg="white" />
          <Button
            bg={"black"}
            size="lg"
            _hover={{ bg: "gray.400", color: "black" }}
          >
            Enviar
          </Button>
        </VStack>
      </MotionBox>
    </Flex>
  );
}
