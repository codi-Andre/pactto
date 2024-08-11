import { Link } from "react-router-dom"

export function ErrorPage() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Return to{" "}
        <Link className="text-accent-blue underline" to="/">
          Dashboard
        </Link>
      </p>
    </section>
  )
}
