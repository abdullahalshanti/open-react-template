import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="DigitalAbed">
      <Image 
        src={LogoImg} 
        alt="DigitalAbed LLC Logo" 
        width={150} 
        height={40} 
        priority 
        className="max-h-9 w-auto object-contain brightness-100 invert"
      />
    </Link>
  );
}
