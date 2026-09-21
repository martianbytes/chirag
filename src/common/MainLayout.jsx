import { Outlet } from "react-router"
import Navbar from "./navbar"
import Footer from "./footer"
import { useTheme } from "@/context/ThemeContext"

const MainLayout = () => {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="dark:bg-zinc-800 dark:text-white min-h-screen flex flex-col">
        {/* Fixed Navbar */}
        <Navbar />


        <main className="flex-1 p-6">
          <Outlet />
        </main>
        <Footer />

      </div>
    </div>
  )
}

export default MainLayout;