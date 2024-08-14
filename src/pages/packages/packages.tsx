import { DashBoardHeader } from "@/components/dashboard-header/dashboard-header"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function Packages() {
  return (
    <section>
      <DashBoardHeader title="Packages" />
      <div className="mx-4 flex flex-col-reverse items-center gap-3 sm:mx-8 sm:flex-row">
        <Button className="w-full sm:w-auto">
          <Plus size={16} strokeWidth={4} />
          add packages
        </Button>

        <div className="flex w-full gap-3 sm:justify-end">
          <Button className="flex-1 sm:flex-none" disabled>
            save changes
          </Button>
          <Button className="flex-1 sm:flex-none">payment details</Button>
        </div>
      </div>
    </section>
  )
}
