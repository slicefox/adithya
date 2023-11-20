import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 p-10 py-14">
      <section className='mb-20'>
        <p className='text-5xl font-bold mb-3 text-white'>
          Adithya
        </p>
        <p className='mb-3'>Experianced Fullstack Engineer</p>
        <p className='mb-10'>I build web applications, end-to-end </p>

        <section>
          <Image
            src="/linkedin.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={32}
            height={32}
            priority
          />
        </section>
      </section>
      <section>
        <p className='mb-4 text-white'>ABOUT</p>
        <p >
          I&apos;m a fullstack developer, Experianced in developeing APIs for Mobile and webapps.
        </p>
      </section>
    </main>
  )

}
