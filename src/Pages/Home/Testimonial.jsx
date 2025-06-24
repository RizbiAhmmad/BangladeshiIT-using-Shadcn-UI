import React, { useEffect, useState } from "react";
import { AuroraText } from "../../components/magicui/aurora-text";
import useAxiosPublic from "../../Hooks/useAxiosPublic"; // update path if needed

export default function Testimonial() {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState([]);
  const [visibleStart, setVisibleStart] = useState(0);

  useEffect(() => {
    axiosPublic.get("/reviews")
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data)) {
          setReviews(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [axiosPublic]);

  useEffect(() => {
    if (reviews.length >= 3) {
      const interval = setInterval(() => {
        setVisibleStart((prev) => (prev + 1) % reviews.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [reviews]);

  const getVisibleReviews = () => {
    if (reviews.length < 3) return reviews; // fallback if less than 3
    return Array.from({ length: 3 }, (_, i) => reviews[(visibleStart + i) % reviews.length]);
  };

  const visible = getVisibleReviews();

  return (
    <section className="bg-white py-12 px-6 overflow-hidden" id="testimonial">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Our Happy <AuroraText>Clients Say</AuroraText>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-14">
          Our valued clients share their experiences with Bangladeshi IT,
          highlighting the impact of our solutions.
        </p>

        {visible.length === 0 ? (
          <p className="text-gray-500">No reviews available.</p>
        ) : (
          <div className="flex gap-8 transition-transform duration-1000 ease-in-out transform justify-center">
            {visible.map((review, index) => (
              <div
                key={review?._id || index}
                className="bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-3xl p-8 shadow-xl w-full max-w-sm shrink-0 flex flex-col hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
                style={{ height: "400px" }}
              >
                <div className="text-5xl text-orange-300 mb-6 select-none">❝</div>
                <p className="text-gray-700 text-base mb-8 leading-relaxed font-serif italic overflow-y-auto flex-grow">
                  {review?.feedback}
                </p>
                <hr className="border-orange-200 mb-6" />
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4">
                    <img
                      src={review?.image}
                      alt={review?.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-400"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 text-lg">{review?.name}</h4>
                      <p className="text-orange-500 text-sm tracking-wide">{review?.role}</p>
                    </div>
                  </div>
                  <img src={review?.logo} alt="Company Logo" className="h-8" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
