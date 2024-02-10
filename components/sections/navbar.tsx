import { cn } from "@/lib/utils";
import ViewContainer from "../layouts/view-container";
import Image from "next/image";

const NavbarOptionsList = [
  "Home", "Solutions", "Careers", "About"
]

export default function Navbar() {
  return <nav className={cn("navbar p-6 text-sm")}>
    <ViewContainer className="flex flex-row items-center justify-between">
      <div className="logo-wrapper">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={120}
          height={60}
        />
      </div>
      <div className="options-wrapper flex flex-row items-center justify-center gap-3">
        {NavbarOptionsList.map((option: string, index: number) => {
          return <p className="cursor-pointer text-neutral-400 hover:text-green-400" key={index}>{option}</p>
        })}
      </div>
    </ViewContainer>
  </nav>
}