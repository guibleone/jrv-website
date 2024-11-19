"use client"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="orçamento"
      className="max-w-screen-md mx-auto w-full px-8 py-10 sm:py-20"
    >
      <div className="flex justify-center flex-col items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-st-tropaz-950  text-center">
          Orçamento
        </h1>
        <Separator className="bg-st-tropaz-950 w-[180px]" />
        <p className="text-sm text-center mt-5">
          Solicite já seu orçamento grátis e tenha seu estofado limpo e renovado
          ainda hoje!
        </p>
        <Button
          className="bg-green-500"
          onClick={() => window.open("https://wa.me/5519995789766?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.", "_blank")}
        >
          <FaWhatsapp size={25} className="mr-5"/>
          Solicitar Orçamento
        </Button>
      </div>
      {
        /**
      <div className="mt-10 grid grid-cols-1 gap-7">
        <Form />
        <div className=" flex flex-col items-center gap-5">
          <div className="flex justify-around md:justify-between items-center gap-5 text-st-tropaz-400 ">
            <a href="tel:+5519993509241">
              <div className="flex gap-2">
                <PhoneIcon size={20} />
                <h1 className="text-sm font-bold hidden md:block">
                  (19) 99350-9241
                </h1>
              </div>
            </a>
            <Separator orientation="vertical" className="h-full" />
            <a href="mailto:jvrhigienizacoes@gmail.com">
              <div className="flex gap-2">
                <Mail size={20} />
                <h1 className="text-sm font-bold hidden md:block">
                  jvrhigienizacoes@gmail.com
                </h1>
              </div>
            </a>
            <Separator orientation="vertical" className="h-full" />
            <a href="https://www.instagram.com/jvr_higienizacao">
              <div className="flex gap-2">
                <AtSign size={20} />
                <h1 className="text-sm font-bold hidden md:block">
                  jvr_higienizacao
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
      */
      }
    </section>
  );
};
