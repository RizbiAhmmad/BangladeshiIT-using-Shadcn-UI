import React, { useEffect, useState } from "react";
import { AuroraText } from "../../components/magicui/aurora-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useAxiosPublic from "@/Hooks/useAxiosPublic";

export default function Testimonial() {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosPublic
      .get("/reviews") 
      .then((res) => {
       
        setReviews([...res.data, ...res.data]);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
      });
  }, [axiosPublic]);

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
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-gradient-to-br from-white to-orange-50 border border-[#066938] rounded-3xl p-8 hover:scale-[1.03] transition-transform duration-300 h-[400px] flex flex-col">
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
                      {review.logo && (
                        <img
                          src={review.logo}
                          alt="Company Logo"
                          className="h-8"
                        />
                      )}
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
