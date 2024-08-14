import { DashBoardHeader } from "@/components/dashboard-header/dashboard-header"
import { Input } from "@/components/ui/Input"
import { Search } from "lucide-react"

export function Pacttos() {
  return (
    <section>
      <DashBoardHeader title="Pacttos (Chats)" />
      <div className="m-4 sm:mx-8">
        <Input placeholder="Search" icon={<Search />} />
      </div>
    </section>
  )
}
