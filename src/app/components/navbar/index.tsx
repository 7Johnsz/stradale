import Logo from "@/public/logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
      <header className="flex items-center justify-between p-4 md:p-4 !px-8">
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl">
            <Image
              src={Logo}
              alt="Stadale Logo"
              width={40}
            />
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-sm hover:text-gray-300" href="#">
            Inicio
          </Link>
          <Link className="text-sm hover:text-gray-300" href="#">
            Sobre nós
          </Link>
          <Link className="text-sm hover:text-gray-300" href="#">
            Stradale Experience
          </Link>
          <Link className="text-sm hover:text-gray-300" href="#">
            Contato
          </Link>
        </nav>
      </header>
    )
}
