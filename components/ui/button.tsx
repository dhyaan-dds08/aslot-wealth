
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap label-md ring-offset-background transition-all duration-300 ease-soft outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Pill CTAs — the site's primary language.
        default: "rounded-full bg-primary text-primary-foreground hover:bg-primary/90",
        accent: "rounded-full bg-accent text-primary font-semibold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25",
        outline: "rounded-full border border-border bg-background text-primary hover:border-accent hover:bg-accent/5",
        /* On dark/navy sections. */
        onDark: "rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-accent/60 hover:bg-white/10",
        destructive: "rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary: "rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "rounded-full bg-transparent hover:bg-accent/10 hover:text-accent",
        link: "bg-transparent text-primary underline-offset-4 hover:text-accent hover:underline",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 label-sm",
        lg: "h-12 px-8 text-base",
        icon: "size-10 p-2",
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
