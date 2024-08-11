import { Link } from "react-router-dom"

export function NotFound() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p>
        Return to{" "}
        <Link className="text-accent-blue underline" to="/">
          Dashboard
        </Link>
      </p>
    </section>
  )
}
