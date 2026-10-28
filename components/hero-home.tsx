import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-gray-950 pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Hero content */}
        <div className="flex flex-col items-center">
          
          {/* 1. Top Badge - Added careful spacing */}
          <div className="inline-flex mb-6 relative" data-aos="fade-up">
            <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-gray-900 px-4 py-1.5 rounded-full border border-emerald-500/20 shadow-sm">
              Officially Registered US Digital Agency
            </span>
          </div>

          {/* 2. Main Title - Fixed sizing, line-height, and padding */}
          <h1
            className="text-center pb-6 font-nacelle text-4xl font-bold tracking-tight text-gray-100 md:text-6xl leading-[1.15] max-w-4xl"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            DigitalAbed LLC <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-gray-100 to-emerald-400 bg-clip-text text-transparent">
              Borderless Digital Solutions
            </span>
          </h1>

          {/* 3. Description Paragraph - Fixed text wrapping & optimal spacing */}
          <div className="mx-auto max-w-3xl text-center mb-10">
            <p
              className="text-base md:text-xl text-gray-400/90 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              A global innovation and design platform driven by an international vision from the heart of Gaza. We are an officially registered US company serving our clients through our strategic branches in the United States, Netherlands, Ireland, and Germany to deliver high-quality UI/UX and digital development services.
            </p>
          </div>

          {/* 4. Action Buttons - Perfectly centered and spaced apart */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mb-16"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <a
              className="btn w-full sm:w-auto bg-gradient-to-t from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 px-8 py-3 rounded-xl font-medium shadow-lg text-center transition-all duration-200"
              href="#services"
            >
              Discover Our Solutions
            </a>
            <a
              className="btn w-full sm:w-auto bg-gray-900 text-gray-300 border border-gray-800 hover:bg-gray-800 px-8 py-3 rounded-xl font-medium text-center transition-all duration-200"
              href="#branches"
            >
              Our Branches & Impact
            </a>
          </div>

          {/* 5. Video Container - Added top padding to isolate it cleanly */}
          <div className="w-full pt-4" data-aos="fade-up" data-aos-delay={400}>
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1104}
              thumbHeight={576}
              thumbAlt="DigitalAbed LLC operations grid"
              video="videos//video.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
