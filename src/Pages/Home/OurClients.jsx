import React from "react";
import { AuroraText } from "../../components/magicui/aurora-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import client1 from "../../assets/Nifaz.jpg";
import client2 from "../../assets/Zobio.jpg";
import client3 from "../../assets/Upokar.jpg";
import client4 from "../../assets/Naitengle.jpg";
import client5 from "../../assets/Zaka.jpg";
import client6 from "../../assets/SishuBD.jpg";
import client7 from "../../assets/ilux.jpg";
import client8 from "../../assets/Valoria.png";

const clients = [
  {
    id: 1,
    name: "Nifaz",
    logo: client1,
  },
  {
    id: 2,
    name: "Zobio",
    logo: client2,
  },
  {
    id: 3,
    name: "Upokar",
    logo: client3,
  },
  {
    id: 4,
    name: "Naitengle",
    logo: client4,
  },
  {
    id: 5,
    name: "Zaka",
    logo: client5,
  },
  {
    id: 6,
    name: "SishuBD",
    logo: client6,
  },
  {
    id: 7,
    name: "ilux",
    logo: client7,
  },
  {
    id: 8,
    name: "Valoria",
    logo: client8,
  },
];

export default function OurClients() {
  return (
    <section className="w-full px-6 py-12 bg-white dark:bg-black" id="clients">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-black dark:text-white">
          Our <AuroraText>Clients</AuroraText>
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-gray-600 dark:text-white">
          Dive into a gallery of impactful collaborations with our valued
          clients at Bangladeshi IT Solutions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {clients.map((client, index) => (
              <CarouselItem
                key={client.id}
                className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div className="flex items-center justify-center p-4 transition-all duration-300 bg-white hover:shadow-lg rounded-xl h-28">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="object-contain max-h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
