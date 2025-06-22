import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import WebDevelopment from "../Pages/Services/WebDevelopment";
import Blogs from "../Pages/Blogs/Blogs";
import EcommerceSolutions from "../Pages/Services/EcommerceSolutions";
import AppsDevelopment from "../Pages/Services/AppsDevelopment";
import DigitalMarketing from "../Pages/Services/DigitalMarketing";
import GraphicsDesign from "../Pages/Services/GraphicsDesign";
import SocialMediaMarketing from "../Pages/Services/SocialMediaMarketing";
import SEOContentWriting from "../Pages/Services/SeoContentWriting";
import ConsultingServices from "../Pages/Services/ConsultingServices";
import ErrorPage from "../Shared/ErrorPage";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import Dashboard from "../Layouts/Dashboard";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AddBlogs from "../Pages/Dashboard/Admin/AddBlogs";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "services/web-development",
          element: <WebDevelopment></WebDevelopment>
        },
        {
          path: "services/ecommerce",
          element: <EcommerceSolutions></EcommerceSolutions>
        },
        {
          path: "services/apps-development",
          element: <AppsDevelopment></AppsDevelopment>
        },
        {
          path: "services/digital-marketing",
          element: <DigitalMarketing></DigitalMarketing>
        },
        {
          path: "services/graphic-design",
          element: <GraphicsDesign></GraphicsDesign>
        },
        {
          path: "services/social-media-marketing",
          element: <SocialMediaMarketing></SocialMediaMarketing>
        },
        {
          path: "services/seo",
          element: <SEOContentWriting></SEOContentWriting>
        },
        {
          path: "services/consulting",
          element: <ConsultingServices></ConsultingServices>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        }

      ]
    },


       {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [

        // ADMIN ROUTES
        {
          path: 'users',
          element:<AllUsers></AllUsers>
        },
        {
          path: 'addBlogs',
          element: <AddBlogs></AddBlogs>
        }
       
      ]
    }

  ]);