"use client";
import { Button } from "@/components/ui/button";
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
            <p className="text-st-tropaz-400 font-normal text-sm md:text-base">
              Bem-vindo a JVR, onde a limpeza do seu estofado é mais do que uma
              tarefa - é uma arte!
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => scrollToSection("serviços")}
              variant={"outline"}
            >
              Saiba Mais
            </Button>
            <Button
              onClick={() => scrollToSection("orçamento")}
              variant={"default"}
            >
              Orçamento
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
