import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/404Page/ErrorPage";
import AddItems from "../pages/AddItems/AddItems";
import AllItems from "../pages/AllItems/AllItems";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Home from "../pages/Home/Home";
import Login from "../pages/LogIn/Login";
import MyItem from "../pages/MyItem/MyItem";
import Register from "../pages/Register/Register";
import Updateiteam from "../pages/UpdateItem/Updateiteam";
import PrivateRoute from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>, 
            }, 
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/all-items',
                element: <AllItems></AllItems>,
                loader: async()=> await fetch('https://art-and-craft-store-server-henna.vercel.app/all-Items'),
            },
            {
                path: '/my-craft-list',
                element: <PrivateRoute><MyItem></MyItem></PrivateRoute>,
                loader: ()=> fetch('https://art-and-craft-store-server-henna.vercel.app/viewItems')
            },
            {
                path: '/add-items',
                element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
            },
            {
                path: '/all-items/details-page/:id',
                element: <PrivateRoute> <DetailsPage></DetailsPage></PrivateRoute>,
                loader: ({params})=> fetch(`https://art-and-craft-store-server-henna.vercel.app/all-Items/${params.id}`)
            },
            {
                path:'/update-item/:id',
                element: <PrivateRoute> <Updateiteam></Updateiteam> </PrivateRoute>,
                loader: ({params})=> fetch(`https://art-and-craft-store-server-henna.vercel.app/all-Items/${params.id}`)
            }
        ] 
    }    
]);

export default router;