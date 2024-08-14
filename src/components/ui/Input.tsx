import { cn } from "@/libs/utils"
import { cva, VariantProps } from "class-variance-authority"
import { ChangeEventHandler } from "react"

const inputWrapperVariants = cva(`relative flex items-center max-h-14 `, {
  variants: {
    variant: {
      primary: `rounded-md border-2 border-secondary-700 bg-secondary-800
       focus-within:border-accent-blue hover:border-secondary-200
        focus-within:hover:border-accent-blue active:border-accent-blue`,
      secondary: `rounded-sm border-none bg-secondary-900 hover:ring-2 hover:ring-white/25 focus-within:ring-2
       focus-within:hover:ring-2 focus-within:ring-white/25 outline-none`,
    },
    size: {
      sm: "min-w-0",
      lg: "w-full gap-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
})

interface InputProps extends VariantProps<typeof inputWrapperVariants> {
  type?: "text" | "email" | "number" | "password" | "tel"
  placeholder?: string
  icon?: React.ReactNode
  value?: string
  setValue?: ChangeEventHandler<HTMLInputElement>
  defaultValue?: string
}

export function Input({
  defaultValue,
  icon = null,
  placeholder,
  setValue,
  size,
  type,
  variant,
  value,
}: InputProps) {
  return (
    <div className={cn(inputWrapperVariants({ size, variant }))}>
      <input
        className="z-10 min-w-0 flex-1 bg-transparent py-3 pl-4 pr-8 text-base
         text-white caret-accent-blue outline-none"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        defaultValue={defaultValue}
      />
      {icon && <div className="absolute right-2 z-0">{icon}</div>}
    </div>
  )
}
