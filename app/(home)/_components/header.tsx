"use client";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  initial: { x: "100%" },
  animate: { x: "-190%", transition: { duration: 10, repeat: Infinity, ease:'linear' } },
};

export const Header = () => {
  
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
        return window.matchMedia('(max-width: 768px)').matches;
    }
    return false;
});

useEffect(() => {

    const handler = () => {
        setMatches(window.matchMedia('(max-width: 768px)').matches);
    };

    if (typeof window !== 'undefined') {
        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        };
    }
}, []);


  return (
    <header id="início" className="bg-apple-700 w-full text-white truncate">
      <motion.div
        variants={variants}
        animate={matches && "animate"}
        initial={matches && "initial"}
        className="max-w-screen-xl mx-auto w-full px-8 py-1 md:py-3 flex justify-between gap-10"
      >
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <MapPin size={15} />
            <a href="https://www.google.com/maps">
              <p className="text-xs font-medium">
                Rua das Flores, 123 - São Paulo
              </p>
            </a>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-2">
            <Phone size={15} />
            <a href="tel:+551112345678">
              <p className="text-xs font-medium">+55 11 1234-5678</p>
            </a>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-2">
            <Mail size={15} />
            <a href="mailto:jrv@gmail.com">
              <p className="text-xs font-medium">jrv@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="flex gap-3">
          <a href="https://wa.me/5511987654321">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com">
            <AiOutlineFacebook size={21} />
          </a>
        </div>
      </motion.div>
    </header>
  );
};
