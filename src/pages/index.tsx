import Head from 'next/head'
import Image from 'next/image'
import { Source_Sans_3, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.styl'
import { useEffect, useRef } from 'react'

const source = Source_Sans_3({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const workRef = useRef<HTMLElement | null>(null);

  const onWheel = (e: WheelEvent) => {
    if (workRef.current) {
      workRef.current.scrollLeft += e.deltaY;
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', onWheel);
    () => window.removeEventListener('wheel', onWheel);
  })

  return (
    <>
      <Head>
        <title>Paul Mandel – Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header>
          <nav>
            <ol>
              <li><a href="https://blog.mand3l.com/">About</a></li>
              <li><a href="https://blog.mand3l.com/">Blog</a></li>
            </ol>
          </nav>
        </header>
        <section className={styles.intro}>
          <h1>Hi! I'm Paul.</h1>
          <p>I'm a designer and technologist<br/>specializing in hardware and robots.</p>
        </section>
        <section className={styles.work}>
          <ol ref={workRef}>
            <li><Image src="/work/basil.png" width={270} height={207} alt="Canvas's Basil Robot" /></li>
            <li><Image src="/work/audio.jpeg" width={141} height={200} alt="Google Nest Audio" /></li>
            <li><Image src="/work/thermostat.jpeg" width={200} height={200} alt="Google Nest Thermostat" /></li>
            <li><Image src="/work/display.jpeg" width={232} height={194} alt="Google Nest Hub" /></li>
            <li><Image src="/work/astro.jpg" width={170} height={200} alt="Amazon Astro" /></li>
            <li><Image src="/work/show10.jpg" width={200} height={200} alt="Amazon Echo Show 10" /></li>
            <li><Image src="/work/show16.jpg" width={287} height={180} alt="Amazon Echo Show 16" /></li>
            <li><Image src="/work/clock.png" width={279} height={158} alt="Amazon Echo Dot w/ Clock" /></li>
          </ol>
        </section>
        <section className={styles.contact}>

        </section>
      </main>
    </>
  )
}
