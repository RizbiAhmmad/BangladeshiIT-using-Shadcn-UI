import React from "react";
import { AuroraText } from "../../components/magicui/aurora-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import img1 from "../../assets/Mohsin.jpg";
import img2 from "../../assets/Mahmud.jpg";
import img3 from "../../assets/Basar.jpg";

import logo1 from "../../assets/Nifaz.jpg";
import logo2 from "../../assets/Zobio.jpg";
import logo3 from "../../assets/PCGarden.jpg";

const manualReviews = [
  {
    name: "Mr. Fazlul Bari Mohsin",
    role: "CEO, Nifaz Foods",
    feedback:
      "Bangladeshi IT made us a new website that looks great and works well on phones. They finished everything on time and were easy to work with.",
    image: img1,
    logo: logo1,
  },
  {
    name: "Mahmud Hasan",
    role: "Founder, ZobioBd",
    feedback:
      "From concept to launch, Bangladeshi IT made the entire website development process smooth and stress-free. Their design sense, technical skill, and attention to detail are outstanding. Highly recommended!",
    image: img2,
    logo: logo2,
  },
  {
    name: "Abul Bashar",
    role: "Owner, PC Garden",
    feedback:
      "Thanks to Bangladeshi IT, our business is getting more customers online. Their marketing plan really worked, and we saw quick results on Facebook and Google. The team was very professional and easy to communicate with throughout.",
    image: img3,
    logo: logo3,
  },
];

// ✅ Duplicate items to support smooth looping
const extendedReviews = [...manualReviews, ...manualReviews];

export default function Testimonial() {
  return (
    <section className="bg-white py-12 px-6" id="testimonial">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Our Happy <AuroraText>Clients Say</AuroraText>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-14">
          Our valued clients share their experiences with Bangladeshi IT,
          highlighting the impact of our solutions.
        </p>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {extendedReviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-3xl p-8  hover:scale-[1.03] transition-transform duration-300 h-[400px] flex flex-col">
                    <div className="text-5xl text-orange-300 mb-4 select-none">
                      ❝
                    </div>
                    <p className="text-gray-700 text-base mb-4 leading-relaxed font-serif italic line-clamp-5 flex-grow">
                      {review.feedback}
                    </p>
                    <hr className="border-orange-200 mb-6" />
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-400"
                        />
                        <div className="text-left">
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {review.name}
                          </h4>
                          <p className="text-orange-500 text-sm tracking-wide">
                            {review.role}
                          </p>
                        </div>
                      </div>
                      <img src={review.logo} alt="Company Logo" className="h-8" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
