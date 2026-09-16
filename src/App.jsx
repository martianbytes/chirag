import { useNavigate } from "react-router"
import AllItems from "./common/AllItems"

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
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