import { useEffect, useState } from "react";
import axios from "axios";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { AuroraText } from "../../components/magicui/aurora-text";
import Loading from "../../Shared/Loading";

export function MeetTheTeam() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get("https://bangladeshiit-server-api.onrender.com/team")
      .then((res) => {
        setMembers(res.data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Failed to load team members:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />; 

  return (
    <section className="py-8 text-center text-black bg-white dark:bg-black dark:text-white">
      <motion.h2
        className="text-4xl font-bold mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our <AuroraText>Team</AuroraText>
      </motion.h2>

      <div className="grid max-w-5xl gap-8 px-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {members.map((member, i) => (
          <motion.div
            key={member._id}
            className="p-4 transition duration-300 bg-white border border-orange-500 shadow-lg group rounded-xl hover:shadow-2xl dark:bg-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + i * 0.2 }}
          >
            <div className="relative flex justify-center">
              <div className="w-32 h-32 mb-4 overflow-hidden border-4 border-gray-100 rounded-full">
                <img
                  src={member.image}
                  alt={`${member.name}'s profile`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="relative">
              <h3 className="text-lg font-bold text-gray-800 transition dark:text-white group-hover:text-cyan-600">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800">
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
                  <span
                    className="cursor-not-allowed text-cyan-400"
                    title="No Facebook profile available"
                  >
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
                  <span
                    className="cursor-not-allowed text-cyan-600"
                    title="No LinkedIn profile available"
                  >
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
