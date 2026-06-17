import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--brand-blue)] [color:#fff] shadow-[0_14px_30px_rgba(0,83,178,0.28)] hover:-translate-y-0.5 hover:bg-[var(--brand-blue-strong)] hover:[color:#fff]",
        secondary:
          "border border-[var(--line)] bg-white text-[var(--ink)] shadow-sm hover:-translate-y-0.5 hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]",
        ghost:
          "text-[var(--muted)] hover:bg-[var(--soft-blue)] hover:text-[var(--brand-blue)]",
        warm:
          "bg-[var(--brand-warm)] text-[var(--ink)] shadow-[0_14px_30px_rgba(247,180,51,0.28)] hover:-translate-y-0.5 hover:bg-[var(--brand-warm-strong)]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
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
