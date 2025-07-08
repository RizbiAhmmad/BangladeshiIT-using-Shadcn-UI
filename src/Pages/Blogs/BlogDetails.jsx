import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`https://bangladeshi-it-server.vercel.app/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  if (!blog) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-5xl mt-4 mx-auto px-4 md:px-8 py-16">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-orange-200 transition hover:shadow-orange-200">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[400px]  md:h-[550px] object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">{blog.title}</h1>
          <p className="text-sm text-orange-500 font-medium uppercase tracking-wider mb-4">
            {blog.tag}
          </p>
          <hr className="mb-6 border-gray-300" />
          <p className="text-lg text-gray-700 leading-8 whitespace-pre-line">
            {blog.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
