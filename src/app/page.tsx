"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmall"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Inicio", id: "hero" },
        { name: "Experiencia", id: "experience" },
        { name: "Menú", id: "menu" },
        { name: "Contacto", id: "contact" },
      ]}
      brandName="PICANHA"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{ variant: "gradient-bars" }}
      title="Fuego Brasileño. Tu Plato Perfecto."
      description="Cortes premium, buffet fresco y pagas solo lo que eliges. Tú eliges la porción. Tú decides el precio."
      buttons={[
        { text: "Reservar por WhatsApp", href: "https://wa.me/50555045249" },
        { text: "Ver Menú", href: "#menu" },
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/well-done-t-bone-steak-pineapple_140725-7536.jpg?_wi=1", imageAlt: "Grilled Picanha" },
        { imageSrc: "http://img.b2bpic.net/free-photo/well-done-t-bone-steak-pineapple_140725-7536.jpg?_wi=2", imageAlt: "Premium Steak" },
        { imageSrc: "http://img.b2bpic.net/free-photo/well-done-t-bone-steak-pineapple_140725-7536.jpg?_wi=3", imageAlt: "Brazilian Grill" },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="value" data-section="value">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "1", title: "Pagas por peso", descriptions: ["Control total del precio. Tú eliges la porción."], imageSrc: "http://img.b2bpic.net/free-photo/assortment-frozen-food-table_23-2148969442.jpg" },
        { id: "2", title: "Cortes premium", descriptions: ["Picanha, ribeye y churrasco con calidad insuperable."], imageSrc: "http://img.b2bpic.net/free-photo/meat-prepared-cooking_23-2148599755.jpg" },
        { id: "3", title: "Opciones para todos", descriptions: ["De keto a opciones veganas frescas."], imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-dinner-fried-chicken-dish-with-various-spices-foods-garlics-fallen-oil-bottle-lemon-onions-mushrooms-kumquats_140725-159368.jpg" },
      ]}
      title="La Excelencia en Cada Corte"
      description="Una experiencia gastronómica diseñada a tu gusto."
    />
  </div>

  <div id="experience" data-section="experience">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "Elige tus carnes", content: "Selecciona cortes directamente de nuestra parrilla al carbón." },
        { id: "2", title: "Agrega acompañamientos", content: "Guarniciones frescas para complementar tu plato." },
        { id: "3", title: "Paga por peso", content: "Paga exactamente por lo que vas a disfrutar." },
      ]}
      title="Tu Experiencia, a Tu Manera"
      description="Cada plato es único."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      gridVariant="three-columns-all-equal-width"
      products={[
        { id: "p1", name: "Picanha", price: "Premium", imageSrc: "http://img.b2bpic.net/free-photo/steamed-bao-bun-with-braised-pork-belly-fresh-asian-slaw_84443-85877.jpg?_wi=1" },
        { id: "p2", name: "Ribeye", price: "Premium", imageSrc: "http://img.b2bpic.net/free-photo/front-view-fried-meat-slice-dark-blue-meat-food-dish-fry-color-animal-rib-dinner-cooking-barbecue_179666-44077.jpg" },
        { id: "p3", name: "Churrasco", price: "Premium", imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-raw-chicken-skewers-natural-wood-board-other-stuffs-black-table_140725-148190.jpg?_wi=1" },
      ]}
      title="Nuestras Especialidades"
      description="Cortes seleccionados con pasión y fuego."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      showRating={true}
      useInvertedBackground={false}
      title="Lo que dicen nuestros clientes"
      description="Opiniones reales de Google"
      testimonials={[
        { id: "1", name: "Carlos M.", handle: "@google-user", testimonial: "La mejor carne de Managua, atención impecable.", rating: 5, icon: Star },
        { id: "2", name: "Ana R.", handle: "@google-user", testimonial: "El sistema de peso es genial, muy recomendado.", rating: 5, icon: Star },
        { id: "3", name: "Luis D.", handle: "@google-user", testimonial: "Auténtico sabor brasileño. Volveré pronto.", rating: 4, icon: Star },
      ]}
      textboxLayout="default"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      text="¿Listo para la mejor carne en Managua? Visítanos hoy o contáctanos por WhatsApp. Dirección: 1C, Club Terraza, Managua. Tel: 5504 5249."
      buttons={[
        { text: "WhatsApp Reservas", href: "https://wa.me/50555045249" },
        { text: "Ver Instagram", href: "https://instagram.com/picanhabt.ni" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="PICANHA"
      columns={[
        { title: "Contacto", items: [{ label: "5504 5249", href: "tel:55045249" }] },
        { title: "Social", items: [{ label: "Instagram", href: "https://instagram.com/picanhabt.ni" }] },
      ]}
      copyrightText="© 2024 Picanha Brazilian Taste. Todos los derechos reservados."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}