import { type LucideIcon } from 'lucide-react'
import {
 Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/src/app/components/ui/card"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-transparent border-[1px] border-red-950">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-red-950 border border-red-900 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-red-500" />
        </div>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
