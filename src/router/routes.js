
import { createBrowserRouter } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";
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
                    path:'/projects/:category',
                    element:<Projects></Projects>,
                    loader:({params})=>fetch(`http://localhost:5000/allprojects/${params.category}`)
                },
                
                {
                    path:'/project/:id',
                    element:<ProjectDetails></ProjectDetails>,
                    loader:({params})=>fetch(`http://localhost:5000/project/${params.id}`)
                },
                
            ]
        }
])