import React, { useEffect, useState } from "react";
import { AuroraText } from "../../components/magicui/aurora-text";

const testimonials = [
  {
    id: 1,
    name: "Maksud Syed",
    role: "Owner Of Cleatsbd",
    feedback:
      "I had the pleasure of working with Bangladeshi IT, and I must say, their professionalism and expertise are truly remarkable.Their customer support was top-notch.",
    image: "https://i.ibb.co/0XmqzCX/client1.jpg",
    logo: "https://i.ibb.co/S6FxzD6/cleats-logo.png",
  },
  {
    id: 2,
    name: "HM Rachel Uddin",
    role: "Owner Of Bondhonbazar",
    feedback:
      "I had a fantastic experience with Bangladeshi IT. From the first interaction, the team was extremely supportive and delivered a responsive, high-performing website.",
    image: "https://i.ibb.co/gZ3GK5M/client2.jpg",
    logo: "https://i.ibb.co/vjQBd4H/bondhon-logo.png",
  },
  {
    id: 3,
    name: "Zahid Rahman",
    role: "Owner Of Texviewfashion",
    feedback:
      "I'm beyond satisfied with the services provided by Bangladeshi IT. Their team is committed, efficient, and truly understands the needs of clients. Their ongoing support makes them a reliable partner.",
    image: "https://i.ibb.co/MRrNNzj/client3.jpg",
    logo: "https://i.ibb.co/vkW4W7x/texview-logo.png",
  },
  {
    id: 4,
    name: "Nabila Chowdhury",
    role: "Founder Of EcoBagsBD",
    feedback:
      "Bangladeshi IT transformed our vision into reality with a stunning e-commerce site. Highly recommended!",
    image: "https://i.ibb.co/LrL6vL3/client4.jpg",
    logo: "https://i.ibb.co/6n9hFSk/ecobags-logo.png",
  },
  {
    id: 5,
    name: "Arif Hasan",
    role: "CEO of FashionGo",
    feedback:
      "Creative, efficient, and very responsive team. Loved working with Bangladeshi IT!",
    image: "https://i.ibb.co/zPJvFHr/client5.jpg",
    logo: "https://i.ibb.co/YR0c5cs/fashiongo-logo.png",
  },
];

export default function Testimonial() {
  const [visibleStart, setVisibleStart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleStart((prev) => (prev + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    let result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(visibleStart + i) % testimonials.length]);
    }
    return result;
  };

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

        <div className="flex gap-8 transition-transform duration-1000 ease-in-out transform">
          {getVisibleTestimonials().map(
            ({ id, name, role, feedback, image, logo }) => (
              <div
                key={id}
                className="bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-3xl p-8 shadow-xl w-full max-w-sm shrink-0 flex flex-col hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
                style={{ height: "400px" }} // fixed height here
              >
                <div className="text-5xl text-orange-300 mb-6 select-none">❝</div>
                <p className="text-gray-700 text-base mb-8 leading-relaxed font-serif italic overflow-y-auto flex-grow">
                  {feedback}
                </p>
                <hr className="border-orange-200 mb-6" />
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4">
                    <img
                      src={image}
                      alt={name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-400"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {name}
                      </h4>
                      <p className="text-orange-500 text-sm tracking-wide">{role}</p>
                    </div>
                  </div>
                  <img src={logo} alt="Company Logo" className="h-8" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
