export default function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <div className="inline-flex mb-4 relative before:absolute before:inset-0 before:bg-green-500/20 before:rounded-full before:blur-md">
              <span className="text-xs font-semibold tracking-wider text-green-400 uppercase bg-slate-800/80 px-3 py-1 rounded-full border border-green-500/30">
                Officially Registered US Digital Agency
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-slate-100" data-aos="zoom-y-out">
              DigitalAbed LLC <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-slate-200 to-red-500">_ Borderless Digital Solutions</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-slate-400 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                A global innovation and UI/UX design agency rooted in a resilient vision. As a registered United States entity, we seamlessly serve global clients through our strategic presence across the US, Netherlands, Ireland, and Germany.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-green-600 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0" href="#services">
                    Explore Solutions
                  </a>
                </div>
                <div>
                  <a className="btn text-white bg-slate-700 hover:bg-slate-800 w-full sm:w-auto sm:ml-4" href="#branches">
                    Our Global Presence
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
