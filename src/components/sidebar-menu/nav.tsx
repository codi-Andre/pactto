import {
  GalleryVerticalEnd,
  Gift,
  Home,
  Link2,
  MessagesSquare,
  MonitorPlay,
  PanelsTopLeft,
  Settings,
  TvMinimalPlay,
  UserRoundCog,
} from "lucide-react"
import { NavAnchor } from "./nav-anchor"

export function Nav() {
  return (
    <nav className="mt-6 flex-1">
      <ul className="flex flex-col">
        <li>
          <NavAnchor url="/" label="Home" icon={<Home />} />
        </li>
        <li>
          <NavAnchor
            url="/pacttos"
            label="Pacttos(chats)"
            icon={<MessagesSquare />}
          />
        </li>
        <li>
          <NavAnchor
            url="/videos-to-review"
            label="Items to review"
            icon={<TvMinimalPlay />}
          />
        </li>
        <li>
          <NavAnchor
            url="/shared-links"
            label="Web links you created"
            icon={<Link2 />}
          />
        </li>
        <li>
          <NavAnchor
            url="/personal-info"
            label="Personal information"
            icon={<UserRoundCog />}
          />
        </li>
        <li>
          <NavAnchor
            url="/packages"
            label="Review packages for sale"
            icon={<Gift />}
          />
        </li>
        <li>
          <NavAnchor
            url="/profile"
            label="Pactto website"
            icon={<PanelsTopLeft />}
          />
        </li>
        <li>
          <NavAnchor
            url="/library"
            label="Reference video library"
            icon={<MonitorPlay />}
          />
        </li>
        <li>
          <NavAnchor
            url="/subscription"
            label="Subscription"
            icon={<GalleryVerticalEnd />}
          />
        </li>
        <li>
          <NavAnchor
            url="/review-settings"
            label="Review settings"
            icon={<Settings />}
          />
        </li>
      </ul>
    </nav>
  )
}
