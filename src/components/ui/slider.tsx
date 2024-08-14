import * as S from "@radix-ui/react-slider"
import { ChevronDown } from "lucide-react"

interface SliderProps {
  label?: string
  range?: [number]
  setRange?: (number: [number]) => void
  min?: number
  max?: number
}

export function Slider({ label, range, setRange, max, min }: SliderProps) {
  return (
    <S.Root
      className="relative flex h-5 w-28 touch-none select-none items-center"
      value={range}
      onValueChange={setRange}
      max={max}
      step={min}
    >
      <S.Track className="relative h-[0.35rem] flex-1 rounded-full bg-accent-blue/30">
        <S.Range className="absolute h-full rounded-full bg-accent-blue" />
      </S.Track>
      <S.Thumb
        className="group relative block h-5 w-5 rounded-full bg-accent-blue focus:shadow-accent focus:outline-none"
        aria-label={label}
      >
        <span
          className="absolute -left-1 bottom-8 z-10 hidden flex-col items-center
            justify-center rounded-md bg-accent-blue px-3 py-1 text-sm text-primary-800
              group-hover:flex group-focus:flex"
        >
          {range}
          <ChevronDown className="absolute top-[15px] text-accent-blue" />
        </span>
      </S.Thumb>
    </S.Root>
  )
}
