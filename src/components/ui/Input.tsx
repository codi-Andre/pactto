import { cn } from "@/libs/utils"
import { cva, VariantProps } from "class-variance-authority"

const inputWrapperVariants = cva(
  `relative flex items-center max-h-14 gap-2 rounded-md border-2 border-secondary-700
   bg-[#242424] focus-within:border-accent-blue hover:border-secondary-200
    focus-within:hover:border-accent-blue active:border-accent-blue`,
  {
    variants: {
      size: {
        sm: "min-w-0",
        lg: "w-full",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
)

interface InputProps extends VariantProps<typeof inputWrapperVariants> {
  type?: "text" | "email" | "number" | "password" | "tel"
  placeholder?: string
  icon?: React.ReactNode
}

export function Input({ icon = null, placeholder, size, type }: InputProps) {
  return (
    <div className={cn(inputWrapperVariants({ size }))}>
      <input
        className="z-10 min-w-0 flex-1 bg-transparent py-3 pl-4 pr-8 text-base
         text-white caret-accent-blue outline-none"
        type={type}
        placeholder={placeholder}
      />
      <div className="absolute right-2 z-0">{icon}</div>
    </div>
  )
}
