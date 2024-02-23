"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const Form: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_r0z566f",
          "template_2mbyonq",
          formRef.current,
          "GI36kBvEaOGDQJs-F"
        )
        .then((result) => {
          console.log(result.text);
          setSuccess(true);
          setError(false);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error.text);
          setError(true);
          setSuccess(false);
          setLoading(false);
        });
    }
  };

  return (
    <form ref={formRef} className="flex flex-col gap-5" onSubmit={sendEmail}>
      <Input type="text" name="name" id="name" placeholder="Nome" required />
      <Input type="text" name="email" id="email" placeholder="Email" required />
      <Input
        type="text"
        name="phone"
        id="phone"
        placeholder="Telefone"
        required
      />
      <Select name="service">
        <SelectTrigger>
          <SelectValue placeholder="Serviço" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Higienização Veicular">Higienização Veicular</SelectItem>
          <SelectItem value="Impermeabilização">Impermeabilização</SelectItem>
          <SelectItem value="Higienização Completa">Higienização Completa</SelectItem>
          <SelectItem value="Limpeza de Tapetes">Limpeza de Tapetes</SelectItem>
        </SelectContent>
      </Select>

      <Textarea name="message" id="message" placeholder="Menssagem" required />
      <Button disabled={loading} className="w-full" type="submit">
        Enviar
      </Button>
      {error && (
        <p className="bg-red-500 text-sm text-white py-2  ">
          Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde.
        </p>
      )}
      {success && (
        <p className="text-white py-2 text-sm text-center bg-apple-700">
          Mensagem enviada com sucesso!
        </p>
      )}
    </form>
  );
};
