import { DashBoardHeader } from "@/components/dashboard-header/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { Plus, Search } from "lucide-react"

export function Home() {
  return (
    <section>
      <DashBoardHeader title="My uploads">
        <Button className="gap-1" size="md">
          <Plus size={16} />
          <span>upload</span> <span className="hidden sm:block">new video</span>
        </Button>
      </DashBoardHeader>

      <div className="m-4 flex flex-col sm:mx-8">
        <Input placeholder="Search" icon={<Search />} />
      </div>
    </section>
  )
}
