"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

export const Hero = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = matches ? 60 : 108;
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="max-w-screen-xl w-full mx-auto py-10 sm:py-20 px-8">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className=" max-w-[500px] mr-auto w-full  flex flex-col gap-10 items-center text-center sm:items-start sm:text-start">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl sm:text-4xl text-st-tropaz-700 font-bold">
              Recupere o Brilho e o Conforto do Seu Estofado
            </h1>
            <p className="text-st-tropaz-400 font-normal text-sm md:text-base space-y-4">
              Dê mais brilho, conforto e saúde ao seu lar com nossa
              higienização! Eliminamos até
              <span className="text-red-500 font-bold"> 99,9%</span>{" "}
              dos agentes que causam alergias, como
              <span className="text-st-tropaz-700 font-bold"> ácaros, bactérias e fungos
              </span>.
            </p>
            <p className="text-st-tropaz-400 font-normal text-sm md:text-base space-y-4">
              Além disso, removemos até
              <span className="text-red-500 font-bold"> 99%</span> das
              <span className="text-st-tropaz-700 font-bold"> manchas e odores
              </span>{" "}
              persistentes, como urina de pets e crianças.
            </p>
            {/* <p className="text-st-tropaz-400 font-normal text-sm md:text-base space-y-4">
              Usando{" "}
              <span className="text-st-tropaz-700 font-bold">
                equipamentos profissionais
              </span>{" "}
              de alta performance, garantimos seu estofado seco em
              <span className="text-green-500 font-bold"> poucas horas</span>,
              pronto para ser usado com segurança, conforto e aquele cheirinho
              de limpeza!
            </p> */}
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => scrollToSection("orçamento")}
              variant={"default"}
            >
              Solicitar um Orçamento
            </Button>
          </div>
        </div>
        <Image
          className="rounded-[30px] hidden md:block"
          src="/hero.jpg"
          alt="Sofá"
          width={450}
          height={300}
        />
      </div>
    </section>
  );
};
