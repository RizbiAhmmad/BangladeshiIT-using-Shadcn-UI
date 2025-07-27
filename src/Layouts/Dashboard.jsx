import React, { useEffect, useState } from "react";
import {
  FaBlogger,
  FaComments,
  FaHome,
  FaUserGraduate,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaUsersRectangle } from "react-icons/fa6";
import { LiaUsersSolid } from "react-icons/lia";
import { NavLink, Outlet } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import { SiCoursera } from "react-icons/si";
import { HiUserAdd } from "react-icons/hi";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [userRole, setUserRole] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (user && user.email) {
      axiosPublic
        .get("/users/role", { params: { email: user.email } })
        .then((response) => {
          setUserRole(response.data.role);
        })
        .catch((error) => console.error("Error fetching user role:", error));
    }
  }, [axiosPublic, user]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!userRole) {
    return <div className="p-10 text-center">Loading dashboard...</div>;
  }

  return (
    <div>
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4">
        <button
          onClick={toggleSidebar}
          className="w-full text-4xl text-black focus:outline-none"
        >
          {!isSidebarOpen ? (
            <MdOutlineDashboardCustomize />
          ) : (
            <LuLayoutDashboard />
          )}
        </button>
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "w-64" : "w-0 md:w-64"
          } bg-green-600 text-white transition-all duration-300 flex flex-col justify-between`}
        >
          <ul onClick={toggleSidebar} className="p-8">
            {/* Admin Menu */}
            {userRole === "admin" && (
              <>
                <li>
                  <NavLink to="/" className="flex items-center py-2 space-x-3">
                    <FaHome /> <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/users"
                    className="flex items-center py-2 space-x-3"
                  >
                    <FaUsers /> <span>Users</span>
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="/dashboard/allBlogs"
                    className="flex items-center py-2 space-x-3"
                  >
                    <FaBlogger /> <span>All Blogs</span>
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="/dashboard/allReviews"
                    className="flex items-center py-2 space-x-3"
                  >
                    <FaComments /> <span>All Reviews</span>
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="/dashboard/allReviewVideos"
                    className="flex items-center py-2 space-x-3"
                  >
                    <FaVideo /><span>All Review Videos</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allMembers"
                    className="flex items-center py-2 space-x-3"
                  >
                    <FaUsersRectangle /> <span>All Team Members</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allClients"
                    className="flex items-center py-2 space-x-3"
                  >
                  <LiaUsersSolid /> <span>All Clients</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allCourses"
                    className="flex items-center py-2 space-x-3"
                  >
                  <SiCoursera /> <span>All Courses</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/enrollments"
                    className="flex items-center py-2 space-x-3"
                  >
                  <HiUserAdd></HiUserAdd> <span>All Enrollments</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className="flex items-center py-2 space-x-3"
                  >
                    <CgProfile /> <span>Profile</span>
                  </NavLink>
                </li>
                
              </>
            )}
            {/* User Menu */}
            {userRole === "user" && (
              <>
                <li>
                  <NavLink to="/" className="flex items-center py-2 space-x-3">
                    <FaHome /> <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className="flex items-center py-2 space-x-3"
                  >
                    <CgProfile /> <span>Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myEnrollments"
                    className="flex items-center py-2 space-x-3"
                  >
                    <FaUserGraduate /> <span>My Enrollments</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-4">
          {user && (
            <div className="p-4 mb-4 text-center text-blue-800 bg-blue-100 rounded-lg shadow">
              <h1 className="text-xl font-semibold">
                Hey, {user.displayName || "User"}! Welcome to your Dashboard.
              </h1>
            </div>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
