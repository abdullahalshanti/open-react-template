import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            
            {/* 1. العنوان الرئيسي فوق الهيدر (العلامة الصغيرة) */}
            <div className="inline-flex mb-4 relative" data-aos="fade-up">
              <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-gray-800/80 px-3 py-1 rounded-full border border-emerald-500/30">
                Officially Registered Digital Company in the United States
              </span>
            </div>

            {/* 2. العنوان الرئيسي (H1) */}
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,rgba(255,255,255,1),rgba(167,243,208,1),rgba(255,255,255,0.9),rgba(110,231,183,1),rgba(255,255,255,1))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              DigitalAbed LLC – Borderless Digital Solutions
            </h1>

            {/* 3. الوصف الفرعي (Paragraph) */}
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-300/85 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                A global innovation and design platform driven by an international vision from the heart of Gaza. We are an officially registered US company serving our clients through our strategic branches in the United States, Netherlands, Ireland, and Germany to deliver high-quality UI/UX and digital development services.
              </p>

              {/* 4. الأزرار الأساسية والفرعية */}
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                
                {/* الزر الأول (الأساسي) */}
                <div data-aos="fade-up" data-aos-delay={300}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 sm:mb-0 sm:w-auto px-6 py-2 rounded-lg font-medium shadow-md block text-center"
                    href="#services"
                  >
                    <span className="relative inline-flex items-center">
                      Discover Our Solutions
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>

                {/* الزر الثاني (الفرعي) */}
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn relative w-full bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 sm:ml-4 sm:w-auto px-6 py-2 rounded-lg font-medium block text-center"
                    href="#branches"
                  >
                    Our Branches & Impact
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* Video component */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="DigitalAbed LLC global operations video"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
