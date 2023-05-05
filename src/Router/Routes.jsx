import { Link, createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Blog from "../Components/Layout/Blog";
import LoginPage from "../Components/AccountPages/LoginPage";
import RegistrationPage from "../Components/AccountPages/RegistrationPage";
import AccountMain from "../Components/AccountPages/AccountMain";
import Home from "../Components/Pages/Home/Home";
import ChefRecipes from "../Components/Pages/ChefRecipes/ChefRecipes";
import PrivateRoute from "../AuhProvider/PrivateRoute";



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
                path: "/chefs/recipe/:id",
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://australian-cuisine-server-mojaer.vercel.app/chefs/recipe/${params.id}`)

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
    },
    {
        path: "*",
        element:
            <div className="text-center">
                <h3 className="mt-2 text-danger fw-bolder">Error Occurred</h3>
                <h3 className="mt-2 text-danger fw-bolder">404 Not Found!</h3>
                <Link className="btn btn-light" to='/'> Go back to homepage</Link><br />
                <img src="/404.jpg" alt="" />
            </div>,
    }

]);