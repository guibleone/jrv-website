import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section id="sobre-nós" className="bg-st-tropaz-50">
      <div className=" max-w-screen-xl mx-auto w-full px-8 py-10 sm:py-20">
        <div className="flex items-center flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-3 max-w-lg mr-auto w-full">
            <h1 className="text-xl md:text-2xl font-bold text-st-tropaz-800">Sobre Nós</h1>
            <Separator className=" bg-st-tropaz-950 w-[180px]" />
            <p className="text-st-tropaz-400 text-sm md:text-base font-normal">
              No coração da JVR, somos mais do que uma equipe de especialistas
              em limpeza de estofados - somos apaixonados por transformar espaços e
              proporcionar conforto aos nossos clientes. Combinando habilidade
              artesanal com tecnologia de ponta, dedicamo-nos a revitalizar
              estofados, trazendo de volta o brilho e a frescura que merecem.
            </p>
          </div>
          <div>
            <Image
              className="rounded-[15px]"
              src="/about-us.jpeg"
              width={200}
              height={230}
              alt="Sobre nós"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
