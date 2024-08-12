import { Check } from "lucide-react"

interface CheckboxProps {
  label: string
}

export function Checkbox({ label }: CheckboxProps) {
  return (
    <label className="group relative flex min-h-12 cursor-pointer items-center pl-10">
      <input className="peer sr-only" type="checkbox" />

      <span
        className="absolute left-2 z-10 h-5 w-5 rounded-sm border-2 border-accent-blue
          bg-accent-blue before:-left-3 before:-top-3 before:z-0 before:h-10 before:w-10
            before:rounded-full before:bg-white/10 group-focus-within:before:absolute
              group-hover:before:absolute peer-checked:before:bg-accent-blue/10"
      >
        <Check className="text-primary-800" strokeWidth={4} size={16} />
      </span>

      <span
        className="absolute left-2 z-10 h-5 w-5 rounded-sm border-2 border-secondary-700
         bg-[#242424] group-hover:border-secondary-200 peer-checked:hidden"
      ></span>
      {label}
    </label>
  )
}
