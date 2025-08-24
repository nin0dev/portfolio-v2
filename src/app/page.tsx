import About from '@/components/about';
import Footer from '@/components/footer';
import Projects from '@/components/projects';
import '../styles/globals.css';

export default async function Home() {

  return (
    <>
      <title>Nino Berber — Portfolio</title>

      {/* Google Search Console verification */}
      <meta
        name="google-site-verification"
        content="bzVBtsBADpzJb8Tl9M8U5Cnusa_SuCRwqh3YqG9wOIc"
      />

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
        content="French & Canadian based in Versailles, France.
I am a Web enthusiast, specializing in development. Check out my projects and contact me."
      />

      <meta property="og:title" content="Portfolio" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="French & Canadian based in Versailles, France.
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
        content="French & Canadian based in Versailles, France.
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

      <main>
        <div className="mb-20">
          <h2 className="text-3xl">Hello 👋</h2>
          <br />
          <h3 className="text-xl">
            French & Canadian Web enthusiast, specializing in front-end development.
          </h3>
          <br />
        </div>
        <Projects />
        <About />
        <Footer />
      </main>
    </>
  );
}