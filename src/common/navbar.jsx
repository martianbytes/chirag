
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/context/ThemeContext";
import { useNavigate } from "react-router"
import ProfileAvatar from "./ProfileAvatar";

const Navbar = () => {
  const {isDark, setIsDark} = useTheme();
  const navigate = useNavigate()
  return (
    <div className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">
        <h2 className="font-lavishly text-4xl font-bold hover:text-red-400 select-none cursor-pointer" onClick={()=>navigate('/')}>Chirag</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 group">
            <span className="hidden group-hover:inline-block transition-alla">{isDark?'Dark':'Light'}</span>
            <Switch checked={isDark} onCheckedChange={setIsDark} />
          </div>
          <ProfileAvatar />
        </div>

    </div>
  )
}

export default Navbar