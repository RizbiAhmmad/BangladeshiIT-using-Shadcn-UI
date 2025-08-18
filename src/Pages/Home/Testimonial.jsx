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
    <section className="px-6 py-12 bg-white dark:bg-black" id="testimonial">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-4 text-4xl font-extrabold text-black dark:text-white">
          Our Happy <AuroraText>Clients Say</AuroraText>
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-white mb-14">
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
                  <div className="bg-gradient-to-br from-white to-orange-50 border border-[#066938] rounded-3xl p-8  hover:scale-[1.03] transition-transform duration-300 h-[400px] flex flex-col">
                    <div className="mb-4 text-5xl text-[#eb2127] select-none">
                      ❝
                    </div>
                    <p className="flex-grow mb-4 font-serif text-base italic leading-relaxed text-gray-700 line-clamp-5">
                      {review.feedback}
                    </p>
                    <hr className="mb-6 border-orange-200" />
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="object-cover rounded-full w-14 h-14 ring-2 ring-[#eb2127]"
                        />
                        <div className="text-left">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {review.name}
                          </h4>
                          <p className="text-sm tracking-wide text-[#eb2127]">
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
