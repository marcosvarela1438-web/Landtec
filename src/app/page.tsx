'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  useBreakpointValue,
  Button,
  VStack,
  Input,
  Link,
} from '@chakra-ui/react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextLink from 'next/link';
import Thunder1 from '../../public/Thunder1.jpg';
import Thunder2 from '../../public/Thunder2.jpg';
import Thunder3 from '../../public/Thunder3.jpg';
import Thunder4 from '../../public/Thunder4.jpg';
import Jabalina from '../../public/productos/ct_50.png'
import Tapa from '../../public/tapa_aluminio.png'
import Mineral from '../../public/compuesto_mineral.png'
import { useColorModeValue } from '@/components/ui/color-mode';
import { FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import ProductsSection from '@/components/ui/productSesion';
import Clients from '@/components/ui/clients';
import ContactSection from '@/components/ui/contactSection';
import HomeSection from '@/components/ui/homeSection';

const MotionBox = motion(Box);
const images = [Thunder1, Thunder2, Thunder3, Thunder4];
const MotionImage = motion(Image);
const MotionVStack = motion(VStack);

const products = [
  {
    title: 'Pararrayos Thunder X1',
    image: Jabalina,
    description: 'Máxima eficiencia en protección contra descargas atmosféricas.',
  },
  {
    title: 'Dispositivo Antisobretensión LT-200',
    image: Tapa,
    description: 'Protección avanzada para instalaciones eléctricas.',
  },
  {
    title: 'Sistema Integral StormSafe',
    image: Mineral,
    description: 'Solución completa para prevención de rayos y sobretensiones.',
  },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const isDesktop = useBreakpointValue({ base: false, md: true });

  // Cambia de imagen cada 4 segundos solo si está en desktop
  useEffect(() => {
    if (!isDesktop) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isDesktop]);

//  const controlsLeft = useAnimation();
//   const controlsRight = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.3 });

//   useEffect(() => {
//     if (inView) {
//       // 🔹 Cuando entra en pantalla → aparece
//       controlsLeft.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
//       controlsRight.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
//     } else {
//       // 🔹 Cuando sale de pantalla → desaparece
//       controlsLeft.start({ x: -100, opacity: 0, transition: { duration: 0.6 } });
//       controlsRight.start({ x: 100, opacity: 0, transition: { duration: 0.6 } });
//     }
//   }, [controlsLeft, controlsRight, inView]);

//   const bgLeft = useColorModeValue('#000', 'teal.700');
//   const bgRight = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box textAlign="center" bg={'blackAlpha.900'} fontFamily={'sans-serif'}>

      <HomeSection/>


<ProductsSection/>



<Clients/>



  <Box id="contacto">
    <ContactSection />
  </Box>

     {/* <Flex
      ref={ref}
      direction={{ base: 'column', md: 'row' }}
      justify="center"
      align="stretch"
      w="90%"
      mx="auto"
      // my={10}
      py={10}
      gap={6}
    >
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
        <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
          ¡Contactanos!
        </Heading>
        <Text mb={4} fontSize={{ base: 'xl', md: '2xl' }} >
          Si querés más información sobre nuestros productos o asesoramiento
          técnico, completá el formulario y te responderemos a la brevedad.
        </Text>
        <Text>
          También podés comunicarte por{' '}
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
          <Button bg={'black'} size="lg" _hover={{bg: 'gray.400', color:'black'}}>
            Enviar
          </Button>
        </VStack>
      </MotionBox>
    </Flex> */}

    </Box>
  );
}
