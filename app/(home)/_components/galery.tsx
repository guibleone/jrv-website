'use client'
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const images = [
  {
    src: "/galery/image-1.jpeg",
    alt: "Foto",
  },
  {
    src: "/galery/image-2.jpeg",
    alt: "Foto",
  },
  {
    src: "/galery/image-3.jpeg",
    alt: "Foto",
  },
  {
    src: "/galery/image-4.jpeg",
    alt: "Foto",
  },
  {
    src: "/galery/image-5.jpeg",
    alt: "Foto",
  },
  {
    src: "/galery/image-6.jpeg",
    alt: "Foto",
  },
  {
    src: "/galery/image-7.jpeg",
    alt: "Foto",
  },
];

export const Galery = () => {
  return (
    <section id="galeria" className="max-w-screen-xl mx-auto w-full px-8 py-10 sm:py-20">
      <div className="flex justify-center flex-col items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-st-tropaz-950  text-center">
          Galeria
        </h1>
        <Separator className="bg-st-tropaz-950 w-[180px]" />
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-5">
        {images.map((image, index) => (
          <div 
          onClick={() => {
            window.open(image.src, "_blank");
          }}
          key={index} className="relative w-full h-36 sm:h-40 md:h-52">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-lg aspect-video object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:cursor-pointer hover:opacity-80"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
