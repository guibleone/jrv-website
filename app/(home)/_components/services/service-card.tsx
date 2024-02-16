import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
      <p className="text-sm  text-st-tropaz-400">{description}</p>
      <Button size={'sm'} asChild className="self-end">
        <Link href={link}>
          Contratar
        </Link>
      </Button>
    </div>
  );
};
