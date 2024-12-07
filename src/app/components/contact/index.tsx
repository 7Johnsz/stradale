import Link from 'next/link'
import { MessagesSquare } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '5511911226423'
  const message = 'Olá, gostaria de mais informações sobre os serviços da Stradale!'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-red-800 text-white p-3 rounded-full shadow-lg hover:bg-foreground transition-colors duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessagesSquare size={24} />
    </Link>
  )
}

