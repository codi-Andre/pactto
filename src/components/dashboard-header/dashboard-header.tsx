import { useSidebarMenu } from "@/contexts/menu-context/sidebar-menu-context"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"

interface DashBoardHeaderProps {
  title: string
  children?: React.ReactNode
}

export function DashBoardHeader({ children, title }: DashBoardHeaderProps) {
  const { isMenuOpen, toggleMenu } = useSidebarMenu()

  return (
    <header
      className="sticky top-0 z-20 flex flex-wrap items-center gap-1
       bg-[#242424]/80 px-4 py-4 backdrop-blur-sm sm:px-8"
    >
      <Button
        className={isMenuOpen ? "hidden" : ""}
        onClick={toggleMenu}
        variant="icon"
        size="sm"
        aria-label="open menu"
      >
        <Menu />
      </Button>

      <h2 className="flex-1 text-xl font-bold sm:text-3xl">{title}</h2>

      {children}
    </header>
  )
}
