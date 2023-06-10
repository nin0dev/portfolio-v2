import Image from 'next/image'
import Header from '../components/header'

export default function Home() {
  return (
    <>
      <main className="min-h-screen px-12">
        <div>
          <h2>Hello 👋</h2>
          <h3>
            French & Canadian based in Bordeaux, France. I am a Web enthusiast, specializing in development.
          </h3>
        </div>
      </main>
      <Header />
    </>
  )
}
