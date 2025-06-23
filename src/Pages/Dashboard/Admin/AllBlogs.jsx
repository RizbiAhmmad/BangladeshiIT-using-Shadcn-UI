import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AllBlogs = () => {
  const axiosPublic = useAxiosPublic();

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
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 border-b-2 border-gray-200 pb-4">All Blogs</h2>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="w-full text-sm text-left table-auto">
          <thead className="bg-gray-100 text-gray-700 uppercase tracking-wider">
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
              <tr key={blog._id} className="hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4 font-medium text-gray-800">{index + 1}</td>
                <td className="px-6 py-4">{blog.title}</td>
                <td className="px-6 py-4">{blog.tag}</td>
                <td className="px-6 py-4 text-xs">{blog.email}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteBlog(blog)}
                    className="text-red-600 hover:text-red-800 transition duration-200"
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
