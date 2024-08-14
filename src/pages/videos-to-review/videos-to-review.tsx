import { DashBoardHeader } from "@/components/dashboard-header/dashboard-header"
import { Input } from "@/components/ui/Input"
import { Search } from "lucide-react"

export function VideosToReview() {
  return (
    <section>
      <DashBoardHeader title="There are no review requests sent to you" />

      <div className="m-4 sm:mx-8">
        <Input placeholder="Search" icon={<Search />} />
      </div>
    </section>
  )
}
