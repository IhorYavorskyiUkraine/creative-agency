import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils.ts";

const buttonVariants = cva(
   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
   {
      variants: {
         variant: {
            transparent:
               "border spacing-1 text-base tracking-tightest border-white bg-transparent font-bold font-quicksand text-white shadow hover:bg-white/10 rounded-full",
            white: "rounded-full bg-customWhite text-black font-quicksand font-bold",
         },
         size: {
            default: "h-[48px] px-[50px] py-6 text-base",
            sm: "h-[38px] px-[35px] text-xs",
         },
      },
      defaultVariants: {
         variant: "transparent",
         size: "default",
      },
   },
);

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button";
      return (
         <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
         />
      );
   },
);
Button.displayName = "Button";

export { Button, buttonVariants };
