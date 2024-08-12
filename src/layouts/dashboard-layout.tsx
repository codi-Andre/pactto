import { Outlet } from "react-router-dom"
import { SidebarMenu } from "@/components/sidebar-menu/sidebar-menu"
import { SidebarMenuProvider } from "@/contexts/menu-context/sidebar-menu-context"

export function DashboardLayout() {
  return (
    <SidebarMenuProvider>
      <div className="relative w-full">
        <SidebarMenu />

        <div
          className="absolute left-0 h-screen w-full overflow-y-auto transition-all duration-300 xl:left-80
          xl:w-[calc(100%-320px)] peer-aria-hidden:xl:left-0 peer-aria-hidden:xl:w-full"
        >
          <Outlet />
        </div>
      </div>
    </SidebarMenuProvider>
  )
}
