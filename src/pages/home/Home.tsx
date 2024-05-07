import React, { useEffect, useState } from 'react'
import "../../styles/home.css"
import { EmblaOptionsType } from 'embla-carousel'
import Part1Home from './componentes/part1/Part1Home';
import Part2Home from './componentes/part2/Part2Home';
import Part3Home from './componentes/part3/Part3Home';
import Part4Home from './componentes/part4/Part4Home';
import Part5Home from './componentes/part5/Part5Home';
import Part6Home from './componentes/part6/Part6Home';
import Footer from '../../components/footer/Footer';
const LazyEmblaCarousel = React.lazy(() => import('./EmblaCarousel'));

export default function Home() {
  const [shouldRenderCarousel, setShouldRenderCarousel] = useState(false);

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 8
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldRenderCarousel(true);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='container-home'>
      {shouldRenderCarousel && (
        <React.Suspense fallback={<div>Loading...</div>}>
          {/*seccion1*/}
          <section><Part1Home /></section>
          {/*seccion2*/}
          <section>
            <LazyEmblaCarousel slides={SLIDES} options={OPTIONS} />
          </section>
          {/*seccion3*/}
          <section className='part2-section'> <Part2Home /></section>
          {/*seccion4*/}
          <section><Part3Home /></section>
          {/*seccion5*/}
          <section className='part4-section'><Part4Home /></section>
          <section className='part5-section'> <Part5Home /> </section>
          <section className='part6-section'> <Part6Home /> </section>
          <Footer />
        </React.Suspense>

      )}
    </div>
  )
}
