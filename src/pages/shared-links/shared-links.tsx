import { DashBoardHeader } from "@/components/dashboard-header/dashboard-header"
import { Input } from "@/components/ui/Input"
import { Search } from "lucide-react"

export function SharedLinks() {
  return (
    <>
      <section className="my-4 min-h-64">
        <DashBoardHeader title="There are no public web links you created" />

        <div className="mx-4 sm:mx-8">
          <Input placeholder="Search" icon={<Search />} />
        </div>
      </section>

      <section>
        <DashBoardHeader title="There are no private web links you created" />

        <div className="mx-4 sm:mx-8">
          <Input placeholder="Search" icon={<Search />} />
        </div>
      </section>
    </>
  )
}
