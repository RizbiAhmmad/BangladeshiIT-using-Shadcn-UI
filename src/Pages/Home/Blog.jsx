import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AuroraText } from "../../components/magicui/aurora-text";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/blogs") // Or your hosted URL
      .then(res => setBlogs(res.data))
      .catch(err => console.error("Error fetching blogs:", err));
  }, []);

  // Show only first 3 blogs
  const topBlogs = blogs.slice(0, 3);

  return (
    <section className="bg-white  py-12 px-6" id="blogs">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our <AuroraText>Blogs</AuroraText>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our engaging articles provide valuable knowledge for professionals and
          enthusiasts alike. Stay informed, stay inspired.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {topBlogs.map(({ _id, title, description, image, tag }) => (
            <div
              key={_id}
              className="bg-white shadow-md rounded-xl overflow-hidden border border-orange-500 hover:shadow-orange-200 transition flex flex-col"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{description}</p>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span className="text-orange-500 text-sm font-semibold flex items-center gap-1 hover:underline cursor-pointer">
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

        <div className="mt-10">
          <button
            onClick={() => navigate("/blogs")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-6 py-2 rounded-full font-medium transition"
          >
            See All
          </button>
        </div>
      </div>
    </section>
  );
}
