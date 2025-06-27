import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuroraText } from "../../components/magicui/aurora-text";

export default function ReviewVideos() {
  const [reviewVideos, setReviewVideos] = useState([]);

  useEffect(() => {
    axios
      .get("https://bangladeshi-it-server.vercel.app/review-videos")
      .then((res) => setReviewVideos(res.data))
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  return (
    <section className="bg-white py-12 px-6" id="review-videos">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Client <AuroraText>Review Videos</AuroraText>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Hear directly from our clients about their experiences with BangladeshiIT. Real stories, real impact.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviewVideos.map(({ _id, title, videoUrl }) => (
            <div
              key={_id}
              className="bg-gray-100 shadow-md rounded-xl overflow-hidden border border-orange-500 hover:shadow-orange-100 transition"
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
                <h3 className="text-md font-semibold text-gray-800">{title}</h3>
              </div>
            </div>
          ))}
          {reviewVideos.length === 0 && (
            <p className="col-span-full text-gray-500 text-center">No review videos found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
