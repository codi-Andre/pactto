import { createBrowserRouter } from "react-router-dom"
import { NotFound } from "./pages/404"
import { RootLayout } from "./layouts/root-layout"
import { ErrorPage } from "./pages/error-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <h1>Hello world!</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
