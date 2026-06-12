import React, { useEffect, useState } from "react";
import { AuroraText } from "../../components/magicui/aurora-text";
import { motion } from "framer-motion";
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
    <section className="px-6 py-16 bg-white dark:bg-black" id="testimonial">
      <div className="mx-auto text-center max-w-7xl">
        <motion.h2 
          className="mb-4 text-4xl font-extrabold text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Happy <AuroraText>Clients Say</AuroraText>
        </motion.h2>
        <motion.p 
          className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-14"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our valued clients share their experiences with Bangladeshi IT,
          highlighting the impact of our solutions.
        </motion.p>

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
                  <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-gray-200/60 dark:border-zinc-800 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 h-[400px] flex flex-col group">
                    <div className="mb-2 text-6xl text-[#eb2127]/20 dark:text-[#eb2127]/40 select-none font-serif group-hover:text-[#eb2127] transition-colors duration-300">
                      ❝
                    </div>
                    <p className="flex-grow mb-4 font-serif text-base italic leading-relaxed text-gray-700 dark:text-gray-300 line-clamp-5">
                      {review.feedback}
                    </p>
                    <hr className="mb-6 border-gray-200 dark:border-zinc-700" />
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="object-cover rounded-full w-14 h-14 ring-2 ring-gray-100 dark:ring-zinc-800 group-hover:ring-[#eb2127] transition-all duration-300"
                        />
                        <div className="text-left">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {review.name}
                          </h4>
                          <p className="text-sm tracking-wide text-[#eb2127] font-medium">
                            {review.role}
                          </p>
                        </div>
                      </div>
                      {review.logo && (
                        <img
                          src={review.logo}
                          alt="Company Logo"
                          className="h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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
