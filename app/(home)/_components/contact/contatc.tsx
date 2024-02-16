import { Separator } from "@/components/ui/separator";
import { Form } from "./form";
import { AtSign, Mail, PhoneIcon } from "lucide-react";
import Image from "next/image";

export const Contact = () => {
  return (
    <section
      id="contato"
      className="max-w-screen-xl mx-auto w-full px-8 py-10 sm:py-20"
    >
      <div className="flex justify-center flex-col items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-st-tropaz-950  text-center">
          Contato
        </h1>
        <Separator className="bg-st-tropaz-950 w-[180px]" />
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <Form />
        <div className=" flex flex-col items-center gap-5">
          <Image width={400} height={500} src="/maps.png" alt="Localização" />
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
            <a href="mailto:jrv@gmail.com">
              <div className="flex gap-2">
                <Mail size={20} />
                <h1 className="text-sm font-bold hidden md:block">
                  jrv@gmail.com
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
    </section>
  );
};
