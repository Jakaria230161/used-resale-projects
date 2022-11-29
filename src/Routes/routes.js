import { createBrowserRouter } from "react-router-dom"
import AllUsers from "../Dashboard/AllUsers"
import AllBuyers from "../Dashboard/Admin/AllBuyers"
import MyProducts from "../Dashboard/Buyers/MyProducts"
import AddProduct from "../Dashboard/Seller/AddProduct"
import AllSeller from "../Dashboard/Admin/AllSeller"
import SellerProducts from "../Dashboard/Seller/SellerProducts"
import DashBoardLayout from "../Layout/DashBoardLayout"
import Main from "../Layout/Main"
import CategoryDetails from "../Pages/Home/Categories/CategoryDetails"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Login/Signup"
import Blog from "../Pages/Other/Blog"
import ErrorPage from "../Pages/Other/ErrorPage/ErrorPage"
import AdminRoute from "./AdminRoutes"
import PrivateRoutes from "./PrivateRoutes"
import SellerRoute from "./SellerRoutes"
import Payment from "../Dashboard/Buyers/Payment"
import MyWishlists from "../Dashboard/Buyers/MyWishlist/MyWishlists"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        //   errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: "/categorie/:id",
                element: <PrivateRoutes><CategoryDetails></CategoryDetails></PrivateRoutes>,
                loader: ({ params }) =>
                    fetch(
                        `http://localhost:5000/categorie/${params.id}`
                    ),
            },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myWishlists',
                element: <MyWishlists></MyWishlists>
            },
            {
                path: '/dashboard/addProducts',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/sellerProducts',
                element: <SellerRoute><SellerProducts></SellerProducts></SellerRoute>
            },

            {
                path: '/dashboard/allSeller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allBuyer',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            // {
            //     path: '/dashboard/adddoctor',
            //     element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            // },
            // {
            //     path: '/dashboard/managedoctors',
            //     element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            // },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },

        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
])

export default router
