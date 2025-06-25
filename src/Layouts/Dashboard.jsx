import React, { useEffect, useState } from "react";
import {
  FaBlogger,
  FaComments,
  FaHome,
  FaPlusCircle,
  FaRegEdit,
  FaUserPlus,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaUsersRectangle } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";


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
    return <div className="text-center p-10">Loading dashboard...</div>;
  }

  return (
    <div>
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4">
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
                  <NavLink to="/" className="flex py-2 space-x-3 items-center">
                    <FaHome /> <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/users"
                    className="flex py-2 space-x-3 items-center"
                  >
                    <FaUsers /> <span>Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addBlogs"
                    className="flex py-2 space-x-3 items-center"
                  >
                    <FaRegEdit /> <span>Add Blogs</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allBlogs"
                    className="flex py-2 space-x-3 items-center"
                  >
                    <FaBlogger /> <span>All Blogs</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addReviews"
                    className="flex py-2 space-x-3 items-center"
                  >
                    <FaPlusCircle /> <span>Add Review</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allReviews"
                    className="flex py-2 space-x-3 items-center"
                  >
                    <FaComments /> <span>All Reviews</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addReviewVideo"
                    className="flex py-2 space-x-3 items-center"
                  >
                    <RiVideoAddLine /> <span>Add Review Video</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allReviewVideos"
                    className="flex py-2 space-x-3 items-center"
                  >
                    <FaVideo /><span>All Review Vodeos</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addMember"
                    className="flex py-2 space-x-3 items-center"
                  >
                    <FaUserPlus /> <span>Add Member</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allMembers"
                    className="flex py-2 space-x-3 items-center"
                  >
                    <FaUsersRectangle /> <span>All Members</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className="flex py-2 space-x-3 items-center"
                  >
                    <CgProfile /> <span>profile</span>
                  </NavLink>
                </li>
                
              </>
            )}
            {/* User Menu */}
            {/* {userRole === "user" && (
              <>
                <li>
                  <NavLink to="/" className="flex py-2 space-x-3 items-center">
                    <FaHome /> <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className="flex py-2 space-x-3 items-center"
                  >
                    <CgProfile /> <span>Profile</span>
                  </NavLink>
                </li>
              </>
            )} */}
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-4">
          {user && (
            <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg text-center shadow">
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
