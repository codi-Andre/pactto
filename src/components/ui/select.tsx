import { cn } from "@/libs/utils"
import * as S from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"

interface SelectProps {
  id?: string
  placeHolder?: string
  list: string[]
  flex1?: boolean
}

export function Select({ flex1, id, list, placeHolder }: SelectProps) {
  return (
    <S.Root>
      <S.Trigger
        id={id}
        className={cn(
          `flex h-12 w-full min-w-52 items-center justify-between
         rounded-md border border-white/50 bg-secondary-800 px-4 py-3 text-base
          placeholder:text-secondary-200 hover:border-white focus:border-white focus:outline-none
           disabled:cursor-not-allowed disabled:opacity-50 aria-expanded:border-2
            aria-expanded:border-accent-blue aria-expanded:text-accent-blue`,
          { flex1 }
        )}
      >
        <S.Value placeholder={placeHolder} />
        <S.Icon>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </S.Icon>
      </S.Trigger>

      <S.Portal>
        <S.Content
          position="popper"
          className={`relative z-50 max-h-80 min-w-52 overflow-hidden
             rounded-md bg-secondary-900 text-secondary-200 shadow-md`}
        >
          <S.Viewport className="min-w-52 py-1">
            {list.map((item) => (
              <S.Item
                key={item}
                value={item}
                className={`relative flex min-h-10 w-full
                 cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8
                  text-base outline-none focus:bg-white/10 focus:text-white
                   data-[disabled]:pointer-events-none data-[disabled]:opacity-50`}
              >
                <S.ItemText>{item}</S.ItemText>
                <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center text-accent-blue">
                  <S.ItemIndicator>
                    <Check strokeWidth={3} size={20} />
                  </S.ItemIndicator>
                </span>
              </S.Item>
            ))}
          </S.Viewport>
          <S.Arrow />
        </S.Content>
      </S.Portal>
    </S.Root>
  )
}
