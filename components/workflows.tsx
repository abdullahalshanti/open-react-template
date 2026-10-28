import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="branches" className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20 pt-12">
          
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3">
              <span className="inline-flex text-emerald-400 text-sm font-medium">
                Our Global Workflow
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-gray-200 via-emerald-200 to-gray-200 bg-clip-text pb-4 text-3xl font-semibold text-transparent md:text-4xl">
              Engineered for Seamless Execution
            </h2>
            <p className="text-lg text-gray-400">
              From our United States corporate foundation to our strategic European branches, we combine elite UI/UX practices with a highly resilient system architecture.
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            
            {/* Card 1 - Corporate Scopes & US Registration */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-900/60 p-6 border border-gray-800 hover:border-emerald-500/30 transition-all">
              <div className="relative z-20 h-full">
                <Image
                  className="inline-flex w-full object-cover rounded-lg mb-4"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="US & International Compliance Workflow"
                />
                <div className="mb-3">
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    Corporate Infrastructure
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-200">
                  Cross-Border Operations
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Aligning your project requirements with international compliance. We leverage our registered United States LLC entity to execute secure contracts and process global agreements via strategic networks in NL, IE, and DE.
                </p>
              </div>
            </div>

            {/* Card 2 - Premium UI/UX Design System */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-900/60 p-6 border border-gray-800 hover:border-emerald-500/30 transition-all">
              <div className="relative z-20 h-full">
                <Image
                  className="inline-flex w-full object-cover rounded-lg mb-4"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="Tailored UI/UX & Prototyping Systems"
                />
                <div className="mb-3">
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    Tailored Interfaces
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-200">
                  Advanced Digital Design
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Deploying comprehensive design frameworks inside scalable Figma ecosystems, ensuring pixel-perfect transitions between cloud-backed product strategies, agile prototypes, and optimized final code assets.
                </p>
              </div>
            </div>

            {/* Card 3 - Resilient Cloud Implementation */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-900/60 p-6 border border-gray-800 hover:border-emerald-500/30 transition-all">
              <div className="relative z-20 h-full">
                <Image
                  className="inline-flex w-full object-cover rounded-lg mb-4"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Resilient Technical Implementation Pipeline"
                />
                <div className="mb-3">
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    Continuous Delivery
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-200">
                  Resilient Stack Deployment
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Triggering isolated continuous integration (CI/CD) flows through cloud environments. We maintain persistent server uptimes and technical safety loops, protecting product deployments against volatile technical boundaries.
                </p>
              </div>
            </div>

          </Spotlight>
        </div>
      </div>
    </section>
  );
}
