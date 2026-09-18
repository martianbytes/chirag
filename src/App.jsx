import { useNavigate } from "react-router"
import AllItems from "./common/AllItems"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const navigate = useNavigate();
  const {user, logout} = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate("/login");
  }
  return (
    <div>
      <h2>{user.name}</h2>
      {user.name && <button className="px-4 py-2 bg-amber-300 rounded-2xl active:scale-95 mt-4" onClick={()=>handleLogout()}>Logout</button>}
      <div className="px-8 py-2 flex justify-between items-center">
        <h2 className="text-xl font-bold">Our Products..</h2>
        <button 
        className="px-4 py-2 bg-red-400 hover:bg-red-300 active:scale-95 rounded-xl mt-4"
        onClick={()=>navigate('/product/add-product')}
        >Add Product</button>

      </div>
      <AllItems />
    </div>
  )
}

export default App