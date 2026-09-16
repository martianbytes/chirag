import { Outlet } from "react-router"
import Navbar from "./navbar"
import Footer from "./footer"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout