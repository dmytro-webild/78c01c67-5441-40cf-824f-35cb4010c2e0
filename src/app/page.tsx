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
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

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
        {
          name: "Inicio",          id: "hero"},
        {
          name: "Experiencia",          id: "experience"},
        {
          name: "Menú",          id: "menu"},
        {
          name: "Contacto",          id: "contact"},
      ]}
      brandName="PICANHA"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars"}}
      title="Fuego Brasileño. Tu Plato Perfecto."
      description="Cortes premium, buffet fresco y pagas solo lo que eliges. Tú eliges la porción. Tú decides el precio."
      buttons={[
        {
          text: "Reservar por WhatsApp",          href: "https://wa.me/50555045249"},
        {
          text: "Ver Menú",          href: "#menu"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/well-done-t-bone-steak-pineapple_140725-7536.jpg?_wi=1",          imageAlt: "Grilled Picanha"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/well-done-t-bone-steak-pineapple_140725-7536.jpg?_wi=2",          imageAlt: "Premium Steak"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/well-done-t-bone-steak-pineapple_140725-7536.jpg?_wi=3",          imageAlt: "Brazilian Grill"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/well-done-t-bone-steak-pineapple_140725-7536.jpg?_wi=4",          imageAlt: "Fire Grilled"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/well-done-t-bone-steak-pineapple_140725-7536.jpg?_wi=5",          imageAlt: "Fresh Buffet"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/well-done-t-bone-steak-pineapple_140725-7536.jpg?_wi=6",          imageAlt: "Dining Experience"},
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="value" data-section="value">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          title: "Pagas por peso",          description: "Control total del precio. Tú eliges la porción. Tú decides el precio.",          imageSrc: "http://img.b2bpic.net/free-photo/assortment-frozen-food-table_23-2148969442.jpg"},
        {
          id: "2",          title: "Cortes premium",          description: "Disfruta de picanha, ribeye y churrasco con calidad insuperable.",          imageSrc: "http://img.b2bpic.net/free-photo/meat-prepared-cooking_23-2148599755.jpg"},
        {
          id: "3",          title: "Opciones para todos",          description: "De platos keto a opciones veganas frescas, cuidamos cada gusto.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-dinner-fried-chicken-dish-with-various-spices-foods-garlics-fallen-oil-bottle-lemon-onions-mushrooms-kumquats_140725-159368.jpg"},
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
        {
          id: "1",          title: "1. Elige tus carnes",          content: "Selecciona tus cortes favoritos directamente de nuestra parrilla al carbón."},
        {
          id: "2",          title: "2. Agrega acompañamientos",          content: "Complementa tu plato con nuestra variedad de guarniciones frescas."},
        {
          id: "3",          title: "3. Paga por peso",          content: "Pesa tu plato y paga exactamente por lo que vas a disfrutar."},
        {
          id: "4",          title: "4. Disfruta",          content: "Vive la auténtica experiencia del fuego brasileño en Managua."},
      ]}
      title="Tu Experiencia, a Tu Manera"
      description="Cada plato es único. Cada visita es tu experiencia."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Picanha",          price: "Premium",          imageSrc: "http://img.b2bpic.net/free-photo/steamed-bao-bun-with-braised-pork-belly-fresh-asian-slaw_84443-85877.jpg?_wi=1"},
        {
          id: "p2",          name: "Ribeye",          price: "Premium",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fried-meat-slice-dark-blue-meat-food-dish-fry-color-animal-rib-dinner-cooking-barbecue_179666-44077.jpg"},
        {
          id: "p3",          name: "Churrasco",          price: "Premium",          imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-raw-chicken-skewers-natural-wood-board-other-stuffs-black-table_140725-148190.jpg?_wi=1"},
        {
          id: "p4",          name: "Brigadeiro",          price: "Postre",          imageSrc: "http://img.b2bpic.net/free-photo/chocolate-balls-with-cocoa-powder_114579-12445.jpg"},
        {
          id: "p5",          name: "Bife de Chorizo",          price: "Premium",          imageSrc: "http://img.b2bpic.net/free-photo/steamed-bao-bun-with-braised-pork-belly-fresh-asian-slaw_84443-85877.jpg?_wi=2"},
        {
          id: "p6",          name: "Lomo de Cerdo",          price: "Premium",          imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-raw-chicken-skewers-natural-wood-board-other-stuffs-black-table_140725-148190.jpg?_wi=2"},
      ]}
      title="Nuestras Especialidades"
      description="Cortes seleccionados con pasión y fuego."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Carlos M.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-friends-restaurant_23-2148395397.jpg"},
        {
          id: "2",          name: "Ana R.",          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-pizza-medium-shot_23-2149872407.jpg"},
        {
          id: "3",          name: "Luis D.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-paying-with-her-phone-via-contactless-payment-while-having-lunch-with-boyfriend-bar_637285-647.jpg"},
        {
          id: "4",          name: "Maria G.",          imageSrc: "http://img.b2bpic.net/free-photo/young-blonde-woman-wearing-casual-blue-shirt-success-sign-doing-positive-gesture-with-hand-thumbs-up-smiling-happy-cheerful-expression-winner-gesture_839833-2022.jpg"},
        {
          id: "5",          name: "Pedro L.",          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-friends-having-laugh_23-2148395406.jpg"},
      ]}
      cardTitle="Lo que dicen nuestros clientes"
      cardAnimation="slide-up"
      cardTag="Opiniones"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      text="¿Listo para la mejor carne en Managua? Visítanos hoy o contáctanos por WhatsApp. Dirección: 1C, Club Terraza, Managua. Tel: 5504 5249. Horarios: Mié-Sáb 11:30AM-9:30PM, Dom 12PM-4PM, Lun-Mar 11:30AM-3PM."
      buttons={[
        {
          text: "WhatsApp Reservas",          href: "https://wa.me/50555045249"},
        {
          text: "Ver Instagram",          href: "https://instagram.com/picanha.managua"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Contacto",          items: [
            {
              label: "5504 5249",              href: "tel:55045249"},
            {
              label: "WhatsApp",              href: "https://wa.me/50555045249"},
            {
              label: "Ubicación: 1C, Club Terraza, Managua",              href: "https://maps.google.com"},
          ],
        },
        {
          title: "Social",          items: [
            {
              label: "Instagram",              href: "https://instagram.com/picanha.managua"},
            {
              label: "Facebook",              href: "#"},
          ],
        },
        {
          title: "Horarios",          items: [
            {
              label: "Mié-Sáb: 11:30AM – 9:30PM",              href: "#"},
            {
              label: "Dom: 12:00PM – 4:00PM",              href: "#"},
            {
              label: "Lun-Mar: 11:30AM – 3:00PM",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Picanha Brazilian Taste. Todos los derechos reservados."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}