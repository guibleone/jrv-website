"use client";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  initial: { x: "100%" },
  animate: { x: "-230%", transition: { duration: 10, repeat: Infinity, ease:'linear' } },
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
              <p className="text-xs font-medium">
                Limpeza a domicílio em Campinas e região
              </p>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-2">
            <Phone size={15} />
            <a href="tel:+5519993509241">
              <p className="text-xs font-medium">+55 19 99350-9241</p>
            </a>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-2">
            <Mail size={15} />
            <a href="mailto:jvrhigienizacoes@gmail.com">
              <p className="text-xs font-medium">jvrhigienizacoes@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="flex gap-3">
        <a href="https://wa.me/5519995789766">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://www.instagram.com/jvr_higienizacao">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100089071991486&mibextid=LQQJ4d">
            <AiOutlineFacebook size={21} />
          </a>
        </div>
      </motion.div>
    </header>
  );
};
