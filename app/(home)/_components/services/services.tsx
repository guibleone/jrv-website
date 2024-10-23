"use client";
import { Separator } from "@/components/ui/separator";
import Autoplay from "embla-carousel-autoplay";
import { ServiceCard } from "./service-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

const services = [
  {
    title: "Higienização Veicular",
    description:
      "Limpeza completa de bancos, vidros e teto, hidratação e revitalização de plásticos, higienização de carpetes e porta-malas, além de uma lavagem externa com pneu pretinho.",
    image: "/limpeza-carro.jpeg",
    link:
      "https://wa.me/5519995789766?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20higieniza%C3%A7%C3%A3o%20veicular",
  },
  {
    title: "Impermeabilização",
    description:
      "A impermeabilização aplica uma camada protetora que atua nas fibras dos tecidos, aumentando sua durabilidade e resistência contra líquidos, reduzindo a acumulação de sujeira.",
    image: "/impermeabilização.jpeg",
    link:
      "https://wa.me/5519995789766?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20impermeabiliza%C3%A7%C3%A3o",
  },
  {
    title: "Higienização Completa",
    description:
      "A higienização e limpeza de estofados envolve a eliminação de bactérias. Esse processo é realizado utilizando produtos biodegradáveis, seguido pela remoção da sujeira através da extração.",
    image: "/higienização.jpeg",
    link:
      "https://wa.me/5519995789766?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20higieniza%C3%A7%C3%A3o%20completa",
  },
  {
    title: "Limpeza de Tapetes",
    description:
      "A limpeza de tapetes é realizada com produtos específicos para cada tipo de fibra, garantindo a remoção de manchas e sujeiras, além de eliminar ácaros e bactérias.",
    image: "/limpeza-tapetes.jpeg",
    link:
      "https://wa.me/5519995789766?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20limpeza%20de%20tapetes",
  },
];

export const Services = () => {
  return (
    <section
      id="serviços"
      className="max-w-screen-xl mx-auto w-full px-8 py-10 sm:py-20"
    >
      <div className="flex justify-center flex-col items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-st-tropaz-950  text-center">
          Serviços
        </h1>
        <Separator className="bg-st-tropaz-950 w-[180px]" />
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mt-10"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {services.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ServiceCard {...service} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
