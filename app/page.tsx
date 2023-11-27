import React, { lazy, Suspense } from 'react';
import '@fontsource-variable/sansita-swashed';

const Hero = React.lazy(() => import('@/components/main/Hero'));
const Restaurant = React.lazy(() => import('@/components/main/Restaurant'));
const Reservation = React.lazy(() => import('@/components/main/Reservation'));
const Location = React.lazy(() => import('@/components/main/Location'));


export default function Home() {
  return (
    <main>
      <div>
        <Suspense fallback={<p>Loading..</p>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<p>Loading..</p>}>
          <Restaurant />
        </Suspense>
        <Suspense fallback={<p>Loading..</p>}>
          <Reservation />
        </Suspense>
        <Suspense fallback={<p>Loading..</p>}>
          <Location />
        </Suspense>
      </div>
    </main>
  )
}

