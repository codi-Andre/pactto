import { NavLink } from "react-router-dom"

interface NavAnchorProps {
  url: string
  label: string
  icon?: React.ReactNode
}

export function NavAnchor({ label, url, icon = null }: NavAnchorProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive
            ? "bg-primary-800 text-sm text-accent-blue hover:bg-accent-blue/10 focus:bg-accent-blue/10"
            : "hover:bg-white/10 focus:bg-white/10"
        }
         flex items-center gap-3 py-3 pl-8 focus-visible:outline-none`
      }
      to={url}
    >
      {icon}
      {label}
    </NavLink>
  )
}
