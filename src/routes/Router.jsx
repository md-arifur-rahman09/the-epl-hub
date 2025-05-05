import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home";

import Profile from "../components/Profile";
import Login from "../auth/Login";
import Register from "../auth/Register";

const router= createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children: [
            {
                index:true,
                Component: Home
            },
            {
                path:'/profile',
                Component: Profile
            },
            {
                path:'/login',
                Component: Login
            },
            {
                path: '/register',
                Component : Register
            }
        ]
    }
])

export default router;