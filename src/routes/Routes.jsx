import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../error/ErrorPage";
import Register from "../pages/auth/Register";
import LogIn from "../pages/auth/LogIn";
import AboutUsPage from "../pages/AboutUsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
            }
        ]
    },
]);

export default router;