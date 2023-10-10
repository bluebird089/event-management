import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../error/ErrorPage";
import Register from "../pages/auth/Register";
import LogIn from "../pages/auth/LogIn";
import AboutUsPage from "../pages/AboutUsPage";
import Gallery from "../pages/Gallery";
import Profile from "../pages/private/Profile";
import PrivetRouteProfile from "../pages/private/PrivetRouteProfile";
import PrivateRoute from "../pages/private/PrivateRoute";
import Details from "../components/shared/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/data.json"),
            },
            {
                path: 'aboutus',
                element: <AboutUsPage></AboutUsPage>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/profile',
                element: <PrivetRouteProfile><Profile></Profile></PrivetRouteProfile>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch("/data.json"),
            }
        ]
    },
]);

export default router;