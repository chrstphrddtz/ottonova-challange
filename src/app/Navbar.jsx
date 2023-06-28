import Link from "next/link";
import Image from "next/image";

import logo_ottonova from "public/LogoResources/RGB/Logo PNG_RGB/Wortmarke/logo_ottonova_wortmarke_blue_azure_RGB.png";

export default function Navbar() {
  return (
    <header className="bg-primary fixed top-0 z-10 w-full mx-auto my-0">
      <nav className="flex items-center justify-start flex-row list-none bg-primary text-var(--primaryColor) h-13 ">
        <Link href={"/"}>
          <Image
            src={logo_ottonova}
            alt="ottonova Logo"
            width={200}
            priority
          />
        </Link>
      </nav>
    </header>
  );
}
