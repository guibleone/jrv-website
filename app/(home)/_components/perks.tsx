import { BadgeDollarSign, CheckCircle, UserRoundCheck } from "lucide-react";

interface PerkProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

export const Perk = ({ description, Icon, title }: PerkProps) => {
  return (
    <div className=" flex flex-col items-center text-center gap-5">
      <Icon size={35} />
      <h1 className="text-apple-950 text-xl font-bold">{title}</h1>
      <p className="text-apple-700 text-sm">{description}</p>
    </div>
  );
};

export const Perks = () => {
  return (
    <section className="bg-apple-50 w-full">
      <div className="max-w-screen-xl mx-auto w-full px-8 py-10 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <Perk
            Icon={CheckCircle}
            title="Qualidade Garantida"
            description="Sua confiança é nossa maior motivação e garantimos resultados que você vai adorar, toda vez."
          />
          <Perk
            Icon={UserRoundCheck}
            title="Técnicos Qualificados"
            description="Possuímos técnicos experientes e altamente qualificados para garantir a melhor experiência possível."
          />
          <Perk
            Icon={BadgeDollarSign}
            title="Preços Imbatíveis"
            description="Nossos serviços de limpeza de sofás oferecem preços irresistíveis, sem comprometer a qualidade."
          />
        </div>
      </div>
    </section>
  );
};
