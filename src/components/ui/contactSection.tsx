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
  Textarea,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useColorModeValue } from "./color-mode";
import { FaWhatsapp } from "react-icons/fa";

const MotionBox = motion(Box);

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export default function ContactSection() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controlsLeft.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
      controlsRight.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    } else {
      controlsLeft.start({ x: -100, opacity: 0, transition: { duration: 0.6 } });
      controlsRight.start({ x: 100, opacity: 0, transition: { duration: 0.6 } });
    }
  }, [controlsLeft, controlsRight, inView]);

  const bgLeft = useColorModeValue("#000", "teal.700");
  const bgRight = useColorModeValue("gray.100", "gray.700");
  

  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState("");

  const validate = (formData: FormData) => {
    const newErrors: any = {};

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name) newErrors.name = "El nombre es obligatorio.";
    if (!email) newErrors.email = "El email es obligatorio.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Ingresa un email válido.";

    if (!phone) newErrors.phone = "El teléfono es obligatorio.";
    else if (!/^[0-9]+$/.test(phone))
      newErrors.phone = "Solo se permiten números.";

    if (!message) newErrors.message = "La consulta es obligatoria.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (!validate(formData)) return;

    setResult("Enviando...");

    formData.append("subject", "Consulta de la web");
    formData.append("access_key", "334ae6e4-9006-4fa3-980d-58a6d5ede7f4");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((r) => r.json());

    if (res.success) {
      setResult("Mensaje enviado correctamente 🎉");

      // <<--- Reset seguro y PRO
      formRef.current?.reset();

      setErrors({});
    } else {
      setResult("Hubo un error al enviar el mensaje ❌");
    }
  }

  return (
    <Flex
      ref={ref}
      direction={{ base: "column", md: "row" }}
      justify="center"
      align="stretch"
      w="90%"
      mx="auto"
      py={10}
      gap={8}
    >
      {/* BOX IZQUIERDO */}
      <MotionBox
        bg={bgLeft}
        color="white"
        borderRadius="lg"
        p={{ base: 6, md: 8 }}
        flex="1"
        initial={{ x: -100, opacity: 0 }}
        animate={controlsLeft}
        textAlign="left"
      >
        <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4}>
          ¡Contáctanos!
        </Heading>

        <Text mb={4} fontSize={{ base: "lg", md: "xl" }}>
          Si querés más información sobre nuestros productos o asesoramiento
          técnico, completá el formulario y te responderemos a la brevedad.
        </Text>

        <Text fontSize={{ base: "md", md: "lg" }}>
          También podés comunicarte por{" "}
          <Link
            href="https://wa.me/5491123456789?text=Hola!%20Quisiera%20consultar%20por%20el%20área%20de%20ventas."
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
        p={{ base: 6, md: 8 }}
        flex="1"
        initial={{ x: 100, opacity: 0 }}
        animate={controlsRight}
        boxShadow="md"
      >
      <form ref={formRef} onSubmit={onSubmit}>
      <VStack padding={2} align="stretch" gap={4}>
        <div>
          <Input name="name" placeholder="Nombre" bg="white" />
          {errors.name && <Text color="red.500">{errors.name}</Text>}
        </div>

        <div>
          <Input name="email" placeholder="Email" type="email" bg="white" />
          {errors.email && <Text color="red.500">{errors.email}</Text>}
        </div>

        <div>
          <Input name="phone" placeholder="Teléfono" type="tel" bg="white" />
          {errors.phone && <Text color="red.500">{errors.phone}</Text>}
        </div>

        <div>
          <Textarea name="message" placeholder="Consulta" bg="white" />
          {errors.message && <Text color="red.500">{errors.message}</Text>}
        </div>

        <Button
          bg="black"
          size="lg"
          _hover={{ bg: "gray.400", color: "black" }}
          type="submit"
        >
          Enviar
        </Button>

        {result && <Text textAlign="center">{result}</Text>}
      </VStack>
    </form>
      </MotionBox>
    </Flex>
  );
}
