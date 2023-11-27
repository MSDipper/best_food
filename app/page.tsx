import '@fontsource-variable/sansita-swashed';
import Hero from '@/components/main/Hero';
import Restaurant from '@/components/main/Restaurant';
import Reservation from '@/components/main/Reservation';
import Location from '@/components/main/Location';

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Restaurant />
        <Reservation />
        <Location />
      </div>
    </main>
  )
}
