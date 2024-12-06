import {
 Activity, AtSign, CarFront, Facebook, Instagram, LinkIcon, MapPinned, Medal, MoveDown, PersonStanding, Phone, ShipWheel
} from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import HeroVideoDialog from "@/src/app/components/ui/hero-video-dialog"
import Partners from "@/src/app/components/partners"
import { Separator } from "@/src/app/components/ui/separator"
import Navbar from "@/src/app/components/navbar"
import ServiceCard from "@/src/app/components/services"
import Footer from "@/src/app/components/footer"
import AnimatedShinyText from "@/src/app/components/ui/animated-shiny-text"
import { cn } from "@/src/lib/utils"

// import Stradale from "@/public/stradale1.webp"
// import Stradale2 from "@/public/stradale2.webp"

export default function Page() {
  if (typeof window !== "undefined") {
    const videoElement = document.getElementById("background-video") as HTMLVideoElement;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Erro ao tentar reproduzir o vídeo:", error);
      });
    }
  }
  
  return (
    <div className="min-h-screen bg-black text-white tracking-[-0.028rem]">
      <main className="pt-16 px-4 md:px-14">
        <div className="mb-5">
          <Navbar />
        </div>
        <section className="relative h-[50vh] md:h-screen w-full overflow-hidden" id="home">
          <div className="relative h-full w-full overflow-hidden vignette-container">
            <video
              id="background-video"
              className="absolute top-0 left-0 w-full h-full object-cover rounded"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-between py-10 md:py-20">
              <div className="z-10 flex items-center justify-center">
                <div className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>✨ Uma experiência única</span>
                  </AnimatedShinyText>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center z-10 relative">
                A Qualidade
                <br />
                que acelera.
              </h1>
              <MoveDown className="text-white animate-bounce w-8 h-8 z-10 relative" />
              <div />
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-full h-[200px] md:h-[400px] bg-gradient-to-b from-transparent to-black overflow-hidden z-0" />
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center pt-16 md:pt-[4rem]" id="about">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
              Sofisticação, performance
              <br />
              & confiança.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-400 text-center md:text-right">
              A Stradale Car Service é uma oficina mecânica premium em São Paulo, especializada em serviços completos de manutenção e performance automotiva.
            </p>
          </div>
        </section>

        <div className="pb-[2rem] bg-black text-white">
          <section className="max-w-6xl mx-auto">
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
              <ServiceCard icon={ShipWheel} title="Flagship Store Michelin" description="Como Flagship Store Michelin, a Stradale oferece acesso exclusivo aos melhores pneus da marca, promoções e serviços diferenciados, garantindo qualidade, segurança e desempenho para os carros mais sofisticados." />
              <ServiceCard icon={PersonStanding} title="Profissionais Treinados" description="Essa formação garante que cada profissional tenha o conhecimento técnico necessário para lidar com tecnologias avançadas e oferecer soluções eficazes para qualquer necessidade de manutenção ou performance." />
              <ServiceCard icon={Activity} title="Scanner Oficias" description="Esses equipamentos garantem diagnósticos precisos, reduzindo o tempo de manutenção e aumentando a eficiência na solução de problemas." />
              <ServiceCard icon={CarFront} title="Tecnologia de Ponta" description="Na Stradale, a inovação está presente em cada detalhe. Desde equipamentos modernos até técnicas avançadas de manutenção, tudo é pensado para maximizar a performance dos veículos." />
            </div>

            <div className="justify-center flex pt-20 flex-col items-center gap-5">
              <Medal />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                Nossa Missão
              </h1>
              <p className="text-gray-400 w-full md:w-2/3 lg:w-1/2 text-center pt-4">Ser referência nas soluções para manutenção e preparação automotiva para o Segmento Premium no Brasil.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center pt-[4rem]">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-3xl font-bold pb-8 text-center">Stradale - F1</h1>
                <div className="w-full md:w-[600px] h-[300px] md:h-[400px] relative">
                  <Image
                    src="https://raw.githubusercontent.com/7Johnsz/stradale/refs/heads/main/public/stradale1.webp"
                    alt="Stradale"
                    className="rounded-lg shadow-lg object-cover"
                    unoptimized
                    fill
                  />
                </div>
                <div className="flex items-center gap-3 justify-center pt-8 text-center">
                  <MapPinned />
                  <h1 className="gap-4">
                    Avenida Cidade Jardim, 911 - Jardim Paulistano, São Paulo - SP
                  </h1>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-3xl font-bold pb-8 text-center">Stradale - F2</h1>
                <div className="w-full md:w-[600px] h-[300px] md:h-[400px] relative">
                  <Image
                    src="https://raw.githubusercontent.com/7Johnsz/stradale/refs/heads/main/public/stradale2.webp"
                    alt="Stradale"
                    className="rounded-lg shadow-lg object-cover"
                    unoptimized
                    fill
                  />
                </div>
                <div className="flex items-center gap-3 justify-center pt-8 text-center">
                  <MapPinned />
                  <h1 className="gap-4">
                    R. Alvarenga, 2365 - Butantã, São Paulo - SP
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Separator className="border my-12 border-red-950" />

        <section className="py-24" id="experience">
          <div className="flex flex-col md:flex-row items-center gap-8 px-5 justify-center">
            <Image
              src="https://stradale.com.br/wp-content/themes/stradale/img/exp8.webp"
              alt="Stradale Experience"
              className="object-cover rounded-lg shadow-lg w-full md:w-1/2"
              width={500}
              height={500}
              unoptimized
            />
            <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">
                Stradale
                <span className="text-red-700 pl-3">Experience</span>
              </h1>
              <p className="text-gray-400 leading-relaxed">
                O Stradale Experience é um evento exclusivo de relacionamento entre clientes e amigos Stradale Car Service, que oferece momentos de lazer e velocidade.
                Realizado em circuito fechado, como o Autódromo Velo Città, em Mogi Guaçu (SP), o encontro ainda oferece coach de pilotagem aos proprietários de super esportivos
                como Ferrari, Porsches e Lamborghinis, que podem testar toda a performance de seus motores, resultado da preparação realizada pela Stradale Car Service.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8 py-12 items-center bg-zinc-950/25 rounded">
          <div
            className="flex flex-col justify-start flex-shrink-0"
            style={{ outline: "none", transform: "none" }}
          >
            <p className="text-lg font-bold">
              <span
                style={{
                  backgroundImage: "linear-gradient(309deg, rgb(255, 61, 81) 2.25225%, rgb(255, 51, 51) 48.0785%, rgb(119, 0, 0) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 30px rgba(255, 61, 81, 0.2), 0 0 16px rgba(255, 51, 51, 0.3), 0 0 24px rgba(119, 0, 0, 0.5)",
                }}
              >
                Fique por dentro!
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-2xl md:text-3xl font-bold">A Stradale Car Service está no</h1>
            <h1 className="text-3xl md:text-5xl font-bold text-red-700">YouTube</h1>
          </div>
          <div className="relative w-full max-w-[600px]">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/kTXyx094ThE"
              thumbnailSrc="https://img.youtube.com/vi/kTXyx094ThE/0.jpg"
              thumbnailAlt="Hero Video"
            />
          </div>

          <div className="underline">
            <Link href="https://www.youtube.com/@StradaleCarService" className="flex items-center gap-2">
              <h1>Fique por dentro das nossas novidades</h1>
              <LinkIcon width={15} />
            </Link>
          </div>
        </section>

        <section className="pt-[4rem] !mt-0 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold font-mono tracking-tighter text-center">Grupos</h1>
            </div>
          </div>
          <div className="w-full mt-4 flex flex-wrap gap-4 justify-center py-8 pb-16">
            <Image
              src="https://stradale.com.br/wp-content/themes/stradale/img/gpr1.webp"
              alt="Stradale Experience"
              className="rounded-lg shadow-lg"
              width={100}
              height={100}
              unoptimized
            />
            <Image
              src="https://stradale.com.br/wp-content/themes/stradale/img/gpe2.webp"
              alt="Stradale Experience"
              className="rounded-lg shadow-lg"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              unoptimized
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold font-mono tracking-tighter text-center">Nossos parceiros</h1>
            </div>
            <p className="text-gray-400 mt-4 text-center">Parceiros que impulsionam nossa excelência.</p>
          </div>
          <div className="w-full mt-4">
            <Partners baseVelocity={5} className="py-4" />
          </div>
        </section>

        <Separator className="border my-12 border-red-950" />

        <section className="flex flex-col gap-8 items-center bg-zinc-950/25 rounded pt-16 px-4">
          <div
            className="flex flex-col justify-start flex-shrink-0"
            style={{ outline: "none", transform: "none" }}
            id="contact"
          >
            <p className="text-lg font-bold">
              <span
                style={{
                  backgroundImage: "linear-gradient(309deg, rgb(255, 61, 81) 2.25225%, rgb(255, 51, 51) 48.0785%, rgb(119, 0, 0) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 30px rgba(255, 61, 81, 0.2), 0 0 16px rgba(255, 51, 51, 0.3), 0 0 24px rgba(119, 0, 0, 0.5)",
                }}
              >
                Entre em contato
              </span>
            </p>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-center">Contatos</h1>

          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <div className="flex items-center gap-2">
              <AtSign />
              <Link className="hover:underline text-gray-400" href="mailto:pedro.costa@stradale.com.br">pedro.costa@stradale.com.br</Link>
            </div>
            <div className="flex items-center gap-2">
              <Instagram />
              <Link className="hover:underline text-gray-400" href="https://www.instagram.com/stradalecarservice/">@stradalecarservice</Link>
            </div>
            <div className="flex items-center gap-2">
              <Facebook />
              <Link className="hover:underline text-gray-400" href="https://www.facebook.com/stradalecarservice">fb.com/stradalecarservice</Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone />
              <Link className="hover:underline text-gray-400" href="https://api.whatsapp.com/send?phone=5511911226423&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Stradale!">+55 (11) 91122-6423</Link>
            </div>
          </div>

          <div className="pt-8 justify-center items-center text-center gap-4 flex flex-col">
            <h1 className="text-2xl md:text-3xl text-mono">Horário de Atendimento</h1>
            <p className="text-gray-400">Seg a Sex das 8:00 ás 18:00.</p>
            <p className="text-gray-400">Sábado das 8:00 ás 34:00</p>
          </div>

          <div className="bottom-[-20px] w-full left-1/2 h-[3rem] bg-gradient-to-b from-transparent to-black overflow-hidden z-0" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
