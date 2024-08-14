import { cn } from "@/libs/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { TextareaHTMLAttributes } from "react"

const textarea = cva("caret-accent-blue text-base", {
  variants: {
    variant: {
      primary: `rounded-sm border-none bg-secondary-900 hover:ring-2 hover:ring-white/25 focus-within:ring-2
       focus-within:hover:ring-2 focus-within:ring-white/25 outline-none`,
    },
    size: {
      lg: "p-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
})

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textarea> {}

export function Textarea({
  className,
  size,
  variant,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(textarea({ className, size, variant }))}
      {...props}
    ></textarea>
  )
}
