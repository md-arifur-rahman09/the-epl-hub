import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home";

import Profile from "../components/Profile";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Error from "../components/Error/Error";

import Auth from "../layouts/Auth";
import MatchDetails from "../components/MatchesData/MatchDetails";
import Privateroute from "../PrivateRoute/Privateroute";

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
                path:'/matchDetails/:id',
                element: <Privateroute><MatchDetails></MatchDetails></Privateroute>,
                loader: ()=> fetch('/data.json')
            }
            
        ],

    },
    {
        path:'auth',
        Component: Auth,
        children: [
            {
                path:'/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component : Register
            },
           
        ]
    },
    {
        path:'*',
        Component:Error
    }

])

export default router;