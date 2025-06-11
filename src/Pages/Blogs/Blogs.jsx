import React from "react";
import { ArrowRight } from "lucide-react";
import { AuroraText } from "../../components/magicui/aurora-text";

const blogs = [
  {
    id: 1,
    title: "Why Every Business Needs a Google Business Profile",
    excerpt:
      "Now, having an online presence is no longer optional. Google Business boosts visibility.",
    image: "https://st2.depositphotos.com/3591429/12244/i/450/depositphotos_122442772-stock-photo-people-with-digital-gadgets.jpg",
    tag: "Best SEO service in Bangladesh",
    link: "#",
  },
  {
    id: 2,
    title: "Which Should You Start with First: Sales or Branding?",
    excerpt:
      "When launching a new business or scaling an existing one, this is the million-dollar question.",
    image: "https://st2.depositphotos.com/3591429/12244/i/450/depositphotos_122442772-stock-photo-people-with-digital-gadgets.jpg",
    tag: "Best Social Media Marketing Service in Bangladesh",
    link: "#",
  },
  {
    id: 3,
    title: "The Importance of UI/UX Design in Website Development",
    excerpt:
      "In today’s digital-first world, a well-designed website can make or break your brand.",
    image: "https://st2.depositphotos.com/3591429/12244/i/450/depositphotos_122442772-stock-photo-people-with-digital-gadgets.jpg",
    tag: "Best Website Design Service in Bangladesh",
    link: "#",
  },
  {
    id: 4,
    title: "Top 5 Strategies for SEO Success in 2025",
    excerpt:
      "Want to rank higher on Google? These proven SEO techniques can drive results fast.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tag: "SEO Optimization Tips",
    link: "#",
  },
  {
    id: 5,
    title: "How Social Media Ads Can Skyrocket Your Business",
    excerpt:
      "Social platforms aren’t just for selfies. They're powerful tools for business growth.",
    image: "https://wittysparks.com/wp-content/uploads/2019/08/facebook-marketing.jpg",
    tag: "Facebook Ads Marketing",
    link: "#",
  },
  {
    id: 6,
    title: "Key Web Design Trends to Watch This Year",
    excerpt:
      "From minimalism to micro-interactions, here's what’s shaping web design in 2025.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tag: "Modern Web Design",
    link: "#",
  },
  {
    id: 7,
    title: "Why Branding Is More Than Just a Logo",
    excerpt:
      "Your brand is your promise to your customer. Learn how to craft a lasting impression.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    tag: "Brand Identity Building",
    link: "#",
  },
  {
    id: 8,
    title: "How to Turn Website Visitors into Paying Customers",
    excerpt:
      "Learn conversion hacks and UX strategies to transform traffic into revenue.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTnfERcyTDERkYVNx0w-qK5zrE8VgrRuQBA&s",
    tag: "Conversion Rate Optimization",
    link: "#",
  },
  {
    id: 9,
    title: "Mastering Local SEO for Small Businesses",
    excerpt:
      "Dominate your local market by leveraging the power of geo-targeted SEO strategies.",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
    tag: "Local SEO Tips",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <section className="bg-white py-16 px-6" id="blogs">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our <AuroraText>Blogs</AuroraText>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our engaging articles provide valuable knowledge for professionals and
          enthusiasts alike. Stay informed, stay inspired.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(({ id, title, excerpt, image, tag, link }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-orange-100 transition flex flex-col"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{excerpt}</p>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <a
                    href={link}
                    className="text-orange-500 text-sm font-semibold flex items-center gap-1 hover:underline"
                  >
                    Learn more <ArrowRight size={14} />
                  </a>
                  <span className="text-xs text-gray-500 text-right max-w-[280px] truncate">
                    {tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
