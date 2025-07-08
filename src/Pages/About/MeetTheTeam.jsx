import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { AuroraText } from "../../components/magicui/aurora-text";

import Member1 from "../../assets/Firoj.jpg";
import Member2 from "../../assets/Mizan.jpg";
import Member3 from "../../assets/Rizbi.jpg";
import Member4 from "../../assets/Bakhtiar.jpg";
import Member5 from "../../assets/Nasir.jpg";
import Member6 from "../../assets/Shuvo.jpg";
import Member8 from "../../assets/A.Samad.jpg";
import Member9 from "../../assets/Torikul.jpg";

export function MeetTheTeam() {
  const members = [
    {
      _id: "1",
      name: "Firoj Khan",
      position: "Founder & CEO",
      image: Member1,
      facebook: "https://www.facebook.com/firojkhanliton.liton",
      linkedin: "https://www.linkedin.com/in/firoj-khan-liton/",
    },
    {
      _id: "2",
      name: "Md Tarikul Islam",
      position: "Project Manager",
      image: Member9,
      facebook: "https://www.facebook.com/tarikul.pk",
      linkedin: "",
    },
    {
      _id: "3",
      name: "MD. Abdullah Al Mizan Khan",
      position: "Content Writer",
      image: Member2,
      facebook: "https://www.facebook.com/iftikhar.mizankhan/",
      linkedin: "",
    },
    {
      _id: "4",
      name: "Rizbi Ahmmad",
      position: "MERN Stack Developer",
      image: Member3,
      facebook: "https://www.facebook.com/mdakashkhan444/",
      linkedin: "https://www.linkedin.com/in/rizbi2001/",
    },
    {
      _id: "5",
      name: "Md Bakhtear Uddin",
      position: "Graphics Designer",
      image: Member4,
      facebook: "https://www.facebook.com/Bakthear.Ctg",
      linkedin: "",
    },
    {
      _id: "6",
      name: "Nasir Uddin",
      position: "Google Ads Specialist",
      image: Member5,
      facebook: "https://www.facebook.com/md.nasirhossain.12576",
      linkedin: "",
    },
    {
      _id: "7",
      name: "Mehedi Hasan Shuvo",
      position: "Digital Marketing Specialist",
      image: Member6,
      facebook: "https://www.facebook.com/mehedshuvo",
      linkedin: "",
    },
    {
      _id: "8",
      name: "Abdullah Al Samad",
      position: "PHP Laravel Developer",
      image: Member8,
      facebook: "https://www.facebook.com/abdullahal.samad.1",
      linkedin: "",
    },
  ];

  return (
    <section className="py-8 bg-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our <AuroraText>Team</AuroraText>
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {members.map((member, i) => (
          <motion.div
            key={member._id}
            className="group bg-white rounded-xl border border-orange-500 p-4 shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + i * 0.2 }}
          >
            <div className="relative flex justify-center">
              <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-gray-100">
                <img
                  src={member.image}
                  alt={`${member.name}'s profile`}
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

              <div className="flex justify-center gap-4 mt-4">
                {member.facebook ? (
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-indigo-600"
                  >
                    <FaFacebookF />
                  </a>
                ) : (
                  <span className="text-gray-400 cursor-not-allowed" title="No Facebook profile available">
                    <FaFacebookF />
                  </span>
                )}
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-indigo-600"
                  >
                    <FaLinkedinIn />
                  </a>
                ) : (
                  <span className="text-cyan-600 hover:text-indigo-600 cursor-not-allowed" title="No LinkedIn profile available">
                    <FaLinkedinIn />
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}