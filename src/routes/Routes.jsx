import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../error/ErrorPage";
import Register from "../pages/auth/Register";
import LogIn from "../pages/auth/LogIn";
import AboutUsPage from "../pages/AboutUsPage";
import Gallery from "../pages/Gallery";

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
            }
        ]
    },
]);

export default router;