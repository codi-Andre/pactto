import { cn } from "@/libs/utils"
import { cva, VariantProps } from "class-variance-authority"
import { ChangeEventHandler } from "react"

const inputWrapperVariants = cva(`relative flex items-center max-h-14 `, {
  variants: {
    variant: {
      primary: `rounded-md border-2 border-secondary-700 bg-secondary-800
       focus-within:border-accent-blue hover:border-secondary-200
        focus-within:hover:border-accent-blue active:border-accent-blue`,
      secondary: `rounded-md border border-secondary-700 bg-secondary-800
       focus-within:border-accent-blue hover:border-secondary-200
        focus-within:hover:border-accent-blue active:border-accent-blue`,
    },
    size: {
      sm: "min-w-0",
      md: "pr-8 gap-2",
      lg: "w-full py-3 pl-4 pr-8 gap-2",
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
        className="z-10 min-w-0 flex-1 bg-transparent text-base
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
