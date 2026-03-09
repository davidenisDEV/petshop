import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { BeforeAfter } from "@/components/sections/BeforeAfter"; 
import { Gallery } from "@/components/sections/Gallery";           
import { PetShopStore } from "@/components/sections/PetShopStore"; 
import { VetChief } from "@/components/sections/VetChief";         
import { Reviews } from "@/components/sections/Reviews";           
import { FAQ } from "@/components/sections/FAQ";                   
import { ContactMap } from "@/components/sections/ContactMap"; 
import { Footer } from "@/components/layout/Footer";           
import { FloatingWhatsApp } from "@/components/floating/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[88px] overflow-x-hidden"> 
        <Hero />
        <ServicesGrid />
        <BeforeAfter /> 
        <Gallery /> 
        <PetShopStore />
        <VetChief />
        <Reviews />
        <FAQ />
        <ContactMap /> 
      </main>
      
      <Footer />
      
      <FloatingWhatsApp />
    </div>
  );
}