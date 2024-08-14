import logo from "@/assets/pactto-logo.svg"
import { ProfileInfo } from "./profile-info"
import { Nav } from "./nav"
import { Button } from "../ui/button"
import { X } from "lucide-react"
import { useEffect, useRef } from "react"
import { useSidebarMenu } from "@/contexts/menu-context/sidebar-menu-context"

export function SidebarMenu() {
  const { isMenuOpen, toggleMenu } = useSidebarMenu()
  const menuRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const logoutButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (!menuRef.current || !isMenuOpen) {
        return
      }

      if (
        !menuRef.current.contains(event.target as Node) &&
        window.innerWidth < 1280
      ) {
        toggleMenu()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [menuRef, isMenuOpen, toggleMenu])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    function closeMenuOnEscape(e: KeyboardEvent) {
      if (window.innerWidth < 1280 && isMenuOpen && e.key === "Escape") {
        e.preventDefault()
        toggleMenu()
      }
    }

    document.addEventListener("keydown", closeMenuOnEscape)

    return () => {
      document.removeEventListener("keydown", closeMenuOnEscape)
    }
  }, [isMenuOpen, toggleMenu])

  useEffect(() => {
    if (isMenuOpen) {
      closeButtonRef.current?.focus()
    }
  }, [isMenuOpen])

  return (
    <div
      aria-hidden={!isMenuOpen}
      className={`group peer fixed z-30 h-full w-full translate-x-0 overflow-x-hidden
        backdrop-blur-sm transition-transform duration-300 aria-hidden:-translate-x-full
         xl:w-80 xl:bg-transparent aria-hidden:xl:-translate-x-80`}
    >
      <div
        className={`bg-secondary-900 h-full w-80 translate-x-0 transition-transform duration-300
          group-aria-hidden:-translate-x-full group-aria-hidden:xl:-translate-x-80`}
      >
        <div
          role="dialog"
          aria-modal={window.innerWidth < 1280}
          ref={menuRef}
          className={`block h-full w-80 overflow-y-auto text-neutral-400 group-aria-hidden:hidden`}
        >
          <Button
            ref={closeButtonRef}
            onKeyDown={(e) => {
              if (e.shiftKey && e.key === "Tab" && window.innerWidth < 1280) {
                e.preventDefault()
                logoutButtonRef.current?.focus()
              }
            }}
            onClick={toggleMenu}
            aria-label="close menu"
            variant="icon"
            size="sm"
            className="absolute right-2 top-2"
          >
            <X size={24} />
          </Button>
          <img
            className="ml-8 mt-8 h-12 object-contain object-left"
            src={logo}
            alt=""
          />

          <ProfileInfo />

          <Nav />

          <Button
            className="bg-secondary-900 mx-auto mb-4 mt-12 min-w-40"
            ref={logoutButtonRef}
            onKeyDown={(e) => {
              if (!e.shiftKey && e.key === "Tab" && window.innerWidth < 1280) {
                e.preventDefault()
                closeButtonRef.current?.focus()
              }
            }}
            variant="secondary"
          >
            logout
          </Button>
        </div>
      </div>
    </div>
  )
}
