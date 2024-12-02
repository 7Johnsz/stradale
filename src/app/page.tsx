import { Card } from "@/src/app/components/ui/card"
import { CarFront } from "lucide-react"
import Image from "next/image"

import Mercedes from "@/public/mercedes amg.jpg"
import Navbar from "@/src/app/components/navbar"
import Ford from "@/public/gt40.jpg"
import Bmw from "@/public/bmw.jpg"

import Partners from "@/src/app/components/partners"

const partnerLogos = [
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr1.webp", alt: "Partner 1" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr2.webp", alt: "Partner 2" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr3.webp", alt: "Partner 3" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr4.webp", alt: "Partner 4" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr5.webp", alt: "Partner 5" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr6.webp", alt: "Partner 6" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr7.webp", alt: "Partner 7" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr8.webp", alt: "Partner 8" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr9.webp", alt: "Partner 9" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr10.webp", alt: "Partner 10" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr11.webp", alt: "Partner 11" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr12.webp", alt: "Partner 12" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr13.webp", alt: "Partner 13" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr14.webp", alt: "Partner 14" },
  { src: "https://stradale.com.br/wp-content/themes/stradale/img/pcr15.webp", alt: "Partner 15" }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="!px-8 md:px-6 py-12 space-y-20">
        <section>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-2xl">
            A Qualidade que acelera.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card Mercedes */}
            <Card className="bg-black border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={Mercedes}
                  alt="Mercedes-Benz"
                  className="object-cover"
                  layout="fill"
                />
                <div className="absolute bottom-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
                  <span className="text-sm text-primary border border-white p-[3px] bg-white rounded">Mercedes-Benz</span>
                  <CarFront className="text-white" />
                </div>
              </div>
            </Card>

            {/* Card Ford GT40 */}
            <Card className="bg-black border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={Ford}
                  alt="Ford GT-40"
                  className="object-cover"
                  layout="fill"
                />
                <div className="absolute bottom-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
                  <span className="text-sm text-primary border border-white p-[3px] bg-white rounded">Ford</span>
                  <CarFront className="text-white" />
                </div>
              </div>
            </Card>

            {/* Card BMW */}
            <Card className="bg-black border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={Bmw}
                  alt="BMW M5"
                  className="object-cover"
                  layout="fill"
                />
                <div className="absolute bottom-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
                  <span className="text-sm text-primary border border-white p-[3px] bg-white rounded">BMW</span>
                  <CarFront className="text-white" />
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Sofisticação, performance e confiança.</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-400">
              A Stradale Car Service é uma oficina mecânica premium em São Paulo, especializada em serviços completos de manutenção e performance automotiva.
            </p>
          </div>
        </section>

        <section className="pt-20 flex flex-col gap-8 items-center">
          <h1 className="text-4xl font-bold">Nossos parceiros</h1>
          <div className="w-full">
            <Partners logos={partnerLogos} baseVelocity={5} className="py-4 " />
          </div>
        </section>
      </main>
    </div>
  );
}
