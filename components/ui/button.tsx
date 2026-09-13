import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Marigold is reserved for CTAs. It is also only legible as a fill
 * (2.0:1 as text on white), so the palette itself enforces the rule.
 */
const buttonVariants = cva(
  "group/btn inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm text-[0.9375rem] font-medium transition-colors duration-200 ease-soft disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[1.05em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* Primary action — the only marigold on the page. */
        cta: "bg-marigold text-ink hover:bg-marigold/85",
        /* Secondary on light backgrounds. */
        outline:
          "border border-forest/30 text-forest hover:bg-forest hover:text-white",
        /* Solid brand, for nav and inline actions. */
        forest: "bg-forest text-white hover:bg-forest/90",
        /* On the forest-green sections. */
        onDark: "border border-white/35 text-white hover:bg-white hover:text-forest",
        ghost: "text-forest hover:bg-surface",
        link: "text-forest underline underline-offset-4 hover:text-growth",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-[0.875rem]",
        lg: "h-[3.25rem] px-7",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "cta", size: "default" },
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
