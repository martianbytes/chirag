import { Outlet } from "react-router"
import Navbar from "./navbar"
import Footer from "./footer"
import { useTheme } from "@/context/ThemeContext"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app-sidebar"

const MainLayout = () => {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="dark:bg-zinc-800 dark:text-white min-h-screen flex flex-col">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Locked Container */}
        <SidebarProvider className="flex-1 h-[calc(100vh-4rem)] overflow-hidden">
          <AppSidebar />
          
          {/* Main content handles its own vertical scroll */}
          <SidebarInset className="flex-1 overflow-y-auto flex flex-col">
            <main className="flex-1 p-6">
              <Outlet />
            </main>
            <Footer />
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  )
}

export default MainLayout;