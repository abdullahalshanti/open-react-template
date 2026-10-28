import Image from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section className="relative border-t border-gray-800 bg-gray-900/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-emerald-200/50">
              <span className="inline-flex bg-linear-to-r from-emerald-500 to-emerald-200 bg-clip-text text-transparent text-sm">
                Wall of Trust
              </span>
            </div>
            <h2 className="font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
              Trusted by Innovators Worldwide
            </h2>
            <p className="mt-4 text-lg text-indigo-200/65">
              See how our US corporate infrastructure and remote resilience deliver elite UI/UX and engineering results under any circumstances.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
            
            {/* Testimonial 1 */}
            <div className="flex flex-col h-full justify-between p-6 rounded-2xl bg-gray-950/60 border border-gray-800 hover:border-emerald-500/20 transition-all">
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "Working with DigitalAbed LLC on our enterprise platform redesign was an absolute game-changer. Despite volatile external technical barriers, their delivery was flawless, and the UI/UX architecture met strict European compliance standards."
              </p>
              <div className="flex items-center gap-3 border-t border-gray-900 pt-4">
                <Image className="rounded-full border border-gray-700" src={TestimonialImg01} width={40} height={40} alt="Ellen V." />
                <div>
                  <h4 className="font-semibold text-gray-200 text-sm font-nacelle">Ellen V.</h4>
                  <p className="text-xs text-gray-500">Product Lead, FinTech Operations (Netherlands)</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col h-full justify-between p-6 rounded-2xl bg-gray-950/60 border border-gray-800 hover:border-emerald-500/20 transition-all">
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "An outstanding tech agency. Their secure US corporate structure made legal contracts seamless, while their development squad executed our complex Next.js optimization with incredible speed and agility."
              </p>
              <div className="flex items-center gap-3 border-t border-gray-900 pt-4">
                <Image className="rounded-full border border-gray-700" src={TestimonialImg02} width={40} height={40} alt="Marcus K." />
                <div>
                  <h4 className="font-semibold text-gray-200 text-sm font-nacelle">Marcus K.</h4>
                  <p className="text-xs text-gray-500">Founder & CEO, TechVentures (Germany)</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col h-full justify-between p-6 rounded-2xl bg-gray-950/60 border border-gray-800 hover:border-emerald-500/20 transition-all">
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "Their approach to technical SEO and UI framework synchronization exceeded our scaling goals. The decentralized setup they use guarantees unwavering continuity. Highly recommended for international operations."
              </p>
              <div className="flex items-center gap-3 border-t border-gray-900 pt-4">
                <Image className="rounded-full border border-gray-700" src={TestimonialImg03} width={40} height={40} alt="David S." />
                <div>
                  <h4 className="font-semibold text-gray-200 text-sm font-nacelle">David S.</h4>
                  <p className="text-xs text-gray-500">Operations Director, Global Commerce (Ireland)</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
