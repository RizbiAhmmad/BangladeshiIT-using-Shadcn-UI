import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserGraduate } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Loading from "../../../Shared/Loading";
import { AuroraText } from "../../../components/magicui/aurora-text";

const MyEnrollments = () => {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://72.60.199.112:5000/enrollments?email=${user.email}`)
        .then((res) => setEnrollments(res.data))
        .catch((err) => console.error("Error fetching enrollments:", err))
        .finally(() => setLoading(false));
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h2 className="mb-4 text-4xl font-extrabold text-center text-black dark:text-white">
        My <AuroraText>Enrollment</AuroraText>
      </h2>

      {enrollments.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">
          You haven't enrolled in any courses yet.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {enrollments.map((item) => (
            <div
              key={item._id}
              className="transition bg-white border rounded-lg shadow-md dark:bg-black hover:shadow-lg"
            >
              <img
                src={item.courseImage}
                alt={item.courseName}
                className="object-cover w-full h-40 p-2 rounded-t-lg rounded-2xl"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-green-700 dark:text-[#abc2d3]">
                  {item.courseName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-[#abc2d3]/80">
                  <span className="font-medium">Full Name:</span>{" "}
                  {item.fullName}
                </p>
                <p className="text-sm text-gray-600 dark:text-[#abc2d3]/80">
                  <span className="font-medium">Email:</span> {item.email}
                </p>
                <p className="text-sm text-gray-600 dark:text-[#abc2d3]/80">
                  <span className="font-medium">WhatsApp:</span> {item.whatsapp}
                </p>
                <p className="text-sm text-gray-600 dark:text-[#abc2d3]/80">
                  <span className="font-medium">Designation:</span>{" "}
                  {item.designation || "N/A"}
                </p>
                <p className="text-sm text-gray-600 dark:text-[#abc2d3]/80">
                  <span className="font-medium">Address:</span>{" "}
                  {item.address || "N/A"}
                </p>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-green-100 rounded-b-lg dark:bg-slate-800">
                <span className="text-sm text-gray-800 dark:text-[#abc2d3]">
                  Enrolled on:{" "}
                  {new Date(item.enrolledAt).toLocaleDateString("en-US")}
                </span>
                <FaUserGraduate className="text-xl text-green-700" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEnrollments;