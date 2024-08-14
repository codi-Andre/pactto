import { DashBoardHeader } from "@/components/dashboard-header/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { Plus, Search } from "lucide-react"

export function Library() {
  return (
    <section>
      <DashBoardHeader title="Select a video">
        <Button className="gap-1" size="md">
          <Plus size={16} />
          <span>upload</span> <span className="hidden sm:block">new video</span>
        </Button>
      </DashBoardHeader>

      <div className="m-4 flex flex-col sm:mx-8">
        <p className="mb-4 text-sm text-neutral-500">
          Videos uploaded to the reference video library can be used in
          side-by-side comparisons, or can be shared with learners directly.
        </p>
        <Input placeholder="Search" icon={<Search />} />
      </div>
    </section>
  )
}
