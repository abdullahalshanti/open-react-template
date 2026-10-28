import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950/40 relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 opacity-60"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,160px))_1fr] lg:grid-rows-1 xl:gap-20">
          
          {/* 1st block: Global Branches */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-200 font-nacelle">Global Presence</h3>
            <ul className="space-y-2 text-sm text-indigo-200/65">
              <li className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                United States (HQ)
              </li>
              <li>Netherlands Branch</li>
              <li>Ireland Branch</li>
              <li>Germany Branch</li>
            </ul>
          </div>

          {/* 2nd block: Digital Solutions */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-200 font-nacelle">Solutions</h3>
            <ul className="space-y-2 text-sm text-indigo-200/65">
              <li>Advanced UI/UX Design</li>
              <li>Technical SEO Audits</li>
              <li>Social Media Advertising</li>
              <li>AI Automation Architectures</li>
            </ul>
          </div>

          {/* 3rd block: Direct Communication */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-200 font-nacelle">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-emerald-400 block break-all"
                  href="mailto:info@digitalabed.com"
                >
                  info@digitalabed.com
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-emerald-400 block"
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +49 1521 3825223
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block: Corporate Office */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-200 font-nacelle">Headquarters</h3>
            <p className="text-sm text-indigo-200/65 leading-relaxed">
              DigitalAbed LLC<br />
              232 Melrose St, Modesto,<br />
              CA 95354, United States
            </p>
          </div>

          {/* 5th block: Branding & Legal Registry */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right flex flex-col lg:items-end justify-between space-y-4 lg:space-y-0">
            <div>
              <div className="mb-3 inline-block">
                <Logo />
              </div>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs lg:text-right">
                Registered in California (File No. B20260411953)<br />
                Employer Identification Number | EIN: 42-5083811
              </p>
            </div>
            <div className="text-xs text-gray-500 pt-2 border-t border-gray-900/60 lg:border-none w-full lg:w-auto">
              <p>© 2026 DigitalAbed LLC.<br />All rights reserved.</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
