import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="branches" className="relative border-t border-gray-800 bg-gray-900/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20 pt-12">
          
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-emerald-200/50">
              <span className="inline-flex bg-linear-to-r from-emerald-500 to-emerald-200 bg-clip-text text-transparent">
                Our Global Workflow
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-200),var(--color-gray-50),var(--color-emerald-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Engineered for Seamless Execution
            </h2>
            <p className="text-lg text-indigo-200/65">
              From our United States corporate foundation to our strategic European branches, we combine elite UI/UX practices with a highly resilient system architecture.
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            
            {/* Card 1 - Corporate Scopes & US Registration */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-emerald-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-emerald-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Image */}
                <Image
                  className="inline-flex w-full object-cover"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="US & International Compliance Workflow"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-emerald-500 to-emerald-200 bg-clip-text text-transparent">
                        Corporate Infrastructure
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-1 font-nacelle text-[1.1rem] font-semibold text-gray-200">
                    Cross-Border Operations
                  </h3>
                  <p className="text-indigo-200/65 text-sm leading-relaxed">
                    Aligning your project requirements with international compliance. We leverage our registered United States LLC entity to execute secure contracts and process global agreements via strategic networks in NL, IE, and DE.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Premium UI/UX Design System */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-emerald-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-emerald-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Image */}
                <Image
                  className="inline-flex w-full object-cover"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="Tailored UI/UX & Prototyping Systems"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-emerald-500 to-emerald-200 bg-clip-text text-transparent">
                        Tailored Interfaces
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-1 font-nacelle text-[1.1rem] font-semibold text-gray-200">
                    Advanced Digital Design
                  </h3>
                  <p className="text-indigo-200/65 text-sm leading-relaxed">
                    Deploying comprehensive design frameworks inside scalable Figma ecosystems, ensuring pixel-perfect transitions between cloud-backed product strategies, agile prototypes, and optimized final code assets.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Resilient Cloud Implementation */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-emerald-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-emerald-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Image */}
                <Image
                  className="inline-flex w-full object-cover"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Resilient Technical Implementation Pipeline"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-emerald-500 to-emerald-200 bg-clip-text text-transparent">
                        Continuous Delivery
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-1 font-nacelle text-[1.1rem] font-semibold text-gray-200">
                    Resilient Stack Deployment
                  </h3>
                  <p className="text-indigo-200/65 text-sm leading-relaxed">
