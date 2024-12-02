import Image from "next/image"
import { CarFront } from "lucide-react"
import { Card } from "@/src/app/components/ui/card"

import Mercedes from "@/public/mercedes amg.jpg"
import Ford from "@/public/gt40.jpg"
import Bmw from "@/public/bmw.jpg"
import Navbar from "./components/navbar"

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
            <Card className="bg-black border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={Mercedes}
                  alt="Mercedes-Benz"
                  className="object-cover"
                  fill
                />
                <div className="absolute bottom-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
                  <span className="text-sm text-primary border border-white p-[3px] bg-white rounded">Mercedes-Benz</span>
                  <CarFront className="text-white" />
                </div>
              </div>
            </Card>
            <Card className="bg-black border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={Ford}
                  alt="Ford GT-40"
                  className="object-cover"
                  fill
                />
                <div className="absolute bottom-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
                  <span className="text-sm text-primary border border-white p-[3px] bg-white rounded">Ford</span>
                  <CarFront className="text-white" />
                </div>
              </div>
            </Card>
            <Card className="bg-black border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={Bmw}
                  alt="BMW M5"
                  className="object-cover"
                  fill
                />
                <div className="absolute bottom-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
                  <span className="text-sm text-primary border border-white p-[3px] bg-white rounded">BMW</span>
                  <CarFront className="text-white" />
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
