import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-gradient-primary text-primary-foreground hover:shadow-glow",
        secondary: "border-transparent bg-secondary/80 text-secondary-foreground backdrop-blur-glass",
        destructive: "border-transparent bg-gradient-destructive text-destructive-foreground hover:shadow-lg",
        success: "border-transparent bg-gradient-success text-success-foreground hover:shadow-lg",
        outline: "text-foreground border-border bg-card/40 backdrop-blur-glass",
        neutral: "border-transparent bg-muted text-muted-foreground backdrop-blur-glass",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
