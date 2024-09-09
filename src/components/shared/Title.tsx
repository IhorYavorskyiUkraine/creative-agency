import { cn } from "@/lib/utils.ts";
import React from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
   size?: TitleSize;
   className?: string;
   text: string;
}

export const Title: React.FC<Props> = ({ text, size = "sm", className }) => {
   const mapTagBySize = {
      xs: "h5",
      sm: "h4",
      md: "h3",
      lg: "h2",
      xl: "h1",
   } as const;

   const mapClassNameBySize = {
      xs: "text-[14px]",
      sm: "text-[24px]",
      md: "text-[28px]",
      lg: "text-[55px]",
      xl: "text-[64px]",
   } as const;

   return React.createElement(
      mapTagBySize[size],
      { className: cn(mapClassNameBySize[size], className) },
      text,
   );
};
