import ImageFallback from "@/common/ImageFallback";
import { ProductDetailSkeleton } from "@/components/skeletons/Skeletons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

import { SquarePen } from 'lucide-react';
import { Trash } from 'lucide-react';
import DeleteProduct from "@/common/DeleteProduct";
import EditProduct from "./EditPage";


// import { NepaliRupee } from 'lucide-react';



const ProductDetailPage = () => {
    console.log("product detail page")
    const [count, setCount] = useState(0);
    const { id: productId } = useParams();
    const [loading, setLoading] = useState(true);
    const [thisProduct, setThisProduct] = useState({
        images: []
    });

    const [wantsToDelete, setWantsToDelete] = useState(false);
    const [wantsToEdit, setWantsToEdit] = useState(false);
    

    useEffect(() => {
        const getProduct = async () => {
            try {
                const product = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
                console.log("productId:", productId);
                console.log("response:", product.data);
                console.log("images:", product.data.images);
                setThisProduct(product.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        getProduct();
    }, [productId]);

    if(loading) {
        return <ProductDetailSkeleton />
    }
    
    return (
        // <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] justify-start">

        //     <div className="w-100">
        //         <ImageFallback src={thisProduct?.images[0]} alt={'no image'} className={'w-full aspect-4/5 object-cover object-center'} />
        //     </div>
        //     <div>
        //         <h2>{thisProduct.title}</h2>
        //         <p>{thisProduct.price}</p>
        //         <p>{thisProduct.description}</p>
        //         <button>Cart</button>
        //     </div>
        // </div>
        <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex justify-self-end gap-8">
                    <button className="active:scale-95"
                        onClick={()=>setWantsToEdit(true)}
                    ><SquarePen /></button>
                    <button className="active:scale-95"
                        onClick={()=>setWantsToDelete(true)}
                    ><Trash /></button>
                </div>
            <div className="grid md:grid-cols-2 gap-10">

                {/* Product Image */}
                <div className="overflow-hidden rounded-xl">
                    <ImageFallback
                        src={thisProduct?.images}
                        alt="no image"
                        className="w-full aspect-4/5 object-cover object-center"
                    />
                </div>

                {/* Product Information */}
                <div className="flex flex-col justify-center">

                    <h2 className="text-3xl font-semibold">
                        {thisProduct.title}
                    </h2>

                    <p className="mt-4 text-2xl font-medium">
                        $ {thisProduct.price}
                    </p>

                    <p className="mt-6 text-gray-600 leading-7">
                        {thisProduct.description}
                    </p>

                    <div className="flex gap-8 items-center mt-4 justify-center">
                        <button className="bg-red-400 px-4 py-2 rounded-xl hover:bg-red-300 active:scale-95" onClick={()=>setCount(Math.max(0, count-1))}>-</button>

                        <span className="w-10 flex justify-center">{count}</span>

                        <button className="bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-200 active:scale-95" onClick={()=>setCount(Math.min(100, count+1))}>+</button>
                    </div>

                    <button className="mt-8 w-full rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 transition">
                        Add to Cart
                    </button>

                </div>

                {wantsToDelete && <DeleteProduct id={thisProduct.id} />}
                {wantsToEdit && <EditProduct id={thisProduct.id} />}
            </div>
        </div>
    )
}

export default ProductDetailPage