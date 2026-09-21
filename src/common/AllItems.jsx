import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { CardSkeleton } from "@/components/skeletons/Skeletons";
import AddProduct from "./AddProduct";
import Card from "./Card";

const AllItems = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/products');
                setProducts(response.data);
                console.log(response.data);
            } catch (err) {
                console.error("API Fetch Error ", err);
                setHasError(true);
            } finally {
                setLoading(false);
            }
        };
        getAllProducts();
    }, []);

    const gridLayoutClass = "grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 p-6";

    // 1. Show skeletons FIRST while fetching data
    if (loading) {
        return (
            <div className={gridLayoutClass}>
                {Array.from({ length: 32 }).map((_, index) => (
                    <CardSkeleton key={index} />
                ))}
            </div>
        );
    }

    // 2. Show AddProduct ONLY AFTER loading completes if fetch failed or returned empty
    if (hasError || products.length === 0) {
        return (
            <div className="p-6">
                <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-xl max-w-2xl mx-auto mb-6 text-center text-sm">
                    No products found or the API URL is incorrect. Add a new product to get started!
                </div>
                <AddProduct />
            </div>
        );
    }

    // 3. Render products list
    return (
        <div className={gridLayoutClass}>
            {products.map((product) => (
                <Card
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.images}
                    onClick={() => navigate(`/product/${product.id}`)}
                />
            ))}
        </div>
    );
};

export default AllItems;