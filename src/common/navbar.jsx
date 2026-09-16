import { useNavigate } from "react-router"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-slate-800 text-white px-6 py-4">
        <h2 className="font-lavishly text-3xl font-semibold hover:text-red-400 select-none cursor-pointer" onClick={()=>navigate('/')}>Chirag</h2>
    </div>
  )
}

export default Navbar