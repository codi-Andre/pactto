import { UserRound } from "lucide-react"
import { Link } from "react-router-dom"

export function ProfileInfo() {
  return (
    <div className="mx-8 mt-4 h-max">
      <h2 className="text-sm font-semibold uppercase text-neutral-500">
        your pactto profile
      </h2>

      <div className="mt-8 flex items-end">
        <Link
          className="mb-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          to="/profile"
        >
          <UserRound
            className="rounded-full bg-secondary-700 text-white"
            size={40}
          />
        </Link>

        <p className="m-2 uppercase">
          <span className="block text-[0.4375rem]">trial: 11 days left</span>

          <span className="rounded-[4px] bg-accent-blue px-2 py-1 text-xs text-white">
            pactto pro
          </span>
        </p>
        <Link
          to={"/subscription"}
          className="mb-3 text-xs text-secondary-400 underline hover:text-white
           focus:outline-none focus:ring-2 focus:ring-white"
        >
          upgrade
        </Link>
      </div>

      <p className="mt-6 flex flex-col">
        <span className="text-xl text-white">Name Last Name</span>
        <span className="text-sm">Pactto member since AAAA</span>
      </p>
    </div>
  )
}
