'use client';

import Head from 'next/head';
import Link from 'next/link';

import Header from '@/components/header';
import '../styles/globals.css';
import About from '@/components/about';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Nino Berber</title>

        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta name="robots" content="all" />
        <meta name="target" content="all" />

        <meta name="author" content="Nino Berber" />
        <meta name="owner" content="Nino Berber" />

        <meta name="url" content="https://www.ninoberber.com" />
        <meta name="identifier-URL" content="https://www.ninoberber.com" />
        <link rel="canonical" href="https://www.ninoberber.com/" />

        <meta name="subject" content="undefined" />
        <meta
          name="description"
          content="French & Canadian based in Bordeaux, France.
I am a Web enthusiast, specializing in development. Check out my projects and contact me."
        />

        <meta property="og:title" content="Portfolio" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="French & Canadian based in Bordeaux, France.
I am a Web enthusiast, specializing in development. Check out my projects and contact me."
        />
        <meta property="og:site_name" content="Nino Berber" />
        <meta property="og:url" content="https://www.ninoberber.com/" />
        <meta property="og:locale" content="en" />
        <meta
          property="og:image"
          content="https://www.ninoberber.com/images/logo-light.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.ninoberber.com/" />
        <meta name="twitter:title" content="Portfolio - Nino Berber" />
        <meta
          name="twitter:description"
          content="French & Canadian based in Bordeaux, France.
I am a Web enthusiast, specializing in development. Check out my projects and contact me."
        />
        <meta
          name="twitter:image"
          content="https://www.ninoberber.com/images/logo-light.png"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        <div className="mb-20">
          <h2 className="text-3xl">Hello 👋</h2>
          <br />
          <h3 className="text-xl">
            French & Canadian based in Bordeaux, France. <br /> I am a Web
            enthusiast, specializing in development.
          </h3>
          <br />
          <Link href="#contact" className="hover:underline">
            <svg
              className="inline mr-2"
              width="35"
              height="8"
              viewBox="0 0 35 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.3536 4.35355C34.5488 4.15829 34.5488 3.84171 34.3536 3.64645L31.1716 0.464466C30.9763 0.269204 30.6597 0.269204 30.4645 0.464466C30.2692 0.659728 30.2692 0.976311 30.4645 1.17157L33.2929 4L30.4645 6.82843C30.2692 7.02369 30.2692 7.34027 30.4645 7.53553C30.6597 7.7308 30.9763 7.7308 31.1716 7.53553L34.3536 4.35355ZM0 4.5H34V3.5H0V4.5Z"
                fill="black"
              />
            </svg>
            Say hello back!
          </Link>
        </div>

        <About />
        <Footer />
      </main>
    </>
  );
}
