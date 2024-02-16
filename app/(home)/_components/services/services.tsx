import { Separator } from "@/components/ui/separator";
import { ServiceCard } from "./service-card";

const services = [
  {
    title: "Higienização Veicular ",
    description:
      "Limpeza completa de bancos, vidros e teto, hidratação e revitalização de plásticos, higienização de carpetes e porta-malas, além de uma lavagem externa com pneu pretinho.",
    image: "/limpeza-carro.jpeg",
    link: "#",
  },
  {
    title: "Impermeabilização",
    description:
      "A impermeabilização aplicao uma camada protetora que atua nas fibras dos tecidos, aumentando sua durabilidade e resistência contra líquidos, reduzindo a acumulação de sujeira.",
    image: "/impermeabilização.jpeg",
    link: "#",
  },
  {
    title: "Higienização Completa",
    description:
      "A higienização e limpeza de estofados envolve a eliminação de bactérias. Esse processo é realizado utilizando produtos biodegradáveis, seguido pela remoção da sujeira através da extração",
    image: "/higienização.jpeg",
    link: "#",
  },
];

export const Services = () => {
  return (
    <section
      id="serviços"
      className="max-w-screen-xl mx-auto w-full px-8 py-10 sm:py-20"
    >
      <div className="flex justify-center flex-col items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-st-tropaz-950  text-center">
          Serviços
        </h1>
        <Separator className="bg-st-tropaz-950 w-[180px]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-10 w-full">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
