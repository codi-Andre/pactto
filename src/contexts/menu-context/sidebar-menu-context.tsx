import { createContext, useContext, useState } from "react"

interface SidebarMenuProviderProps {
  children: React.ReactNode
}

interface SidebarMenuContext {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const SidebarMenuContext = createContext({} as SidebarMenuContext)

export function useSidebarMenu() {
  return useContext(SidebarMenuContext)
}

export function SidebarMenuProvider({ children }: SidebarMenuProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <SidebarMenuContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
      }}
    >
      {children}
    </SidebarMenuContext.Provider>
  )
}
