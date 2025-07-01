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
];

export default function OurClients() {
  return (
    <section className="w-full px-6 py-12 bg-white" id="clients">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our <AuroraText>Clients</AuroraText>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
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
                <div className="bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 rounded-xl h-28">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full object-contain"
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
