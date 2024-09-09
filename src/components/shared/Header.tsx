import { cn } from "@/lib/utils.ts";
import { Button } from "../ui/button.tsx";
import { Container } from "./Container.tsx";
import { useState } from "react";
import { MenuDrawer } from "./MenuDrawer.tsx";

interface Props {
   className?: string;
}

export const headerList = [
   {
      name: "Home",
      href: "/",
   },
   {
      name: "About",
      href: "/about",
   },
   {
      name: "Services",
      href: "/services",
   },
   {
      name: "Projects",
      href: "/projects",
   },
];

export const Header: React.FC<Props> = ({ className }) => {
   const [activeLink, setActiveLink] = useState<string | null>(null);

   return (
      <header className={cn("text-customWhite", className)}>
         <Container className="flex items-center justify-between py-4 md:py-10">
            <a href="/" className="gap flex gap-2">
               <img src={"/images/logo.svg"} alt={"Logo"} />
               <div>
                  <h4 className="mb-1 font-quicksand text-xl font-bold">
                     Agency
                  </h4>
                  <p className="text-regular tracking-tightest text-[16px] leading-20">
                     Creative
                  </p>
               </div>
            </a>
            <ul className="hidden gap-[50px] md:flex">
               {headerList.map(item => (
                  <li key={item.name}>
                     <a
                        className={cn(
                           activeLink === item.href && "font-bold",
                           "font-lg duration-350 font-regular leading-24 transition hover:opacity-70",
                        )}
                        href={item.href}
                        onClick={() => setActiveLink(item.href)}
                     >
                        {item.name}
                     </a>
                  </li>
               ))}
            </ul>
            <div>
               <MenuDrawer className="md:hidden" />
               <Button
                  variant="transparent"
                  size="default"
                  className="hidden md:inline-flex"
               >
                  <span className="leading-button">Contact us</span>
               </Button>
            </div>
         </Container>
      </header>
   );
};
