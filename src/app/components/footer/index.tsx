import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { Button } from "@/src/app/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-100 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Stradale Car Service</h2>
            <p className="text-zinc-400">A qualidade que acelera.</p>
          </div>

          <div className="text-center">
            <p>&copy; 2024 Stradale Car Service. Todos os direitos reservados.</p>
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            <Link
              href="https://www.facebook.com/stradalecarservice"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
            <Link
              href="https://www.instagram.com/stradalecarservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

