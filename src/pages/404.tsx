import { Link } from "react-router-dom"

export function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Return to <Link to="/">Dashboard</Link>
      </p>
    </div>
  )
}
