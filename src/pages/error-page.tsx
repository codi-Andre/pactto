import { Link } from "react-router-dom"

export function ErrorPage() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Return to <Link to="/">Dashboard</Link>
      </p>
    </div>
  )
}
