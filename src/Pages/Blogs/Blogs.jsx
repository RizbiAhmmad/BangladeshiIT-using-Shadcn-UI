import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AuroraText } from "../../components/magicui/aurora-text";
import axios from "axios";
import Loading from "../../Shared/Loading";


export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://bangladeshiit-server-api.onrender.com/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err))
      .finally(() => setLoading(false)); // stop loading
  }, []);

  return (
    <section className="px-6 py-16 mt-4 bg-white dark:bg-black" id="blogs">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-4 text-4xl font-extrabold text-black dark:text-white">
          Our <AuroraText>Blogs</AuroraText>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-600 dark:text-white">
          Our engaging articles provide valuable knowledge for professionals and
          enthusiasts alike. Stay informed, stay inspired.
        </p>

        {/* 👉 Show loading spinner */}
        {loading ? (
          <Loading />
        ) : blogs.length === 0 ? (
          <p className="text-gray-500">No blogs available yet.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map(({ _id, title, description, image, tag }) => (
              <div
                key={_id}
                className="flex flex-col overflow-hidden transition bg-white border border-orange-500 shadow-md rounded-xl hover:shadow-orange-200"
              >
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    {title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {description}
                  </p>

                  <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100">
                    <span
                      onClick={() => navigate(`/blogDetails/${_id}`)}
                      className="flex items-center gap-1 text-sm font-semibold text-orange-500 cursor-pointer hover:underline"
                    >
                      Learn more <ArrowRight size={14} />
                    </span>

                    <span className="text-xs text-gray-500 text-right max-w-[280px] truncate">
                      {tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
