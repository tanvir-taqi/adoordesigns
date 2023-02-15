
import { createBrowserRouter } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Contact from "../pages/Contacts/Contact";
import AddProject from "../pages/Dashboard/AddProject";
import Dashboard from "../pages/Dashboard/Dashboard";
import Myproject from "../pages/Dashboard/Myproject";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Projects from "../pages/Projects/Projects";
import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
                    path:'/adoordesignsdashboardlogin',
                    element: <Login></Login>
                },
                {
                    path:'/adoordesignsdashboardsignup',
                    element: <SignUp></SignUp>
                },
                {
                    path:'/projects/:category',
                    element:<Projects></Projects>,
                    loader:({params})=>fetch(`http://localhost:5000/allprojects/${params.category}`)
                },
                {
                    path:'/project/:id',
                    element:<ProjectDetails></ProjectDetails>,
                    loader:({params})=>fetch(`http://localhost:5000/project/${params.id}`)
                },
                {
                    path:'/dashboard',
                    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                    children:[
                        {
                            path:'/dashboard',
                            element:<Dashboard></Dashboard>
                        },
                        {
                            path:'/dashboard/addprojects',
                            element:<AddProject></AddProject>
                        },
                        {
                            path:'/dashboard/myprojects',
                            element:<Myproject></Myproject>
                        },
                    ]
                },
                
            ]
        }
])