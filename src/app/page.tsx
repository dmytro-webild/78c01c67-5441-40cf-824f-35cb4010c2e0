"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
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
          text: "Ver menú",          href: "#menu"},
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

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Brigadeiro", price: "Un dulce típico brasileño", imageSrc: "http://img.b2bpic.net/free-photo/chocolate-balls-with-cocoa-powder_114579-12445.jpg?_wi=1" },
        { id: "p2", name: "Plato para compartir", price: "Dos libras de carne de su preferencia y tres guarniciones", imageSrc: "http://img.b2bpic.net/free-photo/steamed-bao-bun-with-braised-pork-belly-fresh-asian-slaw_84443-85877.jpg?_wi=1" },
        { id: "p3", name: "Libra de carne", price: "Escoge los diferentes tipos de carne que desee hasta completar una libra", imageSrc: "http://img.b2bpic.net/free-photo/front-view-fried-meat-slice-dark-blue-meat-food-dish-fry-color-animal-rib-dinner-cooking-barbecue_179666-44077.jpg?_wi=1" },
        { id: "p4", name: "Media libra de carne", price: "Escoge media libra de las carnes de tu elección", imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-raw-chicken-skewers-natural-wood-board-other-stuffs-black-table_140725-148190.jpg?_wi=1" },
        { id: "p5", name: "Combo picañero", price: "Deliciosas ocho onzas de picaña acompañada de ensalada y la guarnición de su preferencia", imageSrc: "http://img.b2bpic.net/free-photo/steamed-bao-bun-with-braised-pork-belly-fresh-asian-slaw_84443-85877.jpg?_wi=2" },
        { id: "p6", name: "Combo fit", price: "Ocho onzas de carne de su preferencia y porción de ensalada", imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-raw-chicken-skewers-natural-wood-board-other-stuffs-black-table_140725-148190.jpg?_wi=2" },
        { id: "p7", name: "Feijoada (libra)", price: "Deliciosa feijoada, plato típico de Brasil a base de frijoles negros, cerdo y embutidos. Acompañado con farofa", imageSrc: "http://img.b2bpic.net/free-photo/chocolate-balls-with-cocoa-powder_114579-12445.jpg?_wi=2" },
        { id: "p8", name: "Plato completo", price: "Ocho onzas de carne de su preferencia, máximo 2 porciones de ensalada y una porción de carbohidrato", imageSrc: "http://img.b2bpic.net/free-photo/front-view-fried-meat-slice-dark-blue-meat-food-dish-fry-color-animal-rib-dinner-cooking-barbecue_179666-44077.jpg?_wi=2" },
        { id: "p9", name: "Plato variado", price: "Ocho onzas de carne y elige las guarniciones que desee", imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-raw-chicken-skewers-natural-wood-board-other-stuffs-black-table_140725-148190.jpg?_wi=1" }
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
          id: "1",          name: "Alejandro R.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-friends-restaurant_23-2148395397.jpg"},
        {
          id: "2",          name: "Elena S.",          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-pizza-medium-shot_23-2149872407.jpg"},
        {
          id: "3",          name: "Mateo V.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-paying-with-her-phone-via-contactless-payment-while-having-lunch-with-boyfriend-bar_637285-647.jpg"},
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
      text="¿Listo para la mejor carne en Managua? Visítanos hoy o contáctanos por WhatsApp. Dirección: 1C, Club Terraza, Managua. Tel: 5504 5249 / 2230 9498. Horarios: Mié-Sáb 11:30AM-9:30PM, Dom 12PM-4PM, Lun-Mar 11:30AM-3PM."
      buttons={[
        {
          text: "WhatsApp Reservas",          href: "https://wa.me/50555045249"},
        {
          text: "Ver Instagram",          href: "https://instagram.com/picanhabt.ni"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Contacto",          items: [
            {
              label: "5504 5249 / 2230 9498",              href: "tel:55045249"},
            {
              label: "Ubicación: 1C, Club Terraza, Managua",              href: "https://maps.google.com"},
          ],
        },
        {
          title: "Social",          items: [
            {
              label: "Instagram",              href: "https://instagram.com/picanhabt.ni"},
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