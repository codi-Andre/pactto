import { DashBoardHeader } from "@/components/dashboard-header/dashboard-header"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Link } from "react-router-dom"

export function Subscription() {
  return (
    <section className="text-sm text-neutral-100">
      <DashBoardHeader title="Subscription" />

      <div className="flex flex-col gap-6 p-4 sm:px-8">
        <p>
          You have access to{" "}
          <strong className="text-white underline">PACTTO PRO</strong> as a
          trial. 7 days left
        </p>

        <Button className="max-w-80" variant="secondary">
          subscribe to Pactto pro
        </Button>

        <p>The PACTTO PRO subscription allows you to:</p>

        <ul className="flex flex-col gap-4">
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            Every feature on the FREE plan
          </li>
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            Full access to the Pactto app on iPhones, iPads, Android, Mac,
            Windows, and Web
          </li>
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            Max screen recording duration on Pactto Desktop:{" "}
            <strong>unlimited</strong>
          </li>
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            Max review duration on mobile: <strong>unlimited</strong>
          </li>
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            Max review duration on Pactto Web: 12 minutes
          </li>
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            Max review duration on Pactto Desktop: 20 minutes
          </li>
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            Manage and use your reference video library on the Web and Desktop
          </li>
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            Review videos uploaded by you, using the browser
          </li>
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            Add your own logo to create branded reviews
          </li>
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            If you sell reviews, the Pactto take rate for paid reviews is 3%,
            instead of 12% for free users
          </li>
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            <Link
              className="underline focus:outline-none focus:ring-2 focus:ring-white"
              to="/introduction"
            >
              Integrate Pactto to your website
            </Link>{" "}
            so anyone can send, and pay, for your video feedback
          </li>
          <li>
            <Check
              className="mr-2 inline-block text-accent-blue"
              strokeWidth={3}
            />
            Share your videos with others (no more sending video files around)
          </li>
        </ul>
      </div>
    </section>
  )
}
