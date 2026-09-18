
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/context/ThemeContext";
import { useNavigate } from "react-router"

const Navbar = () => {
  const {isDark, setIsDark} = useTheme();
  const navigate = useNavigate()
  return (
    <div className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">
        <h2 className="font-lavishly text-3xl font-semibold hover:text-red-400 select-none cursor-pointer" onClick={()=>navigate('/')}>Chirag</h2>
        <Switch checked={isDark} onCheckedChange={setIsDark}/>

    </div>
  )
}

export default Navbar