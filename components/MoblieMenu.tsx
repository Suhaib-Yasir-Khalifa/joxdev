import { Home, ToolCase, HandHelping, Phone } from "lucide-react";
import { useAtom } from "jotai";
import { mobileMenuAtom } from "./status";
import { cn } from "../lib/utils";
export default function MobileMenu() {
  const [mobileMenu, setMobileMenu] = useAtom(mobileMenuAtom);
  return (
    <div
      className={cn(
        " sm:fixed fixed bg-background/80 backdrop-blur-[2px] transition-all lg:hidden  ease-in-out  w-full h-full top-0 left-0 flex justify-center items-center",
        mobileMenu
          ? " opacity-100 z-[1000] scale-100"
          : "scale-0 opacity-0 z-[-1]"
      )}
    >
      <div className="grid  grid-cols-2 grid-rows-2 gap-6">
        <a
          onClick={() => {
            setMobileMenu(false);
          }}
          href="#"
          className="p-2 rounded-xl bg-primary flex flex-col justify-center items-center"
        >
          <Home />
          Home
        </a>
        <a
          onClick={() => {
            setMobileMenu(false);
          }}
          href="#about"
          className="p-2 rounded-xl bg-primary flex flex-col justify-center items-center"
        >
          <ToolCase />
          About
        </a>
        <a
          onClick={() => {
            setMobileMenu(false);
          }}
          href="#projects"
          className="p-2 rounded-xl bg-primary flex flex-col justify-center items-center"
        >
          <HandHelping />
          Projects
        </a>
        <a
          onClick={() => {
            setMobileMenu(false);
          }}
          href="#contact"
          className="p-2 rounded-xl bg-primary flex flex-col justify-center items-center"
        >
          <Phone />
          Contact
        </a>
      </div>
    </div>
  );
}
