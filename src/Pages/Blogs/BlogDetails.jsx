import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Shared/Loading";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://bangladeshiit-server-api.onrender.com/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error fetching blog:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;

  if (!blog)
    return (
      <p className="mt-10 text-center text-gray-500 dark:text-white">
        Blog not found.
      </p>
    );

  return (
    <div className="max-w-5xl px-4 py-16 mx-auto mt-4 md:px-8">
      <div className="overflow-hidden transition bg-white border border-orange-200 shadow-2xl dark:bg-black dark:text-white rounded-2xl hover:shadow-orange-200">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-8">
          <h1 className="mb-3 text-4xl font-bold text-gray-800 dark:text-white">
            {blog.title}
          </h1>
          <p className="mb-4 text-sm font-medium tracking-wider text-orange-500 uppercase">
            {blog.tag}
          </p>
          <hr className="mb-6 border-gray-300 dark:border-gray-600" />
          <p className="text-lg leading-8 text-gray-700 whitespace-pre-line dark:text-white">
            {blog.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
