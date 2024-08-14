import { createBrowserRouter } from "react-router-dom"
import { NotFound } from "./pages/404"
import { RootLayout } from "./layouts/root-layout"
import { ErrorPage } from "./pages/error-page"
import { DashboardLayout } from "./layouts/dashboard-layout"
import { Home } from "./pages/home/home"
import { Pacttos } from "./pages/pacttos/pacttos"
import { VideosToReview } from "./pages/videos-to-review/videos-to-review"
import { SharedLinks } from "./pages/shared-links/shared-links"
import { PersonalInfo } from "./pages/personal-info/personal-info"
import { Packages } from "./pages/packages/packages"

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
          {
            path: "/videos-to-review",
            element: <VideosToReview />,
          },
          {
            path: "/shared-links",
            element: <SharedLinks />,
          },
          {
            path: "/personal-info",
            element: <PersonalInfo />,
          },
          {
            path: "/packages",
            element: <Packages />,
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
