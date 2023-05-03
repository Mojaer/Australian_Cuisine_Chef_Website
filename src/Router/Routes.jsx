import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Blog from "../Components/Layout/Blog";
import LoginPage from "../Components/AccountPages/LoginPage";
import RegistrationPage from "../Components/AccountPages/RegistrationPage";
import AccountMain from "../Components/AccountPages/AccountMain";
import Home from "../Components/Pages/Home/Home";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/blogs",
                element: <Blog></Blog>,
            }

        ]
    },
    {
        path: "/account",
        element: <AccountMain></AccountMain>,
        children: [
            {
                path: "login",
                element: <LoginPage></LoginPage>,
            },
            {
                path: "register",
                element: <RegistrationPage></RegistrationPage>,
            },
        ],
    }


]);