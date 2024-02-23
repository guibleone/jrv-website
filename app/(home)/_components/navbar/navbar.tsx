"use client";
import Image from "next/image";
import Drawer from "./drawer";
import { Button } from "@/components/ui/button";
import { Home, Phone, Users } from "lucide-react";
import { ImImages } from "react-icons/im";
import { GiVacuumCleaner } from "react-icons/gi";
import { useRef } from "react";

const links = [
  { name: "Início", href: "início" },
  { name: "Sobre Nós", href: "sobre-nós" },
  { name: "Serviços", href: "serviços" },
  { name: "Galeria", href: "galeria" },
  { name: "Contato", href: "contato" },
];

export const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section && navbarRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight;
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav ref={navbarRef} className="bg-white sticky top-0 z-10">
      <div className="max-w-screen-xl w-full mx-auto py-5 px-8 relative">
        <div className="flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={170}
            height={150}
            className="w-28 md:w-48 hover:cursor-pointer"
            onClick={() => scrollToSection("início")}
          />

          <ul className="gap-8 text-st-tropaz-950 hidden md:flex">
            {links.map((link) => (
              <li
                className="hover:text-st-tropaz-500 hover:underline font-semibold text-sm md:text-base cursor-pointer transition-colors duration-200 ease-in-out"
                key={link.name}
                onClick={() => scrollToSection(`${link.href}`)}
              >
                {link.name}
              </li>
            ))}
          </ul>
          <Button asChild className="hidden sm:block">
            <a href="https://wa.me/5519995789766">Agendar</a>
          </Button>
        </div>
        <Drawer>
          <div className="flex flex-col gap-5">
            <h1 className="text-gray-900 font-bold text-lg">Menu</h1>
            <div className="flex flex-col gap-5">
              <div
                className="border-b flex gap-2 items-center font-medium border-gray-900 pb-2"
                onClick={() => scrollToSection("início")}
              >
                <Home size={20} />
                <span className="text-gray-900 text-sm hover:text-gray-400">
                  Início
                </span>
              </div>
              <div
                className="border-b flex gap-2 items-center font-medium border-gray-900 pb-2"
                onClick={() => scrollToSection("sobre-nós")}
              >
                <Users size={20} />
                <span className="text-gray-900 text-sm hover:text-gray-400">
                  Sobre Nós
                </span>
              </div>
              <div
                className="border-b flex gap-2 items-center font-medium border-gray-900 pb-2"
                onClick={() => scrollToSection("serviços")}
              >
                <GiVacuumCleaner size={20} />
                <span className="text-gray-900 text-sm hover:text-gray-400">
                  Serviços
                </span>
              </div>
              <div
                className="border-b flex gap-2 items-center font-medium border-gray-900 pb-2"
                onClick={() => scrollToSection("galeria")}
              >
                <ImImages size={20} />
                <span className="text-gray-900 text-sm hover:text-gray-400">
                  Galeria
                </span>
              </div>
              <div
                className="border-b flex gap-2 items-center font-medium border-gray-900 pb-2"
                onClick={() => scrollToSection("contato")}
              >
                <Phone size={20} />
                <span className="text-gray-900 text-sm hover:text-gray-400">
                  Contato
                </span>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};
