import { DashBoardHeader } from "@/components/dashboard-header/dashboard-header"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/check-box"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/select"

export function PersonalInfo() {
  return (
    <section className="mb-10 grid grid-cols-1 sm:grid-cols-2">
      <DashBoardHeader title="Personal information">
        <div className="flex justify-center gap-3 sm:mx-8 sm:justify-end">
          <Button variant="muted">reset changes</Button>
          <Button disabled>save changes</Button>
        </div>
      </DashBoardHeader>

      <form className="col-span-2 row-start-2 md:col-span-1">
        <fieldset className="mt-6 flex flex-col gap-4 p-4 sm:px-8">
          <Input variant="secondary" defaultValue="Name" />
          <Input variant="secondary" defaultValue="Last Name" />
          <Input
            variant="secondary"
            type="email"
            defaultValue="email@example.com"
          />
          <Select list={["Brazil", "United States"]} placeHolder="Country" />
        </fieldset>

        <fieldset className="mt-10 flex flex-col gap-2 p-4 sm:px-8">
          <legend>What is your main activity? Or activities</legend>

          <Checkbox label="Video" />
          <Checkbox label="Design" />
          <Checkbox label="Development" />
          <Checkbox label="Sports" />
          <Checkbox label="Medical" />
          <Checkbox label="Inspections" />

          <Input variant="primary" placeholder="Other" />
        </fieldset>

        <fieldset className="mt-10 flex flex-col gap-4 p-4 sm:px-8">
          <legend>User handle and password</legend>

          <Input
            variant="secondary"
            defaultValue="email@example.com"
            type="email"
          />

          <Input variant="secondary" placeholder="Password" type="password" />

          <Input
            variant="secondary"
            placeholder="Confirm password"
            type="password"
          />
        </fieldset>
      </form>

      <p className="col-start-1 row-start-3 m-4 mt-10 text-xs sm:mx-8">
        To delete your Pactto account and remove your data permanently from all
        Pactto apps and services, please{" "}
        <a className="text-accent-red underline" href="#end">
          click here
        </a>
        .
      </p>
    </section>
  )
}
