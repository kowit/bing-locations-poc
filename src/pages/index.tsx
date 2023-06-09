import Image from 'next/image'
import { Inter } from 'next/font/google'
import LocationSuggestions from '@/components/location-suggestions'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <LocationSuggestions />
    </main>
  )
}
