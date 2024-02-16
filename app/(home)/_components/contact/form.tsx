"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      <Input type="text"  name="name" id="name" placeholder="Nome" required />
      <Input type="text" name="email" id="email" placeholder="Email" required />
      <Input type="text" name="phone" id="phone" placeholder="Telefone" required />
      <Textarea name="message" id="message" placeholder="Mensagem" required />
      <Button disabled={loading} className="w-full" type="submit">
        Enviar
      </Button>
      {error && (
        <p className="text-red-500">
          Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde.
        </p>
      )}
      {success && (
        <p className="text-white py-2 font-medium text-center bg-apple-700">
          Mensagem enviada com sucesso!
        </p>
      )}
    </form>
  );
};
