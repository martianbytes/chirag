import App from "@/App";
import AddProduct from "@/common/AddProduct";
import MainLayout from "@/common/MainLayout";
import ProductDetailPage from "@/Pages/ProductDetailPage";
import { createBrowserRouter, RouterProvider } from "react-router";




const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {index: true, Component: App},
            {path: '/product/:id', Component: ProductDetailPage},
            {path: '/product/add-product', Component: AddProduct}
        ]
    }
])


export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}