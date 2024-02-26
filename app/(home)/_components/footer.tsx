"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";

const links = [
  { name: "Início", href: "início" },
  { name: "Sobre Nós", href: "sobre-nós" },
  { name: "Serviços", href: "serviços" },
  { name: "Galeria", href: "galeria" },
  { name: "Orçamento", href: "orçamento" },
];

export const Footer = () => {
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
    <footer className="bg-apple-700 text-white">
      <div className="max-w-screen-xl mx-auto w-full py-10 sm:py-20 px-8 flex flex-col gap-10">
        <div className="flex gap-10 flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-[160px] sm:w-[180px] h-14 sm:h-16">
              <Image
                src={"/logo-branco.png"}
                alt={"logo jvr"}
                fill
                className="aspect-video w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/jvr_higienizacao">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/5519995789766">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100089071991486&mibextid=LQQJ4d">
                <AiOutlineFacebook size={20} />
              </a>
            </div>
          </div>
          <div className="flex gap-5 sm:gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-base sm:text-xl font-bold">Navague</h1>
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <div
                    className="text-sm hover:cursor-pointer"
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-base sm:text-xl font-bold">Contato</h1>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <p className="text-sm hover:cursor-pointer">
                  Campinas e região
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <div className="flex flex-col gap-2">
                  <a href="tel:+5519993509241">
                    <p className="text-sm hover:cursor-pointer">
                      +55 19 99350-9241
                    </p>
                  </a>
                  <a href="tel:+5519974083193">
                    <p className="text-sm hover:cursor-pointer">
                      +55 19 97408-3193
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <a href="mailto:jvrhigienizacoes@gmail.com">
                  <p className="text-sm hover:cursor-pointer">
                    jvrhigienizacoes@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-medium text-center">
            2024 @{" "}
            <a className="underline" href="https://github.com/guibleone">
              Guilherme Leone
            </a>
          </h1>
          <p className="text-xs text-center">
            Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o
            seu Deus, estará com você por onde você andar
          </p>
        </div>
      </div>
    </footer>
  );
};
