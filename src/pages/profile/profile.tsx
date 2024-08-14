import { DashBoardHeader } from "@/components/dashboard-header/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, User2 } from "lucide-react"

export function Profile() {
  return (
    <section className="mb-10 grid grid-cols-1 sm:grid-cols-2">
      <DashBoardHeader title="Please edit your Pactto page below.">
        <div className="flex justify-center gap-3 sm:mx-8 sm:justify-end">
          <Button className="min-w-40" variant="secondary">
            launch
          </Button>
          <Button className="min-w-40" disabled>
            save
          </Button>
        </div>
      </DashBoardHeader>

      <form className="col-span-2 row-start-2 grid grid-cols-1 md:grid-cols-2">
        <fieldset className="mt-6 flex flex-col gap-4 p-4 sm:px-8 md:col-start-2 md:row-span-2">
          <label className="flex flex-col gap-1">
            Avatar
            <div className="w-full bg-primary-800 py-4">
              <User2 size={160} className="m-auto rounded-full bg-blue-200" />
              <input type="file" hidden />
            </div>
          </label>
          <label className="flex flex-col gap-1">
            Carousel
            <Button className="max-w-40">
              <Plus size={14} strokeWidth={3} className="mr-1" aria-hidden />{" "}
              add image
            </Button>
            <input type="file" hidden />
          </label>
        </fieldset>

        <fieldset className="col-start-1 mt-6 flex flex-col gap-4 p-4 sm:px-8 md:row-start-1">
          <legend>Hero</legend>

          <Input variant="secondary" defaultValue="Name Last Name" />

          <Input variant="secondary" placeholder="Headline" />
        </fieldset>

        <fieldset className="col-start-1 mt-10 flex flex-col gap-10 p-4 sm:px-8">
          <legend>About Me</legend>
          <Textarea placeholder="About me" rows={8} />

          <Input variant="secondary" placeholder="Expertise Title" />
          <Input variant="secondary" placeholder="Awards Title" />
        </fieldset>

        <fieldset className="col-start-1 mt-10 flex flex-col gap-4 p-4 sm:px-8">
          <legend>Give me a follow</legend>
          <Input variant="secondary" placeholder="Add social media channel" />
        </fieldset>

        <fieldset className="col-start-1 mt-10 flex flex-col gap-4 p-4 sm:px-8">
          YouTube video
          <Input variant="secondary" placeholder="Youtube video URL" />
        </fieldset>

        <fieldset className="col-start-1 mt-10 flex flex-col gap-10 p-4 sm:px-8">
          <legend>Footer</legend>
          <Textarea placeholder="Quote" rows={5} />
          <Input variant="secondary" placeholder="Quote Author" />
        </fieldset>
      </form>
    </section>
  )
}
