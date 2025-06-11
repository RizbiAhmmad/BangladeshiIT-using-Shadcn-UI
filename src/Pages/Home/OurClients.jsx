import React, { useEffect, useState } from "react";
import { AuroraText } from "../../components/magicui/aurora-text";

const clients = [
  {
    id: 1,
    name: "R",
    logo: "https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
  },
  {
    id: 2,
    name: "Trendy Dhaka",
    logo: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    id: 3,
    name: "7 Star Gallery",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfh1Obtj_zkHj4ZsQoAXxHy4SLwYgVDcsBmA&s",
  },
  {
    id: 4,
    name: "Razzak Fashion",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s",
  },
  {
    id: 5,
    name: "Aven Apparels",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFHvhFFIj95nnFuJupvcWl7BhYhxQNk9fBXDN91umcPg-yyiiVqH5PGU&s",
  },
  {
    id: 6,
    name: "FarmyCart",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIbzeEtpIKNt8ZMA11KuJnZN7ONgeEDK35A&s",
  },
];

export default function OurClients() {
  const [visibleStart, setVisibleStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 3 : 5);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleStart((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  const getVisibleClients = () => {
    let result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(clients[(visibleStart + i) % clients.length]);
    }
    return result;
  };

  // Calculate dynamic width string
  const getCardWidth = () => {
    const gapPx = 16; 
    const totalGap = gapPx * (visibleCount - 1);
    return `calc((100% - ${totalGap}px) / ${visibleCount})`;
  };

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

      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="flex gap-4 transition-transform duration-1000 ease-in-out">
          {getVisibleClients().map((client) => (
            <div
              key={client.id}
              className="bg-white border border-orange-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 rounded-xl shrink-0"
              style={{ width: getCardWidth() }}
            >
              <div className="w-30 h-20 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
