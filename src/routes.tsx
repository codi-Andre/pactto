import { createBrowserRouter } from "react-router-dom"
import { NotFound } from "./pages/404"
import { RootLayout } from "./layouts/root-layout"
import { ErrorPage } from "./pages/error-page"
import { DashboardLayout } from "./layouts/dashboard-layout"
import { Home } from "./pages/home/home"
import { Pacttos } from "./pages/pacttos/pacttos"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/pacttos",
            element: <Pacttos />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
