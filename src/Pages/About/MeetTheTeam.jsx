import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { AuroraText } from "../../components/magicui/aurora-text";

const teamMembers = [
  {
    name: "Elon Musk",
    position: "MANAGING DIRECTOR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wN-uU4J1bT7XafV-f5V9DoVQTjAg2gv9BA&s", // Place actual paths or import images
    socials: {
      facebook: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mark Zuckerberg",
    position: "SENIOR SOFTWARE ENGINEER",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniyA6DB0Aru1WDfQMfPHe9DkLrZhOPT3-gA&s",
    socials: {
      facebook: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sundar Pichai",
    position: "SOFTWARE ENGINEER",
    image: "https://im.rediff.com/money/2014/sep/19sundar4.jpg",
    socials: {
      facebook: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Bill Gates",
    position: "SENIOR SOFTWARE ENGINEER",
    image: "https://hips.hearstapps.com/hmg-prod/images/bill-gates-discusses-his-new-book-how-to-prevent-the-next-news-photo-1742328104.pjpeg",
    socials: {
      facebook: "#",
      github: "#",
      linkedin: "#",
    },
  },
];

export function MeetTheTeam() {
  return (
    <section className="py-8 bg-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet the <AuroraText>Team</AuroraText>
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            className="group bg-white rounded-xl border border-orange-500 p-6 shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + i * 0.2 }}
          >
            <div className="relative flex justify-center">
              <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-cyan-600 transition">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                {member.position}
              </p>

              <div className="flex justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-cyan-600 hover:text-indigo-600" />
                </a>
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-cyan-600 hover:text-indigo-600" />
                </a>
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-cyan-600 hover:text-indigo-600" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
