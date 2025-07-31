import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuroraText } from "../../components/magicui/aurora-text";

export default function ReviewVideos() {
  const [reviewVideos, setReviewVideos] = useState([]);

  useEffect(() => {
    axios
      .get("https://bangladeshiit-server-api.onrender.com/review-videos")
      .then((res) => setReviewVideos(res.data))
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  return (
    <section className="px-6 py-12 bg-white dark:bg-black" id="review-videos">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-4 text-4xl font-extrabold text-black dark:text-white">
          Client <AuroraText>Review Videos</AuroraText>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-600 dark:text-white">
          Hear directly from our clients about their experiences with BangladeshiIT. Real stories, real impact.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviewVideos.map(({ _id, title, videoUrl }) => (
            <div
              key={_id}
              className="overflow-hidden transition bg-gray-100 border border-orange-500 shadow-md rounded-xl hover:shadow-orange-100"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-left">
                <h3 className="font-semibold text-gray-800 text-md">{title}</h3>
              </div>
            </div>
          ))}
          {reviewVideos.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">No review videos found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
