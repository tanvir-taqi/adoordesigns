
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Contact from "../pages/Contacts/Contact";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
        {
            path:'/',
            element: <Main></Main>,
            children:[
                {
                    path:'/',
                    element: <Home></Home>
                },
                {
                    path:'/services',
                    element: <Services></Services>
                },
                {
                    path:'/contact',
                    element: <Contact></Contact>
                },
                {
                    path:'/projects',
                    element:<Projects></Projects>
                },
                
            ]
        }
])