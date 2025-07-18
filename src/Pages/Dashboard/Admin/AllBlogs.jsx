import { useQuery } from "@tanstack/react-query";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
  });

  const handleDeleteBlog = (blog) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This blog will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/blogs/${blog._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Blog has been removed.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h2 className="pb-4 mb-8 text-4xl font-bold text-center border-b-2 border-gray-200">All Blogs</h2>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/dashboard/addBlogs")}
          className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded hover:bg-orange-600"
        >
          <FaPlus /> Add Blog
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full text-sm text-left table-auto">
          <thead className="tracking-wider text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Tag</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {blogs.map((blog, index) => (
              <tr key={blog._id} className="transition duration-200 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">{index + 1}</td>
                <td className="px-6 py-4">{blog.title}</td>
                <td className="px-6 py-4">{blog.tag}</td>
                <td className="px-6 py-4 text-xs">{blog.email}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteBlog(blog)}
                    className="text-red-600 transition duration-200 hover:text-red-800"
                    title="Delete Blog"
                  >
                    <FaTrashAlt className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBlogs;
