
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  href?: string;
  isLink?: boolean;
}

const GoldButton = React.forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ className, variant = "default", size = "default", children, href, isLink, ...props }, ref) => {
    const baseStyles = cn(
      "font-bold rounded transition-all duration-300 inline-flex items-center justify-center",
      "focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-opacity-50",
      "active:scale-95",
      {
        "bg-brand-gold text-black hover:bg-opacity-90 hover:shadow-lg hover:shadow-brand-gold/20":
          variant === "default",
        "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black":
          variant === "outline",
        "px-4 py-2 text-sm": size === "sm",
        "px-6 py-3 text-base": size === "default",
        "px-8 py-4 text-lg": size === "lg",
      },
      className
    );

    if (isLink && href) {
      return (
        <Link to={href} className={baseStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseStyles} {...props}>
        {children}
      </button>
    );
  }
);

GoldButton.displayName = "GoldButton";

export { GoldButton };
