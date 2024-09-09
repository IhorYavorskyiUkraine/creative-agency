import { cn } from "@/lib/utils.ts";
import React from "react";

interface Props {
   className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
   className,
   children,
}) => {
   return (
      <div className={cn("mx-auto max-w-[1240px] px-3", className)}>
         {children}
      </div>
   );
};
