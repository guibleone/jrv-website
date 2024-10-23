"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const ServiceCard = ({
  description,
  image,
  link,
  title,
}: ServiceCardProps) => {
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
    <div className="flex flex-col gap-8">
      <Image
        src={image}
        alt={title}
        width={300}
        height={400}
        className="aspect-video object-cover rounded-lg w-full"
      />
      <h1 className="text-xl font-semibold text-st-tropaz-700">{title}</h1>
      <p className="text-sm text-st-tropaz-400">{description}</p>
      <Button
        size={"sm"}
        className="self-end"
        onClick={() => window.open(link, "_blank")}
      >
        Contratar
      </Button>
    </div>
  );
};
