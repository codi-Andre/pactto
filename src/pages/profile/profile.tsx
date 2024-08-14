import { DashBoardHeader } from "@/components/dashboard-header/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"

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

      <form className="col-span-2 row-start-2 md:col-span-1">
        <fieldset className="mt-6 flex flex-col gap-4 p-4 sm:px-8">
          <legend>Hero</legend>

          <Input variant="secondary" defaultValue="Name Last Name" />

          <Input variant="secondary" placeholder="Headline" />
        </fieldset>

        <fieldset className="mt-10 flex flex-col gap-2 p-4 sm:px-8">
          <legend>About Me</legend>

          <Input variant="secondary" placeholder="Expertise Title" />
          <Input variant="secondary" placeholder="Awards Title" />
        </fieldset>

        <fieldset className="mt-10 flex flex-col gap-4 p-4 sm:px-8">
          <legend>Give me a follow</legend>
          <Input variant="secondary" placeholder="Add social media channel" />
        </fieldset>

        <fieldset className="mt-10 flex flex-col gap-4 p-4 sm:px-8">
          YouTube video
          <Input variant="secondary" placeholder="Youtube video URL" />
        </fieldset>

        <fieldset className="mt-10 flex flex-col gap-4 p-4 sm:px-8">
          <legend>Footer</legend>
          <Input variant="secondary" placeholder="Quote Author" />
        </fieldset>
      </form>
    </section>
  )
}
