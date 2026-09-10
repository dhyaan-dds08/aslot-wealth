
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* Square, flat, bordered. The hover is an inverted fill — no lift, no glow,
 * no shadow. Restraint is the whole point of the look. */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap text-sm tracking-wide ring-offset-background transition-colors duration-300 ease-soft outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        accent: "bg-accent text-primary font-medium hover:bg-accent/85",
        outline:
          "border border-primary/25 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        /* On dark sections: white outline that fills white on hover. */
        onDark:
          "border border-white/35 bg-transparent text-white hover:bg-white hover:text-primary",
        onDarkSolid: "bg-white text-primary hover:bg-white/85",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-transparent hover:bg-primary/5 hover:text-accent",
        link: "bg-transparent text-primary underline-offset-4 hover:text-accent hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-9",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
