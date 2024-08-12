import { cn } from "@/libs/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, forwardRef } from "react"

const buttonVariants = cva(
  `flex items-center justify-center whitespace-nowrap rounded-full uppercase h-12 disabled:border-white/30
   disabled:bg-white/30 text-sm font-semibold focus-visible:outline-none
       focus-visible:ring-2 focus-visible:ring-white`,
  {
    variants: {
      variant: {
        primary:
          "border-accent-blue bg-accent-blue text-primary-800 hover:bg-accent-blue/90",
        secondary:
          "border-2 border-accent-blue bg-[#242424] text-secondary-200 hover:border-accent-blue/90 hover:bg-primary-900",
        muted: "text-secondary-400 underline hover:text-secondary-200",
        icon: "hover:bg-white/30 focus:bg-white/30",
      },
      size: {
        sm: "w-12 p-2",
        md: "px-4 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, size, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
