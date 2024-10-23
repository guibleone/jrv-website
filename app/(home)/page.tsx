import { AboutUs } from "./_components/about-us";
import { Contact } from "./_components/contact/contatc";
import { Footer } from "./_components/footer";
import { Galery } from "./_components/galery";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar/navbar";
import { Perks } from "./_components/perks";
import { Services } from "./_components/services/services";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <div className="flex-1">
        <Hero />
        <Services />
        <Perks />
        <Galery />
        <AboutUs />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
