import React from "react";
import { AuroraText } from "../../components/magicui/aurora-text";

const reviewVideos = [
  {
    id: 1,
    title: "Client Review - Web Design Service",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Client Testimonial - SEO Boost Results",
    videoUrl: "https://www.youtube.com/embed/3GwjfUFyY6M",
  },
  {
    id: 3,
    title: "Why They Chose BangladeshiIT",
    videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
  },
  {
    id: 4,
    title: "Digital Marketing Success Story",
    videoUrl: "https://www.youtube.com/embed/ZZ5LpwO-An4",
  },
  {
    id: 5,
    title: "Satisfied Customer - Mobile App Development",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 6,
    title: "UI/UX Client Review",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
  },
];

export default function ReviewVideos() {
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
          {reviewVideos.map(({ id, title, videoUrl }) => (
            <div
              key={id}
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
        </div>
      </div>
    </section>
  );
}
