"use client";

import {
  Box,
} from "@chakra-ui/react";
import ProductsSection from "@/components/ui/productSesion";
import Clients from "@/components/ui/clients";
import ContactSection from "@/components/ui/contactSection";
import HomeSection from "@/components/ui/homeSection";

export default function HomePage() {
  return (
    <Box textAlign="center" bg={"blackAlpha.900"} fontFamily={'sans-serif'} overflowX="hidden">
      <HomeSection />

      <ProductsSection />

      <Clients />

      <Box id="contacto">
        <ContactSection />
      </Box>
    </Box>
  );
}
