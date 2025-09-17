import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import WebDevelopment from "../Pages/Services/WebDevelopment";
import Blogs from "../Pages/Blogs/Blogs";
import EcommerceSolutions from "../Pages/Services/EcommerceSolutions";
import AppsDevelopment from "../Pages/Services/AppsDevelopment";
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
import AllBlogs from "../Pages/Dashboard/Admin/AllBlogs";
import AddReview from "../Pages/Dashboard/Admin/AddReview";
import AllReviews from "../Pages/Dashboard/Admin/AllReviews";
import AddMember from "../Pages/Dashboard/Admin/AddMember";
import AllMembers from "../Pages/Dashboard/Admin/AllMembers";
import AddReviewVideo from "../Pages/Dashboard/Admin/AddReviewVideo";
import AllReviewVideos from "../Pages/Dashboard/Admin/AllReviewVideos";
import Profile from "../Pages/Dashboard/Admin/Profile";
import DigitalMarketing from "../Pages/Services/DigitalMArketing";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import AddClient from "../Pages/Dashboard/Admin/AddClient";
import AllClients from "../Pages/Dashboard/Admin/AllClients";
import AddFreeCourse from "../Pages/Dashboard/Admin/AddFreeCourse";
import AllFreeCourses from "../Pages/Dashboard/Admin/AllFreeCourses";
import Courses from "../Pages/Courses/Courses";
import CourseDetails from "../Pages/Courses/CourseDetails";
import EnrollForm from "../Pages/Courses/EnrollForm";
import AllEnrollments from "../Pages/Dashboard/Admin/AllEnrollments";
import PrivateRoute from "./PrivateRoute";
import MyEnrollments from "../Pages/Dashboard/Admin/MyEnrollments";
import SoftwareDevelopment from "../Pages/Services/SoftwareDevelopment";
import FashionPOS from "../Pages/Services/Software Development/FashionPOS";
import Organic_Product from "../Pages/Services/E Commerce Services/React Website/Organic_Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "services/web-development",
        element: <WebDevelopment></WebDevelopment>,
      },
      {
        path: "services/ecommerce",
        element: <EcommerceSolutions></EcommerceSolutions>,
      },
      {
        path: "/react/organic-product",
        element: <Organic_Product />,
      },
      {
        path: "services/software-development",
        element: <SoftwareDevelopment></SoftwareDevelopment>,
      },
      {
        path: "services/apps-development",
        element: <AppsDevelopment></AppsDevelopment>,
      },
      {
        path: "services/digital-marketing",
        element: <DigitalMarketing></DigitalMarketing>,
      },
      {
        path: "services/graphic-design",
        element: <GraphicsDesign></GraphicsDesign>,
      },
      {
        path: "services/social-media-marketing",
        element: <SocialMediaMarketing></SocialMediaMarketing>,
      },
      {
        path: "services/seo",
        element: <SEOContentWriting></SEOContentWriting>,
      },
      {
        path: "services/consulting",
        element: <ConsultingServices></ConsultingServices>,
      },
      {
        path: "/courses",
        element: <PrivateRoute> <Courses></Courses> </PrivateRoute>
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />
      },
      {
        path: "/enroll/:id",
        element: <EnrollForm />
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>
      },
      {
        path: "/fashion",
        element: <FashionPOS />
      },
    ],
  },

  {
    path: "dashboard",
    element:  <Dashboard></Dashboard>,
    children: [
      // ADMIN ROUTES
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addBlogs",
        element: <AddBlogs></AddBlogs>,
      },
      {
        path: "allBlogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "addReviews",
        element: <AddReview></AddReview>,
      },
      {
        path: "allReviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "addReviewVideo",
        element: <AddReviewVideo></AddReviewVideo>,
      },

      {
        path: "allReviewVideos",
        element: <AllReviewVideos></AllReviewVideos>,
      },

      {
        path: "addMember",
        element: <AddMember></AddMember>,
      },
      {
        path: "allMembers",
        element: <AllMembers></AllMembers>,
      },
      {
        path: "addclient",
        element: <AddClient></AddClient>,
      },
      {
        path: "allClients",
        element: <AllClients></AllClients>,
      },
      {
        path: "addFreeCourse",
        element: <AddFreeCourse></AddFreeCourse>,
      },
      {
        path: "allCourses",
        element: <AllFreeCourses></AllFreeCourses>,
      },
      {
        path: "enrollments",
        element: <AllEnrollments></AllEnrollments>,
      },
      {
        path: "myEnrollments",
        element: <MyEnrollments></MyEnrollments>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
