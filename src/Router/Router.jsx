import AboutUs from "@/AboutUs";
import App from "@/App";
import AddProduct from "@/common/AddProduct";
import MainLayout from "@/common/MainLayout";
import LoginForm from "@/components/Login";
import ProductDetailPage from "@/Pages/ProductDetailPage";
import { createBrowserRouter, RouterProvider } from "react-router";




const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {index: true, Component: App},
            {path: '/product/:id', Component: ProductDetailPage},
            {path: '/product/add-product', Component: AddProduct},
            {path: '/about-us', Component: AboutUs},
            {path: '/login', Component: LoginForm}
        ]
    }
])


export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}