import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 1. Define Zod Schema for validation
const productSchema = z.object({
    title: z
        .string()
        .min(3, "Title must be at least 3 characters long")
        .max(100, "Title cannot exceed 100 characters"),
    price: z
        .coerce
        .number({ invalid_type_error: "Price must be a number" })
        .positive("Price must be greater than 0"),
    imageUrl: z
        .string()
        .url("Please enter a valid image URL"),
    description: z
        .string()
        .min(10, "Description must be at least 10 characters long"),
    categoryId: z
        .coerce
        .number()
        .default(1)
});

const AddProduct = () => {
    const navigate = useNavigate();
    const [apiError, setApiError] = useState(null);

    // 2. Initialize React Hook Form with Zod Resolver
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            title: "",
            price: "",
            imageUrl: "",
            description: "",
            categoryId: 1
        }
    });

    // 3. Form Submission Handler
    const onSubmit = async (data) => {
        setApiError(null);

        const payload = {
            title: data.title,
            price: data.price,
            description: data.description,
            categoryId: data.categoryId,
            images: [data.imageUrl]
        };

        try {
            await axios.post("https://api.escuelajs.co/api/v1/products/", payload);
            navigate("/");
        } catch (err) {
            console.error("Failed to create product:", err);
            setApiError("Failed to add product. Please try again.");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

            {apiError && (
                <div className="p-3 mb-4 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
                    {apiError}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-xl border shadow-sm dark:bg-gray-800">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        {...register("title")}
                        placeholder="e.g. Classic Sneakers"
                        className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.title ? "border-red-500 focus:ring-red-500" : "focus:ring-black"
                        }`}
                    />
                    {errors.title && (
                        <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>
                    )}
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium mb-1">Price ($)</label>
                    <input
                        type="number"
                        step="0.01"
                        {...register("price")}
                        placeholder="e.g. 99"
                        className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.price ? "border-red-500 focus:ring-red-500" : "focus:ring-black"
                        }`}
                    />
                    {errors.price && (
                        <p className="mt-1 text-xs text-red-500">{errors.price.message}</p>
                    )}
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-sm font-medium mb-1">Image URL</label>
                    <input
                        type="text"
                        {...register("imageUrl")}
                        placeholder="https://images.unsplash.com/..."
                        className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.imageUrl ? "border-red-500 focus:ring-red-500" : "focus:ring-black"
                        }`}
                    />
                    {errors.imageUrl && (
                        <p className="mt-1 text-xs text-red-500">{errors.imageUrl.message}</p>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        rows="4"
                        {...register("description")}
                        placeholder="Enter detailed product description..."
                        className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.description ? "border-red-500 focus:ring-red-500" : "focus:ring-black"
                        }`}
                    />
                    {errors.description && (
                        <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="w-1/2 py-2 border rounded-lg hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-1/2 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
                    >
                        {isSubmitting ? "Creating..." : "Add Product"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;