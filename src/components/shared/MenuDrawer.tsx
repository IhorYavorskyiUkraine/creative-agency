import { useState } from "react";
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerHeader,
   DrawerTrigger,
} from "../ui/drawer.tsx";
import { X } from "lucide-react";
import { headerList } from "./Header.tsx";
import { cn } from "@/lib/utils.ts";
import { DialogTitle } from "@radix-ui/react-dialog";

interface Props {
   className?: string;
}

export const MenuDrawer: React.FC<Props> = ({ className }) => {
   const [open, setOpen] = useState(false);
   return (
      <Drawer
         noBodyStyles={true}
         direction="right"
         open={open}
         onOpenChange={setOpen}
      >
         <DrawerTrigger className={className} asChild>
            <img src={"/images/drawerIcon.svg"} alt={"DrawerIcon"} />
         </DrawerTrigger>

         <DrawerContent className="h-full border-none bg-[#0E0E0E]">
            <DialogTitle></DialogTitle>
            <DrawerHeader>
               <img src={"/images/logo.svg"} alt={"Logo"} />
               <DrawerClose className="absolute right-4 top-6">
                  <X color="#FFFFFF" />
               </DrawerClose>
            </DrawerHeader>
            <ul className="flex flex-col items-end gap-4 pr-4">
               {headerList.map(item => (
                  <li key={item.name}>
                     <a
                        className={cn(
                           "font-lg text-customWhite leading-24 font-regular duration-350 text-[36px] transition hover:opacity-70",
                        )}
                        href={item.href}
                     >
                        {item.name}
                     </a>
                  </li>
               ))}
            </ul>
         </DrawerContent>
      </Drawer>
   );
};
